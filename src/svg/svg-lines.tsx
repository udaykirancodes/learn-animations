import { motion } from "motion/react";

export function SVGLines() {
  return (
    <div className="w-screen h-screen flex  items-center justify-center bg-white flex-col">
      {/* Border Animation */}
      <div className="bg-white relative overflow-hidden shadow-sm size-10 p-px rounded-sm m-2">
        <div className="w-full h-full z-20 bg-white rounded-[3px] relative"></div>
        <div className="absolute top-0 z-10 left-0 w-full h-full [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] animate-spin scale-[1.5] inset-0 rounded-[3px]"></div>
        <div className="absolute top-0 z-10 left-0 w-full h-full [background-image:conic-gradient(at_center,transparent,var(--color-red-500)_20%,transparent_30%)] animate-spin scale-[1.5] inset-0 rounded-[3px] [animation-delay:0.4s]"></div>
      </div>
      <LineSVG />
    </div>
  );
}

const LineSVG = () => {
  return (
    <svg
      width="312"
      height="33"
      viewBox="0 0 312 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // class="absolute top-2 -right-84"
    >
      <line
        x1="0"
        y1="1"
        x2="311.5"
        y2="1"
        stroke="url(#line-one-gradient)"
        strokeLinecap="round"
      ></line>
      <line
        x1="0"
        y1="1"
        x2="311.5"
        y2="1"
        stroke="url(#line-one-gradient)"
        strokeLinecap="round"
      ></line>
      <defs>
        <motion.linearGradient
          gradientUnits="userSpaceOnUse"
          id="line-one-gradient"
          //   x1="0%"
          //   x2="0%"
          //   y1="1"
          //   y2="0"
          initial={{
            x1: "0%",
            x2: "10%",
          }}
          animate={{
            x1: "90%",
            x2: "100%",
          }}
          transition={{
            duration: 2,
            ease: "linear",
            repeatType: "loop",
            repeat: Infinity,
          }}
        >
          <stop stop-color="var(--color-gray-300)"></stop>
          <stop offset="0.33" stop-color="var(--color-red-400)"></stop>
          <stop offset="0.66" stop-color="var(--color-red-600)"></stop>
          <stop offset="1" stop-color="var(--color-gray-300)"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
