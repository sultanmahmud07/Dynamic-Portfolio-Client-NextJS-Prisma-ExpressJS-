import React from 'react'
import Hero from './Banner/Hero'
import LatestBlog from './LatestBlog/LatestBlog'
import Project from './Project/Project'
import About from './About/About'
import ContactForm from '../Contact/ContactForm'
import MyClients from './MyClient/MyClient'
import MyAchievement from './MyAchievement/MyAchievement'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <MyClients></MyClients>
      <About></About>
      <Project></Project>
      <MyAchievement></MyAchievement>
      <LatestBlog></LatestBlog>
      <ContactForm></ContactForm>
    </div>
  )
}

export default Home