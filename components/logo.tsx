"use client"
import Image from "next/image"
// import { useTheme } from "next-themes" // Removed useTheme
// import { useState, useEffect } from "react" // Removed useState, useEffect

interface LogoProps {
  textOnly?: boolean
  iconOnly?: boolean
  className?: string
  width?: number
  height?: number
}

export function Logo({ textOnly = false, iconOnly = false, iconOnlyWhite = false, iconOnlyBackground = false, className = "", width = 40, height = 40 }: LogoProps) {
  // const { resolvedTheme } = useTheme() // Removed theme logic
  // const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) return null // Removed mounting logic

  if (iconOnly) {
    const iconSrc = "/favicon-color.png" // Default to color icon
    return (
      <Image
        src={iconSrc || "/placeholder.svg"}
        alt="CoHound Logo Icon"
        width={width}
        height={height}
        className={className}
      />
    )
  }

  // Handle white icon case

  if (iconOnlyWhite) {
    const iconSrc = "/favicon-white.png" // Default to white icon
    return (
      <Image
        src={iconSrc || "/placeholder.svg"}
        alt="CoHound Logo Icon White" // Updated alt text
        width={width}
        height={height} // Updated height for consistency
        className={className}
      />
    )
  }

   if (iconOnlyBackground) {
    // Handle icon with background case
    const iconSrc = "/logo-color.png" // Default to white icon
    return (
      <Image
        src={iconSrc || "/placeholder.svg"}
        alt="CoHound Logo Icon Background" // Updated alt text
        width={width}
        height={height} // Updated height for consistency
        className={className}
      />
    )
  }


  if (textOnly) {
    const textOnlySrc = "/logo-text-only.png" // Default to color text-only logo
    return (
      <Image
        src={textOnlySrc || "/placeholder.svg"}
        alt="CoHound Text Logo"
        width={width * 3} // Adjust as needed
        height={height}
        className={className}
      />
    )
  }

  const logoSrc = "/logo-color.png" // Default to full color logo
  return (
    <Image
      src={logoSrc || "/placeholder.svg"}
      alt="CoHound Logo"
      width={width * 3.5} // Adjust for aspect ratio of full logo
      height={height * 1.5} // Adjust for aspect ratio of full logo
      className={className}
    />
  )
}
