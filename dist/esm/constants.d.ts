import { ClientConfig } from "./types/config.js";
export declare const DEFAULT_CONFIG: Partial<ClientConfig>;
export declare const ENDPOINTS: {
    readonly validateXml: "/api/v1/e-invoice/validate/xml";
    readonly validatePdf: "/api/v1/e-invoice/validate/pdf";
};
