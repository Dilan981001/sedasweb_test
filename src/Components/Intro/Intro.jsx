import React from 'react'
import './Intro.css'
import { Typewriter } from 'react-simple-typewriter'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'


const Intro = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
    }, []);
  
  return (
    <div className="background-image">
      
   <div className='intro' id='Intro'>
   <div className="animation" data-aos="flip-right">
        <div className="int">
            <span>WELCOME TO</span>
            <h1 style={{  margin: 'auto 0', fontWeight: 'normal' }}>
        {' '}
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          <Typewriter
            words={['S E D S  S A B R A', 'S E D S  S A B R A', 'S E D S  S A B R A', 'S E D S  S A B R A']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
      </h1>
            <span>SABARAGAMUWA UNIVERSITY OF SRI LANKA</span>
        </div>
        <button className="button i-button1">SEE MORE</button>
    </div>
    </div>
    </div>
  )
}
 
export default Intro
