import { ClientConfig } from "./types/config.js";

export const DEFAULT_CONFIG: Partial<ClientConfig> = {
  timeout: 30000,
  retries: 3,
};

export const ENDPOINTS = {
  validateXml: "/api/v1/e-invoice/validate/xml",
  validatePdf: "/api/v1/e-invoice/validate/pdf",
} as const;
