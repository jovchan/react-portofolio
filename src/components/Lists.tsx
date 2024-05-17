/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
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
import smoothScrollIntoView from "smooth-scroll-into-view-if-needed";
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

  useEffect(() => {
    const target = document.querySelector(".kontener") as HTMLElement;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            smoothScrollIntoView(entry.target, {
              behavior: "smooth",
            });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    var container = document.querySelector('.kontener');

    if (container !== null) {
      container.addEventListener('scroll', function() {
        var isAtTop = container!.scrollTop === 0;
        var isAtBottom = container!.scrollHeight - container!.scrollTop === container!.clientHeight;

        document.body.style.overflow = isAtTop || isAtBottom ? 'auto' : 'hidden';
      });
    }
  }, []);

  

  return (
    <div
      className={`h-95vh bg-abu flex-grow overflow-auto m-6 druk snap-y snap-mandatory kontener grid transition-all hide-scrollbar duration-1000 gap-8 ${
        colorChange.list1 ? "bg-oren" : ""
      }`}
    >
      <div className="snap-center flex flex-col lg:flex-row m-6 gap-4 items-center">
        <Carousel
          showThumbs={false}
          swipeable={true}
          showStatus={false}
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
        <div className="keterangan w-full text-hitam lg:w-1/2 flex flex-wrap items-center text-7xl xl:text-9xl sm:text-8xl m-auto">
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
          <span className="text-abu mr-8 ">.001</span> GAMING GEAR
          <p className="courier text-xl xl:text-2xl 2xl:text-3xl mt-0">
            This website represents my inaugural foray into web development,
            utilizing HTML, CSS, and JavaScript. It serves as a dedicated
            platform to showcase the gaming equipment that has been integral to
            my personal computing setup from its inception.
          </p>
        </div>
      </div>
      <div className="snap-center flex flex-col lg:flex-row m-6 gap-4 items-center md:hidden">
        <Carousel
          showThumbs={false}
          swipeable={true}
          showStatus={false}
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
        <div className="keterangan w-full text-hitam lg:w-1/2 flex flex-wrap items-center text-7xl xl:text-9xl sm:text-8xl m-auto">
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
          <span className="text-abu mr-8 ">.002</span> DomPortof
          <p className="courier text-xl xl:text-2xl 2xl:text-3xl mt-0">
          I’m working on my first client project, creating a personal portfolio using React.js and Tailwind CSS. This project is a key milestone in my career, showcasing my skills and commitment to delivering high-quality, user-friendly websites.
          </p>
        </div>
      </div>
      <div className="snap-center hidden flex-col lg:flex-row m-6 gap-4 items-center md:flex">
        <div className="keterangan w-full text-hitam lg:w-1/2 flex flex-wrap items-center text-7xl xl:text-9xl sm:text-8xl m-auto text-right justify-end">
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
          <span className="text-abu mr-8 ">.002</span> DomPortof
          <p className="courier text-xl xl:text-2xl 2xl:text-3xl mt-0">
          I’m working on my first client project, creating a personal portfolio using React.js and Tailwind CSS. This project is a key milestone in my career, showcasing my skills and commitment to delivering high-quality, user-friendly websites.
          </p>
        </div>
        <Carousel
          showThumbs={false}
          swipeable={true}
          showStatus={false}
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
      <div className="snap-center flex flex-col lg:flex-row m-6 gap-4 items-center">
        <Carousel
          showThumbs={false}
          swipeable={true}
          showStatus={false}
          className="w-full lg:w-1/2 transition-all drop-shadow-3xl"
        >
          <div>
            <img src={foto12} alt="" />
          </div>
          <div>
            <img src={foto11} alt="" />
          </div>
        </Carousel>
        <div className="keterangan w-full text-hitam lg:w-1/2 flex flex-wrap items-center text-7xl xl:text-9xl sm:text-8xl m-auto">
          <div className="w-full flex drop-shadow-logo">
            <img
              src={wordpressLogo}
              className="w-12 lg:w-16 xl:w-20"
              alt="Wordpress Logo"
            />
          </div>
          <span className="text-abu mr-8 ">.003</span> Sewakantor-update
          <p className="courier text-xl xl:text-2xl 2xl:text-3xl mt-2">
          I served as a web developer for PT. Charis Mulia Indonesia, a property agency, for seven months. My responsibilities included maintaining their website, “sewakantor-update.com”, enhancing the user interface, and updating property data.
          </p>
        </div>
      </div>
      <div className="snap-center flex flex-col lg:flex-row m-6 gap-4 items-center md:hidden">
        <Carousel
          showThumbs={false}
          swipeable={true}
          showStatus={false}
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
        <div className="keterangan w-full text-hitam lg:w-1/2 flex flex-wrap items-center text-7xl xl:text-9xl sm:text-8xl m-auto">
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
          <span className="text-abu mr-8 ">.004</span> Work From Office
          <p className="courier text-xl xl:text-2xl 2xl:text-3xl mt-2">
          I had the privilege of serving as a web developer for PT. ARC Property Indonesia, a renowned property agency. I was responsible for the creation of their innovative website, which revolutionizes the way they serve their clients by offering fully furnished office spaces for rent.
          </p>
        </div>
      </div>
      <div className="snap-center hidden flex-col lg:flex-row m-6 gap-4 items-center md:flex">
        <div className="keterangan w-full text-hitam lg:w-1/2 flex flex-wrap items-center text-7xl xl:text-9xl sm:text-8xl m-auto text-right justify-end">
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
          <span className="text-abu mr-8 ">.004</span> Work From Office
          <p className="courier text-xl xl:text-2xl 2xl:text-3xl mt-2">
          I had the privilege of serving as a web developer for PT. ARC Property Indonesia, a renowned property agency. I was responsible for the creation of their innovative website, which revolutionizes the way they serve their clients by offering fully furnished office spaces for rent.
          </p>
        </div>
        <Carousel
          showThumbs={false}
          swipeable={true}
          showStatus={false}
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
    </div>
  );
}
