import { Link } from "react-router-dom";
import "../styles/home.scss";
import Navbar from "./Navbar";

/**
 * 
 * @returns Main home page
 */
function Home() {
  return (
    <div className="home">
      <p>Welcome to our website!</p>

      <h2>Latest Blogs</h2>
      <ul>
        <li><Link to="/blog/1">Blog Post 1</Link></li>
        <li><Link to="/blog/2">Blog Post 2</Link></li>
        <li><Link to="/blog/3">Blog Post 3</Link></li>
      </ul>
    </div>
  );
}

export default Home;
