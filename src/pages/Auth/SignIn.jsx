import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import styles from "./Auth.module.css"


function SignIn() {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault()

    const savedUser = JSON.parse(localStorage.getItem("studyBuddyUser"))

    if (!savedUser) {
      setError("No user found.Please Sign Up First")
    }
    if(email === savedUser && password ===savedUser) {
      Navigate("/dashboard");
    }else {
      setError("Incorrect email or password")
    }
  }
    return (
      <Hero 
      pageName="Sign in" 
      linkPath="/" 
      linkText="Sign up" 
      show={true} 
      accountstate="Don't have an account?"
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleSignIn}
      error={error}
       />      
    );
};

export default SignIn