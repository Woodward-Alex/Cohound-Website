"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileUploader } from "@/components/file-uploader"
import { BlobImage } from "@/components/blob-image"
import { Badge } from "@/components/ui/badge"

export function DogProfileExample() {
  const [dogPhoto, setDogPhoto] = useState<string | null>(null)

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="flex flex-col items-center gap-4">
          {dogPhoto ? (
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <BlobImage src={dogPhoto} alt="Dog profile" fill className="object-cover" />
            </div>
          ) : (
            <div className="h-40 w-40 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
              No photo yet
            </div>
          )}

          <div className="w-full mt-4">
            <FileUploader folder="dogs" onUploadComplete={setDogPhoto} showPreview={false} />
          </div>

          <div className="text-center mt-4">
            <h3 className="text-xl font-bold">Max</h3>
            <p className="text-sm text-muted-foreground">Golden Retriever • 3 years</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="bg-green-50">
              {" "}
              {/* Removed dark:bg-green-900/20 */}
              Friendly
            </Badge>
            <Badge variant="outline" className="bg-blue-50">
              {" "}
              {/* Removed dark:bg-blue-900/20 */}
              Playful
            </Badge>
            <Badge variant="outline" className="bg-purple-50">
              {" "}
              {/* Removed dark:bg-purple-900/20 */}
              Outgoing
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button size="sm">Update Profile</Button>
      </CardFooter>
    </Card>
  )
}
