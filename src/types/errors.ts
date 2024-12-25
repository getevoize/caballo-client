export class ValidationError extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = "ValidationError";
  }
}

export interface ApiError {
  status: string;
  message: string;
  details?: string;
}
