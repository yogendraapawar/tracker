// components/ui/dialog-wrapper.js

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog"
  
  export function DialogWrapper({
    triggerLabel = "Open",
    title,
    description,
    children,
    className,
    open,
    onChange
  }) {
    return (
      <Dialog open={open} onOpenChange={onChange}>
        <DialogTrigger className="px-4 py-2 bg-primary text-white rounded">
          {triggerLabel}
        </DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent className={className}>
          {(title || description) && (
            <DialogHeader>
              {title && <DialogTitle>{title}</DialogTitle>}
              {description && <DialogDescription>{description}</DialogDescription>}
            </DialogHeader>
          )}
          {children}
        </DialogContent>
      </Dialog>
    )
  }
  