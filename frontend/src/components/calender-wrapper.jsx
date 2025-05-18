import React from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarWrapper({
  value,
  onChange,
  className = "rounded-md border shadow",
}) {
  return (
    <Calendar
      mode="single"
      selected={value}
      onSelect={onChange}
      className={className}
    />
  )
}
