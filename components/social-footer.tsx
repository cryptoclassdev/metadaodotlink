"use client"

import { motion } from "framer-motion"
import { Github, Youtube } from "lucide-react"
import { TwitterIcon, TelegramIcon, DiscordIcon } from "./social-icons"

const socials = [
  { icon: Youtube, href: "https://youtube.com/@metadaoproject", label: "YouTube" },
  { icon: TwitterIcon, href: "https://x.com/MetaDAOProject", label: "Twitter" },
  { icon: TelegramIcon, href: "https://tg.metadao.fi", label: "Telegram" },
  { icon: DiscordIcon, href: "https://discord.com/invite/metadao", label: "Discord" },
  { icon: Github, href: "https://github.com/metaDAOproject", label: "GitHub" },
]

export function SocialFooter() {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6">
      <div className="flex items-center gap-4 sm:gap-6">
        {socials.map((social) => {
          const IconComponent = social.icon
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center text-[#ff4949] hover:text-[#ff3333] transition-colors"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
              <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
            </motion.a>
          )
        })}
      </div>

      <div className="text-center space-y-1">
        <p className="text-xs sm:text-sm text-gray-500">© 2025 metadao.link. All rights reserved</p>
        <p className="text-xs text-gray-400">Created with love ❤️ by theCommunication.link</p>
      </div>
    </div>
  )
}
