import React, { Component } from "react";
import _ from "lodash";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import Pagination from "./common/pagination";
import MoviesTable from "../components/moviesTable";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";

class MovieTable extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    selectedGenre: "All Movies",
    pageSize: 5,
    sortColumn: { path: "numberInStock", order: "asc" },
  };

  componentDidMount() {
    const movies = getMovies();
    movies.map((m) => (m.liked = false));
    this.setState({
      movies,
      genres: getGenres().map((g) => g.name),
    });
  }

  handle = {
    delete: (movie, moviesOnPage) => {
      this.setState({
        movies: this.state.movies.filter((m) => m._id !== movie._id),
      });
      if (moviesOnPage === 1)
        this.setState({ currentPage: this.state.currentPage - 1 });
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
    selectGenre: (genre) => {
      this.setState({ selectedGenre: genre, currentPage: 1 });
    },
    sort: (sortColumn) => {
      this.setState({ sortColumn });
    },
  };

  getPagedData = () => {
    const {
      movies: allMovies,
      selectedGenre,
      sortColumn,
      currentPage,
      pageSize,
    } = this.state;
    let filtered =
      selectedGenre !== "All Movies"
        ? allMovies.filter((m) => m.genre.name === selectedGenre)
        : allMovies;

    let sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { currentPage, pageSize, genres, selectedGenre, sortColumn } =
      this.state;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-1 mt-5">
          <ListGroup
            onItemSelect={this.handle.selectGenre}
            items={["All Movies", ...genres]}
            selectedItem={selectedGenre}
          />
        </div>
        <div className="col">
          <p className="body">There are {totalCount} movies in the database</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onDelete={this.handle.delete}
            onLike={this.handle.like}
            onSort={this.handle.sort}
          />
          <Pagination
            onPageChange={this.handle.pageChange}
            itemCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default MovieTable;
