import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Error from "../pages/Error";
import { Root } from "./root";
import Api from "../pages/Api";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Databases from "../pages/Databases";

const routes: RouteObject[] = [
  {
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "resume", element: <Resume /> },
      { path: "api", element: <Api /> },
      { path: "projects", element: <Projects /> },
      { path: "about", element: <About /> },
      { path: "databases", element: <Databases /> },
    ],
  },
];
export default routes;
