import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeAllPost from "./pages/home/HomeAllPost.jsx";
import Login from "./pages/Login-register/Login.jsx";
import Register from "./pages/Login-register/Register.jsx";
import Mypost from "./pages/myblog/Mypost.jsx";
import Blogpost from "./pages/blogpost/Blogpost.jsx";
import UpdatePost from "./pages/blogpost/updatepost/UpdatePost.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeAllPost />,
      },
      { path: "/login", element: <Login /> },

      { path: "/register", element: <Register /> },
      { path: "/mypost", element: <Mypost /> },
      {
        path: "/addblog",
        element: <Blogpost />,
      },
      {
        path: "/update/:id",
        element: <UpdatePost />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_URL}/singleblog/${params.id}`
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
