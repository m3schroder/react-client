import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import LikeButton from "../components/likeButton";
class MoviesTable extends Component {
  state = {
    movies: getMovies(),
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
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p> There are no movies in the database </p>;
    return (
      <>
        <p className="body">
          Showing {this.state.movies.length} movies in the database
        </p>
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
            {this.state.movies.map((movie) => (
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
      </>
    );
  }
}

export default MoviesTable;
