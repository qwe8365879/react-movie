import Common from '../Shared/Config';
import ErrorHandleService from './ErrorHandleService';

export class MovieSearchService {
  constructor() {
    this.config = new Common();
    this.errorHandleService = new ErrorHandleService();
  }

  getApiUrl(queryString, page) {
    return this.config.API_URL + "search/movie" + queryString + "&page=" + page + "&api_key=" + this.config.API_KEY;
  }

  async search(q, page = 1) {
    return fetch(this.getApiUrl(q, page))
      .then(response => {
        if (!response.ok) {
          this.errorHandleService.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.errorHandleService.handleError(error);
      });
  }
}