"use client"

import { TwitterTweetEmbed } from "react-twitter-embed"
import { useState } from "react"

export function TweetWrapper({ id }: { id: string }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className="w-full max-w-[550px] mx-auto">
      {isLoading && (
        <div className="w-full h-[400px] rounded-xl bg-secondary/50 backdrop-blur-sm border border-border flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            <p className="text-sm text-muted-foreground">Loading tweet...</p>
          </div>
        </div>
      )}

      {hasError && (
        <div className="w-full h-[400px] rounded-xl bg-secondary/50 backdrop-blur-sm border border-border flex items-center justify-center p-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">Unable to load tweet</p>
            <a
              href={`https://twitter.com/MetaDAOProject/status/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              View on Twitter/X
            </a>
          </div>
        </div>
      )}

      <div className={isLoading || hasError ? "hidden" : "block"}>
        <TwitterTweetEmbed
          tweetId={id}
          options={{
            theme: "light",
            width: "100%",
            align: "center",
            conversation: "none",
            cards: "visible",
            lang: "en",
          }}
          placeholder={
            <div className="w-full h-[400px] rounded-xl bg-secondary/50 backdrop-blur-sm border border-border flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          }
          onLoad={() => {
            console.log("[v0] Tweet loaded:", id)
            setIsLoading(false)
          }}
          // @ts-ignore - onError exists but not in types
          onError={(error: any) => {
            console.error("[v0] Tweet load error:", id, error)
            setIsLoading(false)
            setHasError(true)
          }}
        />
      </div>
    </div>
  )
}
