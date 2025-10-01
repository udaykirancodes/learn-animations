import { motion } from "motion/react";
import { useState } from "react";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

function LayoutAnimation() {
  const [activeId, setActiveId] = useState("home");

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-3xl font-bold">Layout Animations</h1>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="relative cursor-pointer rounded-lg px-4 py-3 text-foreground transition-colors"
              onClick={() => setActiveId(item.id)}
            >
              {activeId === item.id && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 rounded-lg bg-green-500"
                  transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeId === item.id ? "text-white font-medium" : ""
                }`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LayoutAnimation;
