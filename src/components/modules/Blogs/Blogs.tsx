
import BlogCard from "./BlogCard"
import { IBlog } from "@/types"

const Blogs = ({blogs}: {blogs: IBlog[]}) => {
      
   
      return (
            <section className="pb-5">
                  <div className="main-container">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 py-2">
                              {
                                    blogs.map((blog, i) => {
                                          return (
                                               <BlogCard key={i} blog={blog}></BlogCard>


                                          )
                                    })
                              }
                        </div>
                  </div>
            </section>
      )
}

export default Blogs;