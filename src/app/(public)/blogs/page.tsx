
import Blogs from "@/components/modules/Blogs/Blogs";
import ShareBanner from "@/components/shared/ShareBanner";
import { getAllBlogs } from "@/services/PostServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs | Next Blog",
  description:
    "Browse all blog posts on web development, Next.js, React, and more. Stay updated with the latest tutorials and articles.",
};

const AllBlogsPage = async () => {
  const blogs = await getAllBlogs({limit:30});
  return (
    <div className="">
      <ShareBanner title={"My Blogs"}></ShareBanner>
      <Blogs blogs={blogs.data}></Blogs>
    </div>
  );
};

export default AllBlogsPage;
