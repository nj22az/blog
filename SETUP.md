# Quick Setup Guide

## 🚀 Getting Started in 3 Minutes

### 1. Start Development Servers
```bash
# Terminal 1: Start the website
npm run dev
# → http://localhost:8080/

# Terminal 2: Start content management
npm run sanity:dev  
# → http://localhost:3333/
```

### 2. Create Your First Blog Post
1. Open Sanity Studio: `http://localhost:3333/`
2. Click "Blog Posts" → "Create"
3. Fill in title, content, and publish
4. Post appears immediately on website

### 3. Deploy for iPad Access
```bash
npm run sanity:deploy
# Follow prompts to get your studio URL
```

## 📱 iPad Workflow

1. **Open Studio URL** on iPad Safari
2. **Login** with Sanity account
3. **Create** new blog post
4. **Upload photos** from camera/gallery
5. **Write content** with rich text editor
6. **Publish** - appears instantly on website

## 🔧 Key Commands

```bash
# Development
npm run dev              # Website (port 8080)
npm run sanity:dev       # Studio (port 3333)

# Deployment  
npm run build            # Build website
npm run sanity:deploy    # Deploy studio to cloud

# Maintenance
npm install              # Install dependencies
npm run lint             # Check code quality
```

## 📂 Important Files

- **`sanity.config.ts`** - Studio configuration
- **`src/lib/sanity.ts`** - API client setup
- **`schemas/`** - Content structure definitions
- **`src/components/CommentForm.tsx`** - Comment system

## 🎯 Features Ready to Use

✅ **Blog Management** - Full CMS with rich text  
✅ **Comments System** - User comments with moderation  
✅ **iPad Publishing** - Mobile-first content creation  
✅ **Photo Upload** - Direct camera integration  
✅ **Monochrome Avatars** - Nils (blue) & Thuan (red)  
✅ **Responsive Design** - Works on all devices  

## 🐛 Quick Fixes

**Website won't start?**
```bash
cd "/Users/nilsjohansson/Documents/App Development/theofficeofnilsjohansson"
npm install
npm run dev
```

**Studio won't load?**
```bash
npm run sanity:dev
# Check http://localhost:3333/
```

**Comments not working?**
- Check comments are approved in Studio
- Verify post ID in browser console

---

**Need Help?** Check the full README.md for detailed documentation.