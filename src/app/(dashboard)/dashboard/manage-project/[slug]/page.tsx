import EditProject from "@/components/modules/Dashboard/Projects/EditProject";

const UpdateProject = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
      const slug = (await params).slug
  return (
    <div className="w-full">
      <EditProject slug={slug} />
    </div>
  );
};

export default UpdateProject;
