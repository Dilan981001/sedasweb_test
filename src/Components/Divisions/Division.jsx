import React from 'react'
import './Division.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import roc from '../../img/roc.png'
import robot from '../../img/robot.png'
import satalite from '../../img/satalite.png'
import obser from '../../img/obser.png'
import bio from '../../img/bio.png'
import med from '../../img/med.png'
import fin from '../../img/fin.png'


const Division = () => {
  return (
    <div className="background-image">
        <div className="intro1" id='Division'>
        <div className="i-name1">
<span>DIVISIONS</span>
<span>OF SEDS SABRA</span>
</div>

<Swiper>
    <SwiperSlide>
    <div className="card">
      <img className="card-image" src={satalite} alt="Card Image" />
      <div className="card-content">
        <h3 className="card-title">Satelite and IT Division</h3>
        <button className="button i-button1">MORE</button>
      </div>
    </div>

    </SwiperSlide>
    <SwiperSlide>
    <div className="card">
      <img className="card-image" src={obser} alt="Card Image" />
      <div className="card-content">
        <h3 className="card-title">Observation Division</h3>
        <button className="button i-button1">MORE</button>
      </div>
    </div>

    </SwiperSlide>
    <SwiperSlide>
    <div className="card">
      <img className="card-image" src={bio} alt="Card Image" />
      <div className="card-content">
        <h3 className="card-title">Bio Medical & Earth Science Division</h3>
        <button className="button i-button1">MORE</button>
      </div>
    </div>

    </SwiperSlide>
    <SwiperSlide>
    <div className="card">
      <img className="card-image" src={roc} alt="Card Image" />
      <div className="card-content">
        <h3 className="card-title">Rocketery Division</h3>
        <button className="button i-button1">MORE</button>
      </div>
    </div>

    </SwiperSlide>
    <SwiperSlide>
    <div className="card">
      <img className="card-image" src={robot} alt="Card Image" />
      <div className="card-content">
        <h3 className="card-title">Robotic Division</h3>
        <button className="button i-button1">MORE</button>
      </div>
    </div>

    </SwiperSlide>
    
    <SwiperSlide>
    <div className="card">
      <img className="card-image" src={med} alt="Card Image" />
      <div className="card-content">
        <h3 className="card-title">Media Division</h3>
        <button className="button i-button1">MORE</button>
      </div>
    </div>

    </SwiperSlide>
    <SwiperSlide>
    <div className="card">
      <img className="card-image" src={fin} alt="Card Image" />
      <div className="card-content">
        <h3 className="card-title">Financial Division</h3>
        <button className="button i-button1">MORE</button>
      </div>
    </div>

    </SwiperSlide>
</Swiper>
</div>
</div>

   
  )
}

export default Division
