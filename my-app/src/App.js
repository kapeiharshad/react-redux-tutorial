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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to react</h1>
        </header>
        <Ninja ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
