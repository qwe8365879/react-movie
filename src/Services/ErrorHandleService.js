class ErrorHandleService {
    handleResponseError(response) {
        throw new Error("HTTP error, status = " + response.status);
    }
    handleError(error) {
        console.error(error.message);
    }
  }
  export default ErrorHandleService;