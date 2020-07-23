import React, { Component } from "react";

class Ninja extends Component {
  render() {
    const ninjalist = this.props.ninjas.map((ninja) => {
      const { name, age, belt } = ninja;
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name:{name} </div>
          <div>Age: {age}</div>
          <div>Belt: {belt}</div>
          <button
            onClick={() => {
              this.props.deleteNinja(ninja.id);
            }}
          >
            Delete
          </button>
          <br />
        </div>
      );
    });
    return <div className="ninja-list">{ninjalist}</div>;
  }
}

export default Ninja;
