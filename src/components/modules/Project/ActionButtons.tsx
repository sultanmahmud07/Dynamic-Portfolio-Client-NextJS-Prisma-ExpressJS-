/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { BiLike } from 'react-icons/bi'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

const ActionButtons = ({ project }:any) => {
      return (
            <div className="button_sec flex items-center gap-4 pt-5">
                  <button className="view_more_btn text-xs md:text-base transition p-2 md:p-3 px-5 md:px-7 rounded text-primary flex items-center gap-2 ">
                        <span>LIKE THIS</span>
                        <span>
                              <BiLike />
                        </span>
                        <span className="text-xs px-1 bg-primary rounded-sm text-white">
                              {project?.user_react}
                        </span>
                  </button>
                  <a target="blank" href={project?.live_link}>
                        <button className="view_more_btn text-xs md:text-base  transition p-2 md:p-3 px-5 md:px-7 rounded text-primary flex items-center gap-2 ">
                              <span>VIEW PROJECT</span>
                              <span>
                                    <FaRegArrowAltCircleRight />
                              </span>
                        </button>
                  </a>
            </div>
      )
}

export default ActionButtons
