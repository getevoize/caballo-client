"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleResponse = exports.toBlob = void 0;
const errors_js_1 = require("./types/errors.js");
function toBlob(content) {
    if (content instanceof Blob)
        return content;
    return new Blob([content]);
}
exports.toBlob = toBlob;
async function handleResponse(response) {
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({
            message: response.statusText,
            status: `${response.status}`,
        }));
        throw new errors_js_1.ValidationError(errorData.message || "Unknown error", response.status);
    }
    const data = await response.json();
    return data;
}
exports.handleResponse = handleResponse;
