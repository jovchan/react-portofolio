import { useState, useEffect } from "react";


export default function Title() {
  const [colorChange, setColorChange] = useState({ b1: false, b2: false, b3: false, b4: false });

  useEffect(() => {
    const timer1 = setTimeout(() => setColorChange(prev => ({ ...prev, b1: true })), 1400);
    const timer2 = setTimeout(() => setColorChange(prev => ({ ...prev, b2: true })), 1900);
    const timer3 = setTimeout(() => setColorChange(prev => ({ ...prev, b3: true })), 2400);
    const timer4 = setTimeout(() => setColorChange(prev => ({ ...prev, b4: true })), 2900);
    const timer5 = setTimeout(() => setColorChange(prev => ({ ...prev, b5: true })), 3400);
    const timer6 = setTimeout(() => setColorChange(prev => ({ ...prev, b6: true })), 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  return (
    <div className="text-7xl  text-accent dark:text-abu-putih mt-3 lg:text-9xl md:text-8xl sm:text-8xl transation-all duration-1000">
      <div className="hidden 2xl:block">
        <div className="text-center kurangin-margin">
          <p className="druk justify-items-center">
            HELLO! I’M <span className={`dark:text-primary transition-all duration-500 ${colorChange.b1 ? 'text-secondary' : ''}`}>JOVIAN CHANDRA</span>, A{" "}
            <span className={`dark:text-primary transition-all duration-500 ${colorChange.b2 ? 'text-secondary' : ''}`}>DEDICATED DEVELOPER</span> WITH
          </p>
        </div>
        <div className="text-right mr-6 kurangin-margin">
          <span className="druk justify-items-center">
            A PASSION FOR CREATING INNOVATIVE{" "}
            <span className={`dark:text-primary transition-all duration-500 ${colorChange.b3 ? 'text-secondary' : ''}`}>WEB</span> AND{" "}
            <span className={`dark:text-primary transition-all duration-500 ${colorChange.b4 ? 'text-secondary' : ''}`}>MOBILE APP</span>,
          </span>
        </div>
        <div className="text-left ml-6 kurangin-margin">
          <p className="druk justify-items-center">
            TRANSFORMING IDEAS INTO{" "}
            <span className={`dark:text-primary transition-all duration-500 ${colorChange.b5 ? 'text-secondary' : ''}`}>USER-FRIENDLY</span> DIGITAL SOLUTIONS
          </p>
        </div>
      </div>

      <div className="flex 2xl:hidden mx-6">
        <div className="text-justify">
          <p className="druk justify-items-center">
            HELLO! I’M <span className={`dark:text-primary transition-all duration-500 ${colorChange.b1 ? 'text-secondary' : ''}`}>JOVIAN CHANDRA</span>, A{" "}
            <span className={`dark:text-primary transition-all duration-500 ${colorChange.b2 ? 'text-secondary' : ''}`}>DEDICATED DEVELOPER</span> WITH A PASSION FOR CREATING INNOVATIVE{" "}
            <span className={`dark:text-primary transition-all duration-500 ${colorChange.b3 ? 'text-secondary' : ''}`}>WEB</span> AND{" "}
            <span className={`dark:text-primary transition-all duration-500 ${colorChange.b4 ? 'text-secondary' : ''}`}>MOBILE APP</span>, TRANSFORMING IDEAS INTO{" "}
            <span className={`dark:text-primary transition-all duration-500 ${colorChange.b5 ? 'text-secondary' : ''}`}>USER-FRIENDLY</span> DIGITAL SOLUTIONS
          </p>
        </div>
      </div>

      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-7 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-7 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-7 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-7 opacity-0 fade-in2"></div>
      <div className="border-b-4 sm:border-b-8 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-7 opacity-0 fade-in2"></div>
    </div>
  );
}
