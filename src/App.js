import React, { Component } from "react";
import Persone from "./component/Profil";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      count: 0,
      interval: null,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      interval: setInterval(() => this.setState({ count: this.state.count + 1 }), 1000),
    });
  }

  componentDidUpdate() {
    console.log("There is an update");
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    return (
      <div>
        {this.state.show && <Persone />}
        <button onClick={this.toggleShow}>Toggle Profile</button>
        <hr />
        <h2>Count:</h2>
        <h3>{this.state.count}</h3>
      </div>
    );
  }
}
