# Changelog

All notable changes to Nils Johansson's personal blog will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Apple Glass Design System**: Complete design system inspired by Apple Glass aesthetic
  - New "glass" theme with sophisticated color palette
  - 8px spacing scale for perfect alignment
  - Typography system with consistent font sizes and line heights
  - Glass effect utilities (backdrop blur, transparency)
  - Interactive animations (scale, glow, shimmer effects)
- **12-Column Grid System**: Flexible layout system for consistent alignment
  - `content-grid` and `content-container` utilities
  - Responsive grid spanning classes
  - Specialized layouts for sidebar and article views
- **Enhanced Theme System**: Extended theme support
  - Apple Glass theme as default
  - Maintained existing themes (light, dark, soft-pastel, dos-prompt, synthwave)
  - Improved color token system with HSL values
- **Typography Utilities**: Pre-defined text hierarchy classes
  - `text-hierarchy-1/2/3` for headings
  - `text-body-large/body/body-small` for content
  - `text-caption` for metadata
- **Refined Font Stack**: Apple ecosystem fonts prioritized
  - SF Pro Display for headings
  - SF Mono for code
  - Inter as fallback

### Changed
- **Avatar Treatment**: Implemented Apple-style avatar design with clean, crisp circular portraits
  - Removed all CSS filters (brightness, contrast, saturation, sepia, hue-rotate) for natural image appearance
  - Applied pure circular crop with `border-radius: 50%` and `object-fit: cover`
  - Added subtle shadow (`shadow-md`) for depth and professionalism
  - Replaced colored rings with thin neutral borders (`border-gray-200`) that animate to owner colors on hover
  - Added elegant hover effects with subtle lift (`-translate-y-0.5`) and enhanced shadow
  - Ensured consistent treatment across all MonoAvatar instances (About page, Blog cards, Blog detail page, Avatar group)
  - Cleaned up obsolete CSS utilities and filter classes
- **Color Palette**: Completely redesigned color system
  - Soft neutrals with subtle gradients
  - Single vibrant blue accent (HSL 213, 94%, 68%)
  - Glass-effect transparency support
  - Semantic color improvements
- **Default Theme**: Changed from "system" to "glass" theme
- **Spacing System**: Standardized to 8px base unit
  - All components now use consistent spacing
  - Removed arbitrary spacing values
- **Animation System**: Enhanced with glass-specific effects
  - Improved fade and scale animations
  - Added glass shimmer effect
  - Smoother transitions and easing
- **Component Architecture**: Updated Header component with modern patterns
  - Centralized navigation data
  - Improved accessibility
  - Optimized re-renders with useCallback

### Removed
- **Template Boilerplate**: Eliminated all generic template references
  - No expense manager artifacts
  - No Tauri/Svelte references
  - Clean, purpose-built codebase
- **Obsolete Files**: Removed unused components and assets
  - TestComponent.tsx (debugging artifact)
  - App.css (unused styling)
  - bun.lockb (wrong package manager)
  - Index.tsx and MainContent.tsx (unused routes)
- **Hard-coded Colors**: Replaced with theme-aware tokens
- **Inconsistent Spacing**: Standardized to 8px scale

### Fixed
- **Theme Consistency**: All components now respect theme variables
- **TypeScript Strict Mode**: Enhanced type safety
  - Enabled strict TypeScript configuration
  - Added proper type definitions
  - Improved component prop types
- **Import Paths**: Organized with absolute imports
  - Services moved to dedicated folder
  - Types centralized in types/ directory
  - Clean import structure throughout

### Technical Improvements
- **Build System**: Enhanced Vite configuration
  - Added path aliases for clean imports
  - Optimized development server settings
- **Code Quality**: Improved linting and formatting
  - ESLint with React and TypeScript rules
  - Prettier integration
  - Automated code quality checks
- **Project Structure**: Reorganized for scalability
  - Services layer for API integration
  - Types directory for shared interfaces
  - Component library organization

---

## Version History

- **v2.0.0** (Unreleased): Complete design system overhaul
- **v1.0.0**: Initial blog implementation