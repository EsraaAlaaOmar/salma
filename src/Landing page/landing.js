import React from 'react'
import { FiMonitor, FiUser} from 'react-icons/fi';
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import { Col, Row } from 'react-bootstrap'
import ShowMoreText from 'react-show-more-text'
import Navbar from '../Reusable/Navbar';
import { Link } from 'react-router-dom';
const landing = () => {
  return (
    <>
  
      <div className="img">
          <div className="over-lay"> 
          <Navbar />
           <div className='text-button'>
               <div>
                  TARS Keep you Safe
               </div>
               <div className='text'>Warning , Tracking  and Monitoring for  Keeping  you Safe</div>
              <Link to='/info'> <button>See Driver Data</button></Link> 
            
           </div>

          </div>

      </div>
      <div className='second-row'>
          <Row>
           
              <Col sm={6}>
                  <div className='text'>
                  <h5>Transportation Accidents Reducing System</h5>
                  <ShowMoreText
                                      /* Default options */
                                      lines={10}
                                      more="Show more"
                                      less="Show less"
                                      className="content-css"
                                      anchorClass="my-anchor-css-class"
                                      // onClick={this.executeOnClick}
                                      expanded={false}
                                      
                                      truncatedEndingComponent={"... "}
                                  >
                                         Accident reducing system includes all precautions that are taken to save lives, protect from injuries, decrease road accidents so that we can decrease the death rate. Every year thousands of people lose their lives to road accidents.
                                       There are many reasons that cause transportation’s accidents. So, we want to decrease road accidents using our system features. This will be achieved by controlling the whole system. Human errors like taking drugs, drinking alcohol, sleeping, lack of concentration during driving do not have any limitations, so we tend to solve it by adding a camera inside the bus to detect the driver’s facial expressions. If the driver has any facial reaction indicating that he is in an up normal situation, an emergency message will be sent to this site that is controlling and responsible for the transportation system. The bus will also have outside camera to detect traffic lights, lanes to avoid any deviation, different signs, in addition to sensors to detect distances between the bus and any other vehicle to get the driver’s attention using a warning message appears on LCD in front of him, also an alarm will start to ring to force him to focus on the warning on the LCD inside the bus. The bus will also have a GPS tracking system that tracks the vehicle and sends the location here, by using this website that receives the data from the bus and if there are any emergency messages, control room must take a decision.
                               </ShowMoreText> 
             
                  </div>
              </Col>
              <Col sm={6}>
                  <img src='/imgs/bus.png' />

              
              </Col>
            
          </Row>
      </div>
      <div className="third-row">
           <Row>
            <Col>
              <div>
                <div className="icon"><span><FiUser /></span></div>

                Increase reliability
               
                <p>Reliability is about how close repeated measurements are to each other. You can consider the most common reasons of road accidents </p>
              </div>
            
            </Col>
            <Col>
              <div>
                <div className="icon"><span><AiOutlineSafetyCertificate /></span></div>

                Safety
               
                <p>Road safety pertains to the measures taken to reduce accidents , traffic injuries and death so main target of TARS increasing safety</p>

              </div>
            
            </Col>
            <Col>
              <div>
                <div className="icon"><span><FiMonitor /></span></div>

                Monitoring
                <p>by using website that receives the data from the bus and if there are any emergency messages, control room must take a decision</p>

              </div>
            
            </Col>
            </Row>
      </div>
      <div className="fourth-row">
        <Row>
          <Col>
            <div className='div'>
                  <div className='text'>
                  Our goal is a safe country from road accidents
                  </div>
            </div>
          </Col>
          <Col>
            <div className='image'>
              <img src="/imgs/map.jpg" />

            </div>
          </Col>
        </Row>

      </div>
    
    </>
  )
}

export default landing