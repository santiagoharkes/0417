import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import { useDispatch, useSelector } from "react-redux";
import { cargarPosts } from "../actions/todoActions";

function TodoPage() {
  const todosList = useSelector((state) => state.todosList);

  const dispatch = useDispatch();

  return (
    <div className="todos">
      <div className="todos-header">
        <h3 className="todos-title">Shimi peish</h3>
        <div>
          <p>{`Te quedan 5 items por hacer :)`}</p>

          <button className="todos-clear">Borrar completados</button>

          <button onClick={() => dispatch(cargarPosts())}>
            CARGAR POSTS DE API
          </button>

          <TodoForm />
          <TodoList todos={todosList} />
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
