"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENDPOINTS = exports.DEFAULT_CONFIG = void 0;
exports.DEFAULT_CONFIG = {
    timeout: 30000,
    retries: 3,
};
exports.ENDPOINTS = {
    validateXml: "/api/v1/e-invoice/validate/xml",
    validatePdf: "/api/v1/e-invoice/validate/pdf",
};
