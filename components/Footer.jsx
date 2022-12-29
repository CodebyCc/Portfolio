import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';

const d = new Date()
const date = d.getFullYear()

const Footer = () => {
  return (
    <div >
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000533" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
   <div className={styles.container}>
   <div className={styles.iconsContainer}>  
   <Link href="https://www.linkedin.com/in/george-boateng-938a7318a/">
    <a target="_blank"><LinkedInIcon fontSize="large" />
 </a></Link>
 <Link href="https://github.com/CodebyCc">
    <a target="_blank"><GitHubIcon fontSize="large"/>
 </a></Link>
 
 
    </div>
   <h2 className={styles.headingTwo}>{date}  George Boateng <CopyrightIcon/></h2> 
   </div>
  
    
    
    </div>
  );
};

{
  /* <Link href="mailto:ciici6440@gmail.com">
<button className={styles.btnOne}>View Live</button>
</Link> */
}
export default Footer;
