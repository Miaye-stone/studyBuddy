import styles from './Hero.module.css';
import studyBuddyLogo from '../../assets/studyBuddyLogo.png';
import focusicon from '../../assets/focusicon.png';
import cleanicon from '../../assets/cleanicon.png';
import taskicon from '../../assets/taskicon.png';
import { Link } from 'react-router-dom';

function Hero(props) {
    return (
            <section className={styles.container}>

                {/* Left side of the page */}
                <section className={styles.left}>
                    {/* logo */}
                    <img src={studyBuddyLogo} alt="StudyBuddy" className={styles.logo} />

                    {/* Form */}
                   <div className={styles.formContainer}>
                        <h2 className={styles.formTitle}>{props.pageName}</h2>
                        <form onSubmit={props.onSubmit} className={styles.formdetails}>
                            <div className={styles.sect}>
                                <label>Email</label>
                                <input type="text" placeholder="email address" id="email" name="email" value={props.email} onChange={(e) => props.setEmail(e.target.value)} required /> 
                            </div>
                            
                            <div className={styles.sect}>
                                <label>Password</label>
                                <input type= "password" id="password" name="password" placeholder="password" value={props.password} onChange ={(e) => props.setPassword(e.target.value)} required />
                            </div>

                            <button type="submit" className={styles.btn} >{props.pageName}</button>
                            {/* error message */}
                            {props.error && <p className={styles.error}>{props.error}</p>}

                            {props.show && 
                               ( <a href="" className={styles.forgot} >Forgot Password?</a>)
                               }
                        </form>    
                    </div>

                    {/* Bottom section */}
                    <div className={styles.state}>
                        <p>{props.accountstate}</p>
                        <Link to={props.linkPath} className={styles.path}>{props.linkText}</Link>
                    </div>
 
                </section>
                
                {/* Right side of the page */}
                 <section className={styles.right}>
                    <h1>Focus better. Learn faster. Stay consistent.</h1>
                    <p>StudyBuddy helps you master your focus using smart Pomodoro sessions, task tracking, and productivity insights — all in one simple, beautiful interface.</p>

                    <div className={styles.capsules}>
                        <ul>
                            <li><img src={focusicon} />Focus + break timers</li>
                            <li><img src={cleanicon} />Clean, distraction-free design</li>
                            <li><img src={taskicon} />Task management for every subject</li>
                        </ul>
                    </div>
                </section>
                
            </section>
    );
};

export default Hero
