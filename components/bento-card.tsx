"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BentoCardProps {
  title: string
  subtitle?: string
  icon?: string
  href: string
  variant?: "primary" | "secondary"
  size?: "small" | "medium" | "large" | "compact"
  className?: string
  isExternal?: boolean
}

export function BentoCard({
  title,
  subtitle,
  icon,
  href,
  variant = "primary",
  size = "medium",
  className,
  isExternal = true,
}: BentoCardProps) {
  const isPrimary = variant === "primary"
  const isSmall = size === "small"
  const isCompact = size === "compact"
  const hasSubtitle = Boolean(subtitle)

  // Height logic: compact with subtitle gets more space for clean look
  const getHeight = () => {
    if (isCompact && hasSubtitle) return "h-[4.5rem]"
    if (isCompact) return "h-[3rem]"
    if (isSmall) return "h-[4rem]"
    return "h-[5rem]"
  }

  return (
    <motion.div
      className={cn("relative rounded-3xl overflow-hidden", className)}
      initial={{ scale: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="block h-full"
      >
        <div
          className={cn(
            "relative rounded-3xl overflow-hidden transition-all duration-300 flex items-center justify-center shadow-lg h-full",
            isPrimary ? "bg-[#ff4949] text-white" : "bg-white border-2 border-gray-200",
            getHeight(),
            // Consistent horizontal padding, vertical padding scales with size
            isCompact ? "px-4 py-2" : isSmall ? "px-4 py-2.5" : "px-5 py-3",
          )}
        >
          <div className={cn(
            "flex items-center justify-center",
            // Consistent gap that scales with size variant
            isCompact ? "gap-2" : isSmall ? "gap-2.5" : "gap-3"
          )}>
            {icon && (
              <div className={cn(
                "relative flex-shrink-0 flex items-center justify-center",
                // Icon container sizes aligned with text sizes
                isCompact && hasSubtitle ? "w-5 h-5" : isCompact ? "w-4 h-4" : isSmall ? "w-5 h-5" : "w-6 h-6"
              )}>
                <Image
                  src={icon || "/placeholder.svg"}
                  alt={`${title} icon`}
                  width={isCompact && hasSubtitle ? 20 : isCompact ? 16 : isSmall ? 20 : 24}
                  height={isCompact && hasSubtitle ? 20 : isCompact ? 16 : isSmall ? 20 : 24}
                  className="object-contain"
                />
              </div>
            )}
            <div className={cn(
              "flex flex-col text-center",
              // Align text to start when subtitle present for better visual balance
              hasSubtitle ? "items-start text-left" : "items-center"
            )}>
              <h3 className={cn(
                "font-bold leading-tight",
                isCompact && hasSubtitle ? "text-base" : isCompact ? "text-lg" : isSmall ? "text-xl" : "text-2xl"
              )}>{title}</h3>
              {subtitle && (
                <p className={cn(
                  "opacity-80 leading-tight whitespace-nowrap",
                  isCompact ? "text-[11px] mt-0" : "text-xs mt-0.5"
                )}>{subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
