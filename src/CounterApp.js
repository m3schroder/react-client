import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  componentDidMount() {
    fetch("/show")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  handle = {
    delete: (id) => {
      const counters = this.state.counters.filter((c) => c.id !== id);
      this.setState({ counters: counters });
    },
    reset: () => {
      const counters = this.state.counters.map((c) => {
        c.value = 0;
        return c;
      });
      this.setState({ counters });
    },
    increment: (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({ counters });
    },
    decrement: (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value = counters[index].value - 1;
      this.setState({ counters });
    },
  };

  render() {
    return (
      <>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="">
          <Counters
            counters={this.state.counters}
            onReset={this.handle.reset}
            onDelete={this.handle.delete}
            onIncrement={this.handle.increment}
            onDecrement={this.handle.decrement}
          />
        </main>
      </>
    );
  }
}

export default App;
