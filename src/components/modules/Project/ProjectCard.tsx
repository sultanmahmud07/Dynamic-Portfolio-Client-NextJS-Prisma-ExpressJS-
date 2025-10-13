
import { Button } from '@/components/ui/button'
import { IProject } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'

const ProjectCard = ({ project }: { project: IProject }) => {
      return (
            <div
                  className="group flex flex-col gap-2 md:gap-2 news-card  bg-white overflow-hidden"
            >
                  <div className="news-image overflow-hidden rounded md:rounded-xl ">
                        <Image
                              src={project.images[0]}
                              alt={project.title}
                              width={400}
                              height={400}
                              className="w-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                  </div>
                  <div className="flex items-center justify-between">
                        <h4 className='text-primary text-sm uppercase font-semibold'>{project.category || "Uncategorized"}</h4>
                        <p className='flex items-center gap-1 text-sm font-semibold text-gray-500'><span><IoEyeOutline /></span>{project.views}</p>
                  </div>
                  <h3 className="capitalize  text-md md:text-xl text-black font-semibold">
                        {project.title}
                  </h3>
                  <p className="text-sm md:text-base">{project.description}</p>
              <div className="flex">
                      <Link className='cursor-pointer' href={`/projects/${project.slug}`}>
                        <Button size="sm" className="flex items-center text-xs flex-wrap gap-3 mr-2 group ">
                              View detail
                              <span className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                              </span>
                        </Button>
                  </Link>
                  <Link className='cursor-pointer' href={project.liveUrl || "#"} target='_blank'>
                        <Button size="sm" variant="outline" className="flex seco items-center flex-wrap gap-3 mr-2 group ">
                              Live link
                              <span className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                              </span>
                        </Button>
                  </Link>
              </div>
            </div>
      )
}

export default ProjectCard