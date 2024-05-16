/* eslint-disable no-undef */
import React, { useEffect , useState } from "react";
import foto1 from "./photos/1.jpg";
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed';

export default function List() {
  const [colorChange, setColorChange] = useState({ list1:false });

  useEffect(() => {
    const timer1 = setTimeout(() => setColorChange(prev => ({ ...prev, list1: true })), 3000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

    useEffect(() => {
        const target = document.querySelector('.kontener') as HTMLElement;
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              smoothScrollIntoView(entry.target, {
                behavior: 'smooth'
              });
            }
          });
        }, {
          threshold: 0.5
        });
      
        observer.observe(target);
      
        return () => observer.disconnect(); // Clean up the observer when the component unmounts
      }, []);

  return (
    <div className={`h-95vh bg-abu overflow-auto m-6 druk snap-y snap-mandatory kontener grid transition-all duration-1000 gap-8 hide-scrollbar ${colorChange.list1 ? 'bg-oren' : ''}`}>
      <div className="snap-center flex flex-col lg:flex-row m-6 gap-4 md:gap-8 my-44">
        <img src={foto1} alt="" className="w-full lg:w-1/2 transition-all drop-shadow-3xl" />
        <div className="w-full text-hitam lg:w-1/2 flex flex-wrap items-center text-7xl lg:text-9xl sm:text-8xl">
          <span className="text-abu mr-8 ">.001</span> GAMING GEAR <br />
          <p className="courier text-xl xl:text-3xl mt-0  sm:underline-offset-4">This website represents my inaugural foray into web development, utilizing HTML, CSS, and JavaScript. It serves as a dedicated platform to showcase the gaming equipment that has been integral to my personal computing setup from its inception.
          </p>
        </div>
      </div>
    </div>
  );
}
