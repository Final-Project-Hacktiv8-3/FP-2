import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  Home,
  Products,
  Detail,
  Cart,
  Login,
  Category,
  Admin,
  Rekapan,
  About,
  NotFound,
} from "@pages";
import { Flowbite } from "flowbite-react";
import { Provider } from "react-redux";
import store from "@redux/store";
import { Wrapper } from "@components/template";

function isUserAuthenticated() {
  const token = localStorage.getItem("token");
  if(token) {
    return true; 

  }
}

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/home"} />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <Detail />,
  },
  {
    path: "/cart",
    element: isUserAuthenticated() ? <Cart /> : <Navigate to="/home" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/category/:nama",
    element: <Category />,
  },
  {
    path: "/admin",
    element: isUserAuthenticated() ? <Admin /> : <Navigate to="/home" />,
  },
  {
    path: "/rekapan",
    element: isUserAuthenticated() ? <Rekapan /> : <Navigate to="/home" />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
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
