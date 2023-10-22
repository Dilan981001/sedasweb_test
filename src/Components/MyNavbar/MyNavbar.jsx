import React from 'react'
import './MyNavbar.css'
import sedslogo from '../../img/sedslogo.png'
import {Link} from 'react-scroll'
import { NavLink } from 'react-router-dom'
import Intro from '../Intro/Intro'
import About from '../About/About.jsx'
import Division from '../Divisions/Division'
import ContactUs from '../ContactUs/ContactUs'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';



const MyNavbar = () => {
  return (
  
    <Navbar expand="lg" className="bg" data-bs-theme="dark">
      
    <Container fluid>

    


     
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#Intro">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#division">Divisions</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Link href="#action1">Executuive Board</Nav.Link>
          <Nav.Link href="#action1">Contact Us</Nav.Link>
        
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default MyNavbar
