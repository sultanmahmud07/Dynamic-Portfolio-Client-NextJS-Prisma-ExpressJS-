import React from 'react'
import Hero from './Banner/Hero'
import LatestBlog from './LatestBlog/LatestBlog'
import FAQ from './FAQ/FAQ'
import Project from './Project/Project'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Project></Project>
      <LatestBlog></LatestBlog>
      <FAQ></FAQ>
    </div>
  )
}

export default Home