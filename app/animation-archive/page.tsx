import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import { Tweet } from "react-tweet"

// Cache this page for 24 hours
export const revalidate = 86400

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

function TweetSkeleton() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[550px] border border-gray-200 rounded-lg p-4 bg-white animate-pulse">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-gray-200" />
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-32" />
          </div>
        </div>
        <div className="space-y-2 mb-3">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
        <div className="h-64 bg-gray-200 rounded" />
      </div>
    </div>
  )
}

function TweetCard({ id }: { id: string }) {
  return (
    <div className="flex justify-center">
      <Suspense fallback={<TweetSkeleton />}>
        <Tweet id={id} />
      </Suspense>
    </div>
  )
}

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

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {animationTweetIds.map((id) => (
              <TweetCard key={id} id={id} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center gap-6 md:gap-8">
            {clipsTweetIds.map((id) => (
              <TweetCard key={id} id={id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
