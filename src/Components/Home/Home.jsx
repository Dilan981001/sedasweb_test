import React from 'react'
import MyNavbar from '../MyNavbar/MyNavbar'
import About from '../About/About'
import Division from '../Divisions/Division'
import Intro from '../Intro/Intro'
import Events from "../Events/Events"
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'

function home() {
  return (
    <div>
    <MyNavbar/>
    <Intro/>
    <About/>
    <Division/>
    <Events/>
    <Projects/>
    <Footer/>
      
    </div>
  )
}

export default home
