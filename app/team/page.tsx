"use client"

import { motion } from "framer-motion"
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const teamMembers = [
  {
    name: "Proph3t",
    role: "Co-founder",
    twitter: "https://x.com/metaproph3t",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1765191997/proph3t_yg2ldb.jpg",
  },
  {
    name: "Nallok",
    role: "Co-Founder",
    twitter: "https://x.com/metanallok",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1765191997/nallock-dp_wkbstp.jpg",
  },
  {
    name: "Pileks",
    role: "Founding Engineer",
    twitter: "https://x.com/pileks",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1765191997/pileks-dp_v2w1kj.jpg",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 25,
    },
  },
}

export default function TeamPage() {
  return (
    <main className="relative min-h-screen px-6 py-10 flex flex-col overflow-hidden">
      <div className="fixed inset-0 z-0 bg-background" />

      <DottedGlowBackground
        className="pointer-events-none fixed inset-0 z-0"
        opacity={0.8}
        gap={16}
        radius={1.8}
        colorLightVar="--color-neutral-400"
        glowColorLightVar="--color-primary"
        colorDarkVar="--color-neutral-600"
        glowColorDarkVar="--color-primary"
        backgroundOpacity={0.1}
        speedMin={0.2}
        speedMax={1.2}
        speedScale={1}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-4xl w-full"
      >
        {/* Back Button */}
        <motion.div variants={itemVariants} className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </motion.div>

        {/* Page Title */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Meet the Team</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            The brilliant minds building the future of MetaDAO
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {teamMembers.map((member) => (
            <motion.a
              key={member.name}
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div
                className="relative overflow-hidden rounded-3xl bg-card p-6 transition-all duration-300"
                style={{
                  boxShadow: "var(--card-shadow)",
                }}
              >
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="relative mb-4">
                    <div
                      className="w-32 h-32 rounded-2xl overflow-hidden bg-secondary p-2"
                      style={{
                        boxShadow: "var(--icon-shadow)",
                      }}
                    >
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      style={{
                        boxShadow: "var(--card-glow)",
                      }}
                    />
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>

                  {/* Twitter Handle */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span className="text-xs">@{member.twitter.split("/").pop()}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </main>
  )
}
