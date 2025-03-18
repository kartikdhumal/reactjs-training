import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "cartpage", element: <Cart /> },
      { path: "*", element: <NotFound /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
