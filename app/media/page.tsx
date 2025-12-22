"use client"

import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const mediaTweetIds = [
  "1948822243896877403",
  "1951017233922269491",
  "1953804344983502976",
  "1956023221545001212",
  "1958672887117742217",
]

const firstColumn = mediaTweetIds.slice(0, 2)
const secondColumn = mediaTweetIds.slice(2, 4)
const thirdColumn = mediaTweetIds.slice(4, 5)

const MediaColumn = (props: {
  className?: string
  tweetIds: string[]
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <div key={index} className="flex flex-col gap-6">
              {props.tweetIds.map((id) => (
                <motion.div
                  key={`${index}-${id}`}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12)",
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  className="rounded-3xl shadow-lg transition-all duration-300 bg-white overflow-hidden"
                >
                  <blockquote className="twitter-tweet" data-theme="light" data-align="center">
                    <a href={`https://twitter.com/MetaDAOProject/status/${id}`}>Tweet {id}</a>
                  </blockquote>
                </motion.div>
              ))}
            </div>
          )),
        ]}
      </motion.div>
    </div>
  )
}

const BlurIn = ({ word, className, duration = 1 }: { word: string; className?: string; duration?: number }) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  }

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={defaultVariants}
      className={className}
    >
      {word}
    </motion.h1>
  )
}

export default function MediaPage() {
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const loadTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const checkTweetsRendered = () => {
      if (!containerRef.current) return false

      const iframes = containerRef.current.querySelectorAll("iframe.twitter-tweet-rendered")
      return iframes.length >= mediaTweetIds.length
    }

    const loadTwitterWidgets = () => {
      if (window.twttr?.widgets) {
        window.twttr.widgets.load(containerRef.current).then(() => {
          setTimeout(() => {
            if (checkTweetsRendered()) {
              setIsLoading(false)
            } else {
              const checkInterval = setInterval(() => {
                if (checkTweetsRendered()) {
                  setIsLoading(false)
                  clearInterval(checkInterval)
                }
              }, 500)

              setTimeout(() => clearInterval(checkInterval), 15000)
            }
          }, 1000)
        })
        return
      }

      const script = document.createElement("script")
      script.src = "https://platform.twitter.com/widgets.js"
      script.async = true
      script.charset = "utf-8"
      script.onload = () => {
        if (window.twttr?.widgets) {
          window.twttr.widgets.load(containerRef.current).then(() => {
            setTimeout(() => {
              if (checkTweetsRendered()) {
                setIsLoading(false)
              } else {
                const checkInterval = setInterval(() => {
                  if (checkTweetsRendered()) {
                    setIsLoading(false)
                    clearInterval(checkInterval)
                  }
                }, 500)

                setTimeout(() => clearInterval(checkInterval), 15000)
              }
            }, 1000)
          })
        }
      }
      document.body.appendChild(script)
    }

    loadTwitterWidgets()

    loadTimeoutRef.current = setTimeout(() => {
      setIsLoading(false)
    }, 15000)

    return () => {
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current)
      }
    }
  }, [])

  return (
    <main className="relative min-h-screen px-4 py-8 md:py-12 bg-white">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Loader2 className="w-12 h-12 text-[#ff4949] animate-spin" />
              <div className="absolute inset-0 animate-ping">
                <Loader2 className="w-12 h-12 text-[#ff4949]/30" />
              </div>
            </div>
            <p className="text-gray-600 text-sm animate-pulse">Loading media archive...</p>
          </div>
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 md:mb-16">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 md:mb-12 group">
            <div className="w-10 h-10 rounded-full bg-[#ff4949] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">Back</span>
          </Link>

          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              <span className="text-[#ff4949] italic font-serif">Media</span>{" "}
              <span className="text-black font-serif">Archive</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-sm mx-auto leading-relaxed">
              MetaDAO in the news and media
            </p>
          </div>
        </div>

        <div
          className={`transition-opacity duration-500 ${isLoading ? "invisible opacity-0" : "visible opacity-100"}`}
          ref={containerRef}
        >
          <div className="relative">
            <div
              className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
              role="region"
              aria-label="Scrolling Media"
            >
              <MediaColumn tweetIds={firstColumn} duration={15} />
              <MediaColumn tweetIds={secondColumn} className="hidden md:block" duration={19} />
              <MediaColumn tweetIds={thirdColumn} className="hidden lg:block" duration={17} />
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-md z-10">
              <BlurIn
                word="Coming Soon"
                duration={1.5}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#ff4949] drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement | null) => Promise<void>
      }
    }
  }
}
