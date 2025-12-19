"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BentoCardProps {
  title: string
  icon?: string
  href: string
  variant?: "primary" | "secondary"
  size?: "small" | "medium" | "large"
  className?: string
}

export function BentoCard({ title, icon, href, variant = "primary", size = "medium", className }: BentoCardProps) {
  const isPrimary = variant === "primary"
  const isSmall = size === "small"

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={cn("block", className)}>
      <motion.div
        className={cn(
          "relative rounded-3xl overflow-hidden transition-all duration-300 flex items-center justify-center shadow-lg",
          isPrimary ? "bg-[#ff4949] text-white" : "bg-white border-2 border-gray-200",
          isSmall ? "h-[4rem]" : "h-[5rem]",
          "p-4",
        )}
        whileHover={{
          scale: 1.02,
          y: -4,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          {icon && (
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src={icon || "/placeholder.svg"}
                alt={`${title} icon`}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
          )}
          <h3 className={cn("font-bold text-center", isSmall ? "text-xl" : "text-2xl")}>{title}</h3>
        </div>
      </motion.div>
    </Link>
  )
}
