"use client"

import { motion } from "framer-motion"
import { ProfileSection } from "./profile-section"
import { LinkCard } from "./link-card"
import { SocialFooter } from "./social-footer"
import { Globe, Youtube, Users, Calendar, FileCode, ImageIcon } from "lucide-react"
import { DottedGlowBackground } from "./ui/dotted-glow-background"

const links = [
  {
    title: "metadao.fi",
    description: "MetaDAO Official Website",
    href: "https://metadao.fi/",
    icon: Globe,
  },
  {
    title: "Docs",
    description: "Official Documentation",
    href: "https://docs.metadao.fi/",
    icon: FileCode,
  },
  {
    title: "ICO Calendar",
    description: "Know about upcoming ICOs",
    href: "https://www.idontbelieve.link/",
    icon: Calendar,
  },
  {
    title: "Team",
    description: "",
    href: "/team",
    icon: Users,
  },
  {
    title: "Animation Archive",
    description: "Animations on MetaDAO",
    href: "https://resources.example.com",
    icon: Youtube,
  },
  {
    title: "Futards",
    description: "Community of Futards",
    href: "https://www.futard.io/",
    icon: Users,
  },
  {
    title: "Brands and Assets",
    description: "Official Brand and Assets",
    href: "https://www.futard.io/",
    icon: ImageIcon,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
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

export function LinkBioPage() {
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
        className="relative z-10 mx-auto max-w-[400px] w-full flex flex-col flex-1 justify-between"
      >
        <motion.div variants={itemVariants} className="pt-2">
          <ProfileSection
            name="MetaDAO"
            imageUrl="https://res.cloudinary.com/di6zkr8of/image/upload/v1765164915/metadao-square-logo_gyzikc.avif"
          />
        </motion.div>

        <motion.div className="space-y-3 py-8" variants={containerVariants}>
          {links.map((link) => (
            <motion.div key={link.title} variants={itemVariants}>
              <LinkCard {...link} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="pb-2">
          <SocialFooter />
        </motion.div>
      </motion.div>
    </main>
  )
}
