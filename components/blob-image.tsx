"use client"

import Image from "next/image"
import { useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface BlobImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
}

export function BlobImage({ src, alt, width, height, className = "", fill = false }: BlobImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setError(true)
  }

  if (error) {
    return (
      <div
        className={`bg-muted flex items-center justify-center text-muted-foreground ${className}`}
        style={{ width, height }}
      >
        Image not available
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {isLoading && <Skeleton className="absolute inset-0 z-10" style={{ width: "100%", height: "100%" }} />}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={`${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}
