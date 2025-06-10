"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileUploader } from "@/components/file-uploader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DogProfileForm() {
  const [dogPhoto, setDogPhoto] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    description: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would submit the form data along with the dogPhoto URL
    console.log({ ...formData, photo: dogPhoto })
    // Implement your form submission logic
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Create Dog Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="dog-photo">Dog Photo</Label>
            <FileUploader folder="dogs" onUploadComplete={(url) => setDogPhoto(url)} accept="image/*" maxSizeMB={2} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Dog Name</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="breed">Breed</Label>
            <Input id="breed" name="breed" value={formData.breed} onChange={handleInputChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Age (years)</Label>
            <Input
              id="age"
              name="age"
              type="number"
              min="0"
              step="0.1"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full">
            Create Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
