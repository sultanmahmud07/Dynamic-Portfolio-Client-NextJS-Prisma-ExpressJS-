
import ProjectDetails from "@/components/modules/Project/ProjectDetails";
import { getProjectBySlug } from "@/services/ProjectServices";
import React from "react";

// export const generateStaticParams = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
//   const { data: blogs } = await res.json();

//   return blogs.slice(0, 2).map((blog: any) => ({
//     blogId: String(blog.id),
//   }));
// };

// export const generateMetadata = async ({
//   params,
// }: {
//   params: Promise<{ blogId: string }>;
// }) => {
//   const { blogId } = await params;
//   const blog = await getBlogById(blogId);

//   return {
//     title: blog?.title,
//     description: blog?.content,
//   };
// };

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  return (
    <div className="py-20">
      <ProjectDetails project={project} />
    </div>
  );
};

export default BlogDetailsPage;
