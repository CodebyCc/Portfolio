"use client";
import React from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import projects from "../lib/projects";

import Link from "next/link";

const Featured = () => {
  return (
    <div id="projects">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "tween", duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className={styles.headingOne}
      >
        Projects
      </motion.h2>
      <motion.h3
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ type: "tween", duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className={styles.headingTwo}
      >
        The projects listed are a collection of personal and client projects to
        exhibit the qualities and skills i posses.
      </motion.h3>
      {projects.map((project) => {
        return (
          <div key={project.id} className={styles.container}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "tween", duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className={styles.infoContainer}
            >
              <h2 className={styles.ProjectHeading}>{project.ProjectName}</h2>
              <p className={styles.text}>{project.info}</p>
              <Link target="_blank" href={project.link}>
                <button className={styles.btnOne}>View Live</button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ type: "tween", duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className={styles.imgContainer}
            >
              <Image
                src={project.img}
                className={` object-contain`}
                alt="Screenshots of Projects"
                height={550}
                width={400}
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Featured;
