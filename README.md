# The Office of Nils Johansson - Personal Blog & CMS

A modern, full-featured blog with Sanity CMS integration, designed for seamless content management from any device including iPad. Built with React, TypeScript, and Tailwind CSS with a focus on clean aesthetics and mobile-first content creation.

## 🚀 Quick Start

### Development
```bash
# Start the React app
npm run dev
# Website available at: http://localhost:8080/

# Start Sanity Studio (Content Management)
npm run sanity:dev
# Studio available at: http://localhost:3333/
```

### Production
```bash
# Build the React app
npm run build

# Deploy Sanity Studio to cloud
npm run sanity:deploy
```

## 🎯 Features

### 📱 iPad-First Content Management
- **Mobile CMS**: Write and publish from your iPad anywhere
- **Photo Integration**: Take photos directly from iPad and upload to posts
- **Touch-Optimized**: Sanity Studio optimized for mobile interaction
- **Rich Text Editor**: Format text, add images, code blocks, and links
- **Real-time Publishing**: Changes appear on website immediately

### 💬 Comments System
- **User Comments**: Visitors can leave comments on blog posts
- **Moderation**: All comments require approval through Sanity Studio
- **Spam Protection**: Email validation and manual approval workflow
- **Admin Management**: Full comment management through dashboard

### 🎨 Design & UX
- **Monochrome Avatars**: CSS-filtered avatars (Nils: Blue, Thuan: Red)
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Apple-Inspired**: Clean, minimal aesthetic following Apple design principles
- **Smooth Animations**: Hover effects and transitions throughout

### 🔧 Technical Features
- **Hybrid Fallback**: Sanity-first with WordPress API fallback
- **Type Safety**: Full TypeScript implementation
- **Modern Stack**: React 18, Vite, Tailwind CSS
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🏗️ Technology Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animations
- **Lucide React** - Icons

### CMS & Backend
- **Sanity CMS** - Headless content management
- **Sanity Studio** - Content editing interface
- **Portable Text** - Rich text content format
- **Image Processing** - Automatic optimization and hotspots

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── ui/              # shadcn/ui components
│   ├── BlogPost.tsx     # Blog post card component
│   ├── CommentForm.tsx  # Comment submission form
│   ├── CommentsList.tsx # Comments display
│   ├── MonoAvatar.tsx   # Monochrome avatar component
│   └── AvatarGroup.tsx  # Hero section avatars
├── pages/               # Route components
│   ├── Home.tsx         # Blog feed homepage
│   ├── About.tsx        # About page
│   ├── BlogPost.tsx     # Individual blog post
│   └── Contact.tsx      # Contact page
├── lib/                 # Utilities and API
│   ├── sanity.ts        # Sanity client configuration
│   ├── sanity-api.ts    # Sanity data fetching
│   ├── blog-api.ts      # Unified blog API
│   └── wordpress-api.ts # WordPress fallback API
├── assets/              # Static assets
│   └── images/          # Image files
└── styles/              # Global styles

schemas/                 # Sanity CMS schemas
├── post.ts             # Blog post schema
├── author.ts           # Author schema
├── category.ts         # Category schema
├── comment.ts          # Comment schema
├── blockContent.ts     # Rich text schema
└── index.ts            # Schema exports

sanity.config.ts        # Sanity Studio configuration
sanity.cli.ts          # Sanity CLI configuration
```

## 🛠️ Configuration

### Environment Variables
Create a `.env` file in the project root:

```env
# Sanity Configuration
VITE_SANITY_PROJECT_ID=hqpjl36z
VITE_SANITY_DATASET=production

# WordPress Fallback (Optional)
VITE_WORDPRESS_SITE_URL=theofficeofnils.wordpress.com
```

### Sanity Project Details
- **Project ID**: `hqpjl36z`
- **Dataset**: `production`
- **Studio URL**: Will be provided after deployment

## 📝 Content Management

### Creating Blog Posts
1. Open Sanity Studio (local: `http://localhost:3333/` or deployed URL)
2. Click "Blog Posts" → "Create"
3. Fill in:
   - **Title**: Post title (auto-generates slug)
   - **Author**: Select from authors
   - **Main Image**: Upload featured image
   - **Categories**: Assign categories
   - **Excerpt**: Short description (max 200 chars)
   - **Body**: Rich text content with images, code, links
   - **Published At**: Publication date/time
   - **Comments Enabled**: Toggle comment system
   - **Featured**: Mark as featured post

### Managing Authors
1. Go to "Authors" section
2. Create author profiles with:
   - Name and slug
   - Profile image
   - Bio
   - Avatar color (blue/red for monochrome effect)

### Comment Moderation
1. Navigate to "Comments" section
2. Review submitted comments
3. Approve/reject as needed
4. Approved comments appear on website immediately

### Content Types

#### Blog Post Fields
- `title` (string, required)
- `slug` (slug, auto-generated)
- `author` (reference to author)
- `mainImage` (image with hotspot)
- `categories` (array of category references)
- `publishedAt` (datetime)
- `excerpt` (text, max 200 chars)
- `body` (rich text with images, code blocks, links)
- `commentsEnabled` (boolean)
- `featured` (boolean)

#### Author Fields
- `name` (string, required)
- `slug` (slug, auto-generated)
- `image` (profile photo)
- `bio` (text)
- `color` ('blue' | 'red' for avatar styling)

#### Comment Fields
- `post` (reference to blog post)
- `name` (commenter name)
- `email` (email address)
- `website` (optional URL)
- `comment` (text, 10-1000 chars)
- `approved` (boolean, default false)
- `createdAt` (datetime)

## 🎨 Styling System

### Avatar Colors
Monochrome avatars use CSS filters for consistent branding:
- **Nils**: Blue monochrome (`240°` hue rotation)
- **Thuan**: Red monochrome (`0°` hue rotation)

### Color Scheme
- **Primary**: HSL-based for consistent theming
- **Icons**: Bright, fun colors for header navigation
- **Typography**: Inter font family with system fallbacks
- **Components**: Soft shadows, rounded corners, clean backgrounds

### Responsive Design
- **Mobile First**: Optimized for touch interfaces
- **Breakpoints**: Tailwind CSS responsive utilities
- **Navigation**: Hamburger menu on mobile, icons on desktop

## 📊 Data Flow

```
User Input → Sanity Studio → Sanity CMS → React App → User Display
                    ↓
            Comments System → Moderation → Approved Display
```

### Blog Posts
1. **Creation**: Author writes in Sanity Studio
2. **Storage**: Content stored in Sanity CMS
3. **Fetching**: React app fetches via Sanity client
4. **Display**: Rendered with Portable Text components

### Comments
1. **Submission**: User fills comment form
2. **Storage**: Comment saved to Sanity (unapproved)
3. **Moderation**: Admin approves via Studio
4. **Display**: Approved comments shown on post

## 🚀 Deployment

### Frontend (React App)
1. Build: `npm run build`
2. Deploy `dist/` folder to your hosting platform
3. Configure base path for production if needed

### CMS (Sanity Studio)
1. Deploy: `npm run sanity:deploy`
2. Choose studio hostname
3. Access from anywhere via provided URL

## 📱 Mobile Usage (iPad)

### Writing on iPad
1. Open deployed Sanity Studio URL
2. Log in with Sanity account
3. Create new blog post
4. Use rich text editor:
   - Tap to write
   - Upload photos from camera/gallery
   - Format text with toolbar
   - Add code blocks, links, images
5. Publish immediately

### Photo Workflow
1. Take photo with iPad camera
2. Upload directly in Sanity Studio
3. Set image hotspots for optimal cropping
4. Add alt text for accessibility
5. Images automatically optimized and served via CDN

## 🔧 Development

### Available Scripts
```bash
# Development
npm run dev              # Start React dev server (port 8080)
npm run sanity:dev       # Start Sanity Studio (port 3333)

# Building
npm run build            # Build React app for production
npm run sanity:build     # Build Sanity Studio

# Deployment
npm run sanity:deploy    # Deploy Studio to Sanity's CDN

# Utilities
npm run lint             # Lint code with ESLint
npm run preview          # Preview production build
```

### Adding New Features

#### New Content Type
1. Create schema in `schemas/` directory
2. Add to `schemas/index.ts`
3. Update `sanity.config.ts` structure
4. Create API functions in `lib/`
5. Build React components

#### New Page
1. Create component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## 🐛 Troubleshooting

### Common Issues

#### "Connection Refused" on localhost:8080
1. Check if dev server is running: `npm run dev`
2. Verify port isn't in use: `lsof -i :8080`
3. Check vite.config.ts base path configuration

#### Sanity Studio Won't Load
1. Verify project ID in config files
2. Check API permissions in Sanity dashboard
3. Ensure dependencies are installed: `npm install`

#### Comments Not Appearing
1. Check if comments are approved in Studio
2. Verify post ID matches in comment form
3. Check browser console for API errors

#### Images Not Loading
1. Verify image upload completed in Studio
2. Check CDN URLs in network tab
3. Ensure proper image fields in schema

### Performance Optimization
- **Images**: Automatically optimized by Sanity CDN
- **Code Splitting**: Vite handles automatic chunking
- **Caching**: Sanity CDN provides global caching
- **Bundle Size**: Use `npm run build` to analyze

## 📚 Resources

### Documentation
- [Sanity Documentation](https://www.sanity.io/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)

### Support
- [Sanity Community](https://www.sanity.io/community)
- [React Community](https://react.dev/community)

## 📄 License

This project is private and proprietary to Nils Johansson.

---

**Last Updated**: July 7, 2025
**Version**: 2.0.0 - Full Sanity CMS Integration