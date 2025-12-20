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
    role: "Co-Founder",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1765191997/proph3t_yg2ldb.jpg",
  },
  {
    name: "Nallok",
    role: "Co-Founder",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1765191997/nallock-dp_wkbstp.jpg",
  },
  {
    name: "Pileks",
    role: "Founding Engineer",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1765191997/pileks-dp_v2w1kj.jpg",
  },
  {
    name: "BlockchainFixesThis",
    role: "The Intern",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1766181399/the-engineer_gbodmu.jpg",
  },
]

export function TeamCard({ className }: TeamCardProps) {
  return (
    <Link href="/team" className={cn("block h-full", className)}>
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
        {/* Center-aligned header Section */}
        <div className="bg-[#ff4949] p-4 flex items-center justify-center gap-3">
          <div className="relative w-6 h-6 flex-shrink-0">
            <Image src="/home-icons/team-icon.png" alt="Team icon" width={24} height={24} className="object-contain" />
          </div>
          <h3 className="text-2xl font-bold text-white">Team</h3>
        </div>

        <div className="flex-1 bg-white p-4">
          <div className="grid grid-cols-2 gap-3 h-full">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden mb-2 flex-shrink-0">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <p className="font-semibold text-sm text-center text-gray-900 leading-tight">{member.name}</p>
                <p className="text-xs text-gray-600 text-center leading-tight mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
