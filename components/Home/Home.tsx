"use client"

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Spotlight } from '../ui/Spolight'

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import ("aos")
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        easing: 'ease-in-out',
        anchorPlacement: 'top-bottom',
      })
    }
    initAos();
  }, []);

  return (
    <div className="overflow-hidden ">
        <Spotlight />
        <Hero />
        <About />
        <Project />
        <Skills />
        <Contact />
    </div>
  )
}

export default Home;