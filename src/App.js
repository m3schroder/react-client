import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Movies from "./pages/movies";
import Customers from "./pages/customers";
import Rentals from "./pages/rentals";
import NavBar from "./components/navbar";
import NotFound from "./pages/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

import "./App.css";

class App extends Component {
  render() {
    // Create links in app component for top level navigation
    const links = [
      {
        path: "/",
        text: "Vividly",
        style: { fontWeight: "bold", fontSize: 20 },
      },
      { path: "/movies", text: "Movies" },
      { path: "/customers", text: "Customers" },
      { path: "/rentals", text: "Rentals" },
      { path: "/login", text: "Login" },
      { path: "/register", text: "Register" },
    ];
    return (
      <>
        <NavBar links={links} />
        <main className="container-fluid">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/movies/new/" component={MovieForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
