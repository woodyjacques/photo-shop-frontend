import { createBrowserRouter } from "react-router-dom";
import Home from "../view/home/home";
import Events from "../view/events/events";
import Albums from "../view/albums/albums";
import Login from "../view/login/login";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/events", element: <Events /> },
  { path: "/albums", element: <Albums /> },
  { path: "/login", element: <Login /> },
]);

export default router;
