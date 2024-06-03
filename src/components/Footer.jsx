/* eslint-disable react/prop-types */
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  function Animasi(props) {
    const animasi = useRef(null);
    const isInView = useInView(animasi, { once: true });

    return (
      <section ref={animasi}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0.2,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {props.children}
        </span>
      </section>
    );
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="">
      <div className="border-b-4 sm:border-b-8 border-accent transition-all duration-1000 dark:border-abu-putih mx-6 opacity-0 fade-in3"></div>
      <div className="flex justify-between text-7xl mx-6 lg:text-9xl md:text-8xl sm:text-8xl text-accent dark:text-abu-putih druk">
        <Animasi>
          <p className={`transition-all duration-500 text-secondary`}>
            GET IN TOUCH
          </p>
        </Animasi>
      </div>
      <div className="border-b-4 sm:border-b-8 border-accent transition-all duration-1000 dark:border-abu-putih mx-6 opacity-0 fade-in3"></div>

      <div className="flex justify-between text-7xl mx-6 lg:text-9xl md:text-8xl sm:text-8xl text-accent dark:text-abu-putih druk lg:hidden">
        <Animasi>
          <p
            className={`transition-all duration-500 text-accent dark:text-abu-putih`}
          >
            THANKS FOR VISITING. YOU CAN CONTACT ME ANYTIME WITH{" "}
            <a
              className="text-secondary hover:text-asen"
              href="emailto:jovianchandras@gmail.com"
              target="_blank"
            >
              EMAIL
            </a>{" "}
            OR{" "}
            <a
              className="text-secondary hover:text-asen"
              href="https://www.linkedin.com/in/jovian-chandra-santoso/"
              target="_blank"
            >
              LINKEDIN
            </a>
          </p>
        </Animasi>
      </div>

      <div className="hidden justify-between items-center text-7xl mx-6 lg:text-9xl md:text-8xl sm:text-8xl text-accent dark:text-abu-putih druk lg:flex">
        <div className="">
          <Animasi>
            <p
              className={`transition-all duration-500 text-accent dark:text-abu-putih`}
            >
              THANKS FOR VISITING. YOU CAN CONTACT ME ANYTIME WITH{" "}
              <a
                className="text-secondary hover:text-asen"
                href="emailto:jovianchandras@gmail.com"
                target="_blank"
              >
                EMAIL
              </a>{" "}
              OR{" "}
              <a
                className="text-secondary hover:text-asen"
                href="https://www.linkedin.com/in/jovian-chandra-santoso/"
                target="_blank"
              >
                LINKEDIN
              </a>
            </p>
          </Animasi>
        </div>

        <div className="flex stroke-accent">
        <svg
          width="23"
          height="85"
          viewBox="0 0 23 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="-1"
            x2="22"
            y2="-1"
            transform="matrix(-1 0 0 1 23 85)"
            stroke="#363636"
            strokeWidth="4"
          />
          <line
            y1="-1"
            x2="22"
            y2="-1"
            transform="matrix(-1 0 0 1 23 2)"
            stroke="#363636"
            strokeWidth="4"
          />
          <line
            y1="-1"
            x2="85"
            y2="-1"
            transform="matrix(-4.37114e-08 1 1 4.37114e-08 2 0)"
            stroke="#363636"
            strokeWidth="4"
          />
        </svg>

        <svg
          // width="125"
          height="100"
          viewBox="0 0 80 64"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer float-svg"
          onClick={scrollToTop}
        >
          <path
            d="M19.1968 19.2L21.4592 21.0099L38.3968 7.45984L38.3968 61.44L41.5968 61.44L41.5968 7.45984L58.5408 21.0125L60.8032 19.2026L39.9968 2.56L19.1968 19.2Z"
            fill="#363636"
          />
        </svg>
        <svg
          width="23"
          height="85"
          viewBox="0 0 23 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="84" x2="22" y2="84" stroke="#363636" strokeWidth="4" />
          <line y1="1" x2="22" y2="1" stroke="#363636" strokeWidth="4" />
          <line
            x1="22"
            y1="-4.37114e-08"
            x2="22"
            y2="85"
            stroke="#363636"
            strokeWidth="4"
          />
        </svg>
        </div>
      </div>

      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-5 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-5 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-5 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-5 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-5 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-5 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-5 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-5 opacity-0 fade-in2"></div>
    </div>
  );
}
