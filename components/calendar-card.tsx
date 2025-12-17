"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Calendar } from "lucide-react"

interface CalendarCardProps {
  className?: string
}

export function CalendarCard({ className }: CalendarCardProps) {
  return (
    <Link
      href="https://www.idontbelieve.link/"
      target="_blank"
      rel="noopener noreferrer"
      className={cn("block h-full", className)}
    >
      <motion.div
        className="relative h-full rounded-3xl overflow-hidden bg-[#ff4949] p-4 flex flex-col max-h-[380px]"
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-6 h-6 text-white" />
          <h3 className="text-xl font-bold text-white">ICO Calendar</h3>
        </div>

        <div className="flex-1 rounded-2xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/di6zkr8of/image/upload/v1766003442/ico-ss_bzltnf.png"
            alt="ICO Calendar"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </Link>
  )
}
