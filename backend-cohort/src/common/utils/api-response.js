class ApiResponse {
  static badRequest(res, message = "Bad Request") {
    return res.status(400).json({
      success: false,
      message,
    });
  }

  static unauthorized(res, message = "Unauthorized") {
    return res.status(401).json({
      success: false,
      message,
    });
  }

  static forbidden(res, message = "Forbidden") {
    return res.status(403).json({
      success: false,
      message,
    });
  }

  static notFound(res, message = "Resource not found") {
    return res.status(404).json({
      success: false,
      message,
    });
  }

  static conflict(res, message = "Conflict") {
    return res.status(409).json({
      success: false,
      message,
    });
  }

  static serverError(res, message = "Internal Server Error") {
    return res.status(500).json({
      success: false,
      message,
    });
  }
}

export default ApiResponse;
