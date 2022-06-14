import React from 'react'
import {ImLocation2} from 'react-icons/im'
const InfoBox = ({title,img,error, location}) => {
  return (
    <div className="property">
        <div className="square">
            <div className="circle">
                <div className="title">{title}</div>
            </div>

            <img src={img} />
           {location?
           <div className="location"> <ImLocation2 /> Maadi </div> 
           :
            
            <div className="error-dev"> {error ? <div className="error" /> : <div className="no-errors">No Errors Found</div> }</div>}


              
        </div>

    </div>
  )
}

export default InfoBox