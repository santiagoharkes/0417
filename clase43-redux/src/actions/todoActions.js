import * as types from "./actionTypes";
import { Todo } from "../models/Todo";

export const addTodo = (text) => ({
  type: types.ADD_TODO,
  payload: new Todo(text),
});

export const completeTodo = (id) => ({
  type: types.COMPLETE_TODO,
  id,
});

export const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  id,
});

export const clearComplete = () => ({ type: types.CLEAR_COMPLETE });

export const editMode = (id) => ({ type: types.EDIT_MODE, id });

export const editTodo = (id, label) => ({ type: types.EDIT_TODO, id, label });

export const setTodos = (todosNuevos) => ({
  type: types.SET_TODOS,
  payload: todosNuevos,
});

export const cargarPosts = () => async (dispatch, getState) => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await posts.json();

  dispatch(setTodos(data));
};
