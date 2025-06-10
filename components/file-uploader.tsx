"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import Image from "next/image"

interface FileUploaderProps {
  onUploadComplete?: (url: string) => void
  folder?: string
  accept?: string
  maxSizeMB?: number
  className?: string
  showPreview?: boolean
}

export function FileUploader({
  onUploadComplete,
  folder,
  accept = "image/*",
  maxSizeMB = 5,
  className = "",
  showPreview = true,
}: FileUploaderProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`File size exceeds ${maxSizeMB}MB limit`)
      return
    }

    setError(null)
    setIsUploading(true)

    // Create preview for images
    if (file.type.startsWith("image/") && showPreview) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }

    try {
      // Create form data
      const formData = new FormData()
      formData.append("file", file)
      if (folder) formData.append("folder", folder)

      // Upload to blob storage
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Upload failed")
      }

      // Call the callback with the URL
      if (onUploadComplete) {
        onUploadComplete(data.url)
      }
    } catch (err) {
      console.error("Upload error:", err)
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-4">
        <Input
          type="file"
          accept={accept}
          onChange={handleFileChange}
          disabled={isUploading}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
        />
        {isUploading && <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />}
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      {showPreview && preview && !isUploading && (
        <div className="relative h-40 w-40 overflow-hidden rounded-md border">
          <Image src={preview || "/placeholder.svg"} alt="Upload preview" fill className="object-cover" />
        </div>
      )}
    </div>
  )
}
