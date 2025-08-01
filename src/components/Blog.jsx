import BlogCard from "./BlogCard"
import { blogData } from "../data/BlogData"

const Blog = () => {
    return(
        <section id="blog">
            <div className="container">
                <div>
                    <h2>Blogs, News and Events</h2>
                </div>
                <div className="blogCards">
                    {
                    blogData.map(()=> <BlogCard />) 
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog