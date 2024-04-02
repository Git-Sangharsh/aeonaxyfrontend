import React from 'react'
import './Signup.css';
// import signupUi from '../assets/signup-up.jpg';
import signupUi from '../assets/dribble-img.png';
const Signup = () => {
  return (
    <div className='signup-container'>
        <div className="signup-container-left">
            <h1 className="signup-container-left-headers">Discover the world's top <br ></br>
            Designers & Creatives.</h1>
            <img className='singup-ui' src={signupUi} alt="" />
        </div>
        <div className="signup-container-right">
            <h4 className="signup-container-right-header">Aleready a member? <span className='sign-in-color'>Sign In</span> </h4>
            <div className="signup-container-right-wrapper">
                <div className="signup-container-right-inner-wrapper">
                <h1 className="signup-container-right-inner-wrapper-header" >Sign up to Dribble</h1>
                    <div className="input-row">
                        <div className="input-row-input">
                            <h2>Name</h2>
                            <input type="text" placeholder='Name'/>
                        </div>
                        <div className="input-row-input">
                            <h2>Username</h2>
                            <input type="text" placeholder='username'/>
                        </div>

                    </div>
                    <div className="input-row-input">
                            <h2>Email</h2>
                            <input type="text" placeholder='email' />
                    </div>
                    <div className="input-row-input">
                            <h2>Password</h2>
                            <input type="text" placeholder='6+ characters' />
                            <div className="checkbox">
                                <input type="checkbox" className='input-checkbox' />
                                <p className='p'>Creating an account means you're okay with our Terms of <br></br>
                                <span className='sign-in-color'> Service. Privacy Policy. </span> and our default <span className='sign-in-color' > Notification Settings</span></p>
                            </div>
                    </div>
                    <button className="create-account">
                        Create Account
                    </button>
                    <p className='p'>This site is protected by reCAPTCHA and the Google <br></br>
                            <span className='sign-in-color'>Privacy Policy </span> and <span className='sign-in-color' > Terms of Service</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup