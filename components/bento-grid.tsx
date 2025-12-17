"use client"

import { BentoCard } from "./bento-card"
import { CalendarCard } from "./calendar-card"
import { VideoCard } from "./video-card"
import { TeamCard } from "./team-card"
import { AnimationsCard } from "./animations-card"
import { FutardsCard } from "./futards-card"

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
      {/* Column 1: metadao.fi + ICO Calendar + Docs/Blog */}
      <div className="flex flex-col gap-4">
        <BentoCard title="metadao.fi" icon="🏠" href="https://metadao.fi/" variant="primary" />
        <CalendarCard />
        <div className="grid grid-cols-2 gap-4">
          <BentoCard title="Blog" icon="📝" href="https://blog.metadao.fi/" variant="secondary" size="small" />
          <BentoCard title="Docs" icon="📄" href="https://docs.metadao.fi/" variant="secondary" size="small" />
        </div>
      </div>

      {/* Column 2: WTF video + Futards */}
      <div className="flex flex-col gap-4">
        <VideoCard />
        <FutardsCard />
      </div>

      {/* Column 3: Get Funded + Animations */}
      <div className="flex flex-col gap-4">
        <BentoCard title="Get Funded" icon="💰" href="https://metadao.fi/" variant="primary" />
        <AnimationsCard />
        <BentoCard title="Media" icon="▶️" href="https://metadao.fi/" variant="primary" />
      </div>

      {/* Column 4: Team + Brand Kit + Get Token */}
      <div className="flex flex-col gap-4">
        <TeamCard />
        <BentoCard
          title="Brand Kit"
          icon="🎨"
          href="https://www.figma.com/design/7evoELIV2agMVOrfcKVUea/Brand-Kits---MetaDAO?node-id=10-989&t=Ia5gRyqXZMAykKpE-1"
          variant="primary"
        />
        <BentoCard title="Get Token" icon="⭕" href="https://metadao.fi/" variant="primary" />
      </div>
    </div>
  )
}
