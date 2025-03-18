import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import BlogPost from "./Components/BlogPost";
import NotFound from "./Components/NotFound";

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
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "blog/:id", element: <BlogPost /> },
      { path: "*", element: <NotFound /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
