// Placeholder JSON structure - will be replaced with actual Lottie JSON
const placeholderIcon = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "icon",
  ddd: 0,
  assets: [],
  layers: [],
}

export const lottieIconPaths = {
  web: "/lottie/web-icon.json",
  team: "/lottie/team-icon.json",
  docs: "/lottie/docs-icon.json",
  calendar: "/lottie/calendar-icon.json",
  video: "/lottie/video-icon.json",
  community: "/lottie/community-icon.json",
  blog: "/lottie/blog-icon.json",
  brand: "/lottie/brand-icon.json",
}

export type LottieIconName = keyof typeof lottieIconPaths
