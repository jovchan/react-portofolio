/* eslint-disable react/prop-types */
import cer1 from "./photos/cer/cer1.png";
import cer2 from "./photos/cer/cer2.png";
import cer3 from "./photos/cer/cer3.png";
import cer4 from "./photos/cer/cer4.png";
import cer5 from "./photos/cer/cer5.png";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Pdf1 from "./photos/cer/cer1.pdf";
import Pdf2 from "./photos/cer/cer2.pdf";
import Pdf3 from "./photos/cer/cer3.pdf";
import Pdf4 from "./photos/cer/cer4.pdf";
import Pdf5 from "./photos/cer/cer5.pdf";

const images = [cer1, cer2, cer3, cer4, cer5];

export default function Certificate() {
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

  return (
    <div>
      <div className="border-b-4 sm:border-b-8 border-accent transition-all duration-1000 dark:border-abu-putih mx-6 opacity-0 fade-in3"></div>
      <div className="flex justify-between text-7xl mx-6 lg:text-9xl md:text-8xl sm:text-8xl text-accent dark:text-abu-putih druk">
        <p className={`transition-all duration-500 text-secondary`}>
          CERTIFICATES
        </p>
      </div>
      <div className="border-b-4 sm:border-b-8 border-accent transition-all duration-1000 dark:border-abu-putih mx-6 opacity-0 fade-in3"></div>

      <Animasi>
        <div className="relative mx-6 z-10">
          <div className="flex overflow-hidden space-x-16 group">
            <div className="flex space-x-16 my-4 animate-loop-scroll">
              {images.map((img, index) => (
                <img
                  key={index}
                  className="object-contain object-center h-96 md:h-120 max-w-none hover:scale-110 hover:shadow-2xl transition-all opacity-75 hover:opacity-100"
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  onClick={() => window.open([Pdf1, Pdf2, Pdf3, Pdf4, Pdf5][index], '_blank')}
                />
              ))}
              {/* Repeat the mapping for the infinite loop effect */}
              {images.map((img, index) => (
                <img
                  key={index + images.length}
                  className="object-contain object-center h-96 md:h-120 max-w-none hover:scale-110 hover:shadow-2xl transition-all opacity-75 hover:opacity-100"
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  onClick={() => window.open([Pdf1, Pdf2, Pdf3, Pdf4, Pdf5][index], '_blank')}
                />
              ))}
              {images.map((img, index) => (
                <img
                  key={index}
                  className="object-contain object-center h-96 md:h-120 max-w-none hover:scale-110 hover:shadow-2xl transition-all opacity-75 hover:opacity-100"
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  onClick={() => window.open([Pdf1, Pdf2, Pdf3, Pdf4, Pdf5][index], '_blank')}
                />
              ))}
              {/* Repeat the mapping for the infinite loop effect */}
              {images.map((img, index) => (
                <img
                  key={index + images.length}
                  className="object-contain object-center h-96 md:h-120 max-w-none hover:scale-110 hover:shadow-2xl transition-all opacity-75 hover:opacity-100"
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  onClick={() => window.open([Pdf1, Pdf2, Pdf3, Pdf4, Pdf5][index], '_blank')}
                />
              ))}
            </div>
            {/* ... (repeat the mapping for additional loops if necessary) */}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-primary to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-primary to-transparent"></div>
        </div>
      </Animasi>
    </div>
  );
}
