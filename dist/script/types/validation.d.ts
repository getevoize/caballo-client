/// <reference types="node" />
export interface ValidationResult {
    valid: boolean;
    conformanceLevel?: string;
    structureErrors?: string[];
    pdfErrors?: string[];
}
export type FileContent = Uint8Array | Blob | File;
