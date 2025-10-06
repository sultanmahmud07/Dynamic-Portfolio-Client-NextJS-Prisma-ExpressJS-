
import MyProjects from "@/components/modules/Project/Projects";
import ShareBanner from "@/components/shared/ShareBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs | Next Blog",
  description:
    "Browse all blog posts on web development, Next.js, React, and more. Stay updated with the latest tutorials and articles.",
};

const AllBlogsPage = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
  //   cache: "no-store",
  // });
  // const { data: blogs } = await res.json();
  return (
    <div className="">
      <ShareBanner title={"My Projects"}></ShareBanner>
      <MyProjects></MyProjects>
    </div>
  );
};

export default AllBlogsPage;
