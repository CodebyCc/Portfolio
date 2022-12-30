import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import { motion } from "framer-motion";



const paragraphs = [{id:1,p:"My name is George Boateng ,I am Self-taught Web developer with expertise infrontend development. My fascination with technology is the inspiration behind my constant desire to create beautiful andresponsive UI I am consistently looking for ways to design amazing user interfaces . I am diligent in my creative process and pay close adherence to tiniest of details ,This enables me to create unique experiences for users of my craft."},



{id:2,p:" I have a strong foundation in HTML, CSS, and JavaScript. I am proficient in responsive design and have experience using frameworks such as Bootstrap and React. I am a quick learner and always eager to expand my skills and knowledge in the field. I have a passion for creating visually appealing and user-friendly websites, and I am committed to delivering high-quality work on time. I am a team player and enjoy collaborating with designers and back end developers to bring projects to life. I am excited to continue growing my career as a front end developer and to tackle new challenges"},

{id:3,p:" The web like the world is known for one thing which is change. The only constant in the web is change and with it the possibilities to implement websites and web applications hence some essential skills required to succeed as a developer is adabptabilty and resilience."},
{id:4,p:" Javascript libraries like React and modern Static Site Generators like Nextjs allow for the creation of static assets or server side rendering with all the possibilities dynamic web applications have to offer. This entails a range of advantages, especially regarding the performance, the flexibility, the security, the scalability and the costs of the resulting website."}]



const About = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.main} >
        <h2 className={styles.heading}>About me</h2>
        {paragraphs.map((paragraph)=>{
        return (<motion.p  initial={{ opacity:0 }}
  whileInView={{ opacity:1 }} 
  transition={{type:"tween" , duration:0.8, delay:0.1}} 
  className={styles.textP}>
          {paragraph.p}
          </motion.p>) 
      })}
      </div>
      <motion.div  initial={{ opacity:0 }}
  whileInView={{ opacity:1 }} 
  transition={{type:"tween" , duration:0.8, delay:0.3}} className={styles.container}>
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
