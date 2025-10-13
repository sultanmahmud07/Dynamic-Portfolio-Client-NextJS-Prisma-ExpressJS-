
import { Button } from '@/components/ui/button'
import { IProject } from '@/types'
import Link from 'next/link'
import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

const ActionButtons = ({ project }: { project: IProject }) => {
      return (
            <div className="button_sec flex items-center gap-4 pt-5">
                <Link target="blank" href={project?.repoUrl || "#"}>
                       <Button variant="outline" className="view_more_btn text-xs md:text-base transition p-2 md:p-3 px-5 md:px-7 rounded text-primary flex items-center gap-2 ">
                        <span>View Source</span>
                        <span>
                              <FaRegArrowAltCircleRight />
                        </span>
                  </Button>
                  </Link>
                  <Link target="blank" href={project?.liveUrl || "#"}>
                        <Button className="view_more_btn text-xs md:text-base  transition p-2 md:p-3 px-5 md:px-7 rounded text-primary flex items-center gap-2 ">
                              <span>VIEW PROJECT</span>
                              <span>
                                    <FaRegArrowAltCircleRight />
                              </span>
                        </Button>
                  </Link>
            </div>
      )
}

export default ActionButtons
