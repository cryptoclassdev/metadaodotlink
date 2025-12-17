"use client"

import { DottedGlowBackground } from "@/components/ui/dotted-glow-background"
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
    <main className="relative min-h-screen px-4 py-8 md:py-12">
      <div className="fixed inset-0 z-0 bg-background" />

      <DottedGlowBackground
        className="pointer-events-none fixed inset-0 z-0 mask-radial-to-90% mask-radial-at-center"
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

      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
              <div className="absolute inset-0 animate-ping">
                <Loader2 className="w-12 h-12 text-primary/30" />
              </div>
            </div>
            <p className="text-muted-foreground text-sm animate-pulse">Loading animation archive...</p>
          </div>
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 md:mb-12 flex flex-col items-center gap-4">
          <Link
            href="/"
            className="self-start group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-3">Animation Archive</h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto text-pretty">
              Kollan and Proph3t&apos;s 2D adventures
            </p>
          </div>
        </div>

        <div className={`transition-opacity duration-500 ${isLoading ? "invisible opacity-0" : "visible opacity-100"}`}>
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Tales from MetaDAO</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Clips</h2>
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
