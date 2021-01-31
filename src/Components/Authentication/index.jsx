import React, { useRef } from "react"

import { useAuth } from "../../Contexts/Authentication"

import googleIcon from "../../Assets/Images/GoogleIcon.png"
import twitterIcon from "../../Assets/Images/TwitterIcon.png"
import facebookIcon from "../../Assets/Images/FacebookIcon.png"

export const SignIn = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const { signInWithEmailAndPassword, signInWithGoogle, signInWithTwitter, signInWithFacebook } = useAuth()

  const signInSubmit = () => {
    return signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <div className="signin">
      <form className="email-password-signin" onSubmit={signInSubmit}>
        <input className="signin-input" placeholder="Email" type="email" ref={emailRef} required/>
        <input className="signin-input" placeholder="Password" type="password" ref={passwordRef} required/>
        
        <button className="signin-submit" type="submit">Sign In</button>
      </form>

      <img src={googleIcon} alt="Log in with Google" className="btn-social-signin" onClick={signInWithGoogle} />
      <img src={twitterIcon} alt="Log in with Twitter" className="btn-social-signin" onClick={signInWithTwitter} />
      <img src={facebookIcon} alt="Log in with Facebook" className="btn-social-signin" onClick={signInWithFacebook} />

      <p className="signin-result" />
    </div>
  )
}

export const SignOut = () => {
  const { signOut } = useAuth()

  return (
    <button className="btn-sign-out" onClick={signOut}>Sign Out</button>
  )
}