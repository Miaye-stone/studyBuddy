import { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import styles from "./Auth.module.css"



function Signup() {
    // declaring and seting useState variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // prevents the page from resetting
    const handleSignup = (e) => {
      e.preventDefault()
      // our data for the localStorage
      const userData = {
        email,
        password,
     }
      //Sets the Items into the localStorag and uses key studybuddyUser to string through the Json file
      localStorage.setItem("studyBuddyUser", JSON.stringify(userData));
      alert("Account Created!");
    }

    return (
      <Hero 
      pageName="Sign up" 
      linkPath="/signin" 
      linkText="Sign in" 
      show={false} 
      accountstate="Have an account?"   
      onSubmit={handleSignup} 
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}

      />
    );
}

export default Signup