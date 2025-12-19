"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
      <motion.h1
        className="text-3xl sm:text-xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4 whitespace-nowrap font-serif"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-black">MetaDAO: </span>
        <span className="italic text-[#ff4949]">A New Way to Fundraise</span>
      </motion.h1>
    </div>
  )
}
