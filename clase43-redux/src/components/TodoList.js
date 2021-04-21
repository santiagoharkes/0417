import React from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <ul className="todos-list">
      {todos?.map((valor) => (
        <Todo todo={valor} key={valor.id} />
      ))}
    </ul>
  );
}

export default TodoList;
