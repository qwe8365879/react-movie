import Common from '../Shared/Config';
import ErrorHandleService from './ErrorHandleService';

export class MovieService {
  constructor() {
    this.config = new Common();
    this.errorHandleService = new ErrorHandleService();
  }

  getApiUrl(type, query = {}) {
    var queryString = "";
    Object.entries(query).forEach(([key, val]) => {
      queryString += "&" + key + "=" + val;
    });
    return this.config.API_URL + "movie/" + type + "?api_key=" + this.config.API_KEY + queryString;
  }

  async getPopular(page = 1) {
    return fetch(this.getApiUrl("popular", {page: page}))
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
  
  async getDetail(id) {
    return fetch(this.getApiUrl(id))
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