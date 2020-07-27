import React from "react";

const ViewTodo = ({ todos, deleteTodo }) => {
  const todolist = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p>You have no todos</p>
  );
  return <div className="todos collection">{todolist}</div>;
};

export default ViewTodo;
