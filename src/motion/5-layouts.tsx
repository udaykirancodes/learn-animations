import { motion } from "motion/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

export const Layouts = () => {
  const [current, setCurrent] = useState<Card | null>(null);
  const ref = useOutsideClick(() => setCurrent(null));
  return (
    <div className="py-10 bg-gray-100 min-h-screen relative">
      {current && (
        <div className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm "></div>
      )}
      {current && (
        <motion.div
          ref={ref || undefined}
          layoutId={current.title}
          className="h-[600px] fixed inset-0 z-20 w-72 m-auto bg-white rounded-2xl border border-neutral-200 p-4"
        >
          <motion.img
            layoutId={"image" + current.title}
            src={current.src}
            className="h-60 aspect-square rounded-2xl"
          />
          <div className="flex flex-col justify-center items-start">
            <div className="flex items-start justify-between py-4 gap-2 w-full">
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-bold text-xs tracking-tight text-black">
                  {current.title}
                </h2>
                <p className="text-[10px] text-neutral-500">
                  {current.description}
                </p>
              </div>
              <a className="px-2 py-1 bg-green-500 rounded-full text-white text-xs">
                {current.ctaText}
              </a>
            </div>

            <div className="h-auto overflow-auto ">{current.content()}</div>
          </div>
        </motion.div>
      )}

      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card, idx) => (
          <motion.button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              console.log(card);
              setCurrent({ ...card });
            }}
            layoutId={card.title}
            className="p-4 rounded-lg cursor-pointer flex justify-between items-center bg-white border-neutral-200"
          >
            <div className="flex gap-4 items-center ">
              <motion.img
                src={card.src}
                alt=""
                layoutId={"image" + card.title}
                className="h-20 aspect-square rounded-2xl"
              />
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-bold tracking-tight text-base text-black">
                  {card.title}
                </h2>
                <p className="text-[10px] text-neutral-500">
                  {card.description}
                </p>
              </div>
            </div>
            <div className="px-2 py-1 bg-green-500 rounded-full text-white text-xs">
              {card.ctaText}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    description: "lana Del Ray",
    title: "Summertime Sadness 1",
    src: "https://assets.aceternity.com/pro/car-1.jpg",
    ctaText: "Play",
    ctaLink: "https://google.com/",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maxime
          sed ex tempora consequatur iusto recusandae cumque, asperiores porro
          architecto qui rerum, minima sapiente commodi impedit. Eius hic
          incidunt voluptatem ad tempore est aliquid porro ipsum ratione
          aspernatur. Qui, culpa! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Suscipit quas eum fugiat aliquid voluptatem vitae
          cupiditate distinctio minima eaque, quam numquam ea modi odit error
          tempora laborum veniam quibusdam a! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Aperiam sunt nesciunt, consequuntur,
          itaque soluta corporis est dolore non nostrum inventore vitae ullam
          totam. Aut a non doloribus, deleniti quibusdam quasi?
        </p>
      );
    },
  },
  {
    description: "lana Del Ray",
    title: "Summertime Sadness 2",
    src: "https://assets.aceternity.com/pro/car-1.jpg",
    ctaText: "Play",
    ctaLink: "https://google.com/",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maxime
          sed ex tempora consequatur iusto recusandae cumque, asperiores porro
          architecto qui rerum, minima sapiente commodi impedit. Eius hic
          incidunt voluptatem ad tempore est aliquid porro ipsum ratione
          aspernatur. Qui, culpa! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Suscipit quas eum fugiat aliquid voluptatem vitae
          cupiditate distinctio minima eaque, quam numquam ea modi odit error
          tempora laborum veniam quibusdam a! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Aperiam sunt nesciunt, consequuntur,
          itaque soluta corporis est dolore non nostrum inventore vitae ullam
          totam. Aut a non doloribus, deleniti quibusdam quasi?
        </p>
      );
    },
  },
  {
    description: "lana Del Ray",
    title: "Summertime Sadness 3",
    src: "https://assets.aceternity.com/pro/car-1.jpg",
    ctaText: "Play",
    ctaLink: "https://google.com/",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maxime
          sed ex tempora consequatur iusto recusandae cumque, asperiores porro
          architecto qui rerum, minima sapiente commodi impedit. Eius hic
          incidunt voluptatem ad tempore est aliquid porro ipsum ratione
          aspernatur. Qui, culpa! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Suscipit quas eum fugiat aliquid voluptatem vitae
          cupiditate distinctio minima eaque, quam numquam ea modi odit error
          tempora laborum veniam quibusdam a! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Aperiam sunt nesciunt, consequuntur,
          itaque soluta corporis est dolore non nostrum inventore vitae ullam
          totam. Aut a non doloribus, deleniti quibusdam quasi?
        </p>
      );
    },
  },
];
