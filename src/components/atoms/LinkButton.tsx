"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const underlineVariants = {
  initial: { width: "0%" },
  hover: { width: "100%" },
};

export default function UnderlineButton({
  text,
  underlineColor,
  textColor,
  size,
}: {
  text: string;
  underlineColor: string;
  textColor: string;
  size?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="hover"
      className="relative cursor-pointer"
    >
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`text-[${size ? size : '18px' }] pb-[2px] group`}
        style={{ color: textColor }}
      >
        {text}
      </button>

      <motion.div
        variants={underlineVariants}
        style={{ backgroundColor: underlineColor }}
        className={cn(
          'absolute h-[1px] w-full transition-all ease-out ',
          isHovered ? "left-0 duration-200" : "right-0 duration-[10ms]"
        )}
      />
    </motion.div>
  );
}
