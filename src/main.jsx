import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "@pages";
import { Flowbite } from "flowbite-react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Wrapper } from "@components/template";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Flowbite>
        <Wrapper>
          <RouterProvider router={Router} />
        </Wrapper>
      </Flowbite>
    </Provider>
  </React.StrictMode>,
);
