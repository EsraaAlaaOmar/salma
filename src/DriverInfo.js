import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {FaDotCircle } from 'react-icons/fa'
import {ImLocation2, } from 'react-icons/im'
import {BsThreeDotsVertical } from 'react-icons/bs'
import InfoBox from './InfoBox'
import Navbar from './Reusable/Navbar'
const DriverInfo = () => {
  return (
    <div className='driver-info'>
        <Navbar />
         <div className='main-info'>
             <span> Name : </span> Mohamed hassan<br/>
             <span> ID : </span> 351  <br/>
             <span> Bus Number : </span> 3501<br/>
              <div className='direction'><span><FaDotCircle /></span> Helwan &nbsp;  <br/>
             <span> <BsThreeDotsVertical/></span>
              <br/>
               <span> <ImLocation2 /> </span> &nbsp;6 Octobar</div>

            

         </div>

         <Row>
            <Col md={6}>
              <InfoBox title={'Safe Distance'} img={'/imgs/distance.jpg'}  />
            </Col>
            <Col md={6}>
              <InfoBox title={'Lane Detection'} img={'/imgs/lane.jpg'}  />
            </Col>
            <Col md={6}>
              <InfoBox title={'Drowsy Driving'} img={'/imgs/lane.jpg'} error={'no data come from server' } drowsy={true} />
            </Col>
            <Col md={6}>
              <InfoBox title={'GPS Tracking'} img={'/imgs/gps.jpeg'} location={true}   />
            </Col>
         </Row>
       
    </div>
  )
}

export default DriverInfo