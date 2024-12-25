import { ValidationError } from "./types/errors.js";
export function toBlob(content) {
    if (content instanceof Blob)
        return content;
    return new Blob([content]);
}
export async function handleResponse(response) {
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({
            message: response.statusText,
            status: `${response.status}`,
        }));
        throw new ValidationError(errorData.message || "Unknown error", response.status);
    }
    const data = await response.json();
    return data;
}
