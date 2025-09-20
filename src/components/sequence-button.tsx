import { motion, useAnimate } from "motion/react";

const loginMockApi = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
};

const SequenceButton = () => {
  const [scope, animate] = useAnimate();
  const handleOnClick = async () => {
    console.log("clicked");
    await animate("#button-text", { x: 150 }, { duration: 0.3 });
    await animate("#loader", { display: "block" });
    await animate("#button-text", { display: "none" });
    await loginMockApi();
    await animate("#loader", { display: "none" });
    // await animate("#button-text", { display: "block" });
    await animate(
      "#button-text",
      { x: [-150, 0], display: "block" },
      { duration: 0.3 }
    );
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-200">
      {/*  */}
      <div
        ref={scope}
        className="flex flex-col items-center justify-center bg-white"
      >
        <motion.button
          onClick={handleOnClick}
          className="px-4 py-2 w-[200px] flex-row flex items-center justify-center overflow-hidden cursor-pointer rounded-sm bg-blue-600 text-white text-base"
        >
          <span id="button-text">Login</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            id="loader"
            className={"flex items-center justify-center"}
            style={{
              display: "none",
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 6l0 -3" />
            <path d="M16.25 7.75l2.15 -2.15" />
            <path d="M18 12l3 0" />
            <path d="M16.25 16.25l2.15 2.15" />
            <path d="M12 18l0 3" />
            <path d="M7.75 16.25l-2.15 2.15" />
            <path d="M6 12l-3 0" />
            <path d="M7.75 7.75l-2.15 -2.15" />
          </motion.svg>
        </motion.button>
      </div>
    </div>
  );
};

export { SequenceButton };
