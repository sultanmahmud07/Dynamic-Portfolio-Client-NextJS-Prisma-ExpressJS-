import NewsDetails from "@/components/modules/Blogs/NewsDetails";
import { getAllBlogs, getBlogBySlug } from "@/services/PostServices";
import { IBlog } from "@/types";

export const generateStaticParams = async () => {
  const blogs = await getAllBlogs({limit:20});
  return blogs.data.map((blog: IBlog) => ({
    slug: String(blog.slug),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  return {
    title: blog?.title,
    description: blog?.excerpt,
  };
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
      const slug = (await params).slug
  const blog = await getBlogBySlug(slug);
  return (
    <div className="">
      <NewsDetails blog={blog}></NewsDetails>
    </div>
  );
};

export default BlogDetailsPage;
