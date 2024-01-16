import { faCaretDown, faCircleExclamation, faLocation, faPen, faPencil, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Card from "../../components/card";
import Job from "../../components/job";
import img1 from "../../assets/Rectangle 5.png"
import img2 from "../../assets/Rectangle 5 (1).png"
import img3 from "../../assets/Rectangle 5 (2).png"
import img4 from "../../assets/Rectangle 3 (1).png"
import img5 from "../../assets/Rectangle 3 (2).png"
import img6 from "../../assets/Rectangle 3 (3).png"
import img7 from "../../assets/Rectangle 3 (4).png"
import img8 from "../../assets/Screenshot .png"
import '../../styles/postView.scss'

const PostView=()=>{
    const [clickedBox, setClickedBox] = useState('item1')

    const handleBoxClick = (box) => {
        setClickedBox(box === clickedBox ? null : box)
    }

    const data1={
        image:img1,
        icon:"PenToSquare",
        topic:"Article",
        heading:"What if famous brands had regular fonts? Meet RegulaBrands!",
        message:"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        messageBy:"Sarthak Kamra",
        photo:img4
        
    }

    const data2={
        image:img2,
        icon:"faMicroscope",
        topic:"Education",
        heading:"Tax Benefits for Investment under National Pension Scheme launched by Government",
        message:"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        messageBy:"Sarah West",
        photo:img5
    }

    const job1={
        image:img3,
        icon:"faCalendar",
        topic:"Meetup",
        heading:"Finance & Investment Elite Social Mixer @Lujiazui",
        date:"Fri, 12 Oct, 2018",
        location:"Ahmedabad, India",
        messageBy:"Ronal Jones",
        photo:img6,
        btn:"Visit Website"
    }

    const job2={
        image:img2,
        icon:"faCalendar",
        topic:"Meetup",
        heading:"Software Developer",
        date:"Innovaccer Analytics Private Ltd.",
        location:"Noida, India",
        messageBy:"Joseph Gray",
        photo:img7,
        btn:"Apply on Timesjobs"
    }
    
    return(
        <div className="d-flex flex-column justify-content-center align-items-center p-3" style={{maxWidth:"2600px",width:"100%"}}>
            
            <div className="post-container line" style={{maxWidth:"1100px",width:"100%"}}>

                <div className="items-container pt-3"> 
                <p className={clickedBox === 'item1' ? 'clicked' : ''} onClick={() => handleBoxClick('item1')}>All Posts(32)</p>
                <p className={clickedBox === 'item2' ? 'clicked' : ''} onClick={() => handleBoxClick('item2')}>Article</p>
                <p className={clickedBox === 'item3' ? 'clicked' : ''} onClick={() => handleBoxClick('item3')}>Event</p>
                <p className={clickedBox === 'item4' ? 'clicked' : ''} onClick={() => handleBoxClick('item4')}>Education</p>
                <p className={clickedBox === 'item5' ? 'clicked' : ''} onClick={() => handleBoxClick('item5')}>Job</p>
                </div>

                <div className="d-flex flex-row gap-4">

                    <div className="d-flex flex-row align-items-center justify-content-center p-1 bg-light rounded-2">
                        <p className="mb-0 me-1 bg-light">Write a Post</p>
                        <FontAwesomeIcon icon={faCaretDown}/>
                    </div>

                    <div className="d-flex flex-row bg-primary align-items-center justify-content-center p-2 text-light rounded-2 mb-1">
                        <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                        <p className="mb-0">Join Group</p>
                    </div>

                </div>
                
            </div>

            <div className="dropdown">
                <p className="pt-2">Posts(368)</p>
                <select className="">Filter
                    <option>Filter All</option>
                    <option>Filter ALL</option>
                    <option>Filter ALL</option>
                    <option>Filter ALL</option>
                </select>
            </div>

            <div className="wrapper">
                <FontAwesomeIcon icon={faPen}/>
            </div>

            <div className="card-container mt-5" style={{gap:"50px"}}>
                
                <div className="d-flex flex-column gap-2">
                    <Card details={data1}/>
                    <Card details={data2}/>
                    <Job details={job1}/>
                    <Job details={job2}/>
                </div>

                <div>
                    
                    <div className="d-flex gap-5 justify-content-between line">
                        <div className="d-flex gap-1">
                            <FontAwesomeIcon icon={faLocation} className="pt-1"/>
                            <p>Noida, India</p>
                        </div>
                        <FontAwesomeIcon icon={faPencil}/>
                    </div>  

                    <div className="d-flex gap-1 mt-3">
                        <FontAwesomeIcon icon={faCircleExclamation} className="pt-1"/>
                        <p style={{maxWidth:"200px",fontSize:"15px"}}>Your location will help us serve better and extend a personalised experience.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PostView
