"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Play, X } from "lucide-react"

interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  thumbnailUrl: string
  videoUrl: string
  title?: string
  description?: string
  aspectRatio?: "16/9" | "4/3" | "1/1"
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

const VideoPlayer = React.forwardRef<HTMLDivElement, VideoPlayerProps>(
  (
    {
      className,
      thumbnailUrl,
      videoUrl,
      title,
      description,
      aspectRatio = "16/9",
      isOpen: controlledIsOpen,
      onOpenChange,
      ...props
    },
    ref,
  ) => {
    const [internalIsOpen, setInternalIsOpen] = React.useState(false)
    const isModalOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen
    const setIsModalOpen = onOpenChange || setInternalIsOpen

    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        setIsModalOpen(false)
      }
    }

    React.useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsModalOpen(false)
        }
      }
      window.addEventListener("keydown", handleEsc)
      return () => {
        window.removeEventListener("keydown", handleEsc)
      }
    }, [setIsModalOpen])

    React.useEffect(() => {
      if (isModalOpen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
      }

      return () => {
        document.body.style.overflow = "auto"
      }
    }, [isModalOpen])

    const handleOpenModal = (e: React.MouseEvent | React.KeyboardEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsModalOpen(true)
    }

    const handleCloseModal = (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsModalOpen(false)
    }

    return (
      <>
        <div
          ref={ref}
          className={cn(
            "group relative cursor-pointer overflow-hidden",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className,
          )}
          style={{ aspectRatio }}
          onClick={handleOpenModal}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleOpenModal(e)
            }
          }}
          tabIndex={0}
          aria-label={`Play video: ${title || "video"}`}
          {...props}
        >
          <img
            src={thumbnailUrl || "/placeholder.svg"}
            alt={`Thumbnail for ${title || "video"}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
              <Play className="h-8 w-8 fill-white text-white" />
            </div>
          </div>

          {(title || description) && (
            <div className="absolute bottom-0 left-0 p-6">
              {title && <h3 className="text-2xl font-bold text-white">{title}</h3>}
              {description && <p className="mt-1 text-sm text-white/80">{description}</p>}
            </div>
          )}
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex animate-in fade-in-0 items-center justify-center bg-black"
            aria-modal="true"
            role="dialog"
            onClick={handleBackdropClick}
          >
            <button
              onClick={handleCloseModal}
              className="absolute right-4 top-4 z-[60] rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close video player"
              type="button"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={videoUrl}
                title={title || "video"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              ></iframe>
            </div>
          </div>
        )}
      </>
    )
  },
)
VideoPlayer.displayName = "VideoPlayer"

export { VideoPlayer }
