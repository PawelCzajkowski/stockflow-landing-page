"use client";

import * as React from "react";
import ButtonMui, { type ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Tailwind/CSS-utility driven visual system for our Button
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-medium !normal-case leading-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-transform transition-colors",
  {
    variants: {
      variant: {
        default:
          "!bg-primary !text-primary-foreground hover:!bg-primary/90 shadow-soft [transition:var(--transition-smooth)]",
        destructive:
          "!bg-destructive !text-destructive-foreground hover:!bg-destructive/90",
        outline:
          "border border-border bg-card text-foreground shadow-soft hover:shadow-medium",
        secondary:
          "!bg-secondary !text-secondary-foreground hover:!bg-secondary/80",
        ghost: "hover:!bg-accent hover:!text-accent-foreground",
        link: "!text-primary underline-offset-4 hover:underline",
        hero:
          "bg-gradient-primary !text-primary-foreground shadow-soft hover:shadow-medium transform hover:scale-105 [transition:var(--transition-bounce)]",
        cta:
          "!bg-primary !text-primary-foreground hover:!bg-primary/90 shadow-medium hover:shadow-large [transition:var(--transition-smooth)]",
      },
      size: {
        default: "rounded-xl",
        sm: "rounded-lg text-sm",
        lg: "rounded-xl text-lg tracking-wide",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends Omit<MuiButtonProps, "variant" | "size" | "color" | "classes">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, children, disableElevation = true, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);

    const muiSize: MuiButtonProps["size"] = size === "sm" ? "small" : size === "lg" ? "large" : "medium";

    const commonProps = {
      ref,
      className: classes,
      disableElevation,
      disableRipple: true,
      disableFocusRipple: true,
      color: "inherit" as const,
      variant: "text" as const,
      size: muiSize,
      ...props,
    } as const;

    if (asChild) {
      return (
        <ButtonMui {...commonProps}>
          <Slot>{children}</Slot>
        </ButtonMui>
      );
    }

    return <ButtonMui {...commonProps}>{children}</ButtonMui>;
  }
);
Button.displayName = "Button";

export default Button;
