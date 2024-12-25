import { ApiError, ValidationError } from "./types/errors.js";
import { FileContent, ValidationResult } from "./types/validation.js";

export function toBlob(content: FileContent): Blob {
  if (content instanceof Blob) return content;
  return new Blob([content]);
}

export async function handleResponse(
  response: Response,
): Promise<ValidationResult> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: response.statusText,
      status: `${response.status}`,
    })) as ApiError;
    throw new ValidationError(
      errorData.message || "Unknown error",
      response.status,
    );
  }
  const data = await response.json();
  return data as ValidationResult;
}
