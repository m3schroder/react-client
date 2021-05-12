import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/show")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map((user) => (
          <div key={user.username}>{user.username}</div>
        ))}
      </div>
    );
  }
}

export default App;
