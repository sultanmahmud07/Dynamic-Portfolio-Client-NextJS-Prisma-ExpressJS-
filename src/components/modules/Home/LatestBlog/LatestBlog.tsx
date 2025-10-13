import BlogCard from "../../Blogs/BlogCard"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IBlog } from "@/types"

const LatestBlog = ({ blogs }: { blogs: IBlog[] }) => {
  
      return (
            <section className="py-5 md:py-10 border-b">
                  <div className="main-container">
                        <h2 className="text-center text-2xl md:text-4xl text-black py-4 md:py-8 font-bold">Latest <span className="text-primary">News</span></h2>
                        <p className="text-center mx-auto md:w-3/4 text-sm md:text-base">Our EV chargers meet the highest international safety and performance standards, including UL, CE, and RoHS certifications. Engineered for reliability and built to last, each product undergoes rigorous testing to ensure seamless operation in every environment.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 py-5  md:pt-10">
                              {
                                    blogs.map((blog, i) => {
                                          return (
                                               <BlogCard key={i} blog={blog}></BlogCard>


                                          )
                                    })
                              }
                        </div>
                        <div className="flex items-center justify-center">
                                <Link href="/blogs">
                                    <Button size="sm" variant="outline" className="flex items-center text-xs flex-wrap gap-2 group ">
                                          View all
                                          <span className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>    
                                                   </span>
                                    </Button>
                              </Link>
                        </div>
                  </div>
            </section>
      )
}

export default LatestBlog;