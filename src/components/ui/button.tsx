import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-900/90 shadow",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 shadow-sm",
        outline:
          "border border-input text-slate-900 hover:bg-slate-50 hover:text-slate-900 shadow-sm",
        ghost:
          "text-slate-900 bg-transparent hover:bg-slate-100 hover:text-slate-900",
      },
      size: {
        md: "px-5 py-2.5 text-sm rounded-lg",
        xs: "px-4 py-2 text-xs rounded-md",
        sm: "px-4 py-2 text-sm rounded-md",
        lg: "px-7 py-3 text-base rounded-[10px]",
        xl: "px-8 py-3.5 text-lg rounded-xl",
        xs_icon: "px-2 py-2 rounded-md",
        sm_icon: "px-2 py-2 rounded-md",
        md_icon: "px-2.5 py-2.5 rounded-lg",
        lg_icon: "px-3 py-3 rounded-[10px]",
        xl_icon: "px-3.5 py-3.5 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
