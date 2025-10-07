// components/logo.tsx
import Image from "next/image"

interface LogoProps {
  height?: number
  width?: number
  iconOnly?: boolean
  iconOnlyWhite?: boolean
  className?: string
}

export function Logo({ height = 150, width = 75, iconOnly = false, iconOnlyWhite = false, className = "" }: LogoProps) {
  if (iconOnlyWhite) {
    return (
      <div className={`flex items-center ${className}`}>
        <Image
          src="/favicon-color.png"
          alt="Cohound"
          height={34}
          width={34}
          className="object-contain filter brightness-0 invert"
        />
      </div>
    )
  }

  if (iconOnly) {
    return (
      <div className={`flex items-center ${className}`}>
        <Image
          src="/favicon-color.png"
          alt="Cohound"
          height={height}
          width={width}
          className="object-contain"
        />
      </div>
    )
  }

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/favicon-color.png"
        alt="Cohound"
        height={height}
        width={width}
        className="object-contain"
      />
      {!iconOnly && (
        <span className="ml-2 text-lg font-bold">Cohound</span>
      )}
    </div>
  )
}