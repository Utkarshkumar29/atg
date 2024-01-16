import React from "react";
import '../../styles/register.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import ATG from "../../assets/atg_illustration.png"
import "../../styles/navbar.scss"

const Register=()=>{
    return(
        <div className="length">
                    <div className="card-body">

                        <p className="card-text register-text p-2">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>

                        <div className="input-container p-2">

                            <div style={{maxWidth:"600px",width:"100%"}}>
                                <h2>Create Account</h2>
                                <div>
                                <input type="text" className="form-control" placeholder="First Name"/>
                                    <input type="text" className="form-control" placeholder="Last Name"/>
                                </div>
                                <input type="email" className="form-control" placeholder="Email Address"/>
                                <input type="password" className="form-control" placeholder="Password"/>
                                <input type="password" className="form-control" placeholder="Confirm Password"/>
                                <button className="btn btn-primary mb-3 w-100 mt-2">Create Account</button>
                                <div className="mb-3">
                                    <p className="border p-1 rounded-4 align-items-center d-flex gap-2 justify-content-center"><FontAwesomeIcon icon={faFacebook}/> Sign Up with Facebook</p>
                                    <p className="border p-1 rounded-4 align-items-center d-flex gap-2 justify-content-center"><FontAwesomeIcon icon={faGoogle}/> Sign Up with Google</p>
                                </div>
                            </div>

                            <div className="">
                                <div className="d-flex ">
                                <p>Already have an account? </p>
                                <p className="text-primary">Sign In</p>
                                </div>
                                <p className="atg"><img src={ATG} className="img-fluid" alt="Error"/></p>
                                <p className="atg">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                            </div>

                        </div>

                    </div>
                </div>
    )
}

export default Register