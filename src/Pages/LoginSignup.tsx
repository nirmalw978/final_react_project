import React from "react";
import './CSS/LoginSignup.css'
const LoginSignup = () => {
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='your name'/>
                    <input type="email" placeholder='Your Email Address'/>
                    <input type="password" placeholder='Password'/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account? <span>Logn here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>by continuing , i agree to terms and conditions</p>
                </div>

            </div>
        </div>
    );
}

export default LoginSignup;