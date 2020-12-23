import React, { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = { contador: this.props.numerito };

    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }

  render() {
    return (
      <h1>
        {this.props.texto} {this.state.contador}{" "}
      </h1>
    );
  }
}

export default Contador;
