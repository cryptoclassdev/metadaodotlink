"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Play } from "lucide-react"

interface VideoCardProps {
  className?: string
}

export function VideoCard({ className }: VideoCardProps) {
  const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual MetaDAO video URL

  const handleClick = () => {
    window.open(videoUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className={cn("relative h-full", className)}>
      <motion.div
        className="relative h-full rounded-3xl overflow-hidden flex flex-col max-h-[280px]"
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="bg-[#ff4949] px-6 py-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">WTF is MetaDAO?</h3>
          <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
            MetaDAO replaces token voting with prediction markets for governance.
          </p>
        </div>

        <div
          className="flex-1 bg-[#f5f5f0] flex items-center justify-center relative group cursor-pointer min-h-[140px]"
          onClick={handleClick}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
          <motion.div
            className="relative z-10 w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Play className="w-8 h-8 text-gray-400 ml-1" fill="currentColor" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
