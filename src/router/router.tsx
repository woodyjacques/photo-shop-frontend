import { createBrowserRouter } from "react-router-dom";
import Home from "../view/home/home";
import Events from "../view/events/events";
import Albums from "../view/albums/albums";
import Login from "../view/login/login";
import Register from "../view/register/register";
import Password from "../view/password/password";
import Terms from "../view/terms/terms";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/events", element: <Events /> },
  { path: "/albums", element: <Albums /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/password", element: <Password /> },
  { path: "/terms", element: <Terms /> },
]);

export default router;
