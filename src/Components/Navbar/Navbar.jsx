import React from 'react'
import './Navbar.css'
import sedslogo from '../../img/sedslogo.png'
import {Link} from 'react-scroll'
import Intro from '../Intro/Intro'
import About from '../About/About'
import Division from '../Divisions/Division'

const Navbar = () => {
  return (
    <div className="background-color">
    <div className="n-wrapper">
        <div className="n-left">  
       <div className="img1">
        <img src={sedslogo} alt=""/>
       </div>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                  <Link spy={true} to ='Intro' smooth={true} activeClass='activeClass'><li>Home</li></Link>
                  <Link spy={true} to ='About' smooth={true} ><li>About</li></Link>
                  <Link spy={true} to ='Division' smooth={true} ><li>Division</li></Link>
                  <Link spy={true} to ='Event' smooth={true} ><li>Events</li></Link>
                  <Link spy={true} to ='Projects' smooth={true} ><li>Projects</li></Link>
                  
                 
                    <li>Executive Committee</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar
