import { useState } from "react"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function ToggleGroupDemo({ toggleItems }) {
  const [value, setValue] = useState("")

  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(val) => {
         setValue(val)
            }}
            className="gap-2 w-full"
            >
            {toggleItems.map(({ value, label }) => (
              <ToggleGroupItem
                key={value}
                value={value}
                aria-label={label}
                className="data-[state=on]:bg-primary data-[state=on]:text-white px-4 py-2 rounded-md border flex-1"
              >
                {label}
              </ToggleGroupItem>
            ))}
            </ToggleGroup>
          )
        }
