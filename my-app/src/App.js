import React from "react";
import Ninja from "./Ninja";
import AddNinja from "./AddNinja";

class App extends React.Component {
  state = {
    ninjas: [
      { name: "Shosho", age: 10, belt: "white", id: 1 },
      { name: "Shin", age: 20, belt: "yellow", id: 2 },
      { name: "yosho", age: 30, belt: "black", id: 3 }
    ]
  };
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  };
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to react</h1>
        </header>
        <Ninja deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
