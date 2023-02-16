class ApiError extends Error {
  readonly statusCode: number;
  readonly data: any | undefined;

  constructor(message: string, statusCode: number, data?: any) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
    this.data = data;
  }
}

export default ApiError;
