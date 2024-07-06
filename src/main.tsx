// import React from "react";
// import ReactDOM from "react-dom/client";
// import routes from "./routes/index.tsx";
// import { ThemeProvider } from "@mui/material/styles";
// import { theme } from "./styles/theme.ts";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";

// const router = createBrowserRouter(routes);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <RouterProvider router={router} />
//     </ThemeProvider>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes/index.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme.ts";
import { RouterProvider, createHashRouter } from "react-router-dom";

const basename = "";
const router = createHashRouter(routes, { basename });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
