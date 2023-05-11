import React, { Component } from "react";

export default class Persone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FullName: "wael louati",
      Bio: "yes we can",
      imageSrc:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.simplilearn.com%2Fimage-processing-article&psig=AOvVaw1PBJpQjlzHB29EAaQxjTrW&ust=1671980509728000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjCt_fCkvwCFQAAAAAdAAAAABAE",
      Profesion: "I am a developer",
      mountCount: 0,
    };
  }

  componentDidMount() {
    this.setState((prevState) => ({
      mountCount: prevState.mountCount + 1,
    }));
  }

  render() {
    return (
      <div className="profil">
        <h1>My name is: {this.state.FullName}</h1>
        <h2>Bio: {this.state.Bio}</h2>
        <img src={this.state.image} alt="me" />
        <h2>My Profession: {this.state.Profesion}</h2>
        <p>Component mounted {this.state.mountCount} times.</p>
      </div>
    );
  }
}


