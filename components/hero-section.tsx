"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-3 sm:mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-black">MetaDAO: </span>
        <span className="italic text-[#ff4949] font-serif">A New Way to Fundraise</span>
      </motion.h1>
      <motion.p
        className="text-base sm:text-lg text-gray-700 max-w-2xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        MetaDAO replaces token voting with prediction markets for governance.
      </motion.p>
    </div>
  )
}
