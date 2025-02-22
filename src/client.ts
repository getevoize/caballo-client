import { ValidationError } from "./types/errors.ts";
import { DEFAULT_CONFIG, ENDPOINTS } from "./constants.ts";
import { handleResponse, toBlob } from "./utils.ts";
import { ClientConfig } from "./types/config.ts";
import { FileContent, ValidationResult } from "./types/validation.ts";

export class CaballoClient {
  private readonly config: ClientConfig;

  constructor(config: ClientConfig) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    };

    if (!this.config.baseUrl) {
      throw new Error("baseUrl is required");
    }
  }

  async validateXml(content: FileContent): Promise<ValidationResult> {
    try {
      const blob = toBlob(content);

      if (blob.size === 0) {
        throw new ValidationError("Empty file content");
      }

      const formData = new FormData();
      formData.append("file", blob);

      const response = await fetch(
        `${this.config.baseUrl}${ENDPOINTS.validateXml}`,
        {
          method: "POST",
          body: formData,
          signal: AbortSignal.timeout(this.config.timeout!),
        },
      );

      return handleResponse(response);
    } catch (error) {
      if (error instanceof TypeError) {
        throw new ValidationError("Network error or invalid URL");
      }
      throw error;
    }
  }

  async validatePdf(content: FileContent): Promise<ValidationResult> {
    try {
      const blob = toBlob(content);

      if (blob.size === 0) {
        throw new ValidationError("Empty file content");
      }

      const formData = new FormData();
      formData.append("file", blob);

      const response = await fetch(
        `${this.config.baseUrl}${ENDPOINTS.validatePdf}`,
        {
          method: "POST",
          body: formData,
          signal: AbortSignal.timeout(this.config.timeout!),
        },
      );

      return handleResponse(response);
    } catch (error) {
      if (error instanceof TypeError) {
        throw new ValidationError("Network error or invalid URL");
      }
      throw error;
    }
  }
}
