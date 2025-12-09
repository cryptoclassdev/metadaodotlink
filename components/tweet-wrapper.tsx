"use client"

import { TwitterTweetEmbed } from "react-twitter-embed"

export function TweetWrapper({ id }: { id: string }) {
  return (
    <div className="w-full max-w-[550px] mx-auto">
      <TwitterTweetEmbed tweetId={id} />
    </div>
  )
}
