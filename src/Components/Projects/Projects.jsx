import React from 'react'
import './Projects.css'
import CountDiv from '../CountPro/CountDiv'
import CountMem from '../CountPro/CountMem'
import CountPro from '../CountPro/CountPro'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'


const Projects = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
    }, []);
  return (
    <div className="background-image1">
    <div className="projects" id='Projects'>
    <div className="animation" data-aos="flip-left">
        <div className="achivements">
            <div className="circle">
            <CountDiv/>
            </div>
                <span>Divisions</span> 
        </div>
        </div>

        <div className="animation" data-aos="flip-left">
        <div className="achivements">
            <div className="circle">
              <CountMem/>
            </div>
                <span>Members</span> 
        </div>
        </div>

        <div className="animation" data-aos="flip-left">
        <div className="achivements">
            <div className="circle">
              <CountPro/>
            </div>
                <span>Complete Projects</span> 
        </div>
        </div>
    </div>
  
    </div>
  
    
  )
}

export default Projects
