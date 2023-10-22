import React from 'react'
import './Footer.css'
import sedslogo from '../../img/sedslogo.png'
import facebook from '../../img/facebook (1).png'
import youtube from '../../img/youtube.png'
import insta from '../../img/instagram.png'
import linkedin from '../../img/linkedin (1).png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import footerImage from '../../img/sedslogo.png';


const Footer = () => {
  return (
    /*<div className="background-image2">
    <div className="intro2">
        <div className="follow">
        <span>FOLLOW US</span>
        </div>
    
    <div className="left">
<div className="img4">
        <img src={sedslogo} alt=""/>
       </div>
    </div>

<div className="middle">
<span>sedssabra@gmail.com</span>
<span>Sabaragamuwa University of Sri Lanka,</span>
<span>P.O.Box 02,</span>
<span>Belihuloya 70140,</span>
<span>Sri Lanka.</span>
<span>+94(0)45-2280007</span>
</div>
    <div className="right">
    <div className="name2">
     
     
     
</div>
<div className="f-icon">


<button className="button-f">
      <img className="button-icon" src={facebook} alt="Button Icon" />
    </button>
    <button className="button-f">
      <img className="button-icon" src={insta} alt="Button Icon" />
    </button>
    <button className="button-f">
      <img className="button-icon" src={linkedin} alt="Button Icon" />
    </button>
    <button className="button-f">
      <img className="button-icon" src={youtube} alt="Button Icon" />
    </button>

    </div>
    
</div>

</div>

   </div>*/



   <div className="background-image">

<div>
<Row>
<div className="follow">
        <span>FOLLOW US</span>
        </div>
        <Col xs={12} md={4}>
       
      <center> <img src={footerImage} alt="Footer Image" className="footer-image" /></center> 
        
        </Col>
        
        <Col xs={12} md={4}>
     
      <center>  <h5>sedssabra@gmail.com</h5>
<h5>Sabaragamuwa University of Sri Lanka,</h5>
<h5>P.O.Box 02,</h5>
<h5>Belihuloya 70140,</h5>
<h5>Sri Lanka.</h5>
<h5>+94(0)45-2280007</h5></center>
                 
        </Col>
       
        <Col xs={12} md={4}>
       <center> <div className="f-icon">
        <button className="button-f">
      <img className="button-icon" src={facebook} alt="Button Icon" />
    </button>
    <button className="button-f">
      <img className="button-icon" src={insta} alt="Button Icon" />
    </button>
    <button className="button-f">
      <img className="button-icon" src={linkedin} alt="Button Icon" />
    </button>
    <button className="button-f">
      <img className="button-icon" src={youtube} alt="Button Icon" />
    </button>
        </div></center>
        </Col>
     
      </Row>
 

</div>
</div>
  )
}

export default Footer
