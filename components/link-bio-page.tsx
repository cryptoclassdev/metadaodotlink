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
    <main className="relative min-h-screen bg-white px-4 sm:px-6 py-8 sm:py-12 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute"
          style={{
            left: "-191px",
            top: "801px",
            width: "1010px",
            height: "1010px",
          }}
        >
          <Image
            src="/images/metadaologo-vector.png"
            alt=""
            width={1010}
            height={1010}
            className="object-contain opacity-20"
            priority
          />
        </div>
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
