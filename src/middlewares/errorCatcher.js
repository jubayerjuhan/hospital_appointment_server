export const errorCatcherMiddleware = (err, req, res, next) => {
  const message = err.message ? err.message : "Internal Server Error";
  const statusCode = err.statusCode ? err.statusCode : 500;

  // Send an error response to the client
  res.status(statusCode).json({
    success: false,
    message: message,
  });
};
