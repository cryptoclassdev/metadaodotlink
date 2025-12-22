"use client"

import { cn } from "@/lib/utils"
import { VideoPlayer } from "@/components/ui/video-player"
import { motion } from "framer-motion"
import { useState } from "react"

interface VideoCardProps {
  className?: string
}

export function VideoCard({ className }: VideoCardProps) {
  const videoId = "B_-bh-CWgiE"
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={cn("relative h-full", className)}>
      <motion.div
        className="relative h-full rounded-3xl overflow-hidden flex flex-col shadow-lg"
        whileHover={
          !isModalOpen
            ? {
                scale: 1.02,
                y: -4,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }
            : undefined
        }
        whileTap={!isModalOpen ? { scale: 0.98 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ pointerEvents: isModalOpen ? "none" : "auto" }}
      >
        <div className="bg-[#ff4949] px-6 py-2 text-center flex-shrink-0">
          <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">WTF is MetaDAO ICO?</h3>
        </div>

        <div className="flex-1 overflow-hidden">
          <VideoPlayer
            thumbnailUrl={thumbnailUrl}
            videoUrl={embedUrl}
            className="h-full w-full rounded-none shadow-none"
            isOpen={isModalOpen}
            onOpenChange={setIsModalOpen}
          />
        </div>
      </motion.div>
    </div>
  )
}
