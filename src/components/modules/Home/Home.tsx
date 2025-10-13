import React from 'react'
import Hero from './Banner/Hero'
import LatestBlog from './LatestBlog/LatestBlog'
import Project from './Project/Project'
import About from './About/About'
import ContactForm from '../Contact/ContactForm'
import MyClients from './MyClient/MyClient'
import MyAchievement from './MyAchievement/MyAchievement'
import { getAllProjects } from '@/services/ProjectServices'
import { getAllBlogs } from '@/services/PostServices'

const Home = async () => {
   const projects = await getAllProjects({limit:6});
   const blogs = await getAllBlogs({limit:6});
  return (
    <div>
      <Hero></Hero>
      <MyClients></MyClients>
      <About></About>
      <Project projects={projects.data}></Project>
      <MyAchievement></MyAchievement>
      <LatestBlog blogs={blogs.data}></LatestBlog>
      <ContactForm></ContactForm>
    </div>
  )
}

export default Home