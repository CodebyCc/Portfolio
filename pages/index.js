import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero.jsx";
import Featured from "../components/Featured.jsx";
import About from "../components/About.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>George Boateng</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
