import React from 'react'
import './Events.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import EveCar from '../EveCaro/EveCar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ss from '../../img/as2.png'


const Division = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
    }, []);
  return (
    <div className="background-image">


        <div className="intro1" id='events'>
          <Row>
            <Col xs={12} md={6}>
            <div className="i-name1">
<h2>Events</h2>
<h2>OF SEDS SABRA</h2>
</div>
<img src={ss} alt="" />
            </Col>
          
            <Col xs={12} md={6}>
            <center><EveCar/> </center>
            </Col>
          </Row>
       




</div>
</div>


 
  )
}

export default Division
