class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.construtor);
  }

  static(message = "Bad Request") {
    throw new ApiError(400, message);
  }

  static(message = "Unauthorized") {
    throw new ApiError(401, message);
  }
}

export default ApiError;
