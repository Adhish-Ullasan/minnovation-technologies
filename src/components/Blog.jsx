import BlogCard from "./BlogCard"
import { blogData } from "../data/BlogData"

const Blog = () => {

    return(
        <section id="blog">
            <div className="container">
                <div className="blogtitle">
                    <h2>Blogs, News and Events</h2>
                </div>
                <div className="blogCards">
                    {
                    blogData.map(()=> <BlogCard />) 
                    }
                </div>
            </div>
             <div>
                <button className='primaryButton'>SEE ALL POST</button>
            </div>
        </section>
    )
}

export default Blog