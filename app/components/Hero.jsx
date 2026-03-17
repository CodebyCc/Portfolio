import React from "react";
import styles from "../styles/Hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="bg-black h-screen  mx-auto  text-center  text-white">
      <h1 className={styles.heading}>
        <span className={styles.head}>Hello ,</span> I'm George Boateng
      </h1>
      <h2 className={styles.headingTwo}>
        <span className={styles.headTwo}>A Seasoned Software Engineer.</span>
      </h2>
    </main>
  );
};

export default Hero;
