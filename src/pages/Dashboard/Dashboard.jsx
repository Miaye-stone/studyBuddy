import styles from "./Dashboard.module.css"
import studyBuddyLogo from '../../assets/studyBuddyLogo.png';
import {Link} from "react-router-dom";

function Dashboard() {
  return(
    <div className={styles.container}>
    <img src={studyBuddyLogo} />
    <h1>Coming Soon</h1>
    <p>Still working on this and would update soon</p>
    <Link to="/">Go back to Sign up</Link>
  </div>
  );
  
}

export default Dashboard;
