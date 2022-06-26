import { useState } from "react";
// import { useDispatch } from "react-redux";

export const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    //fake authentication
    handleLogin(payload);
  };
  return (
    <>
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
