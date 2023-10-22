import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import './DivCar.css'; 
import satalite from '../../img/satalite.png'
import obser from '../../img/obser.png'
import bio from '../../img/bio.png'
import med from '../../img/med.png'
import fin from '../../img/fin.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'


const YourCarousel = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
        }, []);
  return (

    <div className="animation" data-aos="fade-up">
    <div className="carousel-container">
      <Carousel>
        
      <div>
          <img src={satalite} alt="Image 2" />
          <button className="button i-button1">Satelite and IT Division</button>
        </div>
        <div>
          <img src={obser} alt="Image 2" />
          <button className="button i-button1">Observation Division</button>
        </div>
        <div>
          <img src={bio} alt="Image 2" />
          <button className="button i-button1">Bio Medical & Earth Science Division</button>
        </div>
        <div>
          <img src={med} alt="Image 2" />
          <button className="button i-button1">Media Division</button>
        </div>
        <div>
          <img src={fin} alt="Image 2" />
          <button className="button i-button1">Financial Division</button>
        </div>
        
      </Carousel>
    </div>
    </div>
  );
};

export default YourCarousel;
