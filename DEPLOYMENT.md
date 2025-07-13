# Deployment Checklist

## 🚀 Production Deployment

### Pre-Deployment
- [ ] Test locally: `npm run dev` works
- [ ] Test Studio: `npm run sanity:dev` works  
- [ ] All content migrated from WordPress
- [ ] Comments system tested
- [ ] Avatar colors correct (Nils: blue, Thuan: red)
- [ ] Mobile responsive on iPad/phone

### Frontend Deployment
```bash
# 1. Build for production
npm run build

# 2. Deploy dist/ folder to your host
# (Netlify, Vercel, GitHub Pages, etc.)

# 3. Set environment variables on host:
VITE_SANITY_PROJECT_ID=hqpjl36z
VITE_SANITY_DATASET=production
```

### CMS Deployment
```bash
# Deploy Sanity Studio to cloud
npm run sanity:deploy

# Choose hostname (e.g., nils-blog.sanity.studio)
# Save the URL for iPad access
```

### Post-Deployment
- [ ] Website loads at production URL
- [ ] Blog posts display correctly
- [ ] Comments form works
- [ ] Admin can access Sanity Studio
- [ ] Images load properly
- [ ] iPad can access Studio URL

## 📱 iPad Setup

### For Content Management
1. **Save Studio URL** to iPad Safari bookmarks
2. **Login** with Sanity account
3. **Test creating** a blog post
4. **Test uploading** photos from camera
5. **Verify** content appears on website

### Studio URL Format
```
https://[your-hostname].sanity.studio
```

## 🔒 Security Checklist

- [ ] Sanity API token secured (not in Git)
- [ ] WordPress links removed from UI
- [ ] Comment moderation enabled
- [ ] Proper CORS settings in Sanity
- [ ] Environment variables set correctly

## 📊 Performance

### Optimization Checks
- [ ] Images optimized (handled by Sanity CDN)
- [ ] Bundle size reasonable (`npm run build`)
- [ ] Lighthouse score > 90
- [ ] Mobile page speed good
- [ ] CDN caching working

### Monitoring
- [ ] Error tracking set up
- [ ] Analytics configured
- [ ] Comment spam monitoring
- [ ] Backup strategy in place

## 🔄 Content Migration Status

### Completed ✅
- [x] 3 WordPress posts migrated to Sanity
- [x] Duplicate posts cleaned up
- [x] Authors created in Sanity
- [x] Comments system implemented
- [x] WordPress links removed from UI

### Content Types Available
- [x] Blog Posts (with rich text, images, categories)
- [x] Authors (with monochrome avatars)  
- [x] Categories (with colors)
- [x] Comments (with moderation)

## 🛠️ Maintenance

### Regular Tasks
- **Weekly**: Review and approve comments
- **Monthly**: Check for spam comments
- **Quarterly**: Update dependencies
- **As needed**: Create new blog posts

### Backup Strategy
- **Sanity**: Automatic backups included
- **Git**: Code versioned in repository
- **Images**: Stored in Sanity CDN
- **Comments**: Part of Sanity dataset

## 📞 Support Contacts

### Technical Support
- **Sanity**: https://www.sanity.io/support
- **Hosting**: [Your hosting provider support]
- **Domain**: [Your domain registrar support]

### Documentation
- **Project README**: `README.md`
- **Setup Guide**: `SETUP.md` 
- **This Checklist**: `DEPLOYMENT.md`

---

**Deployment Date**: _________________
**Studio URL**: _________________
**Production URL**: _________________
**Deployed By**: _________________