import { Route, Routes, Link } from "react-router-dom";
import { Home } from "../components/Home";
import { LoginPage } from "../components/LoginPage";

export const AppRoutes = () => {
  return (
    <>
      <div>
        <Link to="/">TASKS</Link>
        <Link to="/login">LOGIN</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
};
