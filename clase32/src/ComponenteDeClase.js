import React, { Component } from "react";

class Contador extends Component {
  constructor() {
    super();
    this.state = { contador: 1 };
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }

  render() {
    return <h1> {this.state.contador} </h1>;
  }
}

export default Contador;
