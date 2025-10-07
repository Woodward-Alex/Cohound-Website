// components/country-selector.tsx
"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const countries = [
  { value: "us", label: "United States", code: "+1" },
  { value: "ca", label: "Canada", code: "+1" },
  { value: "gb", label: "United Kingdom", code: "+44" },
  { value: "au", label: "Australia", code: "+61" },
  { value: "de", label: "Germany", code: "+49" },
  { value: "fr", label: "France", code: "+33" },
  { value: "it", label: "Italy", code: "+39" },
  { value: "es", label: "Spain", code: "+34" },
  { value: "nl", label: "Netherlands", code: "+31" },
  { value: "be", label: "Belgium", code: "+32" },
  { value: "ch", label: "Switzerland", code: "+41" },
  { value: "at", label: "Austria", code: "+43" },
  { value: "se", label: "Sweden", code: "+46" },
  { value: "no", label: "Norway", code: "+47" },
  { value: "dk", label: "Denmark", code: "+45" },
  { value: "fi", label: "Finland", code: "+358" },
  { value: "ie", label: "Ireland", code: "+353" },
  { value: "nz", label: "New Zealand", code: "+64" },
  { value: "jp", label: "Japan", code: "+81" },
  { value: "kr", label: "South Korea", code: "+82" },
  { value: "sg", label: "Singapore", code: "+65" },
  { value: "mx", label: "Mexico", code: "+52" },
  { value: "br", label: "Brazil", code: "+55" },
  { value: "ar", label: "Argentina", code: "+54" },
  { value: "cl", label: "Chile", code: "+56" },
  { value: "co", label: "Colombia", code: "+57" },
  { value: "pe", label: "Peru", code: "+51" },
  { value: "za", label: "South Africa", code: "+27" },
  { value: "in", label: "India", code: "+91" },
  { value: "cn", label: "China", code: "+86" },
  { value: "th", label: "Thailand", code: "+66" },
  { value: "id", label: "Indonesia", code: "+62" },
  { value: "my", label: "Malaysia", code: "+60" },
  { value: "ph", label: "Philippines", code: "+63" },
  { value: "vn", label: "Vietnam", code: "+84" },
]

interface CountrySelectorProps {
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function CountrySelector({
  value,
  onValueChange,
  placeholder = "Select country...",
  className,
}: CountrySelectorProps) {
  const [open, setOpen] = React.useState(false)

  const selectedCountry = countries.find(country => country.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
        >
          {selectedCountry ? selectedCountry.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="Search countries..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.label.toLowerCase()}
                  onSelect={() => {
                    onValueChange(country.value === value ? "" : country.value)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === country.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <span className="flex-1">{country.label}</span>
                  <span className="text-xs text-muted-foreground">{country.code}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}