/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import foto1 from "./photos/1.jpg";
import foto2 from "./photos/2.jpg";
import foto3 from "./photos/3.jpg";
import foto4 from "./photos/4.jpg";
import foto5 from "./photos/5.jpg";
import foto6 from "./photos/6.jpg";
import foto7 from "./photos/7.jpg";
import foto8 from "./photos/8.jpg";
import foto9 from "./photos/9.jpg";
import foto10 from "./photos/10.jpg";
import foto11 from "./photos/11.jpg";
import foto12 from "./photos/12.jpg";
import foto13 from "./photos/13.jpg";
import foto14 from "./photos/14.jpg";
import foto15 from "./photos/15.jpg";
import foto16 from "./photos/16.jpg";
import foto17 from "./photos/17.jpg";
import foto18 from "./photos/18.jpg";
import foto19 from "./photos/19.jpg";
import htmlLogo from "../assets/png/html.png";
import cssLogo from "../assets/png/css.png";
import jsLogo from "../assets/png/js.png";
import reactLogo from "../assets/png/react.png";
import tailwindLogo from "../assets/png/tailwind.png";
import wordpressLogo from "../assets/png/wordpress.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function List() {
  const [colorChange, setColorChange] = useState({ list1: false });

  useEffect(() => {
    const timer1 = setTimeout(
      () => setColorChange((prev) => ({ ...prev, list1: true })),
      3000
    );

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  function Animasi({ children }: { children: React.ReactNode }) {
    const animasi = useRef(null);
    const isInView = useInView(animasi, { once: true });

    return (
      <section ref={animasi}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0.2,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </span>
      </section>
    );
  }

  return (
    <div
      className={`bg-primary dark:bg-neutral flex-grow m-6 druk kontener grid transition-all hide-scrollbar duration-1000 gap-8 
        }`}
    >
      <Animasi>
        <div className="flex flex-col lg:flex-row m-6 gap-4 items-center">
          <Carousel
            autoPlay={true}
            showThumbs={false}
            swipeable={true}
            showStatus={false}
            infiniteLoop={true}
            className="w-full lg:w-1/2 transition-all drop-shadow-3xl"
          >
            <div>
              <img src={foto1} alt="" />
            </div>
            <div>
              <img src={foto2} alt="" />
            </div>
            <div>
              <img src={foto3} alt="" />
            </div>
            <div>
              <img src={foto4} alt="" />
            </div>
            <div>
              <img src={foto5} alt="" />
            </div>
          </Carousel>
          <div className="keterangan w-full text-secondary lg:w-1/2 flex flex-wrap items-center text-7xl xl:text-9xl sm:text-8xl m-auto">
            <div className="w-full flex drop-shadow-logo">
              <img
                src={htmlLogo}
                className="w-12 lg:w-16 xl:w-20"
                alt="HTML Logo"
              />
              <img
                src={cssLogo}
                className="w-12 lg:w-16 xl:w-20"
                alt="CSS Logo"
              />
              <img src={jsLogo} className="w-12 lg:w-16 xl:w-20" alt="JS Logo" />
            </div>
            <a href="https://jovchan.github.io/gaming-gear/" target="_blank" className="hover:text-asen transition-all">
            <span className="text-accent mr-8 transition-all duration-1000 dark:text-abu-putih " >.001</span> GAMING GEAR
            </a>
            <p className="courier text-neutral dark:text-primary transition-all duration-1000 text-xl xl:text-2xl 2xl:text-3xl mt-0">
              This website represents my inaugural foray into web development,
              utilizing HTML, CSS, and JavaScript. It serves as a dedicated
              platform to showcase the gaming equipment that has been integral to
              my personal computing setup from its inception.
            </p>
          </div>
        </div>
      </Animasi>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent dark:border-abu-putih mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent/80 dark:border-abu-putih/80 mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent/60 dark:border-abu-putih/60 mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent/40 dark:border-abu-putih/40 mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-4 sm:border-b-8 transition-all duration-1000 border-accent/20 dark:border-abu-putih/20 mx-6 opacity-0 fade-in2"></div>
      <Animasi>
        <div className="flex flex-col lg:flex-row m-6 gap-4 items-center md:hidden">
          <Carousel
            autoPlay={true}
            showThumbs={false}
            swipeable={true}
            showStatus={false}
            infiniteLoop={true}
            className="w-full lg:w-1/2 transition-all drop-shadow-3xl"
          >
            <div>
              <img src={foto6} alt="" />
            </div>
            <div>
              <img src={foto7} alt="" />
            </div>
            <div>
              <img src={foto8} alt="" />
            </div>
            <div>
              <img src={foto9} alt="" />
            </div>
            <div>
              <img src={foto10} alt="" />
            </div>
          </Carousel>
          <div className="keterangan w-full text-secondary lg:w-1/2 flex flex-wrap items-center text-7xl xl:text-9xl sm:text-8xl m-auto">
            <div className="w-full flex drop-shadow-logo gap-6">
              <img
                src={reactLogo}
                className="w-12 lg:w-16 xl:w-20"
                alt="HTML Logo"
              />
              <img
                src={tailwindLogo}
                className="w-12 lg:w-16 xl:w-20"
                alt="CSS Logo"
              />
            </div>
            <a href="https://dominic-christiansen.vercel.app/" target="_blank" className="hover:text-asen transition-all">
            <span className="text-accent dark:text-abu-putih transition-all duration-1000 mr-8 ">.002</span> DomPortof
            </a>
            <p className="courier text-neutral dark:text-primary transition-all duration-1000 text-xl xl:text-2xl 2xl:text-3xl mt-0">
              I’m working on my first client project, creating a personal portfolio using React.js and Tailwind CSS. This project is a key milestone in my career, showcasing my skills and commitment to delivering high-quality, user-friendly websites.
            </p>
          </div>
        </div>
      </Animasi>
      <Animasi>
        <div className="hidden flex-col lg:flex-row m-6 gap-4 items-center md:flex">
          <div className="keterangan w-full text-secondary lg:w-1/2 flex flex-wrap items-center text-7xl xl:text-9xl sm:text-8xl m-auto text-right justify-end">
            <div className="w-full flex drop-shadow-logo gap-6 items-end justify-end">
              <img
                src={reactLogo}
                className="w-12 lg:w-16 xl:w-20"
                alt="HTML Logo"
              />
              <img
                src={tailwindLogo}
                className="w-12 lg:w-16 xl:w-20"
                alt="CSS Logo"
              />
            </div>
            <a href="https://dominic-christiansen.vercel.app/" target="_blank" className="hover:text-asen transition-all">
            <span className="text-accent dark:text-abu-putih mr-8 ">.002</span> DomPortof
            </a>
            <p className="courier text-neutral dark:text-primary transition-all duration-1000 text-xl xl:text-2xl 2xl:text-3xl mt-0">
              I’m working on my first client project, creating a personal portfolio using React.js and Tailwind CSS. This project is a key milestone in my career, showcasing my skills and commitment to delivering high-quality, user-friendly websites.
            </p>
          </div>
          <Carousel
            autoPlay={true}
            showThumbs={false}
            swipeable={true}
            showStatus={false}
            infiniteLoop={true}
            className="w-full lg:w-1/2 transition-all drop-shadow-3xl"
          >
            <div>
              <img src={foto6} alt="" />
            </div>
            <div>
              <img src={foto7} alt="" />
            </div>
            <div>
              <img src={foto8} alt="" />
            </div>
            <div>
              <img src={foto9} alt="" />
            </div>
            <div>
              <img src={foto10} alt="" />
            </div>
          </Carousel>
        </div>
      </Animasi>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent dark:border-abu-putih mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent/80 dark:border-abu-putih/80 mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent/60 dark:border-abu-putih/60 mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent/40 dark:border-abu-putih/40 mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-4 sm:border-b-8 transition-all duration-1000 border-accent/20 dark:border-abu-putih/20 mx-6 opacity-0 fade-in2"></div>
      <Animasi>
        <div className="flex flex-col lg:flex-row m-6 gap-4 items-center">
          <Carousel
            autoPlay={true}
            showThumbs={false}
            swipeable={true}
            showStatus={false}
            infiniteLoop={true}
            className="w-full lg:w-1/2 transition-all drop-shadow-3xl"
          >
            <div>
              <img src={foto12} alt="" />
            </div>
            <div>
              <img src={foto11} alt="" />
            </div>
          </Carousel>
          <div className="keterangan w-full text-secondary lg:w-1/2 flex flex-wrap items-center text-6xl xl:text-8xl sm:text-7xl m-auto">
            <div className="w-full flex drop-shadow-logo">
              <img
                src={wordpressLogo}
                className="w-12 lg:w-16 xl:w-20"
                alt="Wordpress Logo"
              />
            </div>
            <a href="https://www.sewakantor-update.com/" target="_blank" className="hover:text-asen transition-all">
            <span className="text-accent transition-all duration-1000 dark:text-abu-putih mr-8 ">.003</span> Sewakantor-update
            </a>
            <p className="courier text-neutral transition-all duration-1000 dark:text-primary text-xl xl:text-2xl 2xl:text-3xl mt-2">
              I served as a web developer for PT. Charis Mulia Indonesia, a property agency, for seven months. My responsibilities included maintaining their website, “sewakantor-update.com”, enhancing the user interface, and updating property data.
            </p>
          </div>
        </div>
      </Animasi>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent dark:border-abu-putih mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent/80 dark:border-abu-putih/80 mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent/60 dark:border-abu-putih/60 mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent/40 dark:border-abu-putih/40 mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-4 sm:border-b-8 transition-all duration-1000 border-accent/20 dark:border-abu-putih/20 mx-6 opacity-0 fade-in2"></div>
      <Animasi>
        <div className="flex flex-col lg:flex-row m-6 gap-4 items-center md:hidden">
          <Carousel
            autoPlay={true}
            showThumbs={false}
            swipeable={true}
            showStatus={false}
            infiniteLoop={true}
            className="w-full lg:w-1/2 transition-all drop-shadow-3xl"
          >
            <div>
              <img src={foto13} alt="" />
            </div>
            <div>
              <img src={foto14} alt="" />
            </div>
            <div>
              <img src={foto15} alt="" />
            </div>
            <div>
              <img src={foto16} alt="" />
            </div>
            <div>
              <img src={foto17} alt="" />
            </div>
            <div>
              <img src={foto18} alt="" />
            </div>
            <div>
              <img src={foto19} alt="" />
            </div>
          </Carousel>
          <div className="keterangan w-full text-secondary lg:w-1/2 flex flex-wrap items-center text-7xl xl:text-9xl sm:text-8xl m-auto">
            <div className="w-full flex drop-shadow-logo">
              <img
                src={htmlLogo}
                className="w-12 lg:w-16 xl:w-20"
                alt="html Logo"
              />
              <img
                src={tailwindLogo}
                className="w-12 lg:w-16 xl:w-20"
                alt="tailwind Logo"
              />
              <img
                src={jsLogo}
                className="w-12 lg:w-16 xl:w-20"
                alt="javascript Logo"
              />
            </div>
            <a href="#" target="_blank" className="hover:text-asen transition-all">
            <span className="text-accent transition-all duration-1000 dark:text-abu-putih mr-8 ">.004</span> Work From Office
            </a>
            <p className="courier text-neutral transition-all duration-1000 dark:text-primary text-xl xl:text-2xl 2xl:text-3xl mt-2">
              I had the privilege of serving as a web developer for PT. ARC Property Indonesia, a renowned property agency. I was responsible for the creation of their innovative website, which revolutionizes the way they serve their clients by offering fully furnished office spaces for rent.
            </p>
          </div>
        </div>
      </Animasi>
      <Animasi>
        <div className="hidden flex-col lg:flex-row m-6 gap-4 items-center md:flex">
          <div className="keterangan w-full text-secondary lg:w-1/2 flex flex-wrap items-center text-7xl xl:text-9xl sm:text-8xl m-auto text-right justify-end">
            <div className="w-full flex drop-shadow-logo gap-6 items-end justify-end">
              <img
                src={htmlLogo}
                className="w-12 lg:w-16 xl:w-20"
                alt="html Logo"
              />
              <img
                src={tailwindLogo}
                className="w-12 lg:w-16 xl:w-20"
                alt="tailwind Logo"
              />
              <img
                src={jsLogo}
                className="w-12 lg:w-16 xl:w-20"
                alt="javascript Logo"
              />
            </div>
            <div className="hover:text-asen transition-all">
            <span className="text-accent transition-all duration-1000 dark:text-abu-putih mr-8 ">.004</span> Work From Office
            </div>
            <p className="courier text-neutral transition-all duration-1000 dark:text-primary text-xl xl:text-2xl 2xl:text-3xl mt-2">
              I had the privilege of serving as a web developer for PT. ARC Property Indonesia, a renowned property agency. I was responsible for the creation of their innovative website, which revolutionizes the way they serve their clients by offering fully furnished office spaces for rent.
            </p>
          </div>
          <Carousel
            autoPlay={true}
            showThumbs={false}
            swipeable={true}
            showStatus={false}
            infiniteLoop={true}
            className="w-full lg:w-1/2 transition-all drop-shadow-3xl"
          >
            <div>
              <img src={foto13} alt="" />
            </div>
            <div>
              <img src={foto14} alt="" />
            </div>
            <div>
              <img src={foto15} alt="" />
            </div>
            <div>
              <img src={foto16} alt="" />
            </div>
            <div>
              <img src={foto17} alt="" />
            </div>
            <div>
              <img src={foto18} alt="" />
            </div>
            <div>
              <img src={foto19} alt="" />
            </div>
          </Carousel>
        </div>
      </Animasi>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent/80 dark:border-abu-putih/80 mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent/60 dark:border-abu-putih/60 mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent/40 dark:border-abu-putih/40 mx-6 opacity-0 fade-in2"></div>
      <div className="hidden md:block border-b-2 sm:border-b-2 transition-all duration-1000 border-accent/20 dark:border-abu-putih/20 mx-6 opacity-0 fade-in2"></div>
    </div>
  );
}
