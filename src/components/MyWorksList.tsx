import React, { useRef , useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed';

// Import your images
import image1 from './photos/1.jpg';
import image2 from './photos/2.jpg';
// import image3 from './photos/3.jpg';
// import image4 from './photos/4.jpg';
// import image5 from './photos/5.jpg';

const images = [image1, image2];

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, src }: { id: number, src: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress,0);

  return (
    <section className="flex flex-wrap justify-between md:flex-row flex-col items-center w-full">
      <div ref={ref} className="bg-accent md:h-full md:w-48 h-48 w-full">
        <img src={src} alt={`Image ${id}`} className="max-w-full h-auto w-1/2 absolute"/>
      </div>
      <motion.h2 style={{ y }} className="mt-4 md:mt-0">{`#00${id}`}</motion.h2>
    </section>
  );
}


export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const target = document.querySelector('.container-sendiri') as HTMLElement;
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
    <div className="container-sendiri m-6 bg-secondary">
      {images.map((src, index) => (
        <Image id={index + 1} src={src}/>
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}
