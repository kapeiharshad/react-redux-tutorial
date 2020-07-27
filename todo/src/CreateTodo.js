import React, { Component } from "react";

class CreateTodo extends Component {
  state = {
    content: ""
  };
  handleChnage = (e) => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };
  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input
            type="text"
            onChange={this.handleChnage}
            value={this.state.content}
          ></input>
        </form>
      </div>
    );
  }
}

export default CreateTodo;
