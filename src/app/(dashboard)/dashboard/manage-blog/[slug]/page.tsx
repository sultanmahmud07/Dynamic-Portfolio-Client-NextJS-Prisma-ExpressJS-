import EditBlog from "@/components/modules/Dashboard/Blogs/EditBlog";

 const UpdateBlog = async ({
   params,
 }: {
   params: Promise<{ slug: string }>;
 }) => {
       const slug = (await params).slug
   return (
     <div className="w-full">
       <EditBlog slug={slug} />
     </div>
   );
 };
 
 export default UpdateBlog;
 