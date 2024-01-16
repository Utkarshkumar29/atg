import { faCalendar, faEnvelope, faEye, faListUl, faLocation, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Job = ({ details }) => {
  return (
    <div className="card">
        <img src={details.image} alt="Card" className="card-img-top" />

        <div className="card-body">

            <div className="d-flex align-items-center mb-3 p-1">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <p className="mb-0">{details.topic}</p>
            </div>

            <div className="d-flex justify-content-between">
                <h5 className="card-title text-lg" style={{ whiteSpace: "wrap" }}>{details.heading}</h5>
                <FontAwesomeIcon icon={faListUl} />
            </div>

            <div className="mb-3">
                <div className="row gx-2">
                    <div className="col-12 col-md-6 mb-2 mb-md-0">
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faCalendar} className="me-2" />
                            <p className="mb-0 text-md">{details.date}</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faLocation} className="me-2" />
                            <p className="mb-0 text-md">{details.location}</p>
                        </div>
                    </div>
                 </div>

                <button className="btn mb-2 border text-primary mt-2" style={{ width: "100%" }}>{details.btn}</button>

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">

                    <div className="d-flex mb-2 mb-md-0">
                        <div className="d-flex align-items-center me-3">
                            <img src={details.photo} alt="User" className="me-2" />
                            <p className="mb-0 text-sm">{details.messageBy}</p>
                        </div>

                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faEye} className="me-1" />
                            <p className="mb-0 text-sm">1.4k Views</p>
                        </div>
                    </div>

                    <FontAwesomeIcon icon={faShareAlt} style={{ backgroundColor: "lightgray" }} className="p-2"/>

                </div>
            </div>
        </div>
    </div>
  );
}

export default Job;
