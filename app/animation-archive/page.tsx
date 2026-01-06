"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { CustomTweetCard } from "@/components/custom-tweet-card"
import { METADAO_TWEETS } from "@/data/metadao-tweets"

export default function AnimationArchivePage() {
  return (
    <main className="relative min-h-screen px-4 py-8 md:py-12 bg-[#F5F1E8]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {METADAO_TWEETS.map((tweet) => (
            <CustomTweetCard key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </div>
    </main>
  )
}
