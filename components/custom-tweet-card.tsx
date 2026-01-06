"use client"

import type { TweetData } from "@/types/tweet"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Heart, MessageCircle, Repeat2, Share, BarChart3 } from "lucide-react"

interface CustomTweetCardProps {
  tweet: TweetData
}

export function CustomTweetCard({ tweet }: CustomTweetCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(tweet.engagement.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <article
      className="bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors overflow-hidden p-4"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {/* Profile Picture */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
            <Image src="/images/meta-icon.jpg" alt={tweet.author.name} fill className="object-cover" sizes="48px" />
          </div>

          {/* Author Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 flex-wrap">
              <Link
                href={tweet.tweetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[15px] text-gray-900 hover:underline truncate"
              >
                {tweet.author.name}
              </Link>
              {tweet.author.verified && (
                <svg
                  viewBox="0 0 22 22"
                  aria-label="Verified account"
                  className="w-[18px] h-[18px] flex-shrink-0"
                  fill="none"
                >
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="0-a"
                      x1="4.411"
                      x2="18.083"
                      y1="2.495"
                      y2="21.508"
                    >
                      <stop offset="0" stopColor="#f4e72a"></stop>
                      <stop offset=".539" stopColor="#cd8105"></stop>
                      <stop offset=".68" stopColor="#cb7b00"></stop>
                      <stop offset="1" stopColor="#f4ec26"></stop>
                      <stop offset="1" stopColor="#f4e72a"></stop>
                    </linearGradient>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="0-b"
                      x1="5.355"
                      x2="16.361"
                      y1="3.395"
                      y2="19.133"
                    >
                      <stop offset="0" stopColor="#f9e87f"></stop>
                      <stop offset=".406" stopColor="#e2b719"></stop>
                      <stop offset=".989" stopColor="#e2b719"></stop>
                    </linearGradient>
                  </defs>
                  <g clipRule="evenodd" fillRule="evenodd">
                    <path
                      d="M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.37-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
                      fill="url(#0-a)"
                    ></path>
                    <path
                      d="M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
                      fill="url(#0-b)"
                    ></path>
                    <path
                      d="M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z"
                      fill="#d18800"
                    ></path>
                  </g>
                </svg>
              )}
            </div>
            <span className="text-[15px] text-gray-500">@{tweet.author.username}</span>
          </div>
        </div>
      </div>

      {/* Tweet Text Content */}
      {tweet.content && (
        <p className="text-[15px] text-gray-900 mb-3 leading-normal whitespace-pre-wrap break-words">{tweet.content}</p>
      )}

      {/* Media Container */}
      {tweet.media && (
        <div className="mb-3 rounded-2xl overflow-hidden border border-gray-200 relative">
          {tweet.media.type === "youtube" ? (
            <div className="relative aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${tweet.media.youtubeId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ) : tweet.media.type === "video" ? (
            <div className="relative aspect-video bg-black group">
              <video
                src={tweet.media.url}
                poster={tweet.media.thumbnail}
                className="w-full h-full object-contain"
                controls
                preload="metadata"
              />
            </div>
          ) : (
            <Image
              src={tweet.media.url || "/placeholder.svg"}
              alt="Tweet media"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          )}
        </div>
      )}

      {/* Timestamp and Views */}
      <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-3">
        <time>{tweet.timestamp}</time>
        <span>·</span>
        <div className="flex items-center gap-1">
          <BarChart3 className="w-[14px] h-[14px]" />
          <span className="font-semibold text-gray-900">{formatNumber(tweet.engagement.views)}</span>
          <span>Views</span>
        </div>
      </div>

      {/* Engagement Buttons */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        {/* Reply */}
        <button
          onClick={() => window.open(tweet.tweetUrl, "_blank")}
          className="flex items-center gap-2 group hover:text-[#1D9BF0] transition-colors"
        >
          <div className="p-2 rounded-full group-hover:bg-[#1D9BF0]/10 transition-colors">
            <MessageCircle className="w-[18px] h-[18px]" />
          </div>
          <span className="text-[13px] text-gray-500 group-hover:text-[#1D9BF0]">
            {formatNumber(tweet.engagement.replies)}
          </span>
        </button>

        {/* Retweet */}
        <button
          onClick={() => window.open(tweet.tweetUrl, "_blank")}
          className="flex items-center gap-2 group hover:text-green-600 transition-colors"
        >
          <div className="p-2 rounded-full group-hover:bg-green-600/10 transition-colors">
            <Repeat2 className="w-[18px] h-[18px]" />
          </div>
          <span className="text-[13px] text-gray-500 group-hover:text-green-600">
            {formatNumber(tweet.engagement.retweets)}
          </span>
        </button>

        {/* Like */}
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 group transition-colors ${
            isLiked ? "text-pink-600" : "hover:text-pink-600"
          }`}
        >
          <div
            className={`p-2 rounded-full transition-colors ${
              isLiked ? "bg-pink-600/10" : "group-hover:bg-pink-600/10"
            }`}
          >
            <Heart className={`w-[18px] h-[18px] ${isLiked ? "fill-pink-600" : ""}`} />
          </div>
          <span
            className={`text-[13px] transition-colors ${
              isLiked ? "text-pink-600" : "text-gray-500 group-hover:text-pink-600"
            }`}
          >
            {formatNumber(likeCount)}
          </span>
        </button>

        {/* Share */}
        <button
          onClick={() => window.open(tweet.tweetUrl, "_blank")}
          className="flex items-center gap-2 group hover:text-[#1D9BF0] transition-colors"
        >
          <div className="p-2 rounded-full group-hover:bg-[#1D9BF0]/10 transition-colors">
            <Share className="w-[18px] h-[18px]" />
          </div>
        </button>
      </div>
    </article>
  )
}
