import { ADD_TODO } from "./actionType";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  };
};
