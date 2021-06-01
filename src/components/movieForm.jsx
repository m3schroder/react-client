import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", dailyRentalRate: "" },
    errors: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      const movie = getMovie(id);
      this.setState({
        data: movie,
      });
    }
  }

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().min(5).required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  doSubmit = () => {
    //Call server
    console.log("Submitted");
  };

  handleSave = (movie) => {
    saveMovie(movie);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div className="container">
        <h1>Movie form</h1>
        <form onSubmit={this.handleSubmit}>
          {console.log(this.state.movie)}
          {this.renderInput("title", "Title")}
          {this.renderInput("genre.name", "Genre")}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save", this.handleSave)}
        </form>
      </div>
    );
  }
}

export default MovieForm;
