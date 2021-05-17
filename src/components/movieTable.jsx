import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import LikeButton from "../common/likeButton";
import Pagination from "../common/pagination";
import StackedFilter from "../common/stackedFilter";
import { paginate } from "../utils/paginate";

class MoviesTable extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres().map((g) => g.name),
    currentPage: 1,
    currentGenre: "All Movies",
    pageSize: 4,
  };

  handle = {
    delete: (movie) => {
      this.setState({
        movies: this.state.movies.filter((m) => m._id !== movie._id),
      });
    },
    like: (movie) => {
      const movies = [...this.state.movies];
      const index = movies.indexOf(movie);
      movies[index] = { ...movie };
      movies[index].liked = !movie.liked;
      this.setState({ movies });
    },
    pageChange: (page) => {
      this.setState({ currentPage: page });
    },
    filterGenre: (genre) => {
      this.setState({ currentGenre: genre });
    },
  };

  render() {
    const { currentPage, pageSize, movies, genres, currentGenre } = this.state;

    if (movies.length === 0)
      return <p> There are no movies in the database </p>;

    let genreFilter = movies.filter(
      (movie) => movie.genre.name === currentGenre
    );

    let currentList =
      currentGenre === "All Movies"
        ? paginate(movies, currentPage, pageSize)
        : paginate(genreFilter, currentPage, pageSize);

    let count =
      currentGenre === "All Movies" ? movies.length : currentList.length;

    return (
      <div className="row">
        <div className="col-1 mt-5">
          <StackedFilter
            onFilter={this.handle.filterGenre}
            items={["All Movies", ...genres]}
            currentCategory={currentGenre}
          />
        </div>
        <div className="col">
          <p className="body">Showing {movies.length} movies in the database</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {currentList.map((movie) => (
                <tr key={movie._id}>
                  <th>{movie.title}</th>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <div className="row mx-n1">
                      <div className="col">
                        <LikeButton onClick={this.handle.like} item={movie} />
                      </div>
                      <button
                        onClick={() => this.handle.delete(movie)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            onPageChange={this.handle.pageChange}
            itemCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default MoviesTable;
