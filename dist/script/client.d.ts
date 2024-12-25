import { ClientConfig } from "./types/config.js";
import { FileContent, ValidationResult } from "./types/validation.js";
export declare class CaballoClient {
    private readonly config;
    constructor(config: ClientConfig);
    validateXml(content: FileContent): Promise<ValidationResult>;
    validatePdf(content: FileContent): Promise<ValidationResult>;
}
