import { useParams } from "react-router-dom";
import "../styles/blogPost.scss";
/**
 * 
 * @returns particular post of blog
 */
function BlogPost() {
    const { id } = useParams();

    return (
        <div className="blog-post">
            <h1>Blog Post {id}</h1>
            <p>This is the content of blog post {id}.</p>
        </div>
    );
}

export default BlogPost;
