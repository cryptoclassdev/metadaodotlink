"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Play } from "lucide-react"
import Image from "next/image"

interface VideoCardProps {
  className?: string
}

export function VideoCard({ className }: VideoCardProps) {
  const videoUrl = "https://www.youtube.com/watch?v=B_-bh-CWgiE" // Replace with actual MetaDAO video URL
  const videoId = "B_-bh-CWgiE" // Extract video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  const handleClick = () => {
    window.open(videoUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className={cn("relative h-full", className)}>
      <motion.div
        className="relative h-full rounded-3xl overflow-hidden flex flex-col"
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="bg-[#ff4949] px-6 py-2 text-center flex-shrink-0">
          <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">WTF is MetaDAO?</h3>
          <p className="text-white text-[10px] sm:text-xs font-medium leading-tight">
            MetaDAO replaces token voting with prediction markets for governance.
          </p>
        </div>

        <div className="flex-1 relative group cursor-pointer overflow-hidden" onClick={handleClick}>
          <Image
            src={thumbnailUrl || "/placeholder.svg"}
            alt="WTF is MetaDAO Video Thumbnail"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-xl"
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
