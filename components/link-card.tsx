"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { LottieIcon } from "./lottie-icon"
import type { LottieIconName } from "@/lib/lottieIcons"
import { useState } from "react"

interface LinkCardProps {
  title: string
  description?: string
  href: string
  icon?: LucideIcon
  lottieIcon?: LottieIconName
}

export function LinkCard({ title, description, href, icon: Icon, lottieIcon }: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const isExternalLink = href.startsWith("http")

  return (
    <motion.a
      href={href}
      target={isExternalLink ? "_blank" : "_self"}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      className="group relative flex flex-row items-center gap-4 rounded-3xl px-5 py-4 overflow-hidden bg-[#ffe5e5] border border-[#ffd5d5] hover:border-[#ffc5c5] transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
        {lottieIcon ? (
          <LottieIcon name={lottieIcon} size={32} trigger="hover" isHovered={isHovered} />
        ) : Icon ? (
          <Icon className="h-8 w-8 text-[#ff5555]" strokeWidth={2} />
        ) : null}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-2xl font-bold text-black italic font-serif leading-tight">{title}</h3>
        {description && <p className="text-sm text-[#ff5555] mt-1 leading-relaxed">{description}</p>}
      </div>
    </motion.a>
  )
}
