import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginFailure, loginRequest, loginSuccess } from "../redux/auth/action";
import { Login } from "./Login";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { isAuth, isLoading, token, isError } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  const handleLogin = ({ email, password }) => {
    //fake auth
    const requestAction = loginRequest();
    dispatch(requestAction);
    axios
      .post("https://reqres.in/api/login", {
        email,
        password
      })
      .then((res) => {
        const successAction = loginSuccess(res.data.token);
        dispatch(successAction);
      })
      .catch((err) => {
        const failureAction = loginFailure(err.message);
        dispatch(failureAction);
      });
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
  console.log(isLoading);
  if (isLoading) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <Login handleLogin={handleLogin} />
      {isError && <div>something went wrong.</div>}
    </div>
  );
};
