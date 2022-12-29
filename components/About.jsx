import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import { motion } from "framer-motion";







const About = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.main} >
        <h2 className={styles.heading}>About me</h2>
        <motion.p    initial={{ x: -100 }}
  whileInView={{ x: 0 }} 
  transition={{type:"tween" , duration:1}}
  className={styles.textP}>
          My name is George Boateng ,I am Self-taught Web developer with expertise in
          frontend development. My fascination with technology is the
          inspiration behind my constant desire to create beautiful and
          responsive UI I am consistently looking for ways to design amazing
          user interfaces . I am diligent in my creative process and pay close
          adherence to tiniest of details ,This enables me to create unique
          experiences for users of my craft. Although I know a little backend my
          primary focus is on the front end.This and many more is what i live
          for
        </motion.p>
        <motion.p  initial={{ x: -100 }}
  whileInView={{ x: 0 }} 
  transition={{ type:"tween" ,duration :1, delay:0.2}}   className={styles.textP}>
          The web like the world is known for one thing which is change. The
          only constant in the web is change and with it the possibilities to
          implement websites and web applications hence some essential skills required to succeed as a developer is adabptabilty and resilience.
        </motion.p>
     
       <p  
className={styles.textP}    > Creating the best possible
          experience for the client and for the user requires a developer to possess a sense of curiosity to always stay ahead of the curve
          I am a resourceful teamplayer with experience in software applications
   Well-versed in problem solving.Skilled at project support with proven history 
   of solution-oriented problem solving. It is my ambition to actively contribute to growth 
   of an organisation where my analytic and technical skills could be utilized to its fullest potential.

        </p>  

        <p className={styles.textP}>
          Javascript libraries like React and modern Static Site Generators like
          Nextjs allow for the creation of static assets or server side
          rendering with all the possibilities dynamic web applications have to 
          offer. Th
          t entails a range of advantages, especially regarding the
          performance, the flexibility, the security, the scalability and the
          costs of the resulting website.
        </p>
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
