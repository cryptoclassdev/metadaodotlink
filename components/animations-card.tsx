"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface AnimationsCardProps {
  className?: string
}

export function AnimationsCard({ className }: AnimationsCardProps) {
  return (
    <Link href="/animation-archive" className={cn("block h-full", className)}>
      <motion.div
        className="relative h-full rounded-3xl overflow-hidden flex flex-col min-h-[280px] max-h-[400px]"
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Red Header Section */}
        <div className="bg-[#ff4949] p-4 flex items-center gap-3">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src="/home-icons/animation-icon.png"
              alt="Animations icon"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold text-white">Animations</h3>
        </div>

        {/* Twitter-style Post Content */}
        <div className="bg-white flex-1 p-4 flex flex-col">
          {/* Twitter Header */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#ff4949] flex items-center justify-center text-white font-bold">
                M
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm">MetaDAO</span>
                  <span className="text-yellow-500">✓</span>
                </div>
                <div className="text-gray-500 text-xs">
                  @MetaDAOProject · <span className="text-blue-500">Follow</span>
                </div>
              </div>
            </div>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>

          {/* Tweet Text */}
          <p className="text-sm text-gray-900 mb-3">Welcome to MetaDAO (A Futard Origin Story):</p>

          {/* Placeholder Image */}
          <div className="flex-1 relative rounded-2xl overflow-hidden bg-gray-100 min-h-[140px]">
            <Image
              src="https://res.cloudinary.com/di6zkr8of/image/upload/v1766143350/screenshot-metadao_csdqii.png"
              alt="MetaDAO Animation"
              fill
              className="object-cover"
            />
          </div>

          {/* Timestamp */}
          <div className="flex items-center justify-between mt-3">
            <span className="text-gray-500 text-xs">8:06 PM · Jul 25, 2025</span>
            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
              <span className="text-gray-400 text-xs">i</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
