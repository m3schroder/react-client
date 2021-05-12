import React, { Component } from "react";
import "./App.css";
import MoviesTable from "./components/movieTable";

class App extends Component {
  render() {
    return (
      <>
        <main className="container-fluid">
          <MoviesTable />
        </main>
      </>
    );
  }
}

export default App;
