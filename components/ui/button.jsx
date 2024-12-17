import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        icon:
          "text-primary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        lemo: "text-base text-start transition duration-150 font-normal text-[#ECEFF4] border-[#4c566a] hover:text-[#88C0D0] py-[0.3rem] px-[1rem] border-[1px] hover:border-[#88C0D0] rounded-sm",
        linknot: "hover:text-[#88C0D0] gap-1 flex items-center hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] cursor-not-allowed",
        link: "hover:text-[#88C0D0] flex items-center hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0]"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-10 w-10",
        linkbtn: "py-[0.5rem] px-[0.6rem] h-9 rounded-sm"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }