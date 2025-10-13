
import { IBlog } from '@/types'
import { CalendarDays, MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ blog }: { blog: IBlog }) => {
      return (
            <div
                  className="group flex flex-col gap-2 md:gap-3 news-card  bg-white overflow-hidden"
            >
                  <div className="news-image overflow-hidden rounded md:rounded-xl ">
                        <Image
                              src={blog.thumbnail}
                              alt={blog.title}
                              width={400}
                              height={400}
                              className="w-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                  </div>
                  <h3 className="capitalize md:pt-2 text-md md:text-xl text-black font-semibold">
                        {blog.title}
                  </h3>
                  <p className="text-sm md:text-base">{blog.excerpt}</p>
                  <p className='flex items-center gap-1 text-sm'><span><CalendarDays /></span>{new Date(blog.createdAt).toLocaleDateString()}</p>
                 <Link className='cursor-pointer' href={`/blogs/${blog.slug}`}>
                  <p className='flex items-center gap-2 md:gap-4 text-sm text-primary font-semibold'>
                        Read More
                        <span><MoveRight /></span>
                  </p>
                 </Link>
            </div>
      )
}

export default BlogCard