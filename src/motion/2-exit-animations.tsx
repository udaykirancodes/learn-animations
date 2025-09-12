import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const ExitAnimations = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card />
    </div>
  );
};

const Card = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="w-72 min-h-[28rem] bg-white h-[28rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-4 flex flex-col"
        >
          <h2 className="font-bold text-[10px]">Aceternity UI Components</h2>
          <p className="text-neutral-600 mt-2 text-[10px]">
            A collection of beautiful UI components, let's get on with it.
          </p>
          <div className="flex items-center justify-center">
            <button
              onClick={() => setOpen(false)}
              className="flex items-center gap-1 justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1"
            >
              <img
                src="https://dummyimage.com/50x50/000/fff"
                className="h-4 w-4"
                alt=""
              />
              <span className="text-xs">Aceternity</span>
              <span className="h-3 w-3 text-neutral-400 font-light text-[10px]">
                X
              </span>
            </button>
          </div>
          <div className="flex-1 bg-gray-100 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              whileHover={{
                opacity: 1,
                scale: 1.05,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="absolute inset-0 h-full w-full rounded-lg bg-white divide-y border-neutral-500  divide-neutral-200"
            >
              {/* Item */}
              <div className="flex gap-2 p-4">
                <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  <span className="h-4 w-4 text-neutral-600 font-light text-[12px] text-center">
                    X
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-neutral-600 text-[8px]">
                    Aceternity UI Components
                  </p>
                  <p className="text-neutral-400 text-[8px] mt-1">
                    A collection of UI components
                  </p>
                </div>
              </div>
              {/* Item */}
              <div className="flex gap-2 p-4">
                <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  <span className="h-4 w-4 text-neutral-600 font-light text-[12px] text-center">
                    X
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-neutral-600 text-[8px]">
                    Aceternity UI Components
                  </p>
                  <p className="text-neutral-400 text-[8px] mt-1">
                    A collection of UI components
                  </p>
                </div>
              </div>
              {/* Item */}
              <div className="flex gap-2 p-4">
                <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  <span className="h-4 w-4 text-neutral-600 font-light text-[12px] text-center">
                    X
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-neutral-600 text-[8px]">
                    Aceternity UI Components
                  </p>
                  <p className="text-neutral-400 text-[8px] mt-1">
                    A collection of UI components
                  </p>
                </div>
              </div>
              {/* Item */}
              <div className="flex gap-2 p-4">
                <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  <span className="h-4 w-4 text-neutral-600 font-light text-[12px] text-center">
                    X
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-neutral-600 text-[8px]">
                    Aceternity UI Components
                  </p>
                  <p className="text-neutral-400 text-[8px] mt-1">
                    A collection of UI components
                  </p>
                </div>
              </div>
              {/* Item */}
              <div className="flex gap-2 p-4">
                <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  <span className="h-4 w-4 text-neutral-600 font-light text-[12px] text-center">
                    X
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-neutral-600 text-[8px]">
                    Aceternity UI Components
                  </p>
                  <p className="text-neutral-400 text-[8px] mt-1">
                    A collection of UI components
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
