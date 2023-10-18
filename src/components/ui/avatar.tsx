import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";

const avatarVariants = cva(
  "flex items-center justify-center bg-blue-500 rounded-full",
  {
    variants: {
      size: {
        sm: "w-6 h-6",
        md: "w-10 h-10",
        lg: "w-14 h-14",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface AvatarInitialsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  children: React.ReactNode;
}

const AvatarInitials = React.forwardRef<HTMLDivElement, AvatarInitialsProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AvatarInitials.displayName = "AvatarInitials";

export { AvatarInitials };
