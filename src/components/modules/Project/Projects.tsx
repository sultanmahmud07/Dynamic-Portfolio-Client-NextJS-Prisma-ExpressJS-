
import ProjectCard from "./ProjectCard"
import { IProject } from "@/types"

const MyProjects = ({projects}: {projects: IProject[]}) => {

      return (
            <section className="pb-5">
                  <div className="main-container">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 py-2">
                              {
                                    projects.map((project, i) => {
                                          return (
                                               <ProjectCard key={i} project={project}></ProjectCard>


                                          )
                                    })
                              }
                        </div>
                  </div>
            </section>
      )
}

export default MyProjects;