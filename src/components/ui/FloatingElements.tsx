"use client";

import { motion } from "framer-motion";

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-20 right-[10%] w-72 h-72 bg-devflow-green/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-[5%] w-96 h-96 bg-devflow-green/5 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Code Brackets */}
      <motion.div
        className="absolute top-[15%] left-[8%] text-devflow-green/20 text-6xl font-mono"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {"</>"}
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] right-[12%] text-devflow-green/15 text-5xl font-mono"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        {"{ }"}
      </motion.div>

      {/* Floating Dots Grid */}
      <motion.div
        className="absolute top-[40%] right-[5%] grid grid-cols-4 gap-2 opacity-20"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-devflow-green rounded-full" />
        ))}
      </motion.div>

      {/* Animated Lines */}
      <motion.div
        className="absolute top-[60%] left-[3%] w-20 h-px bg-gradient-to-r from-devflow-green/40 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          x: [0, 50, 100],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
