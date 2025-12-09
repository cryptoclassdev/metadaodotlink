"use client"

import { useEffect, useRef } from "react"

export function TweetWrapper({ id }: { id: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.twttr?.widgets) {
      window.twttr.widgets.load(containerRef.current)
      return
    }

    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    script.charset = "utf-8"
    document.body.appendChild(script)

    return () => {
      // Cleanup is handled by Twitter's widget script
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <blockquote className="twitter-tweet" data-theme="light" data-align="center">
        <a href={`https://twitter.com/MetaDAOProject/status/${id}`}>Loading tweet...</a>
      </blockquote>
    </div>
  )
}

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement | null) => void
      }
    }
  }
}
