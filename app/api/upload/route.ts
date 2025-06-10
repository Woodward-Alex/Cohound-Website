import { type NextRequest, NextResponse } from "next/server"
import { uploadToBlob } from "@/lib/blob-utils"

// This is a route handler, not a React component
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const folder = (formData.get("folder") as string) || undefined

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    const url = await uploadToBlob(file, folder)

    return NextResponse.json({ success: true, url })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}

// Add a GET handler to make the route previewable
export async function GET() {
  return NextResponse.json({
    message: "This is the upload API endpoint. Send a POST request with a file to upload to Blob storage.",
    usage: "POST /api/upload with multipart/form-data containing 'file' and optional 'folder'",
  })
}
