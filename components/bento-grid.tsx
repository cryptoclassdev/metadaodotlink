"use client"

import { BentoCard } from "./bento-card"
import { CalendarCard } from "./calendar-card"
import { VideoCard } from "./video-card"
import { TeamCard } from "./team-card"
import { AnimationsCard } from "./animations-card"
import { FutardsCard } from "./futards-card"

export function BentoGrid() {
  return (
    <div className="flex flex-col md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Column 1: metadao.fi (4.5rem) + ICO Calendar (21.5rem) + Blog/Docs (4rem) */}
      {/* Total: 4.5 + 1 + 21.5 + 1 + 4 = 32rem */}
      <div className="contents md:flex md:flex-col md:gap-4">
        <div className="order-2 md:order-none">
          <BentoCard
            title="metadao.fi"
            subtitle="The OG site"
            icon="/home-icons/metadaologo-icon.png"
            href="https://metadao.fi/"
            variant="primary"
            size="compact"
          />
        </div>
        <div className="order-4 md:order-none">
          <CalendarCard className="h-[21.5rem]" />
        </div>
        <div className="grid grid-cols-2 gap-4 order-6 md:order-none">
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
      <div className="contents md:flex md:flex-col md:gap-4">
        <div className="order-1 md:order-none">
          <VideoCard className="h-[12rem]" />
        </div>
        <div className="order-[11] md:order-none">
          <BentoCard
            title="Futard Trade"
            icon="/home-icons/futardtrade-icon.png"
            href="https://www.futard.trade/"
            variant="primary"
          />
        </div>
        <div className="order-[10] md:order-none">
          <FutardsCard className="h-[13rem]" />
        </div>
      </div>

      {/* Column 3: Get Funded (5rem) + Animations (20rem) + Media (5rem) */}
      {/* Total: 5 + 1 + 20 + 1 + 5 = 32rem */}
      <div className="contents md:flex md:flex-col md:gap-4">
        <div className="order-7 md:order-none">
          <BentoCard
            title="Get Funded"
            icon="/home-icons/getfunded-icon.png"
            href="https://metadao.typeform.com/to/DxVVAxhC"
            variant="primary"
          />
        </div>
        <div className="order-5 md:order-none">
          <AnimationsCard className="h-[20rem]" />
        </div>
        <div className="order-8 md:order-none">
          <BentoCard
            title="Media"
            icon="/home-icons/media-icon.png"
            href="/media"
            variant="primary"
            isExternal={false}
          />
        </div>
      </div>

      {/* Column 4: Team (16.5rem) + 01resolved (4.5rem) + Brand Kit (4rem) + Get Token (4rem) */}
      {/* Total: 16.5 + 1 + 4.5 + 1 + 4 + 1 + 4 = 32rem */}
      <div className="contents md:flex md:flex-col md:gap-4">
        <div className="order-4 md:order-none">
          <TeamCard className="h-[16.5rem]" />
        </div>
        <div className="order-3 md:order-none">
          <BentoCard
            title="01resolved"
            subtitle="MetaDAO Analytics"
            icon="/home-icons/metadaologo-icon.png"
            href="https://www.01resolved.com/"
            variant="primary"
            size="compact"
          />
        </div>
        <div className="order-9 md:order-none">
          <BentoCard
            title="Brand Kit"
            icon="/home-icons/brandkit-icon.png"
            href="https://www.figma.com/design/q7sgxTkxcAo632Avjm6oz6/Brand-Kit?node-id=0-1&t=zHX7HIKhyPOkxLAD-1"
            variant="primary"
            size="small"
          />
        </div>
        <div className="order-[12] md:order-none">
          <BentoCard
            title="Get $META"
            icon="/home-icons/gettoken-icon.png"
            href="https://jup.ag/tokens/METAwkXcqyXKy1AtsSgJ8JiUHwGCafnZL38n3vYmeta"
            variant="primary"
            size="small"
          />
        </div>
      </div>
    </div>
  )
}
