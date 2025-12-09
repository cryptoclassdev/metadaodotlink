import { DottedGlowBackground } from "@/components/ui/dotted-glow-background"
import { TweetWrapper } from "@/components/tweet-wrapper"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const tweetIds = [
  "1983975628803051689",
  "1981442070062694695",
  "1978906017812369891",
  "1976364501088796746",
  "1973826339435393470",
  "1971645084736045448",
  "1968753291254521897",
  "1966219386991378932",
  "1963665540838211884",
  "1961134346942963935",
  "1958672887117742217",
  "1956023221545001212",
  "1953804344983502976",
  "1952792331641602261",
  "1951017233922269491",
  "1948822243896877403",
]

export default function AnimationArchivePage() {
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
              Explore MetaDAO&apos;s collection of animations and visual content
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tweetIds.map((id) => (
            <div key={id} className="flex justify-center">
              <TweetWrapper id={id} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
