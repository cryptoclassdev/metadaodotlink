"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
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
        className="relative h-full rounded-3xl overflow-hidden flex flex-col shadow-lg"
        whileHover={{
          scale: 1.02,
          y: -4,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="bg-[#ff4949] p-4 flex items-center justify-center gap-3 flex-shrink-0">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src="/home-icons/futards-icon.png"
              alt="Futards icon"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold text-white">Futards</h3>
        </div>

        {/* Image Section */}
        <div className="flex-1 min-h-0 relative bg-white overflow-hidden">
          <Image
            src="https://res.cloudinary.com/di6zkr8of/image/upload/v1766155361/futard-ss_c1eb59.png"
            alt="Futards"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </Link>
  )
}
