class ErrorHandleService {
    handleResponseError(response) {
        response.json().then(data => {
            alert(data.status_message);
        });
        throw new Error("HTTP error, status = " + response.status + " error message: " );
    }
    handleError(error) {
        console.error(error);
    }
  }
  export default ErrorHandleService;