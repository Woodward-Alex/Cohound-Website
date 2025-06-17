"use client"
import Image from "next/image"
// import { useTheme } from "next-themes" // Removed useTheme
// import { useState, useEffect } from "react" // Removed useState, useEffect

interface LogoProps {
  textOnly?: boolean
  iconOnly?: boolean
  iconOnlyWhite?: boolean
  iconOnlyBackground?: boolean
  className?: string
  width?: number
  height?: number
}

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Renders the CoHound logo with various options for display.
 *
 * @param {object} props - The properties for the logo component

/*******  92f77712-dc39-4277-a205-77c6902d0b9d  *******/


export function Logo({ 
  textOnly = false, 
  iconOnly = false, 
  iconOnlyWhite = false, 
  iconOnlyBackground = false, 
  className = "", 
  width = 24,  // Default to a more standard size
  height = 24 
}: LogoProps) {
  // Standard sizes for different variants
  const baseSize = iconOnlyWhite ? 24 : 32
  const mobileSize = Math.min(width, height, baseSize)
  const desktopSize = Math.max(width, height, baseSize)

  if (iconOnly) {
    return (
      <div className={`relative ${className}`} style={{ width: `${mobileSize}px`, height: `${mobileSize}px` }}>
        <Image
          src="/favicon-color.png"
          alt="Cohound Logo"
          fill
          className="object-contain" // Ensures image stays within bounds
          sizes={`(max-width: 768px) ${mobileSize}px, ${desktopSize}px`}
        />
      </div>
    )
  }

  // Handle white icon case

   if (iconOnlyWhite) {
    return (
      <div className={`relative ${className}`} style={{ width: `${mobileSize}px`, height: `${mobileSize}px` }}>
        <Image
          src="/favicon-white.png"
          alt="Cohound White Logo"
          fill
          className="object-contain"
          sizes={`(max-width: 768px) ${mobileSize}px, ${desktopSize}px`}
        />
      </div>
    )
  }

  // Handle background icon case

    if (iconOnlyBackground) {
    return (
      <div className={`relative ${className}`} style={{ width: `${mobileSize}px`, height: `${mobileSize}px` }}>
        <Image
          src="/logo-color.png"
          alt="CoHound Icon Only"
          fill
          className="object-contain"
          sizes={`(max-width: 768px) ${mobileSize}px, ${desktopSize}px`}
        />
      </div>
    )
  }

  if (textOnly) {
    return (
      <div className={`relative ${className}`} style={{ width: `${mobileSize}px`, height: `${mobileSize}px` }}>
        <Image
          src="/logo-text-only.png"
          alt="CoHound Logo TextOnly Icon"
          fill
          className="object-contain"
          sizes={`(max-width: 768px) ${mobileSize}px, ${desktopSize}px`}
        />
      </div>
    )
  }



  const logoSrc = "/logo-color.png" // Default to full color logo
  return (
    <Image
      src={logoSrc || "/placeholder.svg"}
      alt="CoHound Placebholder Logo"
      width={width * 3.5} // Adjust for aspect ratio of full logo
      height={height * 1.5} // Adjust for aspect ratio of full logo
      className={className}
    />
  )
}


