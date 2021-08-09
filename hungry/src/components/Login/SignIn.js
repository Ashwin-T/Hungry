import firebase from '../Firebase';
import 'firebase/auth';
import logo from '../Logo.PNG';
import React from 'react';


const SignIn = () => {
    const auth = firebase.auth();

      const SignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }

      return (
        <div className="flexBoxContainer column">
                <img className="logo lock" src = {logo} alt = 'logo'></img>
                <button className="sign-in" onClick={()=>SignInWithGoogle()}>Sign in with Google</button>
        </div>
      )
}
 
export default SignIn;