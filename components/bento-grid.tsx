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
      {/* Column 1: metadao.fi (6.25rem) + ICO Calendar (36.75rem) + Blog/Docs (5rem) */}
      {/* Total: 6.25 + 1 + 36.75 + 1 + 5 = 50rem */}
      <div className="flex flex-col gap-4">
        <BentoCard
          title="metadao.fi"
          icon="/home-icons/metadaologo-icon.png"
          href="https://metadao.fi/"
          variant="primary"
        />
        <CalendarCard className="h-[36.75rem]" />
        <div className="grid grid-cols-2 gap-4">
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

      {/* Column 2: VideoCard (20.875rem) + Futard Trade (6.25rem) + Futards (20.875rem) */}
      {/* Total: 20.875 + 1 + 6.25 + 1 + 20.875 = 50rem */}
      <div className="flex flex-col gap-4">
        <VideoCard className="h-[20.875rem]" />
        <BentoCard
          title="Futard Trade"
          icon="/home-icons/futardtrade-icon.png"
          href="https://metadao.fi/"
          variant="primary"
        />
        <FutardsCard className="h-[20.875rem]" />
      </div>

      {/* Column 3: Get Funded (6.25rem) + Animations (35.5rem) + Media (6.25rem) */}
      {/* Total: 6.25 + 1 + 35.5 + 1 + 6.25 = 50rem */}
      <div className="flex flex-col gap-4">
        <BentoCard
          title="Get Funded"
          icon="/home-icons/getfunded-icon.png"
          href="https://metadao.fi/"
          variant="primary"
        />
        <AnimationsCard className="h-[35.5rem]" />
        <BentoCard title="Media" icon="/home-icons/media-icon.png" href="https://metadao.fi/" variant="primary" />
      </div>

      {/* Column 4: Team (35.5rem) + Brand Kit (6.25rem) + Get Token (6.25rem) */}
      {/* Total: 35.5 + 1 + 6.25 + 1 + 6.25 = 50rem */}
      <div className="flex flex-col gap-4">
        <TeamCard className="h-[35.5rem]" />
        <BentoCard
          title="Brand Kit"
          icon="/home-icons/brandkit-icon.png"
          href="https://www.figma.com/design/7evoELIV2agMVOrfcKVUea/Brand-Kits---MetaDAO?node-id=10-989&t=Ia5gRyqXZMAykKpE-1"
          variant="primary"
        />
        <BentoCard
          title="Get Token"
          icon="/home-icons/gettoken-icon.png"
          href="https://metadao.fi/"
          variant="primary"
        />
      </div>
    </div>
  )
}
