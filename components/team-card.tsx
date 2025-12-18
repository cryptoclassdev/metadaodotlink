"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface TeamCardProps {
  className?: string
}

const teamMembers = [
  {
    name: "Proph3t",
    role: "Co-founder",
    image: "/images/544291433-18043960274659947-5766591717842883293-n.jpg",
    twitter: "https://x.com/proph3t",
  },
  {
    name: "Nallok",
    role: "Co-founder",
    image: "/professional-headshot-portrait-minimal.jpg",
    twitter: "https://x.com/nallok",
  },
]

export function TeamCard({ className }: TeamCardProps) {
  return (
    <Link href="/team" className={cn("block h-full", className)}>
      <motion.div
        className="relative h-full rounded-3xl overflow-hidden bg-[#ff4949] p-4 flex flex-col min-h-[320px]"
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image src="/home-icons/team-icon.png" alt="Team icon" width={32} height={32} className="object-contain" />
          </div>
          <h3 className="text-2xl font-bold text-white">Team</h3>
        </div>

        <div className="flex-1 rounded-2xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/di6zkr8of/image/upload/v1766003442/team-member-ss_v4tsnw.png"
            alt="Team Members"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </Link>
  )
}
