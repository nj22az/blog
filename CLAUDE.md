# Project Instructions for Claude

## 🔒 PROTECTED DESIGN ELEMENTS

### LOGO DESIGN - LOCKED ✅
**The elegant two-row logo design is FINALIZED and PROTECTED:**
- File: `LOGO_DESIGN_LOCK.md` contains complete specifications
- Components: `/src/components/ElegantLogo.tsx` (LOCKED) + `/src/components/CompactLogo.tsx`
- Status: NO MODIFICATIONS ALLOWED without explicit authorization

**Current Design (v1.0):**
```
The Office  of
Nils Johansson
```
- Typography hierarchy with sophisticated weight/color distinctions
- Responsive scaling across all devices (mobile to 4K)  
- Elegant hover effects and professional interactions
- E-ink optimized with proper contrast ratios
- Compact variant for header integration

### UNIFIED HEADER DESIGN - FINALIZED ✅
**Clean, Apple/Japanese-inspired navigation:**
- File: `/src/components/Header.tsx` (OPTIMIZED)
- Layout: Logo left, navigation right - single row design
- Design Principles:
  - Flat styling - no glassy boxes or floating elements
  - Minimal shadows and effects
  - Proper alignment to main content grid
  - Clean typography hierarchy
- Features:
  - Color-coded navigation icons (Home: blue, Blog: green, About: purple, Contact: orange)
  - Responsive mobile menu with hamburger toggle
  - Active state indicators with subtle backgrounds
  - Smooth hover transitions
- Status: Professional, unified header following minimalist principles

### HERO SECTION - FINALIZED ✅
**Newspaper-style blog-focused hero section:**
- File: `/src/components/Hero.tsx` (CLEAN & OPTIMIZED)
- Design: Newspaper article layout with left-aligned content
- Typography: Enhanced hierarchy with `font-medium` tagline for better contrast
- Features:
  - Clean serif headlines with proper spacing
  - Author byline with small circular portrait (grayscale)
  - Reduced padding for tighter visual rhythm
  - Professional editorial voice
- Status: Clean, newspaper-aesthetic with improved spacing

### ARTICLE VIEW SYSTEM - REFINED ✅
**Elegant, reader-focused article layouts:**
- File: `/src/pages/BlogPost.tsx` (REDESIGNED)
- Design Philosophy: Apple/Japanese minimalism
- Features:
  - Compact "Back" button (top-left, subtle styling)
  - Enhanced typography hierarchy
  - Social sharing integration in author section
  - Optimized spacing and visual rhythm
  - Clean author metadata presentation
- Social Sharing:
  - File: `/src/components/ui/SocialShare.tsx`
  - Platforms: Facebook, X (Twitter), WhatsApp, Telegram, LINE, KakaoTalk
  - Design: Subtle, non-intrusive button placement
  - Features: Native device sharing + fallback modal
- Status: Elegant, focused reading experience

### SOCIAL SHARING SYSTEM - IMPLEMENTED ✅
**Global social media sharing functionality:**
- Component: `/src/components/ui/SocialShare.tsx`
- Platforms Supported:
  - Global: Facebook, X (Twitter), WhatsApp, Telegram
  - Southeast Asian: LINE, KakaoTalk (research-backed platform selection)
  - Universal: Copy link, Native device sharing
- Design: Minimalist button with clean modal fallback
- Integration: Available on all blog posts via Sanity CMS
- Status: Professional sharing system with international platform support

### SCROLL ENHANCEMENT - IMPLEMENTED ✅
**User experience improvements:**
- Scroll-to-Top Button:
  - File: `/src/components/ScrollToTop.tsx`
  - Behavior: Appears after 400px scroll, smooth animation
  - Design: Minimal white button with subtle shadow
  - Position: Fixed bottom-right, non-intrusive
- Scroll Detection Hook:
  - File: `/src/hooks/useScrollDirection.ts`
  - Features: Performance optimized with `requestAnimationFrame`
  - Usage: Powers scroll-based UI behaviors
- Status: Elegant scroll enhancements following UX best practices

### NAVIGATION SYSTEM - COLOR-CODED ✅
**Intuitive, accessible navigation:**
- Color Scheme:
  - 🏠 Home: Blue (`text-blue-500/600`) - stability and trust
  - 📚 Blog: Green (`text-green-500/600`) - growth and knowledge  
  - 👤 About: Purple (`text-purple-500/600`) - creativity and personality
  - ✉️ Contact: Orange (`text-orange-500/600`) - warmth and communication
- Features:
  - Consistent colors across desktop and mobile
  - Smart active/hover states with darker tones
  - Accessibility compliant contrast ratios
  - Smooth 200ms color transitions
- Status: Professional color-coded navigation with excellent UX

### TRANSLATION SYSTEM - CLEAN IMPLEMENTATION ✅
**Safari-friendly translation setup:**
- Configuration: Proper meta tags in `index.html` and `App.tsx`
- Features:
  - Browser-native translation (no UI widgets)
  - Multi-language support: EN, SV, JA, VI, DE
  - Safari translation detection enabled
  - Google Translate service preconnection
- Status: Clean, minimal translation approach

---

## DESIGN PRINCIPLES

### Apple/Japanese Minimalism
- **Flat design** - No unnecessary effects or gradients
- **Clean typography** - Consistent hierarchy and spacing
- **Subtle interactions** - Gentle hover effects and transitions
- **White space** - Proper breathing room between elements
- **Purposeful color** - Strategic use of color for navigation and branding

### Newspaper Editorial Aesthetic
- **Serif headlines** - Professional editorial appearance
- **Left-aligned content** - Traditional newspaper layout
- **Clean article structure** - Author bylines, proper metadata
- **Minimal distractions** - Focus on content readability
- **Professional voice** - Editorial rather than personal branding

### Responsive Excellence
- **Mobile-first approach** - Progressive enhancement for larger screens
- **Flexible layouts** - Adapts gracefully across all device sizes
- **Touch-friendly interfaces** - Proper button sizes and spacing
- **Performance optimized** - Fast loading and smooth interactions

---

## TECHNICAL ARCHITECTURE

### Core Technologies
- **React 18** + TypeScript + Vite
- **Tailwind CSS** for styling with custom design system
- **Sanity CMS** for content management and blog posts
- **React Router** for client-side navigation
- **Lucide React** for consistent iconography

### Component Architecture
```
src/
├── components/
│   ├── ElegantLogo.tsx          # Protected logo design
│   ├── CompactLogo.tsx          # Header logo variant
│   ├── Header.tsx               # Unified navigation
│   ├── Hero.tsx                 # Newspaper-style hero
│   ├── ScrollToTop.tsx          # Scroll enhancement
│   └── ui/
│       ├── SocialShare.tsx      # Social sharing system
│       └── GlassButton.tsx      # Button components
├── hooks/
│   ├── useScrollDirection.ts    # Scroll detection
│   └── usePremiumAnimations.ts  # Animation utilities
├── pages/
│   ├── Home.tsx                 # Main landing page
│   ├── Blog.tsx                 # Article archive
│   ├── BlogPost.tsx             # Individual articles
│   ├── About.tsx                # About page
│   └── Contact.tsx              # Contact page
└── services/
    └── sanity-api.ts            # CMS integration
```

### Performance Features
- **Code splitting** - Lazy-loaded pages for optimal bundle sizes
- **Image optimization** - Sanity CDN with responsive sizing
- **CSS purging** - Production builds remove unused styles
- **TypeScript** - Full type safety and development experience

---

## DEVELOPMENT WORKFLOW

### Pre-commit Checks (MANDATORY)
Always run these commands before any commit or deployment:

```bash
# 1. Type checking
npm run typecheck

# 2. Linting (check for errors)
npm run lint:check

# 3. Build verification
npm run build

# 4. Format check
npm run format:check
```

### Auto-fix Commands
If errors are found, use these commands to automatically fix them:

```bash
# Fix linting issues
npm run lint

# Fix formatting issues
npm run format
```

### Security Maintenance
Run periodically to maintain security:

```bash
# Check for vulnerabilities
npm audit

# Fix non-breaking vulnerabilities
npm audit fix

# For breaking changes (use with caution)
npm audit fix --force
```

## CONTENT MANAGEMENT

### Sanity CMS Integration
- **Blog Posts**: Full CRUD operations via Sanity Studio
- **Site Settings**: Logo, navigation, and global content
- **Author Management**: Multi-author support with profiles
- **Media Assets**: Optimized image delivery via Sanity CDN

### Content Types
- **Posts**: Title, content, author, featured image, publish date
- **Authors**: Name, bio, avatar, color scheme
- **Navigation**: Dynamic menu items with icons and order
- **Site Settings**: Global configuration and branding

## QUALITY STANDARDS

### Code Quality
- Zero TypeScript errors
- Zero ESLint errors
- All imports must be used
- All variables must be used
- Consistent code patterns
- Comprehensive error handling

### Design Quality
- Accessibility compliance (WCAG guidelines)
- Responsive design across all devices
- Performance optimized (Core Web Vitals)
- Cross-browser compatibility
- Professional typography and spacing

### UX Standards
- Intuitive navigation with visual feedback
- Fast loading times and smooth interactions
- Clear information hierarchy
- Accessible color contrasts and focus states
- Mobile-optimized touch targets

## DEPLOYMENT & MAINTENANCE

### Build Process
- Outputs to `/dist` directory
- GitHub Pages deployment via `npm run deploy`
- All assets optimized and compressed
- Tailwind CSS purged for production

### Performance Monitoring
- Bundle size monitoring (warn at 800KB+)
- Core Web Vitals tracking
- Sanity CDN image optimization
- Strategic component memoization

### Emergency Procedures
If build fails:
1. Check TypeScript: `npm run typecheck`
2. Check ESLint: `npm run lint:check`
3. Verify imports and dependencies
4. Review recent changes for conflicts

---

## PROJECT STATUS: PRODUCTION READY ✅

The website now represents a professional, elegant platform combining:
- **Minimalist design** following Apple/Japanese principles
- **Editorial excellence** with newspaper-inspired layouts
- **Technical sophistication** with modern React architecture
- **User experience** optimized for content consumption
- **International reach** with translation support and global social sharing

All components are optimized, tested, and ready for production deployment.