// @ts-ignore
import { useRef, ReactNode } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";


interface ParallaxTextProps {
  children: ReactNode;
  baseVelocity?: number;
}

function ParallaxText({ children , baseVelocity = 0.5 }: ParallaxTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Calculate the wrapping range dynamically based on the number of children
  const numChildren = 16;
  const wrapMin = -100 / numChildren; // e.g., -25%
  const wrapMax = 0; // e.g., 0%

  const x = useTransform(baseX, (v) => `${wrap(wrapMin, wrapMax, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden m-0 flex whitespace-nowrap flex-nowrap">
      <motion.div className="scroller font-semibold uppercase flex whitespace-nowrap flex-nowrap" style={{ x }}>
        {Array.from({ length: numChildren }).map((_, index) => (
          <span key={index} className="block mr-8">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <section className="relative druk text-accent text-7xl xl:text-9xl sm:text-8xl">
      <ParallaxText baseVelocity={-2}><span className="">Jovian</span></ParallaxText>
      <ParallaxText baseVelocity={2}><span className="">Chandra</span></ParallaxText>
      <div className="border-b-4 sm:border-b-8 border-accent dark:border-abu-putih mx-6 opacity-0 fade-in3"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-7 opacity-0 fade-in2"></div>
      <div className="border-b-2 sm:border-b-2 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-7 opacity-0 fade-in2"></div>
      <div className="border-b-4 sm:border-b-8 border-accent dark:border-abu-putih transition-all duration-1000 mx-6 h-7 opacity-0 fade-in2"></div>
    </section>
  );
}
