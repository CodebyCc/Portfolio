"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";
import EmailIcon from "@mui/icons-material/Email";
// import WhatsappIcon from "@mui/icons-material";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

const d = new Date();
const date = d.getFullYear();

const Footer = () => {
  return (
    <div id="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000533"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className={styles.container}>
        <div className={styles.iconsContainer}>
          <Link href="https://wa.me/233240265090" target="_blank">
            {/* <WhatsappIcon fontSize="large" /> */}
            <FaWhatsapp className="text-4xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/george-boateng-938a7318a/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link href="https://github.com/CodebyCc">
            <GitHubIcon fontSize="large" />
          </Link>
          <Link href="mailto:georgeboateng1125@gmail.com">
            <EmailIcon fontSize="large" />
          </Link>
        </div>
        <div className="flex justify-center items-center text-gray-300 text-md font-semibold mb-2">
          <FaPhoneFlip className="mr-2" />
          <p>233240265090 / 233205854145</p>
        </div>
        <h2 className=" text-center  text-gray-300 text-md  ">
          <CopyrightIcon /> {date} George Boateng
        </h2>
      </div>
    </div>
  );
};

{
}
export default Footer;
