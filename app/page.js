import Head from "next/head";
import Image from "next/image";
import Hero from "./components/Hero.jsx";
import Featured from "./components/Featured.jsx";
import AboutMe from "./components/AboutMe.js";

export default async function Home() {
  return (
    <div className="">
      <Hero />
      <AboutMe />
      <Featured />
    </div>
  );
}

// </Head>
//     <Hero />
//          <About />
//          <Featured />
//          <Footer />

// const slidesProject = [
//   {
//     id: 3,
//     title: "Minimalistic Contemporary Homes",
//     // image: "/../../public/black-style.webp",
//     image: small,
//     link: "/projects/#home3",
//   },
//   {
//     id: 1,
//     title: "Modern Luxe Homes",
//     image: luxe1,
//     // image: "/../../public/black-style.webp",
//     link: "/projects/#home1",
//   },
//   {
//     id: 2,
//     title: "Innovative Elegant Designs",
//     image: elegant,

//     link: "/projects/#home2",
//   },
// ];

// function ProjectFullCarousel() {
//   return (
//     <div className="grid grid-cols-3 mt-4">
//       <div className="hidden md:flex justify-center items-center rounded-4xl ">
//         <FullVhCarousel slides={slidesProject} />
//       </div>
//       <div className="hidden md:flex justify-center items-center ">
//         <FullVhCarousel slides={slidesProject} />
//       </div>
//       <div className="hidden md:flex justify-center items-center ">
//         <FullVhCarousel slides={slidesProject} />
//       </div>
//     </div>
//   );
// }

// export default ProjectFullCarousel;
