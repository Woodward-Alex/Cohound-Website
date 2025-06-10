"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function TestUploadPage() {
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const file = formData.get("file") as File

    if (!file || file.size === 0) {
      setError("Please select a file")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      setUploadedUrl(data.url)
    } catch (err) {
      console.error("Upload error:", err)
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Test File Upload</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="file" className="block text-sm font-medium">
                Select a file to upload
              </label>
              <input
                type="file"
                id="file"
                name="file"
                className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              <input type="hidden" name="folder" value="test" />
            </div>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Uploading..." : "Upload"}
            </Button>

            {error && <p className="text-sm text-destructive">{error}</p>}

            {uploadedUrl && (
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium">Uploaded successfully:</p>
                <div className="overflow-auto p-2 bg-muted rounded-md">
                  <code className="text-xs break-all">{uploadedUrl}</code>
                </div>
                {uploadedUrl.match(/\.(jpg|jpeg|png|gif|webp)$/i) && (
                  <div className="relative h-40 w-full mt-2 border rounded-md overflow-hidden">
                    <Image
                      src={uploadedUrl || "/placeholder.svg"}
                      alt="Uploaded file"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
