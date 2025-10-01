import { motion, useAnimate } from "motion/react";

export const Tutorial7 = () => {
  const [scope, animate] = useAnimate();

  //   const sequences: AnimationSequence = [
  //     [".loader", { opacity: 1, width: "2rem" }, { duration: 0.1 }],
  //   ];
  //   animate(sequences);

  const startAnimating = async () => {
    await animate(
      ".loader",
      {
        opacity: 1,
        width: "2rem",
      },
      {
        duration: 0.1,
      }
    );
    await animate(
      ".loader",
      {
        rotate: 360 * 4,
      },
      {
        duration: 2,
      }
    );
    await animate(
      ".loader",
      {
        opacity: 0,
      },
      {
        duration: 0.1,
      }
    );
    await animate(
      ".text",
      {
        display: "none",
      },
      {
        duration: 0.1,
      }
    );
    await animate(
      "button",
      {
        width: "5rem",
        borderRadius: "1000px",
      },
      {
        duration: 0.5,
        ease: "easeInOut",
      }
    );
    await animate(
      "button",
      {
        opacity: 1,
        scale: [1, 1.2, 0.8, 1],
        backgroundColor: "var(--color-green-500)",
      },
      {
        duration: 0.8,
      }
    );
    animate(
      ".check-icon",
      {
        opacity: 1,
      },
      {
        duration: 0.1,
      }
    );
    animate(
      ".check-icon path",
      {
        pathLength: 1,
      },
      {
        duration: 0.3,
      }
    );
  };
  return (
    <div className="bg-neutral-900 w-full h-screen flex items-center justify-center">
      <div
        ref={scope}
        className="relative w-60 h-20 flex items-center justify-center"
      >
        <motion.button
          onClick={startAnimating}
          style={{
            width: "30rem",
          }}
          className="h-20 cursor-pointer flex items-center justify-center rounded-lg bg-purple-500 text-white font-medium"
        >
          <span className="text">Purchase Now ($99)</span>

          <motion.svg
            width={"24"}
            height={"24"}
            viewBox={"0 0 24 24"}
            fill={"none"}
            stroke={"currentColor"}
            strokeWidth={"2"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            className="w-5 h-5 text-white loader"
            initial={{
              width: "0rem",
            }}
          >
            <path stroke="none" d="M0 oh24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 9 9" />
          </motion.svg>
        </motion.button>
        <motion.svg
          fill={"none"}
          viewBox={"0 0 24 24"}
          stroke={"#FFFFFF"}
          strokeWidth={3}
          className={
            "check-icon h-8 w-8 absolute inset-0 m-auto z-50 pointer-events-none"
          }
          style={{
            opacity: 0,
          }}
        >
          <motion.path
            initial={{
              pathLength: 0,
            }}
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "easeInOut",
            }}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            d={"M5 13l4 4L19 7"}
          />
        </motion.svg>
      </div>
    </div>
  );
};
