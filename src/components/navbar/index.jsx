import React, { useState } from "react";
import logo from '../../assets/whole.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import '../../styles/navbar.scss'
import { Modal } from 'react-bootstrap';
import Register from "../register";

const Navbar=()=>{
    const [show, setShow]=useState(false)

    const handleShow=()=>{
        setShow(true)
    }

    const handleClose=()=>{
        setShow(false)
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-3">
            <div className="container-fluid">
                <div className="nav-item">
                    <img src={logo} alt="Logo" style={{maxWidth:'100px',maxHeight:'50px'}} />
                </div>
                <div className="nav-item bg-light p-2 gap-1 rounded-5 hide" style={{maxWidth:"320px",width:"100%"}}>
                    <FontAwesomeIcon icon={faSearch} className="ps-2"/>
                    <input type="text" placeholder="Search for your favorite groups in ATG" className="bg-light border-0" style={{maxWidth: '300px',width: '100%'}}/>
                </div>

                <div className="nav-item gap-1 hide cursor-pointer" onClick={handleShow}>
                    <p className="mb-0">Create Account.</p>
                    <p className="mb-0 me-2 text-primary">It's free!</p>
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>

                <div className="hidden">
                    <FontAwesomeIcon icon={faBars} onClick={handleShow}/>
                </div>
            </div>
            
            {show && (
                <Modal show={show} onHide={handleClose}>    
                    <Register/>
                    <button onClick={handleClose} className="rounded-4 bg-secondary enter"><FontAwesomeIcon icon={faClose}/></button>
                </Modal>
            )}
      </nav>
    )
}

export default Navbar