import React from "react";
import Ninja from "./Ninja";
import AddNinja from "./AddNinja";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to react</h1>
        </header>
        <Ninja />
        <AddNinja />
      </div>
    );
  }
}

export default App;
