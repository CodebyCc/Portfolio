import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import { motion } from "framer-motion";



const paragraphs = [{id:1,p:"My name is George Boateng ,I am Self-taught Web developer with expertise infrontend development. My fascination with technology is theinspiration behind my constant desire to create beautiful andresponsive UI I am consistently looking for ways to design amazing user interfaces . I am diligent in my creative process and pay close adherence to tiniest of details ,This enables me to create unique experiences for users of my craft. Although I know a little backend my primary focus is on the front end.This and many more is what i livefor"},


{id:2,p:" The web like the world is known for one thing which is change. The only constant in the web is change and with it the possibilities toimplement websites and web applications hence some essential skills required to succeed as a developer is adabptabilty and resilience."},
{id:3,p:"Creating the best possible experience for the client and for the user requires a developer to possess a sense of curiosity to always stay ahead of the curve I am a resourceful teamplayer with experience in software applications Well-versed in problem solving.Skilled at project support with proven history  of solution-oriented problem solving. It is my ambition to actively contribute to growth  of an organisation where my analytic and technical skills could be utilized to its fullest potential."},


{id:4,p:" Javascript libraries like React and modern Static Site Generators like Nextjs allow for the creation of static assets or server side rendering with all the possibilities dynamic web applications have to offer. This entails a range of advantages, especially regarding the performance, the flexibility, the security, the scalability and the      costs of the resulting website."}]



const About = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.main} >
        <h2 className={styles.heading}>About me</h2>
        {paragraphs.map((paragraph)=>{
        return (<motion.p  initial={{ opacity:0 }}
  whileInView={{ opacity:1 }} 
  transition={{type:"tween" , duration:1, delay:0.2}}   
  className={styles.textP}>
          {paragraph.p}</motion.p>) 
      })}
      </div>
      <motion.div  initial={{ opacity:0 }}
  whileInView={{ opacity:1 }} 
  transition={{type:"tween" , duration:1, delay:0.3}} className={styles.container}>
        <Image src="/images/recat.png" height="100px" width="100px" />
        <Image src="/images/next.jss.png" height="100px" width="100px" />
        <Image src="/images/js1.png" height="100px" width="100px" />
        <Image src="/images/tailwindcss.png" height="100px" width="100px" />
        <Image src="/images/netlify.png" height="100px" width="100px" />
        <Image src="/images/firebase.png" height="100px" width="100px" />
      </motion.div>
    </section>
  );
};

export default About;
