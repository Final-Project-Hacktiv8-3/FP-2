import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "@pages";
import { Flowbite } from "flowbite-react";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Flowbite>
      <RouterProvider router={Router} />
    </Flowbite>
  </React.StrictMode>,
);
