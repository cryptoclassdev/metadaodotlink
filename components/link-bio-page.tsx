"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { HeroSection } from "./hero-section"
import { BentoGrid } from "./bento-grid"
import { SocialFooter } from "./social-footer"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
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
    <main className="relative min-h-screen bg-white px-4 sm:px-6 py-8 sm:py-12 flex items-center justify-center">
      <div
        className="fixed pointer-events-none"
        style={{
          left: "-5%",
          top: "60%",
          width: "50vw",
          maxWidth: "1010px",
          height: "50vw",
          maxHeight: "1010px",
          zIndex: 0,
          opacity: 0.15,
        }}
      >
        <Image src="/images/metadaologo-vector.png" alt="" fill className="object-contain" priority />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-7xl w-full"
      >
        <motion.div variants={itemVariants}>
          <HeroSection />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-12">
          <BentoGrid />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 sm:mt-16">
          <SocialFooter />
        </motion.div>
      </motion.div>
    </main>
  )
}
