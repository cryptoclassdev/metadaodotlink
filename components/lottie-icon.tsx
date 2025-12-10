"use client"

import { useEffect, useRef, useState } from "react"
import { Player } from "@lordicon/react"
import { lottieIconPaths, type LottieIconName } from "@/lib/lottieIcons"

interface LottieIconProps {
  name: LottieIconName
  size?: number
  trigger?: "hover" | "click" | "loop" | "loop-on-hover" | "morph" | "morph-two-way"
  className?: string
  colors?: {
    primary?: string
    secondary?: string
  }
  stroke?: string | number
  state?: string
  isHovered?: boolean
}

export function LottieIcon({
  name,
  size = 32,
  trigger = "hover",
  className = "",
  colors,
  stroke = "bold",
  state,
  isHovered = false,
  ...props
}: LottieIconProps) {
  const playerRef = useRef<Player>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [iconData, setIconData] = useState<any>(null)
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false)

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile based on screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const fetchIconData = async () => {
      try {
        const response = await fetch(lottieIconPaths[name])
        if (!response.ok) {
          throw new Error(`Failed to load icon: ${name}`)
        }
        const data = await response.json()
        setIconData(data)
      } catch (error) {
        console.error(`[v0] Error loading Lottie icon "${name}":`, error)
        setHasError(true)
        setIsLoading(false)
      }
    }

    fetchIconData()
  }, [name])

  // Trigger animation on hover (desktop only)
  useEffect(() => {
    if (isHovered && playerRef.current && trigger === "hover" && !isMobile) {
      playerRef.current.playFromBeginning()
    }
  }, [isHovered, trigger, isMobile])

  useEffect(() => {
    if (isMobile && !hasAutoPlayed && playerRef.current && iconData && !isLoading) {
      playerRef.current.playFromBeginning()
      setHasAutoPlayed(true)
    }
  }, [isMobile, hasAutoPlayed, iconData, isLoading])

  // Handle loading complete
  const handleReady = () => {
    setIsLoading(false)
    setHasError(false)
  }

  // Handle errors
  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError || !iconData) {
    // Fallback to simple circle if icon fails to load
    return (
      <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
        <div className="w-full h-full rounded-full bg-gray-300 animate-pulse" />
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center justify-center relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ width: size, height: size }}>
          <div className="w-full h-full rounded-lg bg-gray-200 animate-pulse" />
        </div>
      )}
      <Player
        ref={playerRef}
        icon={iconData}
        size={size}
        trigger={trigger}
        colors={colors}
        stroke={stroke}
        state={state}
        onReady={handleReady}
        onError={handleError}
        {...props}
      />
    </div>
  )
}
