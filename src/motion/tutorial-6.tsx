import { stagger } from "motion";
import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

export const Tutorial6 = () => {
  const [scope, animate] = useAnimate();
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi exercitationem eos molestias excepturi repellat numquam magnam. Dolorum voluptas optio facere fugit nobis voluptate deserunt exercitationem praesentium porro. Vel, totam corporis.";

  useEffect(() => {
    startAnimating();
  }, []);

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.02),
      }
    );
  };

  return (
    <div className="bg-neutral-600 min-h-screen w-full flex items-center justify-center p-16 flex-col">
      <div
        ref={scope}
        className="text-white max-w-4xl mx-auto font-bold text-4xl"
      >
        {text.split(" ").map((word, idx) => {
          return (
            <motion.span
              key={idx}
              style={{
                opacity: 0,
                filter: "blur(10px)",
                y: 10,
              }}
              className="inline-block"
            >
              {word} &nbsp;
            </motion.span>
          );
        })}
        <motion.span></motion.span>
      </div>
      <div>
        <button
          onClick={startAnimating}
          className="mt-10 px-4 cursor-pointer py-2 rounded-md bg-cyan-400"
        >
          Animate2
        </button>
      </div>
    </div>
  );
};
