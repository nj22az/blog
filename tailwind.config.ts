import type { Config } from "tailwindcss";

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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        // Avatar colors
        'nils-blue': {
          50: 'hsl(210, 100%, 97%)',
          100: 'hsl(210, 100%, 93%)',
          200: 'hsl(210, 100%, 86%)',
          300: 'hsl(210, 100%, 78%)',
          400: 'hsl(210, 100%, 70%)',
          500: 'hsl(210, 100%, 62%)',
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
          500: 'hsl(0, 84%, 66%)',
          600: 'hsl(0, 84%, 60%)',
          700: 'hsl(0, 73%, 52%)',
          800: 'hsl(0, 70%, 45%)',
          900: 'hsl(0, 62%, 38%)',
        },
        // Glass color system
        glass: {
          50: 'hsla(0, 0%, 100%, 0.95)',
          100: 'hsla(0, 0%, 100%, 0.9)',
          200: 'hsla(0, 0%, 100%, 0.8)',
          300: 'hsla(0, 0%, 100%, 0.7)',
          400: 'hsla(0, 0%, 100%, 0.6)',
          500: 'hsla(0, 0%, 100%, 0.5)',
          600: 'hsla(0, 0%, 100%, 0.4)',
          700: 'hsla(0, 0%, 100%, 0.3)',
          800: 'hsla(0, 0%, 100%, 0.2)',
          900: 'hsla(0, 0%, 100%, 0.1)',
        },
        
        // Japanese Design System Colors
        // Sumi (墨) - Ink variations
        sumi: {
          50: 'hsl(var(--sumi-50))',
          100: 'hsl(var(--sumi-100))',
          200: 'hsl(var(--sumi-200))',
          300: 'hsl(var(--sumi-300))',
          400: 'hsl(var(--sumi-400))',
          500: 'hsl(var(--sumi-500))',
          600: 'hsl(var(--sumi-600))',
          700: 'hsl(var(--sumi-700))',
          800: 'hsl(var(--sumi-800))',
          900: 'hsl(var(--sumi-900))',
        },
        
        // Shiro (白) - Pure and off-whites
        shiro: {
          paper: 'hsl(var(--shiro-paper))',
          snow: 'hsl(var(--shiro-snow))',
          rice: 'hsl(var(--shiro-rice))',
          silk: 'hsl(var(--shiro-silk))',
          bone: 'hsl(var(--shiro-bone))',
        },
        
        // Hai (灰) - Ash grays
        hai: {
          light: 'hsl(var(--hai-light))',
          medium: 'hsl(var(--hai-medium))',
          dark: 'hsl(var(--hai-dark))',
          charcoal: 'hsl(var(--hai-charcoal))',
        },
        
        // Cha (茶) - Tea browns
        cha: {
          light: 'hsl(var(--cha-light))',
          medium: 'hsl(var(--cha-medium))',
          dark: 'hsl(var(--cha-dark))',
          matcha: 'hsl(var(--cha-matcha))',
        },
        
        // Mizu (水) - Water blues
        mizu: {
          clear: 'hsl(var(--mizu-clear))',
          shallow: 'hsl(var(--mizu-shallow))',
          deep: 'hsl(var(--mizu-deep))',
          ocean: 'hsl(var(--mizu-ocean))',
        },
        
        // Mori (森) - Forest greens
        mori: {
          bamboo: 'hsl(var(--mori-bamboo))',
          moss: 'hsl(var(--mori-moss))',
          pine: 'hsl(var(--mori-pine))',
          cedar: 'hsl(var(--mori-cedar))',
        },
        
        // Japanese accent colors
        accent: {
          sakura: 'hsl(var(--accent-sakura))',
          autumn: 'hsl(var(--accent-autumn))',
          gold: 'hsl(var(--accent-gold))',
          copper: 'hsl(var(--accent-copper))',
        },
        
        // Industrial Neutral System
        neutral: {
          50: 'hsl(var(--neutral-50))',
          100: 'hsl(var(--neutral-100))',
          200: 'hsl(var(--neutral-200))',
          300: 'hsl(var(--neutral-300))',
          400: 'hsl(var(--neutral-400))',
          500: 'hsl(var(--neutral-500))',
          600: 'hsl(var(--neutral-600))',
          700: 'hsl(var(--neutral-700))',
          800: 'hsl(var(--neutral-800))',
          900: 'hsl(var(--neutral-900))',
        },
        
        // Steel-blue accent
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          dark: 'hsl(var(--accent-dark))',
        },
        
        // E-ink Optimized
        eink: {
          black: 'hsl(var(--eink-black))',
          'dark-gray': 'hsl(var(--eink-dark-gray))',
          'medium-gray': 'hsl(var(--eink-medium-gray))',
          'light-gray': 'hsl(var(--eink-light-gray))',
          white: 'hsl(var(--eink-white))',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "4px",
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.6', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.7', letterSpacing: '0.02em' }],
        'base': ['1rem', { lineHeight: '1.8', letterSpacing: '0.015em' }],
        'lg': ['1.125rem', { lineHeight: '1.8', letterSpacing: '0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.7', letterSpacing: '0.005em' }],
        '2xl': ['1.5rem', { lineHeight: '1.6', letterSpacing: '0.0025em' }],
        '3xl': ['1.875rem', { lineHeight: '1.5', letterSpacing: '0em' }],
        '4xl': ['2.25rem', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
        '5xl': ['3rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, hsla(0, 0%, 100%, 0.7), hsla(0, 0%, 100%, 0.3))',
        'glass-gradient-dark': 'linear-gradient(135deg, hsla(222, 84%, 5%, 0.7), hsla(222, 84%, 5%, 0.3))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
        'aurora': 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        'sunset': 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
        'ocean': 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          to: { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        scaleIn: {
          from: { 
            opacity: '0',
            transform: 'scale(0.95)'
          },
          to: { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.5s ease-in-out",
        scaleIn: "scaleIn 0.3s ease-in-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 2px 4px rgba(0,0,0,0.1)',
        'glass': 'var(--glass-shadow)',
        'glass-inset': 'inset 0 1px 0 0 hsla(0, 0%, 100%, 0.1)',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), 
    require("@tailwindcss/typography"),
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.glass-blur': {
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
        },
        '.glass-blur-sm': {
          'backdrop-filter': 'blur(4px)',
          '-webkit-backdrop-filter': 'blur(4px)',
        },
        '.glass-blur-lg': {
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
        },
        '.text-gradient': {
          'background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-sunset': {
          'background': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-ocean': {
          'background': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;