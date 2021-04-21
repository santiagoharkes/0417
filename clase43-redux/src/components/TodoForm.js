import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";

function TodoForm() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(inputValue));

    setInputValue("");
  };

  return (
    <form name="todos" className="todos-form" onSubmit={handlerSubmit}>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Ke keres aser perruno intergalactico?"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <p>Escribí algo o me voy</p>
    </form>
  );
}

export default TodoForm;

// mapStateToProps
// mapDispatchToProps
