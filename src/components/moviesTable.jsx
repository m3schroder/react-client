import React, { Component } from "react";
import { Link } from "react-router-dom";

import Table from "./common/table";
import LikeButton from "./common/likeButton";

class MoviesTable extends Component {
  render() {
    const { movies, sortColumn, onSort } = this.props;
    const columns = [
      {
        label: "Title",
        path: "title",
        content: (movie) => (
          <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        ),
      },
      { label: "Genre", path: "genre.name" },
      { label: "Stock", path: "numberInStock" },
      { label: "Rate", path: "dailyRentalRate" },
      {
        key: "like",
        content: (movie) => (
          <LikeButton onClick={this.props.onLike} item={movie} />
        ),
      },
      {
        key: "delete",
        content: (movie) => (
          <button
            onClick={() => this.props.onDelete(movie, movies.length)}
            className="btn btn-danger"
          >
            Delete
          </button>
        ),
      },
    ];
    return (
      <Table
        formRoute={"/movies/"}
        data={movies}
        columns={columns}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}

export default MoviesTable;
