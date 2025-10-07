
import { CalendarDays, MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogCard = ({ news }: { news: any }) => {
      return (
            <div
                  className="group flex flex-col gap-2 md:gap-3 news-card  bg-white overflow-hidden"
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
                  <h3 className="capitalize md:pt-2 text-md md:text-xl text-black font-semibold">
                        The Dental Dispatch
                  </h3>
                  <p className="text-sm md:text-base">Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.Stay ahead with expert insights, clinical tips, and the latest product updates for modern dental professionals.</p>
                  <p className='flex items-center gap-1 text-sm'><span><CalendarDays /></span>20/05/2025</p>
                 <Link className='cursor-pointer' href={"/blogs/news-slug"}>
                  <p className='flex items-center gap-2 md:gap-4 text-sm text-primary font-semibold'>
                        Read More
                        <span><MoveRight /></span>
                  </p>
                 </Link>
            </div>
      )
}

export default BlogCard