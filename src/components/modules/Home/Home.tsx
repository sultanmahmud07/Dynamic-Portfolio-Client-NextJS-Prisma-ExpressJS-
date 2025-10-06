import React from 'react'
import Hero from './Banner/Hero'
import LatestBlog from './LatestBlog/LatestBlog'
import Project from './Project/Project'
import About from './About/About'
import ContactForm from '../Contact/ContactForm'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <LatestBlog></LatestBlog>
      <ContactForm></ContactForm>
    </div>
  )
}

export default Home