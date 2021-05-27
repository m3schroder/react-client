import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";

class App extends Component {
  render() {
    return (
      <>
        <main className="container-fluid">
          <Movies />
        </main>
      </>
    );
  }
}

export default App;
