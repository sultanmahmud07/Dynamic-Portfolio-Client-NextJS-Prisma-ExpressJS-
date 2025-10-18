
import Blogs from "@/components/modules/Blogs/Blogs";
import { getAllBlogs } from "@/services/PostServices";
import { Metadata } from "next";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

export const metadata: Metadata = {
  title: "Blogs | Techie Delight - Web Development Tutorials & Articles",
  description:
    "Browse all blog posts on web development, Next.js, React, and more. Stay updated with the latest tutorials and articles.",
};

const AllBlogsPage = async () => {
  const blogs = await getAllBlogs({limit:100});
  return (
    <div className="pt-30">
       <div className="category_top bg-gray-100 py-4 md:py-6 mb-5">
             <div className="main-container">
               <div className="text-[#1F1C1466] text-sm font-semibold flex items-center gap-1">
                 <span className="text-xl"><GoHome /></span>
                 <Link href={`/`} className="hover:text-primary">Home</Link>
                 <span><IoIosArrowForward /></span>
                 <Link href={`/blogs`} className="text-primary">Blogs</Link>
               </div>
             </div>
           </div>
      <Blogs blogs={blogs.data}></Blogs>
    </div>
  );
};

export default AllBlogsPage;
