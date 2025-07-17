/**
 * Japanese Design Tokens
 * Based on traditional Japanese aesthetic principles
 * 
 * Principles:
 * - Wa (和): Harmony and balance
 * - Zen: Minimalism and essential beauty
 * - Suki (数寄): Refined simplicity and elegant restraint
 * - Ma (間): Negative space and breathing room
 * - Mono no aware: Subtle, transient beauty
 * - Wabi-sabi: Imperfect natural beauty
 * - Kaizen: Continuous refinement
 */

// Color Philosophy: Nature-inspired palette with subtle variations
export const japaneseColors = {
  // Sumi (墨) - Ink variations
  sumi: {
    50: 'hsl(0, 0%, 98%)',   // Almost white paper
    100: 'hsl(0, 0%, 95%)',  // Light ink wash
    200: 'hsl(0, 0%, 90%)',  // Subtle ink
    300: 'hsl(0, 0%, 80%)',  // Light gray ink
    400: 'hsl(0, 0%, 65%)',  // Medium ink
    500: 'hsl(0, 0%, 45%)',  // Standard ink
    600: 'hsl(0, 0%, 35%)',  // Dark ink
    700: 'hsl(0, 0%, 25%)',  // Very dark ink
    800: 'hsl(0, 0%, 15%)',  // Deep ink
    900: 'hsl(0, 0%, 8%)',   // Black ink
  },
  
  // Shiro (白) - Pure and off-whites
  shiro: {
    paper: 'hsl(45, 30%, 98%)',      // Warm paper white
    snow: 'hsl(210, 20%, 98%)',      // Cool snow white
    rice: 'hsl(60, 15%, 96%)',       // Rice paper
    silk: 'hsl(30, 10%, 97%)',       // Silk white
    bone: 'hsl(45, 8%, 94%)',        // Bone white
  },
  
  // Hai (灰) - Ash grays with subtle warmth
  hai: {
    light: 'hsl(30, 5%, 85%)',       // Light ash
    medium: 'hsl(25, 3%, 70%)',      // Medium ash
    dark: 'hsl(20, 2%, 55%)',        // Dark ash
    charcoal: 'hsl(15, 2%, 40%)',    // Charcoal ash
  },
  
  // Cha (茶) - Tea browns
  cha: {
    light: 'hsl(35, 15%, 75%)',      // Light tea
    medium: 'hsl(30, 20%, 60%)',     // Medium tea
    dark: 'hsl(25, 25%, 45%)',       // Dark tea
    matcha: 'hsl(70, 20%, 40%)',     // Matcha green-brown
  },
  
  // Mizu (水) - Water blues
  mizu: {
    clear: 'hsl(200, 30%, 85%)',     // Clear water
    shallow: 'hsl(195, 25%, 70%)',   // Shallow water
    deep: 'hsl(190, 20%, 55%)',      // Deep water
    ocean: 'hsl(185, 15%, 40%)',     // Ocean water
  },
  
  // Mori (森) - Forest greens
  mori: {
    bamboo: 'hsl(120, 15%, 70%)',    // Bamboo green
    moss: 'hsl(110, 20%, 50%)',      // Moss green
    pine: 'hsl(100, 25%, 35%)',      // Pine green
    cedar: 'hsl(90, 30%, 25%)',      // Cedar green
  },
  
  // Accent colors for subtle highlights
  accent: {
    sakura: 'hsl(340, 30%, 85%)',    // Cherry blossom pink
    autumn: 'hsl(25, 40%, 70%)',     // Autumn leaf
    gold: 'hsl(45, 35%, 75%)',       // Subtle gold
    copper: 'hsl(20, 30%, 65%)',     // Copper patina
  }
};

// Typography Scale - Based on traditional Japanese proportions
export const japaneseTypography = {
  // Font families prioritizing system fonts with Japanese support
  fontFamily: {
    primary: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'Noto Sans CJK JP',
      'sans-serif'
    ].join(', '),
    
    serif: [
      'Noto Serif',
      'Noto Serif CJK JP',
      'Georgia',
      'Times New Roman',
      'serif'
    ].join(', '),
    
    mono: [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace'
    ].join(', ')
  },
  
  // Scale based on traditional Japanese proportions (1.414 - √2)
  scale: {
    xs: '0.707rem',      // 11.3px
    sm: '0.875rem',      // 14px
    base: '1rem',        // 16px
    lg: '1.125rem',      // 18px
    xl: '1.414rem',      // 22.6px
    '2xl': '1.999rem',   // 32px
    '3xl': '2.827rem',   // 45.2px
    '4xl': '3.998rem',   // 64px
    '5xl': '5.653rem',   // 90.4px
    '6xl': '7.993rem',   // 128px
  },
  
  // Line heights for readability
  lineHeight: {
    tight: 1.2,
    normal: 1.414,     // √2 ratio
    relaxed: 1.618,    // Golden ratio
    loose: 2,
  },
  
  // Letter spacing for Japanese aesthetics
  letterSpacing: {
    tight: '-0.01em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  }
};

// Spacing System - Based on Ma (間) principle
export const japaneseSpacing = {
  // Base unit: 8px (traditional Japanese proportions)
  base: '0.5rem',      // 8px
  
  // Harmonic progression
  scale: {
    0: '0rem',         // 0px
    1: '0.25rem',      // 4px  - Minimal breathing room
    2: '0.5rem',       // 8px  - Base unit
    3: '0.75rem',      // 12px - Small space
    4: '1rem',         // 16px - Standard space
    5: '1.25rem',      // 20px - Medium space
    6: '1.5rem',       // 24px - Large space
    8: '2rem',         // 32px - Extra large
    10: '2.5rem',      // 40px - Section spacing
    12: '3rem',        // 48px - Major sections
    16: '4rem',        // 64px - Layout spacing
    20: '5rem',        // 80px - Hero spacing
    24: '6rem',        // 96px - Page spacing
    32: '8rem',        // 128px - Dramatic spacing
  },
  
  // Specific spacing for Japanese layouts
  tatami: {
    mat: '2rem',       // Standard tatami proportion
    half: '1rem',      // Half mat
    quarter: '0.5rem', // Quarter mat
  }
};

// Layout System - Based on traditional Japanese proportions
export const japaneseLayout = {
  // Grid system inspired by tatami mats
  grid: {
    columns: 12,
    gap: '1.5rem',     // 24px
    margin: '2rem',    // 32px
  },
  
  // Container sizes
  container: {
    xs: '20rem',       // 320px
    sm: '24rem',       // 384px
    md: '28rem',       // 448px
    lg: '32rem',       // 512px
    xl: '36rem',       // 576px
    '2xl': '42rem',    // 672px
    '3xl': '48rem',    // 768px
    '4xl': '56rem',    // 896px
    '5xl': '64rem',    // 1024px
    '6xl': '72rem',    // 1152px
    '7xl': '80rem',    // 1280px
    full: '100%',
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
};

// Animation System - Subtle and natural
export const japaneseAnimations = {
  // Easing functions inspired by natural movement
  easing: {
    natural: 'cubic-bezier(0.4, 0, 0.2, 1)',      // Default
    gentle: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Gentle
    subtle: 'cubic-bezier(0.4, 0, 0.6, 1)',       // Subtle
    flowing: 'cubic-bezier(0.4, 0, 0.2, 1)',      // Flowing
  },
  
  // Duration based on natural rhythm
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '750ms',
    slowest: '1000ms',
  },
  
  // Delays for staggered animations
  delay: {
    none: '0ms',
    short: '100ms',
    medium: '200ms',
    long: '300ms',
  }
};

// Elevation System - Subtle shadows
export const japaneseElevation = {
  // Shadow system based on paper layers
  shadow: {
    none: 'none',
    paper: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    floating: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    dramatic: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  
  // Blur values for glass effects
  blur: {
    none: '0px',
    subtle: '2px',
    light: '4px',
    medium: '8px',
    strong: '12px',
    intense: '16px',
  }
};

// Complete Japanese Design System
export const japaneseDesignSystem = {
  colors: japaneseColors,
  typography: japaneseTypography,
  spacing: japaneseSpacing,
  layout: japaneseLayout,
  animations: japaneseAnimations,
  elevation: japaneseElevation,
  
  // Core principles as utility functions
  principles: {
    wa: (elements: unknown[]) => elements.filter((el: unknown) => (el as { harmony?: boolean }).harmony),
    zen: (design: Record<string, unknown>) => ({ ...design, minimal: true }),
    suki: (component: Record<string, unknown>) => ({ ...component, elegant: true, restrained: true }),
    ma: (spacing: string) => ({ padding: spacing, margin: spacing }),
    monoNoAware: (color: string) => ({ color, opacity: 0.8 }),
    wabiSabi: (element: Record<string, unknown>) => ({ ...element, imperfect: true, natural: true }),
    kaizen: (version: number) => version + 0.1,
  }
};

export default japaneseDesignSystem;