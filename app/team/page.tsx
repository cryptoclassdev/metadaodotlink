"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const teamMembers = [
  {
    name: "Proph3t",
    role: "Co-founder",
    twitter: "https://x.com/metaproph3t",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1765191997/proph3t_yg2ldb.jpg",
    description:
      "The visionary creator of MetaDAO and cult leader of the futards. He’s been trading in the market since before he could walk, made money shorting his own brother’s marriage and is rumored to be the illegitimate son of futarchy’s creator, Robin Hanson. Prior to founding MetaDAO, he worked as a professional trader and wrote some of the most used smart contracts in EVM..",
  },
  {
    name: "Nallok",
    role: "Co-Founder",
    twitter: "https://x.com/metanallok",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1765191997/nallock-dp_wkbstp.jpg",
    description:
      "The man who knows everyone, co-founder of MetaDAO and operations specialist. He’s been in crypto longer than most of the people he trades against have been alive, runs his own Solana validator and was once the largest long tail stablecoin market maker in the world. The people you trust call him for advice. ",
  },
  {
    name: "Pileks",
    role: "Founding Engineer",
    twitter: "https://x.com/pileks",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1765191997/pileks-dp_v2w1kj.jpg",
    description:
      "The guy that moves bytes on the blockchain; protocol engineer and glass chewing connoisseur. He met Proph3t and Nallok during a month-long spiritual retreat in the mountains. In a previous life he built B2B SaaS while teaching elementary school kids functional programming. The first software he shipped on a 3.5” floppy disk, his favourite language is LOGO and he likes turtles.",
  },
  {
    name: "BlockchainFixesThis",
    role: "The Intern",
    twitter: "https://x.com/pileks",
    image: "https://res.cloudinary.com/di6zkr8of/image/upload/v1766181399/the-engineer_gbodmu.jpg",
    description:
      "The twitter intern and lead shitposter of MetaDAO. His blend of style and sarcasm has been crafting the narrative on Solana long enough that AI now trains on his work. He once held a yellow belt in tae kwon do and is broadly considered to be the most qualified man in all crypto twitter to diagnose and stage your cancer.",
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

const cardRotations = [0.99, -1.61, 1.44]

export default function TeamPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <main className="relative min-h-screen px-6 py-10 flex flex-col bg-[#fafafa]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-6xl w-full"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff4949] text-white hover:bg-[#ff3333] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
            <span className="font-serif">Meet the </span>
            <span className="font-serif italic text-[#ff4949]">Team</span>
          </h1>
          <p className="text-black text-lg max-w-2xl mx-auto">The brilliant minds building the future of MetaDAO</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={member.name} variants={itemVariants} whileHover={{ y: -4 }} className="group">
              <div
                className="relative overflow-hidden rounded-2xl bg-white p-6 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  transform: `rotate(${cardRotations[index]}deg)`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "rotate(0deg)"
                  setHoveredCard(index)
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotate(${cardRotations[index]}deg)`
                  setHoveredCard(null)
                }}
              >
                <div className="mb-4">
                  <h3 className="text-3xl font-serif italic text-[#ff4949] mb-1">{member.name}</h3>
                  <p className="text-base text-black">{member.role}</p>
                </div>

                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-300 rounded-xl ${
                      hoveredCard === index ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                    style={{
                      backdropFilter: hoveredCard === index ? "blur(8px)" : "none",
                      backgroundColor: hoveredCard === index ? "rgba(100, 100, 100, 0.7)" : "transparent",
                    }}
                  >
                    <p className="text-white text-center text-sm leading-relaxed font-medium">{member.description}</p>
                  </div>

                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform z-10"
                  >
                    <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  )
}
