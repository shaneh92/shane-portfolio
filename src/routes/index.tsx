import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Error from "../pages/Error";
import { Root } from "./root";

const routes: RouteObject[] = [
  {
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "resume", element: <Resume /> },
    ],
  },
];
export default routes;
