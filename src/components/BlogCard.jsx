// const BlogCard = () => {
//     return(
//         <div className="blog-card">
//             <div >
//                 <img src="/images/home/blog1.svg" alt="" />
//             </div>
//             <div>
//                 <p>February 28th, 2021</p>
//                 <h2>Redefining Building Management Systems with IoT & cloud-based monitoring"</h2>
//                 <p>One of the many techniques employed by the industry to improve the reliability of assets in the industry is the building management system...Read More</p>
//             </div>

//         </div>
//     )
// }

// export default BlogCard


export const BlogCard = (props) => {
    const data = props.data
    return(
        <div className="blog-card">
            <div >
                <img src={data.image} alt="" />
            </div>
            <div>
                <p>{data.date}</p>
                <h2>{data.newsTitle}</h2>
                <p>{data.content}</p>
            </div>

        </div>
    )
}
