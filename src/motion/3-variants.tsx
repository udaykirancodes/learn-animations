import { motion } from "motion/react";
import { useState } from "react";

export const Variants = () => {
  const [open, setOpen] = useState(true);
  const sidebarVariant = {
    open: {
      width: "16rem",
    },
    close: {
      width: "4.5rem",
    },
  };
  const childVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    close: {
      opacity: 0,
      y: -20,
    },
  };
  const parentVariants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial={false}
      animate={open ? "open" : "close"}
      exit={"close"}
      //   whileHover={"open"}

      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="w-screen bg-neutral-800 h-screen flex items-start justify-start"
    >
      <motion.div
        variants={sidebarVariant}
        className="sidebar w-64 border-px border-cyan-500 h-full bg-neutral-600 p-4"
      >
        <h4>Sidebar</h4>
        <motion.ul
          variants={parentVariants}
          className="flex w-full flex-col mt-4 gap-y-1"
        >
          {["A", "B", "C", "D"].map((item) => {
            return (
              <motion.li
                variants={childVariants}
                className="w-full bg-neutral-700 rounded-md h-10 flex items-center justify-start px-3"
              >
                {item}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
      <div>
        <button
          className="px-4 py-2 bg-cyan-400 rounded-md m-4"
          onClick={() => setOpen(!open)}
        >
          Button
        </button>
      </div>
    </motion.div>
  );
};
