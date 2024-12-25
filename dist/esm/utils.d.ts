/// <reference types="node" />
/// <reference types="node" />
import { FileContent, ValidationResult } from "./types/validation.js";
export declare function toBlob(content: FileContent): Blob;
export declare function handleResponse(response: Response): Promise<ValidationResult>;
