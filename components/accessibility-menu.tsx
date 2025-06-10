"use client"

import { useState } from "react"
import { Settings, Eye, Type } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Slider } from "@/components/ui/slider"

export function AccessibilityMenu() {
  const [fontSize, setFontSize] = useState(100)
  const [contrast, setContrast] = useState(100)

  const applyFontSize = (size: number) => {
    setFontSize(size)
    document.documentElement.style.setProperty("--font-size-modifier", `${size}%`)
  }

  const applyContrast = (value: number) => {
    setContrast(value)
    document.documentElement.style.setProperty("--contrast-modifier", `${value}%`)
  }

  const resetAccessibility = () => {
    setFontSize(100)
    setContrast(100)
    document.documentElement.style.setProperty("--font-size-modifier", "100%")
    document.documentElement.style.setProperty("--contrast-modifier", "100%")
  }

  return (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Accessibility options">
                <Settings className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Accessibility Options</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Accessibility Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <div className="p-2">
            <div className="flex items-center mb-2">
              <Type className="mr-2 h-4 w-4" />
              <span className="text-sm">Text Size: {fontSize}%</span>
            </div>
            <Slider
              value={[fontSize]}
              min={80}
              max={150}
              step={10}
              onValueChange={(value) => applyFontSize(value[0])}
              className="mb-4"
            />
          </div>

          <div className="p-2">
            <div className="flex items-center mb-2">
              <Eye className="mr-2 h-4 w-4" />
              <span className="text-sm">Contrast: {contrast}%</span>
            </div>
            <Slider
              value={[contrast]}
              min={80}
              max={120}
              step={10}
              onValueChange={(value) => applyContrast(value[0])}
              className="mb-4"
            />
          </div>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={resetAccessibility}>Reset to Default</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
