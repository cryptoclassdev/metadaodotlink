"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const BlurIn = ({ word, className, duration = 1 }: { word: string; className?: string; duration?: number }) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  }

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={defaultVariants}
      className={className}
    >
      {word}
    </motion.h1>
  )
}

export default function MediaPage() {
  return (
    <main className="relative min-h-screen px-4 py-8 md:py-12 bg-white">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 md:mb-16">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 md:mb-12 group">
            <div className="w-10 h-10 rounded-full bg-[#ff4949] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">Back</span>
          </Link>

          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              <span className="text-[#ff4949] italic font-serif">Media</span>{" "}
              <span className="text-black font-serif">Archive</span>
            </h1>
            
          </div>
        </div>

        <div className="flex items-center justify-center min-h-[400px]">
          <BlurIn
            word="Coming Soon"
            duration={1.5}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#ff4949] drop-shadow-lg"
          />
        </div>
      </div>
    </main>
  )
}
