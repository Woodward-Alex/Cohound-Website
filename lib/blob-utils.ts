import { put, del, list } from "@vercel/blob"
import { nanoid } from "nanoid"

/**
 * Upload a file to Vercel Blob storage
 * @param file The file to upload
 * @param folder Optional folder path (e.g., 'dogs', 'locations')
 * @returns The URL of the uploaded file
 */
export async function uploadToBlob(file: File, folder?: string): Promise<string> {
  try {
    const filename = folder ? `${folder}/${nanoid()}-${file.name}` : `${nanoid()}-${file.name}`

    const { url } = await put(filename, file, {
      access: "public",
    })

    return url
  } catch (error) {
    console.error("Error uploading to Blob:", error)
    throw new Error("Failed to upload file")
  }
}

/**
 * Delete a file from Vercel Blob storage
 * @param url The URL of the file to delete
 */
export async function deleteFromBlob(url: string): Promise<void> {
  try {
    await del(url)
  } catch (error) {
    console.error("Error deleting from Blob:", error)
    throw new Error("Failed to delete file")
  }
}

/**
 * List files in Vercel Blob storage
 * @param prefix Optional prefix to filter files (e.g., 'dogs/')
 * @returns Array of blob objects
 */
export async function listBlobFiles(prefix?: string) {
  try {
    const { blobs } = await list({ prefix })
    return blobs
  } catch (error) {
    console.error("Error listing Blob files:", error)
    throw new Error("Failed to list files")
  }
}
