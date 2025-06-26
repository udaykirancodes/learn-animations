import { IconRocket } from "@tabler/icons-react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type React from "react";
import { useRef, useState } from "react";
export function Tutorial4() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgrounds = ["#343434", "#00193b", "#05291c"];
  const [background, setBackground] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    const finalval = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[finalval]);
  });

  return (
    <motion.div
      ref={ref}
      style={{
        background: background,
      }}
      animate={{
        background,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-col gap-10 max-w-4xl mx-auto py-40">
        {features.map((feature, idx) => (
          <Card feature={feature} key={idx} />
        ))}
      </div>
    </motion.div>
  );
}

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  );
  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.5, 1, 0.5]
  );
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  useMotionValueEvent(blur, "change", (latest) => console.log(latest));
  return (
    <div ref={ref} className="grid grid-cols-2 gap-20 items-center py-40">
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale: scale,
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-lg text-neutral-400">{feature.description}</p>
      </motion.div>
      <motion.div style={{ y: translateContent, opacity: opacityContent }}>
        {feature.content}
      </motion.div>
    </div>
  );
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With our state of the art AI, you can generate untra realistic images in not time at all.",
    content: (
      <div>
        <img
          src="https://assets.aceternity.com/pro/car-1.jpg"
          alt="Car"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With our state of the art AI, you can generate untra realistic images in not time at all.",
    content: (
      <div>
        <img
          src="https://assets.aceternity.com/pro/car-1.jpg"
          alt="Car"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With our state of the art AI, you can generate untra realistic images in not time at all.",
    content: (
      <div>
        <img
          src="https://assets.aceternity.com/pro/car-1.jpg"
          alt="Car"
          className="rounded-lg"
        />
      </div>
    ),
  },
];
