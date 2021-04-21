import React, { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import {
  completeTodo,
  deleteTodo,
  editMode,
  editTodo,
} from "../actions/todoActions";

function Todo({ todo }) {
  const [inputValue, setInputValue] = useState("");
  const inputRarito = useRef(null);

  const dispatch = useDispatch();

  const handlerCheck = () => dispatch(completeTodo(todo.id));
  const handlerDelete = () => dispatch(deleteTodo(todo.id));
  const handlerEditMode = () => dispatch(editMode(todo.id));

  const handlerEditTodo = (e) => {
    if (e.key === "Enter") {
      dispatch(editTodo(todo.id, inputValue));
      handlerEditMode();
    }
  };

  const handlerFoquito = () => {
    dispatch(editTodo(todo.id, inputValue));
    handlerEditMode();
  };

  useEffect(() => {
    if (todo.editMode) {
      inputRarito.current.focus();
      setInputValue(todo.label);
    }
  }, [todo.editMode]);

  return (
    <li className={todo.complete ? "todos-complete" : ""}>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={todo.complete ? "checked" : ""}
        onChange={handlerCheck}
      />
      {todo.editMode ? (
        <input
          ref={inputRarito}
          type="text"
          onKeyPress={handlerEditTodo}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handlerFoquito}
        />
      ) : (
        <span onDoubleClick={handlerEditMode}>{todo.label}</span>
      )}
      <button onClick={handlerDelete}></button>
    </li>
  );
}

export default Todo;
