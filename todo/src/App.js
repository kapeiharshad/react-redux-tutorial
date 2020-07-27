import React from "react";
import ViewTodo from "./ViewTodo";
import CreateTodo from "./CreateTodo";
class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "buy fruits" }
    ]
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">ToDo's</h1>
        <ViewTodo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <CreateTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
