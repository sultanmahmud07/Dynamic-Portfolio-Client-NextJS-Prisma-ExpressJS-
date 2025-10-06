import img1 from "@@/temp/news.png"
import img2 from "@@/temp/news.png"
import img3 from "@@/temp/news.png"
import BlogCard from "../../Blogs/BlogCard"

const LatestBlog = () => {
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
            <section className="py-7 md:py-14">
                  <div className="main-container">
                        <h2 className="text-center text-2xl md:text-4xl text-black py-4 md:py-8 font-bold">Latest <span className="text-primary">News</span></h2>
                        <p className="text-center mx-auto md:w-3/4 text-sm md:text-base">Our EV chargers meet the highest international safety and performance standards, including UL, CE, and RoHS certifications. Engineered for reliability and built to last, each product undergoes rigorous testing to ensure seamless operation in every environment.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 py-5  md:pt-16">
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

export default LatestBlog;