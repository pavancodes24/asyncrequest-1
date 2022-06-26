import { loadData, saveData } from "../../utils/localStorage";
import { ADD_TODO } from "./actionType";

const initState = {
  todos: loadData("todos") || []
  // todos: [
  //   {
  //     id: 1,
  //     title: "LEARN REDUX",
  //     status: false
  //   }
  // ]
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const updatedTodo = [...state.todos, action.payload];
      saveData("todos", updatedTodo);
      return {
        ...state,
        todos: updatedTodo
      };
    default:
      return state;
  }
};
