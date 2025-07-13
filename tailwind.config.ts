import type { Config } from "tailwindcss";
import { designTokens } from "./src/lib/design-tokens";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px", // Optimized for premium viewing
      },
    },
    extend: {
      // Premium Spacing Scale - 8px grid system
      spacing: designTokens.spacing,
      // Premium Typography Scale
      fontSize: {
        // Micro text - Legal, footnotes
        micro: [designTokens.typography.scale.micro.fontSize, {
          lineHeight: designTokens.typography.scale.micro.lineHeight,
          letterSpacing: designTokens.typography.scale.micro.letterSpacing,
          fontWeight: designTokens.typography.scale.micro.fontWeight,
        }],
        // Caption - Metadata, labels
        caption: [designTokens.typography.scale.caption.fontSize, {
          lineHeight: designTokens.typography.scale.caption.lineHeight,
          letterSpacing: designTokens.typography.scale.caption.letterSpacing,
          fontWeight: designTokens.typography.scale.caption.fontWeight,
        }],
        // Body Small - Secondary text
        'body-sm': [designTokens.typography.scale.bodySmall.fontSize, {
          lineHeight: designTokens.typography.scale.bodySmall.lineHeight,
          letterSpacing: designTokens.typography.scale.bodySmall.letterSpacing,
          fontWeight: designTokens.typography.scale.bodySmall.fontWeight,
        }],
        // Body - Primary reading text
        body: [designTokens.typography.scale.body.fontSize, {
          lineHeight: designTokens.typography.scale.body.lineHeight,
          letterSpacing: designTokens.typography.scale.body.letterSpacing,
          fontWeight: designTokens.typography.scale.body.fontWeight,
        }],
        // Subheading - Card titles, subsections
        subheading: [designTokens.typography.scale.subheading.fontSize, {
          lineHeight: designTokens.typography.scale.subheading.lineHeight,
          letterSpacing: designTokens.typography.scale.subheading.letterSpacing,
          fontWeight: designTokens.typography.scale.subheading.fontWeight,
        }],
        // Heading - Section titles, page headers
        heading: [designTokens.typography.scale.heading.fontSize, {
          lineHeight: designTokens.typography.scale.heading.lineHeight,
          letterSpacing: designTokens.typography.scale.heading.letterSpacing,
          fontWeight: designTokens.typography.scale.heading.fontWeight,
        }],
        // Display - Hero sections, major headlines
        display: [designTokens.typography.scale.display.fontSize, {
          lineHeight: designTokens.typography.scale.display.lineHeight,
          letterSpacing: designTokens.typography.scale.display.letterSpacing,
          fontWeight: designTokens.typography.scale.display.fontWeight,
        }],
      },
      // Premium Font Families
      fontFamily: {
        sans: designTokens.typography.fontFamily.sans,
        mono: designTokens.typography.fontFamily.mono,
      },
      
      // Premium Color System
      colors: {
        // Brand Colors
        brand: designTokens.colors.brand.primary,
        secondary: designTokens.colors.secondary,
        accent: designTokens.colors.accent,
        success: designTokens.colors.success,
        warning: designTokens.colors.warning,
        error: designTokens.colors.error,
        neutral: designTokens.colors.neutral,
        
        // Owner-specific colors (maintained for avatar system)
        'nils-blue': {
          50: 'hsl(210, 100%, 97%)',
          100: 'hsl(210, 100%, 93%)',
          200: 'hsl(210, 100%, 86%)',
          300: 'hsl(210, 100%, 78%)',
          400: 'hsl(210, 100%, 70%)',
          500: designTokens.colors.accent[500], // Unified with accent
          600: 'hsl(210, 100%, 56%)',
          700: 'hsl(210, 100%, 48%)',
          800: 'hsl(210, 100%, 40%)',
          900: 'hsl(210, 100%, 32%)',
        },
        'thuan-red': {
          50: 'hsl(0, 100%, 97%)',
          100: 'hsl(0, 100%, 93%)',
          200: 'hsl(0, 100%, 87%)',
          300: 'hsl(0, 100%, 80%)',
          400: 'hsl(0, 89%, 73%)',
          500: designTokens.colors.error[500], // Unified with error
          600: 'hsl(0, 84%, 60%)',
          700: 'hsl(0, 73%, 52%)',
          800: 'hsl(0, 70%, 45%)',
          900: 'hsl(0, 62%, 38%)',
        },
        
        // Legacy shadcn/ui color mappings (for compatibility)
        'nils-blue': {
          50: 'hsl(210, 100%, 97%)',
          100: 'hsl(210, 100%, 93%)',
          200: 'hsl(210, 100%, 86%)',
          300: 'hsl(210, 100%, 78%)',
          400: 'hsl(210, 100%, 70%)',
          500: designTokens.colors.accent[500],
          600: 'hsl(210, 100%, 56%)',
          700: 'hsl(210, 100%, 48%)',
          800: 'hsl(210, 100%, 40%)',
          900: 'hsl(210, 100%, 32%)',
        },
        'thuan-red': {
          50: 'hsl(0, 100%, 97%)',
          100: 'hsl(0, 100%, 93%)',
          200: 'hsl(0, 100%, 87%)',
          300: 'hsl(0, 100%, 80%)',
          400: 'hsl(0, 89%, 73%)',
          500: designTokens.colors.error[500],
          600: 'hsl(0, 84%, 60%)',
          700: 'hsl(0, 73%, 52%)',
          800: 'hsl(0, 70%, 45%)',
          900: 'hsl(0, 62%, 38%)',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'icon-blog': {
          DEFAULT: "hsl(var(--icon-blog))",
        },
        'icon-about': {
          DEFAULT: "hsl(var(--icon-about))",
        },
        'icon-contact': {
          DEFAULT: "hsl(var(--icon-contact))",
        },
        'header-border-red': {
          DEFAULT: "hsl(var(--header-border-red))",
        },
        'header-text-red': {
          DEFAULT: "hsl(var(--header-text-red))",
        },
        'header-text-black': {
          DEFAULT: "hsl(var(--header-text-black))",
        },
        'header-text-blue': {
          DEFAULT: "hsl(var(--header-text-blue))",
        },
      },
      // Premium Grid System - 12-column responsive layout
      gridTemplateColumns: {
        'flagship': 'repeat(12, minmax(0, 1fr))',
        'content': '1fr min(65ch, 100%) 1fr',
        'sidebar': '280px 1fr',
        'article': '1fr 280px',
      },
      
      // Premium Border Radius System
      borderRadius: designTokens.radii,
      
      // Premium Shadow System
      boxShadow: {
        ...designTokens.shadows,
        // Brand-specific shadows
        'brand': designTokens.shadows.brand,
        'accent': designTokens.shadows.accent,
        // Legacy shadows for compatibility
        'nils-blue-25': '0 0 12px rgba(6, 182, 212, 0.25)',
        'nils-blue-40': '0 0 16px rgba(6, 182, 212, 0.4)',
        'thuan-red-25': '0 0 12px rgba(220, 38, 127, 0.25)',
        'thuan-red-40': '0 0 16px rgba(220, 38, 127, 0.4)',
      },
      
      // Premium Transition System
      transitionDuration: {
        fast: '150ms',
        normal: '200ms',
        slow: '300ms',
        slower: '500ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      // Premium Animation System
      keyframes: {
        // Reveal animations for premium feel
        "reveal-up": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(24px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        "reveal-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "reveal-scale": {
          "0%": { 
            opacity: "0", 
            transform: "scale(0.96)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "scale(1)" 
          },
        },
        // Sophisticated hover effects
        "lift": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-4px)" },
        },
        // Navigation underline animation
        "underline-expand": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        // Subtle shimmer for premium feel
        "premium-shimmer": {
          "0%": { 
            backgroundPosition: "-200% 0" 
          },
          "100%": { 
            backgroundPosition: "200% 0" 
          },
        },
      },
      animation: {
        "reveal-up": "reveal-up 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        "reveal-fade": "reveal-fade 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        "reveal-scale": "reveal-scale 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        "lift": "lift 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        "underline-expand": "underline-expand 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        "premium-shimmer": "premium-shimmer 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
