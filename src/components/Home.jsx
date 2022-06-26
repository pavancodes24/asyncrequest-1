import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Todo } from "./Todo";

export const Home = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h3>{token}</h3>
      <Todo />
    </div>
  );
};
