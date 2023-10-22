import React from 'react'
import './Division.css'
import DivCar from '../DivCaro/DivCar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sm from '../../img/as1.png'


const Division = () => {


  return (
   <div className="background-image">
        
  <div id ="division"> 
<Row>

        <Col xs={12} md={6}>
       
        <div className="i-name1">
<h2>DIVISIONS</h2>
<h2>OF SEDS SABRA</h2>
</div>
<img src={sm} alt="" />
</Col>
        
        <Col xs={12} md={6}>
     
        <center><DivCar/> </center>
                 
        </Col>
           
      </Row>
 
</div>

</div>



      

    
       
       
      

   
  )
}

export default Division
