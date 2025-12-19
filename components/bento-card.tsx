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
    <motion.div
      className={cn("relative", className)}
      initial={{ scale: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div
          className={cn(
            "relative rounded-3xl overflow-hidden transition-all duration-300 flex items-center justify-center shadow-lg h-full",
            isPrimary ? "bg-[#ff4949] text-white" : "bg-white border-2 border-gray-200",
            isSmall ? "h-[4rem]" : "h-[5rem]",
            "p-4",
          )}
        >
          <div className="flex items-center justify-center gap-3">
            {icon && (
              <div className="relative w-6 h-6 flex-shrink-0">
                <Image
                  src={icon || "/placeholder.svg"}
                  alt={`${title} icon`}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            )}
            <h3 className={cn("font-bold", isSmall ? "text-xl" : "text-2xl")}>{title}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
