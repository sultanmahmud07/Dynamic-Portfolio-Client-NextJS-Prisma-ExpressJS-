import ImageSlider from "./ImageSlider/ImageSlider";
import { BsGithub } from "react-icons/bs";
import ActionButtons from "./ActionButtons";
import MyContent from "@/components/shared/MyContent/MyContent";
import { IProject } from "@/types";

const ProjectDetails = async ({ project }: { project: IProject }) => {
  console.log("Project__", project);

  return (
    <div className="py-5 md:py-10">
      <div className="main-container">
        <div className="top_image_banner grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 rounded-xl md:rounded-2xl md:py-2">
          <div className="show_images">
            <ImageSlider images={project?.images}></ImageSlider>
          </div>
          <div className="show_project_detail flex flex-col gap-2 md:gap-2">
            <h1 className="text-2xl my-2 md:text-3xl lg:md:text-3xl capitalize">
              {project?.title}
            </h1>
            <p className="short_des text-base md:text-lg">
              {project?.description}
            </p>
            <div className="grid grid-cols-2 gap-2 pt-2 text-sm md:text-base">
              <p className="flex items-center gap-2">
                <span className="font-semibold">From: </span>
                {project.createdAt}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">To: </span>
                {project.updatedAt}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Client:</span>
                Client Nmae
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Budget:</span>
                {/* $ {project?.budget} */}
                999
              </p>
            </div>
            <ActionButtons project={project}></ActionButtons>
          </div>
        </div>
        <div className="project_content_details py-5">
          <div className="about_project flex items-center gap-2 flex-wrap justify-between">
            <h3 className="text-xl font-bold uppercase md:text-2xl">
              About Project:
            </h3>
            <a
              className="icon-5 text-sm md:text-xl"
              target="blank"
              href={project?.repoUrl || "#"}
            >
              <BsGithub></BsGithub>
            </a>
          </div>
          <MyContent content={project?.content}></MyContent>
        </div>
        <ActionButtons project={project}></ActionButtons>
      </div>
    </div>
  );
};

export default ProjectDetails;
