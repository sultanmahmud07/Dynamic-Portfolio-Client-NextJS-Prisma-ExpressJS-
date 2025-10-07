import NewsDetails from "@/components/modules/Blogs/NewsDetails";
import React from "react";

// export const generateStaticParams = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
//   const { data: blogs } = await res.json();

//   return blogs.slice(0, 2).map((blog: any) => ({
//     slug: String(blog.id),
//   }));
// };

// export const generateMetadata = async ({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) => {
//   const { slug } = await params;
//   const blog = await getBlogById(slug);

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

  // const blog = await getBlogById(slug);

  return (
    <div className="py-20 md:py-24">
      <NewsDetails params={params}></NewsDetails>
    </div>
  );
};

export default BlogDetailsPage;
