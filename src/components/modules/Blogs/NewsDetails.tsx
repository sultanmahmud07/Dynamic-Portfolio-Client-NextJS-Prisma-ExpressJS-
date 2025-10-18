import './news-style.css'
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineEye } from "react-icons/ai";
import Link from 'next/link';
import { IBlog } from '@/types';
import defaultImage from "@@/default/banner-default-img.png"
import RecentBlogs from './RecentBlogs';
import { getAllBlogs } from '@/services/PostServices';
import { Suspense } from 'react';

const NewsDetails = async ({ blog }: { blog: IBlog }) => {


  const recentBlogs = await getAllBlogs({limit:30});
  return (
    <div className="pt-30">
      <div className="category_top bg-gray-100 py-4 md:py-6">
        <div className="main-container">
          <div className="text-[#1F1C1466] text-sm font-semibold flex items-center gap-1">
            <span className="text-xl"><GoHome /></span>
            <Link href={`/`} className="hover:text-primary">Home</Link>
            <span><IoIosArrowForward /></span>
            <Link href={`/blog`} className="hover:text-primary">Blogs</Link>
            <span><IoIosArrowForward /></span>
            <span className="text-primary md:hidden">{blog.slug.slice(0, 30)}..</span>
            <span className="text-primary hidden md:block">{blog.slug}</span>
          </div>
        </div>
      </div>
      <div className="main-container ">
        <div className="flex flex-col md:flex-row gap-5 md:gap-6 py-4">
          <div className="blog_details w-full md:w-2/3">
            <div className="pb-4">
              <Image
                src={blog.thumbnail || defaultImage}
                alt={blog.title}
                width={1000}
                height={700}
                className="w-full"
              />
            </div>
            <div className="blog_top flex items-center gap-2 md:gap-3 py-2">
              <p className='flex items-center gap-2 text-[#475156] text-sm'>
                <span className='text-primary md:text-lg'><FaRegUser /></span>
                <span className='font-semibold'>Admin</span>
              </p>
              <p className='flex items-center gap-1 text-[#475156] text-sm'>
                <span className='text-primary md:text-xl'><CiCalendar /></span>
                <span>
                  {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                  })}
                </span>
              </p>

              <p className='flex items-center gap-2 text-[#475156] text-sm'>
                <span className='text-primary md:text-lg'><AiOutlineEye /></span>
                <span className='font-semibold'>{blog.views || 10}</span>
              </p>

            </div>
            <h1 className='text-2xl md:text-3xl my-1 md:py-3 font-bold text-[#191C1F]'>{blog.title}</h1>
            <p>{blog?.excerpt}</p>
            <div
              className="blog_content py-4"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>

          </div>
          <div className="category_menu w-full md:w-1/3">
          <Suspense fallback={<p>Loading....</p>}>
            <RecentBlogs blogs={recentBlogs.data} />
          </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;