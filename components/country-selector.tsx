"use client"

import React from "react"

interface CountrySelectorProps {
  value: string
  onValueChange: (value: string) => void
}

export function CountrySelector({ value, onValueChange }: CountrySelectorProps) {
  return (
    <select value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className="w-full p-2 border rounded"
    >
      <option value="">Select Country</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="UK">United Kingdom</option>
      {/* Add more countries as needed */}
    </select>
  )
}