import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const glassButtonVariants = cva(
  'group apple-glass-interactive bg-white/30 backdrop-blur-md text-neutral-900 font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/40 flex items-center gap-2 border border-white/20 hover:border-white/30',
  {
    variants: {
      variant: {
        default: 'text-neutral-900',
        destructive: 'text-red-500 border-red-500/20 hover:bg-red-500/10',
        outline: 'border-neutral-200/50 text-neutral-700 hover:bg-neutral-100/20',
        secondary: 'bg-neutral-100/50 text-neutral-800 hover:bg-neutral-200/50',
        ghost: 'hover:bg-neutral-100/20',
        link: 'text-neutral-900 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <Button
        asChild={asChild}
        className={cn(glassButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GlassButton.displayName = 'GlassButton';

export { GlassButton, glassButtonVariants };
