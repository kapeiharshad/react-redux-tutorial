import React, { Component } from "react";

class Ninja extends Component {
  state = {
    name: "Shin"
  };
  render() {
    return (
      <div className="ninja">
        <div>Name: {this.state.name}</div>
        <div>Age: 23</div>
      </div>
    );
  }
}

export default Ninja;
