import { CalendarDays } from 'lucide-react'
import React from 'react'

const RecentBlogs = () => {
      const blogs = [
            {
                  id: 1
            },
            {
                  id: 1
            },
            {
                  id: 1
            },
            {
                  id: 1
            },
            {
                  id: 1
            },
            {
                  id: 1
            },
            {
                  id: 1
            },
      ]
      return (
            <div className='border-[1px] border-[#C7C7C7] rounded-md '>
                  <h3 className='text-xl font-bold p-3 border-b border-primary text-primary'>Recent Blogs</h3>
                  <div className="flex flex-col gap-3 md:gap-5 p-3 md:p-5">
                        {
                              blogs.map((blog, i) => {
                                    return (
                                          <div key={i} className="blog-card p-3 rounded shadow">
                                                <h3 className="capitalize text-baser md:text-md text-black font-medium">
                                                      EV Charger Installations Set to Double Across Urban Areas
                                                </h3>
                                                <p className='pt-2 flex items-center justify-end gap-1 text-xs'><span className='text-primary text-xs'><CalendarDays size={15}/></span>20/05/2025</p>
                                          </div>
                                    )
                              })
                        }
                  </div>
            </div>
      )
}

export default RecentBlogs
