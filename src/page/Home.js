import React from 'react'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Hobbies from '../components/Hobbies'
import Skills from '../components/Skills'
import Profile from '../components/Profile'
import Project from '../components/Project'

const Home = () => {
  return (
    <>
      <section className='home-contant'>
        <div className='home-center'>
          <Profile />
          <Skills />
          <Blog />
          <Hobbies />

          {/* <Contact /> */}
          <Project />
        </div>
      </section>
    </>
  )
}

export default Home
