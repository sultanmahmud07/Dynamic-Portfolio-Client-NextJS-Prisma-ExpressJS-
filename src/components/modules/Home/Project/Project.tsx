
import ProjectCard from "../../Project/ProjectCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { IProject } from "@/types"

const Project = ({projects}:{projects: IProject[]}) => {
    
      return (
            <section className="py-5 md:py-10">
                  <div className="main-container">
                        <div className="flex items-center justify-between">
                              <h2 className="text-2xl md:text-4xl text-black py-4 md:py-8 font-bold">My <span className="text-primary">Projects</span></h2>
                              <Link href="/projects">
                                    <Button size="sm" variant="outline" className="flex items-center text-xs flex-wrap gap-2 group ">
                                          View all
                                          <span className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>    
                                                   </span>
                                    </Button>
                              </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3 gap-5 md:gap-8">
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

export default Project;