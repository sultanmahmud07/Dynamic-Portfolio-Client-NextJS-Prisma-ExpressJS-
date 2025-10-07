
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectCard = ({ news }: { news: any }) => {
      return (
            <div
                  className="group flex flex-col gap-2 md:gap-2 news-card  bg-white overflow-hidden"
            >
                  <div className="news-image overflow-hidden rounded md:rounded-xl ">
                        <Image
                              src={news.image}
                              alt={news.name}
                              width={400}
                              height={400}
                              className="w-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                  </div>
                  <div className="flex items-center justify-between">
                        <h4 className='text-primary text-sm uppercase font-semibold'>Category Name</h4>
                        <p className='flex items-center gap-1 text-sm font-semibold text-gray-500'><span><IoEyeOutline /></span>80</p>
                  </div>
                  <h3 className="capitalize  text-md md:text-xl text-black font-semibold">
                        The Dental Dispatch
                  </h3>
                  <p className="text-sm md:text-base">Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.Stay ahead with expert insights, clinical tips.</p>
              <div className="flex">
                      <Link href="/contact">
                        <Button size="sm" className="flex items-center text-xs flex-wrap gap-3 mr-2 group ">
                              View detail
                              <span className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                              </span>
                        </Button>
                  </Link>
                  <Link href="/contact">
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