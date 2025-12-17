"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FutardsCardProps {
  className?: string
}

export function FutardsCard({ className }: FutardsCardProps) {
  return (
    <Link
      href="https://www.futard.io/"
      target="_blank"
      rel="noopener noreferrer"
      className={cn("block h-full", className)}
    >
      <motion.div
        className="relative h-full rounded-3xl overflow-hidden flex flex-col min-h-[280px] max-h-[320px]"
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Red header section */}
        <div className="bg-[#FF6B6B] px-4 py-3 flex items-center gap-3">
          <div className="text-white text-2xl">🧩</div>
          <h3 className="text-white text-2xl font-bold">Futards</h3>
        </div>

        {/* Black content area with actual Futards screenshot image */}
        <div className="flex-1 rounded-b-3xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/di6zkr8of/image/upload/v1766003442/futard-ss_c1eb59.png"
            alt="Futards"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </Link>
  )
}
