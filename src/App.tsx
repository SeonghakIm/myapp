import React, { Component } from "react";
import Number from "./Number";

interface IState {
  counter: number;
}

class App extends Component<{}, IState> {
  state = {
    counter: 1,
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <Number count={counter} />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }

  add = (): void => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  };
}

export default App;