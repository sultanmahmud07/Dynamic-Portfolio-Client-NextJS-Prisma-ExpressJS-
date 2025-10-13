
import MyProjects from "@/components/modules/Project/Projects";
import ShareBanner from "@/components/shared/ShareBanner";
import { getAllProjects } from "@/services/ProjectServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs | Next Blog",
  description:
    "Browse all blog posts on web development, Next.js, React, and more. Stay updated with the latest tutorials and articles.",
};

const AllBlogsPage = async () => {
    const projects = await getAllProjects({limit:30});
    
  return (
    <div className="">
      <ShareBanner title={"My Projects"}></ShareBanner>
      <MyProjects projects={projects.data} />
    </div>
  );
};

export default AllBlogsPage;
