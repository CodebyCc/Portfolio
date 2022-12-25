import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>
        <span className={styles.head}>Hello,</span> My name is George
      </h1>
      <h2 className={styles.headingTwo}>
        <span className={styles.headTwo}>I am a</span> Web Developer
      </h2>
    </main>
  );
};

export default Hero;
