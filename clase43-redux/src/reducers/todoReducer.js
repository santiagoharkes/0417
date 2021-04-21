import {
  ADD_TODO,
  CLEAR_COMPLETE,
  COMPLETE_TODO,
  DELETE_TODO,
  EDIT_MODE,
  EDIT_TODO,
  SET_TODOS,
} from "../actions/actionTypes";

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case COMPLETE_TODO:
      state = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });

      return state;

    case EDIT_MODE:
      state = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            editMode: !todo.editMode,
          };
        }
        return todo;
      });
      return state;

    case EDIT_TODO:
      state = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            label: action.label,
          };
        }
        return todo;
      });

      return state;

    case DELETE_TODO:
      state = state.filter((todo) => todo.id !== action.id);
      return state;

    case CLEAR_COMPLETE:
      state = state.filter((todo) => !todo.complete);
      return state;

    case SET_TODOS:
      const nuevoArray = action.payload.map((valor) => ({
        id: valor.id,
        label: valor.title,
        complete: valor.completed,
        editMode: false,
      }));

      return [...state, ...nuevoArray];

    default:
      return state;
  }
};
