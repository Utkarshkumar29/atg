import React from "react";
import Navbar from "../../components/navbar";
import ImageView from "../../views/imageView";
import PostView from "../../views/postView";

const HomePage=()=>{
    return(
        <div>
            <Navbar/>
            <ImageView/>
            <PostView/>
        </div>
    )
}

export default HomePage