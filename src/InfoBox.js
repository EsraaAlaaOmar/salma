import React, { useState } from 'react'
import {ImLocation2} from 'react-icons/im'
const InfoBox = ({title,img,error, location,drowsy}) => {
  const [link,setLink] = useState(null)
  return (
    <div className="property">
        <div className="square">
            <div className="circle">
                <div className="title">{title}</div>
            </div>

           { drowsy?
           <iframe style={{width: '100%', height: '100%'}} src={link} ></iframe>
           :
           
           <img src={img} />}
           {location?
           <div className="location"> <ImLocation2 /> Maadi </div> 
           :
            
           drowsy?<input value={link} onChange={(e)=>{setLink(e.target.value)}} />
           
           :<div className="error-dev"> {error ? <div className="error" /> : <div className="no-errors">No Errors Found</div> }</div>}


              
        </div>

    </div>
  )
}

export default InfoBox