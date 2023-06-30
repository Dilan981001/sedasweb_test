import React from 'react'
import './About.css'
import rocket from '../../img/rock.png'

const About = () => {
  return (
    <div className="background-image">
    <div className="intro1" id='About'>
    <div className="i-left">
<div className="i-name1">
<span>INTRODUCTION</span>
<span>TO  SEDS SABRA</span>
</div>
<div className="img2">
        <img src={rocket} alt=""/>
       </div>
    </div>

    <div className="i-right">
    <div className="i-name2">
     <span>ABOUT</span>
     <span>SEDS SABRA</span>
     <span>STUDENTS FOR THE EXPLORATION AND DEVELOPMENT OF SPACE 
OR SEDS IS AN INDEPENDENT, STUDENT - BASED INTERNATIONAL
ORGANIZATION WHICH PROMOTES THE EXPLORATION AND 
DEVELOPMENT OF SPACE. SEDS SABRA IS THE SEDS CHAPTER IN 
SABARAGAMUWA UNIVERSITY OF SRI LANKA.</span>
</div>

    <button className="button i-button2">MORE</button>



</div>
</div>
   </div>
     
    
  )
}

export default About
