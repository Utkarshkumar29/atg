import React from "react";
import img from '../../assets/Rectangle 2.png';
import "../../styles/imageView.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ImageView = () => {
    return (
        <div className="container-fluid p-0" style={{minHeight:"100px",height:"100%"}}>
            <div className="position-relative">
                <img src={img} alt="Error" className="image-size img-fuild resize"/>
                <div className="position-absolute bottom-0 start-0 text-white mx-3 mb-4">
                    <p className="text-lg text-md-sm text-sm m-0" style={{ fontSize: "2rem", fontWeight: "bold" }}>Computer Engineering</p>
                    <p className="mb-0">142,765 Computer Engineers follow this</p>
                </div>

                <div className="icon position-absolute top-0 d-flex justify-content-between text-white align-items-center p-2" style={{width:"100%"}}>
                  <FontAwesomeIcon icon={faArrowLeft} className="icon"/>
                  <button className="bg-transparent text-white border-white icon">Join Group</button>
                </div>
            </div>
        </div>
    );
};

export default ImageView;
