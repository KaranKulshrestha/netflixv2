import React, { useState } from 'react';
import "./Login.css";
import SignInScreen from './SignInScreen';

function Login() {
    const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
        <div className="loginScreen__background">
            <img 
            className='loginScreen__logo'
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt="" />
            <button className='loginScreen__button' onClick={() => setSignIn(true)}>
                Sign In
            </button>
            <div className='loginScreen__gradient'/>

            <div className="loginScreen__body">
                {signIn ? (
                    <SignInScreen />
                ) : (
                    <>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen__input">
                        <form>
                            <input type="email" placeholder="Email address"></input>
                            <button className='loginScreen__getstarted' onClick={() => setSignIn(true)}>
                                GET STARTED
                            </button>
                        </form>
                    </div>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Login