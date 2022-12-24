import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.main}>
        <h2 className={styles.heading}>About me</h2>
        <p className={styles.textP}>
          My name is George Boateng ,I am Web developer with expertise in
          frontend development. My fascination with technology is the
          inspiration behind my constant desire to create beautiful and
          responsive UI I am consistently looking for ways to design amazing
          user interfaces . I am diligent in my creative process and pay close
          adherence to tiniest of details ,This enables me to create unique
          experiences for users of my craft. Although I know a little backend my
          primary focus is on the front end.This and many more is what i live
          for
        </p>
        <h2 className={styles.heading}>Technologies I Use</h2>
        <p className={styles.textP}>
          The web like the world is known for one thing which is change. The
          only constant in the web is change and with it the possibilities to
          implement websites and web applications. Following the modern
          JAMSTACK-philosophy and using tools like Static Site Generators,
          Headless CMS and a serverless architecture make it possible to create
          modern, state of the art web experiences.
        </p>

        <p className={styles.textP}>
          Until recently, creating dynamic websites with tools like Wordpress
          was common practice. Compared to modern technologies though, today
          this approach seems inflexible and clunky, especially regarding the
          performance of the resulting website.
        </p>
        <p className={styles.textP}>
          Javascript libraries like React and modern Static Site Generators like
          Nextjs allow for the creation of static assets or server side
          rendering with all the possibilities dynamic web applications have to
          offer. So you'll get the best of both worlds
        </p>
        <p className={styles.textP}>
          That entails a range of advantages, especially regarding the
          performance, the flexibility, the security, the scalability and the
          costs of the resulting website. All while content creators - through
          the integration of a Headless CMS like Contentul- have the
          possibility, to flexibly adjust all of the content based on their
          requirements. Building truly native cross-platform mobile applications
          has also never been easier with React-Native, now with a single code
          base, mobile applications can run on both IOS and Android platforms
          And that's what it's all about in the end: Creating the best possible
          experience for the client and for the user.
        </p>
      </div>
      <div className={styles.container}>
        <Image src="/images/recat.png" height="100px" width="100px" />
        <Image src="/images/next.jss.png" height="100px" width="100px" />
        <Image src="/images/js1.png" height="100px" width="100px" />
        <Image src="/images/tailwindcss.png" height="100px" width="100px" />
        <Image src="/images/netlify.png" height="100px" width="100px" />
        <Image src="/images/firebase.png" height="100px" width="100px" />
      </div>
    </section>
  );
};

export default About;
