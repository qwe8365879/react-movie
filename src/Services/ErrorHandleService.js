class ErrorHandleService {
    handleResponseError(response) {
        console.error(response.json());
        throw new Error("HTTP error, status = " + response.status + " error message: " );
    }
    handleError(error) {
        console.error(error);
    }
  }
  export default ErrorHandleService;