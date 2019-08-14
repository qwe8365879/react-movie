import React, { Component } from "react";
import { Card, Spinner, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlay } from "@fortawesome/free-solid-svg-icons";

import "./Movies.scss";

export class Movies extends Component {
  pageTitle = Movies.name;

  constructor(props) {
    super(props);
    this.trimOverview = this.trimOverview.bind(this);
    this.getGenresName = this.getGenresName.bind(this);
    this.state = {
      watchedMovies: JSON.parse(localStorage.getItem('watchedMovies')) || []
    }
  }

  trimOverview(text) {
    return text.substring(0, 250);
  }

  getGenresName(genres, size = 3) {
    var str = "";
    genres = genres.slice(0, size);
    genres.map(genre => {
      str += str == "" ? genre.name : ", " + genre.name;
    });
    return str;
  }

  getRating(rating) {
    return (
      <span className="rating">
        <FontAwesomeIcon icon={faStar} />
        {rating}/10
      </span>
    );
  }

  onPlayMovie(id) {
    var watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];
    if(!watchedMovies.includes(id))
      watchedMovies.push(id);
    localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
    this.setState({
      watchedMovies: watchedMovies
    });
  }

  render() {
    return (
      <div className="container">
        <Row className="movie-wrapper">
          {this.props.movies.length > 0 ? (
            this.props.movies.map(movie => (
              <Col key={movie.id} md={4} sm={6} xs={12} className="col">
                <Card>
                  <Card.Img
                    variant="top"
                    src={
                      movie.poster_path ? "https://image.tmdb.org/t/p/w300_and_h450_bestv2" +
                      movie.poster_path : "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                    }
                  />

                  <Card.Body>
                    <div className="card-addon">
                      {this.state.watchedMovies.includes(movie.id) ? <span className="watched-tag">Watched</span> : ""}
                      <a className="play-btn" onClick={() => this.onPlayMovie(movie.id)}><FontAwesomeIcon icon={faPlay} /></a>
                    </div>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                      {this.getRating(movie.vote_average)}
                      <span className="category">
                        {this.getGenresName(movie.genres)}
                      </span>
                    </Card.Text>
                    <Card.Text>{this.trimOverview(movie.overview)}</Card.Text>
                    {movie.imdb_id ? (
                      <Card.Text>
                        <a
                          href={"https://www.imdb.com/title/" + movie.imdb_id}
                          className="btn btn-main btn-effect"
                        >
                          details
                        </a>
                      </Card.Text>
                    ) : null}
                  </Card.Body>
                </Card>
              </Col>
            ))
          ):(
            <h3>No Results</h3>
          )}
        </Row>
      </div>
    );
  }
}
