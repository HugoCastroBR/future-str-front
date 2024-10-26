'use client'
import { motion } from "framer-motion"

export default function Logo() {
  const text = "FUTURE"

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="text-center">
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            className="inline-block text-xl sm:text-2xl font-medium"
          >
            <motion.span
              className="inline-block relative"
              animate={{
                color: ["#FFF","#C0CAF5", "#7DCFFF", "#BB9AF7", "#4FD6BE", "#41A6B5", "#FF757F"]
              }}
              transition={{
                duration: 1800,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                textShadow: "0 0 1px currentColor, 0 0 1px currentColor",
              }}
            >
              {char}
            </motion.span>
          </motion.span>
        ))}
      </div>
    </div>
  )
}