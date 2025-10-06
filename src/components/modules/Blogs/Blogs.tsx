import img1 from "@@/temp/news.png"
import img2 from "@@/temp/news.png"
import img3 from "@@/temp/news.png"
import BlogCard from "./BlogCard"

const Blogs = () => {
      const data = [
            {
                  image: img1,
                  name: "Quality & Certified Products",
                  description: "All our systems meet international quality and safety standards."
            },
            {
                  image: img2,
                  name: "Local Support",
                  description: "Our expert team is always nearby to assist you when needed."
            },
            {
                  image: img3,
                  name: "Eco-Friendly Energy Solutions",
                  description: "Reduce your carbon footprint with clean, renewable power."
            },
      ]
      return (
            <section className="pb-5">
                  <div className="main-container">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 py-2">
                              {
                                    data.map((news, i) => {
                                          return (
                                               <BlogCard key={i} news={news}></BlogCard>


                                          )
                                    })
                              }
                        </div>
                  </div>
            </section>
      )
}

export default Blogs;