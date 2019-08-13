import React, { Component } from "react";
import { PageTitle } from "../Header/PageTitle";
import { MovieService } from "../../Services/MovieService";
import { MovieSearchService } from '../../Services/MovieSearchService'
import { Movies } from "../Movies";
import Paginater from "../Paginater";

export class Home extends Component {
  pageTitle = Movies.name;

  constructor(props) {
    super(props);
    this.movieService = new MovieService();
    this.movieSearchService = new MovieSearchService();

    this.state = {
      movies: [],
      totalPage: 0,
      currentPage: props.match.params.page ? props.match.params.page : 1,
      queryString: ""
    };
    console.dir(props);
  }

  componentDidMount() {
      let queryString = this.props.location.search;
      console.dir(queryString);
    if (queryString && queryString != "?query=") {
        this.setState({
            queryString: queryString
          });
          this.movieSearchService.search(queryString, this.state.currentPage).then(data => {
            var totalPage = data.total_pages;
            this.setState({
              totalPage: totalPage
            });
            this.getMovieDetails(data.results);
          });
    } else {
      this.movieService.getPopular(this.state.currentPage).then(data => {
        var totalPage = data.total_pages;
        if (totalPage > 3) totalPage = 3;
        this.setState({
          totalPage: totalPage
        });
        this.getMovieDetails(data.results);
      });
    }
  }

  getMovieDetails(results) {
    var movies = [];
    results.map((movie, index) => {
      this.movieService.getDetail(movie.id).then(data => {
        movies[index] = data;
        this.setState({
          movies: movies
        });
      });
    });
  }

  render() {
    return (
      <div>
        <PageTitle pageTitle={this.pageTitle} />
        <Movies movies={this.state.movies} />
        <Paginater
          totalPage={this.state.totalPage}
          currentPage={this.state.currentPage}
          pageLink="/home/"
          queryString={this.state.queryString}
        />
      </div>
    );
  }
}
