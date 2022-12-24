import React from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Featured = () => {
  const projects = [
    {
      id: 1,
      ProjectName: "Conni-Avoi",
      info: "Conni-avoi is a leather company that deals in the manufacturing and sale of leather products such as Slides, Bags and Sandals",
      img: "/images/cony.png",
      link: "https://conniavoidemo.netlify.app",
      gitLink: "https://github.com/CodebyCc/conni-avoi-demo",
    },
    {
      id: 2,
      ProjectName: "CWHS",
      info: "CWHS is web hosting service for developers ",
      img: "/images/cwhs.png",
      link: "https://cwhs.netlify.app/",
      gitLink: "https://github.com/CodebyCc/CWHS",
    },
    {
      id: 3,
      ProjectName: "Pizza Delivery App",
      info: "This is the official webpage for imaginary pizza in Ghana",
      img: "/images/pizzain.png",
      link: "https://pizzain.netlify.app",
      gitLink: "https://github.com/CodebyCc/to-do-list",
    },
    {
      id: 4,
      ProjectName: "To-Do App",
      info: "This app enables users to list their personal goals for the day , week , month etc. The app gives users the ability to be productive in the sense ,they can keep track off accomplished tasks by deleting it .  ",
      img: "/images/Todoapp.png",
      link: "https://georgebtodolist.netlify.app",
      gitLink: "https://github.com/CodebyCc/to-do-list",
    },

    {
      id: 5,
      ProjectName: "Netflix Clone",
      info: "This is a clone of netflix,Paid streaming service for movies, documentaries and a lots of exiciting stuffs .  ",
      img: "/images/netflix.png",
      link: "https://netflixclonec.netlify.app/",
      gitLink: "https://github.com/CodebyCc/to-do-list",
    },
  ];
  return (
    <div>
      <h2 className={styles.headingOne}>Projects</h2>
      <h3 className={styles.headingTwo}>
        The projects listed are a collection of personal and client projects to
        exhibit the qualities and skills i posses.
      </h3>
      {projects.map((project) => {
        return (
          <div key={project.id} className={styles.container}>
            <div className={styles.infoContainer}>
              <h2 className={styles.ProjectHeading}>{project.ProjectName}</h2>
              <p className={styles.text}>{project.info}</p>
              <Link href={project.link}>
                <a target="_blank">
                  <button className={styles.btnOne}>View Live</button>
                </a>
              </Link>

              <Link href={project.gitLink}>
                <a target="_blank">
                  <span className={styles.gitContainer}> Source Code</span>
                </a>
              </Link>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={project.img}
                className={styles.img}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Featured;
