export declare class ValidationError extends Error {
    statusCode?: number | undefined;
    constructor(message: string, statusCode?: number | undefined);
}
export interface ApiError {
    status: string;
    message: string;
    details?: string;
}
