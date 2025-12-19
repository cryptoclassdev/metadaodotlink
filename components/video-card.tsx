"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { VideoPlayer } from "@/components/ui/video-player"

interface VideoCardProps {
  className?: string
}

export function VideoCard({ className }: VideoCardProps) {
  const videoId = "B_-bh-CWgiE"
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`

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

        <div className="flex-1 overflow-hidden">
          <VideoPlayer
            thumbnailUrl={thumbnailUrl}
            videoUrl={embedUrl}
            className="h-full w-full rounded-none shadow-none"
          />
        </div>
      </motion.div>
    </div>
  )
}
