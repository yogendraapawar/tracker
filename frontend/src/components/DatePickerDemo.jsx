"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyH4 } from "./ui/typography";

export default function DatePickerDemo({ defaultDate }) {
  const [date, setDate] = React.useState(defaultDate);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal text-lg hover:bg-transparent bg-transparent border-none shadow-none focus:bg-transparent active:bg-transparent",
            !date && "text-muted-foreground bg-transparent"
          )}
        >
          <CalendarIcon />

          <TypographyH4>
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </TypographyH4>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
