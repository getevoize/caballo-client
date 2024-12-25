"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaballoClient = void 0;
const errors_js_1 = require("./types/errors.js");
const constants_js_1 = require("./constants.js");
const utils_js_1 = require("./utils.js");
class CaballoClient {
    config;
    constructor(config) {
        this.config = {
            ...constants_js_1.DEFAULT_CONFIG,
            ...config,
        };
        if (!this.config.baseUrl) {
            throw new Error("baseUrl is required");
        }
    }
    async validateXml(content) {
        try {
            const blob = (0, utils_js_1.toBlob)(content);
            if (blob.size === 0) {
                throw new errors_js_1.ValidationError("Empty file content");
            }
            const formData = new FormData();
            formData.append("file", blob);
            const response = await fetch(`${this.config.baseUrl}${constants_js_1.ENDPOINTS.validateXml}`, {
                method: "POST",
                body: formData,
                signal: AbortSignal.timeout(this.config.timeout),
            });
            return (0, utils_js_1.handleResponse)(response);
        }
        catch (error) {
            if (error instanceof TypeError) {
                throw new errors_js_1.ValidationError("Network error or invalid URL");
            }
            throw error;
        }
    }
    async validatePdf(content) {
        try {
            const blob = (0, utils_js_1.toBlob)(content);
            if (blob.size === 0) {
                throw new errors_js_1.ValidationError("Empty file content");
            }
            const formData = new FormData();
            formData.append("file", blob);
            const response = await fetch(`${this.config.baseUrl}${constants_js_1.ENDPOINTS.validatePdf}`, {
                method: "POST",
                body: formData,
                signal: AbortSignal.timeout(this.config.timeout),
            });
            return (0, utils_js_1.handleResponse)(response);
        }
        catch (error) {
            if (error instanceof TypeError) {
                throw new errors_js_1.ValidationError("Network error or invalid URL");
            }
            throw error;
        }
    }
}
exports.CaballoClient = CaballoClient;
