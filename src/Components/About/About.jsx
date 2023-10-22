import React from 'react'
import './About.css'
import rocket from '../../img/rock.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
useEffect(()=>{
AOS.init({duration:2000});
}, []);

  return (
  
    

<div className="background-image">

<div id="about">
<Row>

        <Col xs={12} md={6}>
       
        <h2>INTRODUCTION</h2>
        <h2>TO  SEDS SABRA</h2>

        <img src={rocket} alt="" />
        </Col>
        
        <Col xs={12} md={6}>
     
        <h2>ABOUT</h2>
        <h2>SEDS SBRA</h2>
        <p>STUDENTS FOR THE EXPLORATION AND DEVELOPMENT OF SPACE OR SEDS IS AN INDEPENDENT, STUDENT - BASED INTERNATIONAL
ORGANIZATION WHICH PROMOTES THE EXPLORATION AND 
            DEVELOPMENT OF SPACE. SEDS SABRA IS THE SEDS CHAPTER IN 
                  SABARAGAMUWA UNIVERSITY OF SRI LANKA.</p>
                 <center> <button className=" button i-button2">MORE</button></center>
                 
        </Col>
     
      </Row>
 

</div>
</div>




  
  )
}

export default About
