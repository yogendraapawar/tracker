import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

/**
 * Props:
 * - trigger: ReactNode (button or any trigger element)
 * - title: string
 * - description: string
 * - children: ReactNode (content inside dialog/drawer)
 * - onCancel: function (optional, called when cancel is clicked on mobile)
 * - cancelText: string (optional, default "Cancel")
 * - contentClassName: string (optional, extra classes for content)
 */
export function DrawerDialogWrapper({
  trigger,
  title,
  description,
  children,
  contentClassName = "",
   open,
    onChange
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onChange}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className={cn("sm:max-w-[425px]", contentClassName)}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div className={cn("px-4", contentClassName)}>{children}</div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}