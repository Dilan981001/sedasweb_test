import React from 'react'
import './Events.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import satalite from '../../img/satalite.png'
import obser from '../../img/obser.png'
import bio from '../../img/bio.png'



const Division = () => {
  return (
    <div className="background-image">
        <div className="intro1" id='Event'>
        <div className="i-name1">
<span>EVENTS</span>
<span>OF SEDS SABRA</span>
</div>

<Swiper>
    <SwiperSlide>
    <div className="cardev">
      <img className="card-imageev" src={satalite} alt="Card Image" />
      <div className="card-content">
        <h3 className="card-title">SPACE HACK</h3>
        <p className="card-description">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi si</p>
        <button className="button i-button1">MORE</button>
      </div>
    </div>

    </SwiperSlide>
    <SwiperSlide>
    <div className="cardev">
      <img className="card-imageev" src={obser} alt="Card Image" />
      <div className="card-content">
        <h3 className="card-title">SPACE ARTS</h3>
        <p className="card-description">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi si</p>
        <button className="button i-button1">MORE</button>
      </div>
    </div>

    </SwiperSlide>
    <SwiperSlide>
    <div className="cardev">
      <img className="card-imageev" src={bio} alt="Card Image" />
      <div className="card-content">
        <h3 className="card-title">QUIZZ COMPITITION</h3>
        <p className="card-description">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi si</p>
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
