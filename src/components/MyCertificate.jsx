import cer1 from "./photos/cer/cer1.png";
import cer2 from "./photos/cer/cer2.png";
import cer3 from "./photos/cer/cer3.png";
import cer4 from "./photos/cer/cer4.png";
import cer5 from "./photos/cer/cer5.png";
import cer6 from "./photos/cer/cer6.png";
import cer7 from "./photos/cer/cer7.png";
import cer8 from "./photos/cer/cer8.png";
import cer9 from "./photos/cer/cer9.png";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Pdf1 from "./photos/cer/cer1.pdf";
import Pdf2 from "./photos/cer/cer2.pdf";
import Pdf3 from "./photos/cer/cer3.pdf";
import Pdf4 from "./photos/cer/cer4.pdf";
import Pdf5 from "./photos/cer/cer5.pdf";
import Pdf6 from "./photos/cer/cer6.pdf";
import Pdf7 from "./photos/cer/cer7.pdf";
import Pdf8 from "./photos/cer/cer8.pdf";
import Pdf9 from "./photos/cer/cer9.pdf";

const images = [cer6, cer7, cer8, cer9, cer5, cer4, cer3, cer2, cer1];
const pdfs = [Pdf6, Pdf7, Pdf8, Pdf9, Pdf5, Pdf4, Pdf3, Pdf2, Pdf1];

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

export default function Certificate() {

  return (
    <div>
      <div className="border-b-4 sm:border-b-8 border-accent transition-all duration-1000 dark:border-abu-putih mx-6 opacity-0 fade-in3"></div>
      <div className="flex justify-between text-7xl mx-6 lg:text-9xl md:text-8xl sm:text-8xl text-accent dark:text-abu-putih druk">
        <Animasi>
          <p className={`transition-all duration-500 text-secondary`}>
            CERTIFICATES
          </p>
        </Animasi>
      </div>
      <div className="border-b-4 sm:border-b-8 border-accent transition-all duration-1000 dark:border-abu-putih mx-6 opacity-0 fade-in3"></div>

      <Animasi>
        <div className="relative mx-6 z-10 py-4 border-b-2 border-accent dark:border-abu-putih transition-all duration-1000">
          <div className="flex overflow-hidden space-x-16 group ">
            <div className="flex space-x-16 my-4 animate-loop-scroll">
              {images.map((img, index) => (
                <img
                  key={index}
                  className="object-contain object-center h-72 md:h-120 max-w-none hover:scale-110 hover:shadow-2xl transition-all opacity-75 hover:opacity-100"
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  onClick={() =>
                    window.open(pdfs[index], "_blank")
                  }
                />
              ))}
              {/* Repeat the mapping for the infinite loop effect */}
              {images.map((img, index) => (
                <img
                  key={index + images.length}
                  className="object-contain object-center h-72 md:h-120 max-w-none hover:scale-110 hover:shadow-2xl transition-all opacity-75 hover:opacity-100"
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  onClick={() =>
                    window.open(pdfs[index], "_blank")
                  }
                />
              ))}
              {images.map((img, index) => (
                <img
                  key={index}
                  className="object-contain object-center h-72 md:h-120 max-w-none hover:scale-110 hover:shadow-2xl transition-all opacity-75 hover:opacity-100"
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  onClick={() =>
                    window.open(pdfs[index], "_blank")
                  }
                />
              ))}
              {/* Repeat the mapping for the infinite loop effect */}
              {images.map((img, index) => (
                <img
                  key={index + images.length}
                  className="object-contain object-center h-72 md:h-120 max-w-none hover:scale-110 hover:shadow-2xl transition-all opacity-75 hover:opacity-100"
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  onClick={() =>
                    window.open(pdfs[index], "_blank")
                  }
                />
              ))}
            </div>
            {/* ... (repeat the mapping for additional loops if necessary) */}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-primary dark:from-neutral to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-primary dark:from-neutral to-transparent"></div>
        </div>
      </Animasi>

      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-14 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-14 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-14 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-14 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-14 opacity-0 fade-in2"></div>
    </div>
  );
}
