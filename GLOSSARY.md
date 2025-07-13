# GLOSSARY

## A

### ApiClient
**Definition**: Centralized HTTP client class for standardized API communication
**Location**: services/api-client.ts
**Notes**: Wraps axios with interceptors and error handling

### axios
**Definition**: HTTP client library for making API requests
**Location**: package.json, services/api-client.ts, services/wordpress-api.ts
**Notes**: Foundation for centralized API client

## B

### BlogPost
**Definition**: React component for displaying individual blog posts
**Location**: components/BlogPost.tsx, pages/BlogPost.tsx
**Notes**: Handles both list view and detail view of blog content

## C

### cmdk
**Definition**: Command menu component library for React
**Location**: package.json:56, components/ui/command.tsx
**Notes**: Provides command palette functionality

### class-variance-authority (CVA)
**Definition**: Library for creating type-safe component variants
**Location**: package.json:54, components/ui/*.tsx
**Notes**: Used throughout UI components for style variants

### clsx
**Definition**: Utility for constructing className strings conditionally
**Location**: package.json:55, lib/utils.ts
**Notes**: Combined with tailwind-merge for className management

## F

### framer-motion
**Definition**: Animation library for React
**Location**: package.json:59, various components
**Notes**: Provides smooth animations and transitions

## H

### HashRouter
**Definition**: React Router component using hash-based routing
**Location**: App.tsx:6
**Notes**: Used instead of BrowserRouter for deployment compatibility

## L

### lucide-react
**Definition**: Icon library with React components
**Location**: package.json:62, throughout components
**Notes**: Primary icon system for the application

## N

### next-themes
**Definition**: Theme switching library for React
**Location**: package.json:64, App.tsx:7,78-85
**Notes**: Provides theme management with system preference detection

## R

### Radix UI
**Definition**: Low-level UI primitives for React
**Location**: package.json:19-45, components/ui/
**Notes**: Foundation for all UI components, provides accessibility

### React Query (@tanstack/react-query)
**Definition**: Data fetching and caching library
**Location**: package.json:51, App.tsx:5,65-73
**Notes**: Manages API state and caching

### react-router-dom
**Definition**: Declarative routing for React applications
**Location**: package.json:75, App.tsx:6,88-106
**Notes**: Handles client-side routing

## S

### Sanity
**Definition**: Headless CMS for content management
**Location**: package.json:46-50,77-78, sanity.config.ts, schemas/
**Notes**: Backend content management system

### shadcn/ui
**Definition**: Component library built on Radix UI and Tailwind CSS
**Location**: components/ui/, components.json
**Notes**: Provides pre-built accessible components

### Sonner
**Definition**: Toast notification library
**Location**: package.json:79, App.tsx:3,105
**Notes**: Handles toast notifications

## T

### Tailwind CSS
**Definition**: Utility-first CSS framework
**Location**: package.json:100, tailwind.config.ts, index.css
**Notes**: Primary styling system

### TypeScript
**Definition**: Typed superset of JavaScript
**Location**: package.json:101, tsconfig.json files, .tsx/.ts files
**Notes**: Provides type safety throughout the application

## V

### Vite
**Definition**: Fast build tool and development server
**Location**: package.json:103, vite.config.ts
**Notes**: Primary build tool and dev server

### vaul
**Definition**: Drawer component for mobile interfaces
**Location**: package.json:84, components/ui/drawer.tsx
**Notes**: Mobile-friendly drawer/modal component

## Z

### Zod
**Definition**: TypeScript-first schema validation library
**Location**: package.json:85, form components
**Notes**: Validates form data and API responses

---

## Project Architecture

### File Structure
- `src/components/` - Reusable UI components and business logic components
- `src/components/ui/` - shadcn/ui design system components
- `src/pages/` - Route-level page components
- `src/services/` - API clients and external service integrations
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions and configurations
- `src/types/` - TypeScript type definitions
- `src/assets/` - Static assets (images, fonts, etc.)

### Key Patterns
- **Absolute Imports**: Use `@components`, `@services`, `@types`, etc. for clean imports
- **Centralized API**: All HTTP requests go through `ApiClient` class
- **Type Safety**: Strict TypeScript configuration with proper type definitions
- **Component Composition**: Radix UI primitives wrapped with Tailwind styling
- **Modern React**: Function components with hooks, no class components

### Scripts
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - ESLint with auto-fix
- `npm run format` - Prettier formatting
- `npm run typecheck` - TypeScript type checking
- `npm run tree` - Update file structure documentation