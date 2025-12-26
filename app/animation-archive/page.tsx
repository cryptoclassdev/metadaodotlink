"use client"

import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const animationTweetIds = [
  "1948822243896877403",
  "1951017233922269491",
  "1953804344983502976",
  "1956023221545001212",
  "1958672887117742217",
  "1961134346942963935",
  "1963665540838211884",
  "1966219386991378932",
  "1968753291254521897",
  "1971645084736045448",
  "1973826339435393470",
  "1976364501088796746",
  "1978906017812369891",
  "1981442070062694695",
  "1983975628803051689",
]

const clipsTweetIds = ["1952792331641602261"]

const allTweetIds = [...animationTweetIds, ...clipsTweetIds]

export default function AnimationArchivePage() {
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const loadTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const checkTweetsRendered = () => {
      if (!containerRef.current) return false

      const iframes = containerRef.current.querySelectorAll("iframe.twitter-tweet-rendered")
      return iframes.length === allTweetIds.length
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
    <main className="relative min-h-screen px-4 py-8 md:py-12 bg-[#F5F1E8]">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F5F1E8]/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Loader2 className="w-12 h-12 text-[#ff4949] animate-spin" />
              <div className="absolute inset-0 animate-ping">
                <Loader2 className="w-12 h-12 text-[#ff4949]/30" />
              </div>
            </div>
            <p className="text-gray-600 text-sm animate-pulse">Loading animation archive...</p>
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
              <span className="text-[#ff4949] italic font-serif">Animation</span>{" "}
              <span className="text-black font-serif">Archive</span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl">Proph3t & Kollan&apos;s 2D adventures</p>
          </div>
        </div>

        <div
          className={`transition-opacity duration-500 ${isLoading ? "invisible opacity-0" : "visible opacity-100"}`}
          ref={containerRef}
        >
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {animationTweetIds.map((id) => (
                <div key={id} className="flex justify-center">
                  <blockquote className="twitter-tweet" data-theme="light" data-align="center">
                    <a href={`https://twitter.com/MetaDAOProject/status/${id}`}>Tweet {id}</a>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center gap-6 md:gap-8">
              {clipsTweetIds.map((id) => (
                <div key={id} className="flex justify-center">
                  <blockquote className="twitter-tweet" data-theme="light" data-align="center">
                    <a href={`https://twitter.com/MetaDAOProject/status/${id}`}>Tweet {id}</a>
                  </blockquote>
                </div>
              ))}
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
