import { useState, useEffect } from "react";

export default function MyWorks() {
  const [colorChange, setColorChange] = useState({ b1: false, b2: false, b3: false});

  useEffect(() => {
    const timer1 = setTimeout(() => setColorChange(prev => ({ ...prev, c1: true })), 3900);
    const timer2 = setTimeout(() => setColorChange(prev => ({ ...prev, c2: true })), 4400);
    const timer3 = setTimeout(() => setColorChange(prev => ({ ...prev, c3: true })), 4900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div>
      <div className="flex justify-between text-7xl mx-6 lg:text-9xl md:text-8xl sm:text-8xl text-accent druk">
        <p className={`transition-all duration-500 ${colorChange.c1 ? 'text-secondary' : ''}`}>MY WORKS</p>
        <div className=" druk flex">
          <span className={`transition-all duration-500 ${colorChange.c2 ? 'text-secondary' : ''}`}>1</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.8em"
            height="1em"
            viewBox="0 0 1024 1024"
            className="flex"
          >
            <path
              fill="currentColor"
              d="M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512L340.864 831.872a30.59 30.59 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
            ></path>
          </svg>
          <span className={`transition-all duration-500 ${colorChange.c3 ? 'text-secondary' : ''}`}>4</span>
        </div>
      </div>
      <div className="border-b-4 sm:border-b-8 border-accent mx-6 opacity-0 fade-in3"></div>
    </div>
  );
}
