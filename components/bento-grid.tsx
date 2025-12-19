"use client"

import { BentoCard } from "./bento-card"
import { CalendarCard } from "./calendar-card"
import { VideoCard } from "./video-card"
import { TeamCard } from "./team-card"
import { AnimationsCard } from "./animations-card"
import { FutardsCard } from "./futards-card"

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Column 1: metadao.fi (5rem) + ICO Calendar (21rem) + Blog/Docs (4rem) */}
      {/* Total: 5 + 1 + 21 + 1 + 4 = 32rem */}
      <div className="flex flex-col gap-4 sm:order-none">
        <div className="order-2 sm:order-none">
          <BentoCard
            title="metadao.fi"
            subtitle="The OG site"
            icon="/home-icons/metadaologo-icon.png"
            href="https://metadao.fi/"
            variant="primary"
          />
        </div>
        <div className="order-3 sm:order-none">
          <CalendarCard className="h-[21rem]" />
        </div>
        <div className="grid grid-cols-2 gap-4 order-6 sm:order-none">
          <BentoCard
            title="Blog"
            icon="/home-icons/blog-icon.png"
            href="https://blog.metadao.fi/"
            variant="primary"
            size="small"
          />
          <BentoCard
            title="Docs"
            icon="/home-icons/docs-icon.png"
            href="https://docs.metadao.fi/"
            variant="primary"
            size="small"
          />
        </div>
      </div>

      {/* Column 2: VideoCard (12rem) + Futard Trade (5rem) + Futards (13rem) */}
      {/* Total: 12 + 1 + 5 + 1 + 13 = 32rem */}
      <div className="flex flex-col gap-4 sm:order-none">
        <div className="order-1 sm:order-none">
          <VideoCard className="h-[12rem]" />
        </div>
        <div className="order-[11] sm:order-none">
          <BentoCard
            title="Futard Trade"
            icon="/home-icons/futardtrade-icon.png"
            href="https://www.futard.trade/"
            variant="primary"
          />
        </div>
        <div className="order-[10] sm:order-none">
          <FutardsCard className="h-[13rem]" />
        </div>
      </div>

      {/* Column 3: Get Funded (5rem) + Animations (20rem) + Media (5rem) */}
      {/* Total: 5 + 1 + 20 + 1 + 5 = 32rem */}
      <div className="flex flex-col gap-4 sm:order-none">
        <div className="order-7 sm:order-none">
          <BentoCard
            title="Get Funded"
            icon="/home-icons/getfunded-icon.png"
            href="https://metadao.typeform.com/to/DxVVAxhC"
            variant="primary"
          />
        </div>
        <div className="order-5 sm:order-none">
          <AnimationsCard className="h-[20rem]" />
        </div>
        <div className="order-8 sm:order-none">
          <BentoCard title="Media" icon="/home-icons/media-icon.png" href="https://metadao.fi/" variant="primary" />
        </div>
      </div>

      {/* Column 4: Team (20rem) + Brand Kit (5rem) + Get Token (5rem) */}
      {/* Total: 20 + 1 + 5 + 1 + 5 = 32rem */}
      <div className="flex flex-col gap-4 sm:order-none">
        <div className="order-4 sm:order-none">
          <TeamCard className="h-[20rem]" />
        </div>
        <div className="order-9 sm:order-none">
          <BentoCard
            title="Brand Kit"
            icon="/home-icons/brandkit-icon.png"
            href="https://www.figma.com/design/7evoELIV2agMVOrfcKVUea/Brand-Kits---MetaDAO?node-id=10-989&t=Ia5gRyqXZMAykKpE-1"
            variant="primary"
          />
        </div>
        <div className="order-[12] sm:order-none">
          <BentoCard
            title="Get $META"
            icon="/home-icons/gettoken-icon.png"
            href="https://jup.ag/tokens/METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta"
            variant="primary"
          />
        </div>
      </div>
    </div>
  )
}
