import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Result } from "../pages/result";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
