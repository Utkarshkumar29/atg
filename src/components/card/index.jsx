import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faListUl, faShareAlt } from "@fortawesome/free-solid-svg-icons";

const Card=({details})=>{
  return (
    <div className="card">
        
        <img src={details.image} alt="Card" className="card-img-top"/>
        
        <div className="card-body">

            <div className="d-flex align-items-center p-1">
                <FontAwesomeIcon icon={faEnvelope} className="me-2"/>
                <p className="card-title mb-0">{details.topic}</p>
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title pe-3">{details.heading}</h5>
                <FontAwesomeIcon icon={faListUl}/>
            </div>

            <p className="card-text">{details.message}</p>

            <div className="d-flex justify-content-between">

                <div className="d-flex align-items-center">
                    <img src={details.photo} alt="User" className="me-2" />
                    <p className="mb-0 fw-bold">{details.messageBy}</p>
                </div>

                <div className="d-flex align-items-center">
                    <div className="d-flex me-3 bg-gray-300">
                        <FontAwesomeIcon icon={faEye} className="me-1 bg-gray-900 p-1"/>
                        <p className="mb-0">1.4k Views</p>
                    </div>
                    <FontAwesomeIcon icon={faShareAlt} style={{backgroundColor:"lightgray"}} className="p-2"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
