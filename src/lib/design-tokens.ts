/**
 * Flagship Design System Tokens
 * Premium, bespoke design tokens for Nils Johansson & Thuan's blog
 * Surpassing Silicon Valley standards with meticulous attention to detail
 */

export const designTokens = {
  // Brand Color Palette - Carefully crafted for premium feel
  colors: {
    // Primary: Deep Navy - Professional, trustworthy, sophisticated
    brand: {
      primary: {
        50: 'hsl(220, 35%, 97%)',
        100: 'hsl(220, 35%, 94%)',
        200: 'hsl(220, 35%, 86%)',
        300: 'hsl(220, 35%, 77%)',
        400: 'hsl(220, 35%, 64%)',
        500: 'hsl(220, 35%, 45%)', // Primary brand color
        600: 'hsl(220, 35%, 35%)',
        700: 'hsl(220, 35%, 25%)',
        800: 'hsl(220, 35%, 15%)',
        900: 'hsl(220, 35%, 8%)',
        950: 'hsl(220, 35%, 4%)',
      },
    },

    // Secondary: Warm Slate - Balanced, approachable, refined
    secondary: {
      50: 'hsl(210, 20%, 98%)',
      100: 'hsl(210, 20%, 95%)',
      200: 'hsl(210, 20%, 89%)',
      300: 'hsl(210, 20%, 82%)',
      400: 'hsl(210, 20%, 68%)',
      500: 'hsl(210, 20%, 52%)', // Secondary brand color
      600: 'hsl(210, 20%, 42%)',
      700: 'hsl(210, 20%, 32%)',
      800: 'hsl(210, 20%, 22%)',
      900: 'hsl(210, 20%, 12%)',
      950: 'hsl(210, 20%, 6%)',
    },

    // Accent: Unique Cerulean - Distinctive, energetic, memorable
    accent: {
      50: 'hsl(195, 85%, 96%)',
      100: 'hsl(195, 85%, 91%)',
      200: 'hsl(195, 85%, 82%)',
      300: 'hsl(195, 85%, 73%)',
      400: 'hsl(195, 85%, 64%)',
      500: 'hsl(195, 85%, 55%)', // Signature cerulean
      600: 'hsl(195, 85%, 46%)',
      700: 'hsl(195, 85%, 37%)',
      800: 'hsl(195, 85%, 28%)',
      900: 'hsl(195, 85%, 19%)',
      950: 'hsl(195, 85%, 10%)',
    },

    // Success: Marine Green - Connected to Nils' marine engineering
    success: {
      50: 'hsl(158, 64%, 96%)',
      100: 'hsl(158, 64%, 90%)',
      200: 'hsl(158, 64%, 79%)',
      300: 'hsl(158, 64%, 65%)',
      400: 'hsl(158, 64%, 51%)',
      500: 'hsl(158, 64%, 41%)', // Marine green
      600: 'hsl(158, 64%, 33%)',
      700: 'hsl(158, 64%, 26%)',
      800: 'hsl(158, 64%, 21%)',
      900: 'hsl(158, 64%, 17%)',
      950: 'hsl(158, 64%, 9%)',
    },

    // Warning: Warm Amber - Friendly, attention-grabbing
    warning: {
      50: 'hsl(43, 96%, 96%)',
      100: 'hsl(43, 96%, 91%)',
      200: 'hsl(43, 96%, 81%)',
      300: 'hsl(43, 96%, 68%)',
      400: 'hsl(43, 96%, 56%)',
      500: 'hsl(43, 96%, 50%)', // Warm amber
      600: 'hsl(43, 96%, 45%)',
      700: 'hsl(43, 96%, 35%)',
      800: 'hsl(43, 96%, 29%)',
      900: 'hsl(43, 96%, 24%)',
      950: 'hsl(43, 96%, 13%)',
    },

    // Error: Sophisticated Red - Clear but not aggressive
    error: {
      50: 'hsl(0, 58%, 97%)',
      100: 'hsl(0, 58%, 94%)',
      200: 'hsl(0, 58%, 87%)',
      300: 'hsl(0, 58%, 77%)',
      400: 'hsl(0, 58%, 65%)',
      500: 'hsl(0, 58%, 52%)', // Sophisticated red
      600: 'hsl(0, 58%, 43%)',
      700: 'hsl(0, 58%, 34%)',
      800: 'hsl(0, 58%, 27%)',
      900: 'hsl(0, 58%, 22%)',
      950: 'hsl(0, 58%, 12%)',
    },

    // Neutral Scale - Perfect for typography and UI
    neutral: {
      0: 'hsl(0, 0%, 100%)', // Pure white
      25: 'hsl(210, 15%, 99%)',
      50: 'hsl(210, 15%, 97%)',
      100: 'hsl(210, 15%, 94%)',
      150: 'hsl(210, 15%, 91%)',
      200: 'hsl(210, 15%, 85%)',
      300: 'hsl(210, 15%, 75%)',
      400: 'hsl(210, 15%, 60%)',
      500: 'hsl(210, 15%, 45%)',
      600: 'hsl(210, 15%, 35%)',
      700: 'hsl(210, 15%, 25%)',
      800: 'hsl(210, 15%, 15%)',
      900: 'hsl(210, 15%, 8%)',
      950: 'hsl(210, 15%, 4%)',
      1000: 'hsl(0, 0%, 0%)', // Pure black
    },
  },

  // Typography Scale - Premium, carefully calculated
  typography: {
    fontFamily: {
      // Variable fonts for superior rendering
      sans: [
        'Inter Variable',
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'system-ui',
        'sans-serif'
      ],
      mono: [
        'JetBrains Mono Variable',
        'JetBrains Mono',
        'SF Mono',
        'Monaco',
        'Cascadia Code',
        'Consolas',
        'monospace'
      ]
    },
    
    scale: {
      // Display: For hero sections and major headlines
      display: {
        fontSize: '3rem', // 48px
        lineHeight: '1.1',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      },
      
      // Heading: For section titles and page headers
      heading: {
        fontSize: '2rem', // 32px
        lineHeight: '1.2',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      },
      
      // Subheading: For card titles and subsections
      subheading: {
        fontSize: '1.5rem', // 24px
        lineHeight: '1.3',
        letterSpacing: '0',
        fontWeight: '600',
      },
      
      // Body: Primary reading text
      body: {
        fontSize: '1.125rem', // 18px
        lineHeight: '1.5',
        letterSpacing: '0',
        fontWeight: '400',
      },
      
      // Body Small: Secondary text
      bodySmall: {
        fontSize: '1rem', // 16px
        lineHeight: '1.5',
        letterSpacing: '0',
        fontWeight: '400',
      },
      
      // Caption: Metadata, labels, small text
      caption: {
        fontSize: '0.875rem', // 14px
        lineHeight: '1.4',
        letterSpacing: '0.01em',
        fontWeight: '500',
      },
      
      // Micro: Tiny text, legal, footnotes
      micro: {
        fontSize: '0.75rem', // 12px
        lineHeight: '1.3',
        letterSpacing: '0.02em',
        fontWeight: '500',
      },
    },
  },

  // Spacing Scale - 8px grid system
  spacing: {
    0: '0',
    px: '1px',
    0.5: '0.125rem', // 2px
    1: '0.25rem',    // 4px
    1.5: '0.375rem', // 6px
    2: '0.5rem',     // 8px - Base unit
    3: '0.75rem',    // 12px
    4: '1rem',       // 16px
    5: '1.25rem',    // 20px
    6: '1.5rem',     // 24px - Standard component padding
    7: '1.75rem',    // 28px
    8: '2rem',       // 32px
    10: '2.5rem',    // 40px
    12: '3rem',      // 48px - Section spacing
    16: '4rem',      // 64px
    20: '5rem',      // 80px
    24: '6rem',      // 96px
    32: '8rem',      // 128px
    40: '10rem',     // 160px
    48: '12rem',     // 192px
    56: '14rem',     // 224px
    64: '16rem',     // 256px
  },

  // Shadows - Carefully crafted elevation system
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 4px 12px 0 rgba(0, 0, 0, 0.08)', // Standard card shadow
    md: '0 6px 16px 0 rgba(0, 0, 0, 0.10)',
    lg: '0 12px 24px 0 rgba(0, 0, 0, 0.12)',    // Hover state
    xl: '0 20px 32px 0 rgba(0, 0, 0, 0.15)',
    '2xl': '0 32px 48px 0 rgba(0, 0, 0, 0.18)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    
    // Brand-specific shadows with accent colors
    brand: '0 4px 12px 0 rgba(59, 130, 246, 0.15)',
    accent: '0 4px 12px 0 rgba(6, 182, 212, 0.15)',
  },

  // Border Radius - Consistent corner rounding
  radii: {
    none: '0',
    sm: '0.25rem',   // 4px
    default: '0.5rem', // 8px - Standard component radius
    md: '0.75rem',   // 12px
    lg: '1rem',      // 16px
    xl: '1.5rem',    // 24px
    '2xl': '2rem',   // 32px
    full: '9999px',  // Circular
  },

  // Transitions - Smooth, professional animations
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slower: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Z-Index Scale
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
} as const;

// Semantic color mappings for easy consumption
export const semanticColors = {
  text: {
    primary: designTokens.colors.neutral[900],
    secondary: designTokens.colors.neutral[600],
    tertiary: designTokens.colors.neutral[500],
    inverse: designTokens.colors.neutral[0],
    accent: designTokens.colors.accent[500],
    brand: designTokens.colors.brand.primary[500],
    success: designTokens.colors.success[500],
    warning: designTokens.colors.warning[500],
    error: designTokens.colors.error[500],
  },
  
  background: {
    primary: designTokens.colors.neutral[0],
    secondary: designTokens.colors.neutral[50],
    tertiary: designTokens.colors.neutral[100],
    inverse: designTokens.colors.neutral[900],
    brand: designTokens.colors.brand.primary[500],
    accent: designTokens.colors.accent[500],
    success: designTokens.colors.success[50],
    warning: designTokens.colors.warning[50],
    error: designTokens.colors.error[50],
  },
  
  border: {
    primary: designTokens.colors.neutral[200],
    secondary: designTokens.colors.neutral[150],
    accent: designTokens.colors.accent[500],
    brand: designTokens.colors.brand.primary[500],
    success: designTokens.colors.success[500],
    warning: designTokens.colors.warning[500],
    error: designTokens.colors.error[500],
  },
};

export type DesignTokens = typeof designTokens;
export type SemanticColors = typeof semanticColors;