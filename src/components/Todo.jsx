import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../redux/todos/action";

export const Todo = () => {
  const [query, setQuery] = useState("");
  const todos = useSelector((state) => state.app.todos);
  const dispatch = useDispatch();
  const handleClick = () => {
    const payload = {
      id: uuid(),
      title: query.trim(),
      status: false
    };
    let action = addTodo(payload);
    dispatch(action);
    setQuery("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="enter todo"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button disabled={query.trim() === ""} onClick={handleClick}>
        ADD Todo
      </button>
      {todos.map((item) => (
        <div key={item.id}>
          <div>
            {item.title} - {`${item.status}`}
          </div>
        </div>
      ))}
    </>
  );
};
