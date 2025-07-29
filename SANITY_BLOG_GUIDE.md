# How to Add Blog Posts in Your Sanity CMS

## 🚀 ACCESSING YOUR SANITY STUDIO

### Step 1: Start Your Sanity Studio
```bash
# From your project directory, run:
npm run dev:sanity
```

### Step 2: Open Sanity Studio
- Your browser will open automatically to: `http://localhost:3333`
- If not, manually go to: `http://localhost:3333`
- You'll see "The Office of Nils Johansson" studio

---

## ✍️ CREATING A NEW BLOG POST

### Step 1: Navigate to Blog Posts
1. In the left sidebar, click **"Blog Posts"**
2. You'll see any existing posts listed
3. Click the **"+"** button (Create new Blog Post)

### Step 2: Fill Out the Required Fields

#### **Title** ⭐ *Required*
- Type your article title
- Example: `"Maritime Engineering Challenges in Southeast Asia"`
- Keep it under 60 characters for best SEO

#### **Slug** ⭐ *Required*  
- Click **"Generate"** next to the slug field
- It auto-creates from your title: `maritime-engineering-challenges-southeast-asia`
- You can edit this if needed (use lowercase, hyphens only)

#### **Author** ⭐ *Required*
- Click the dropdown
- Select from existing authors (likely "Nils Johansson")
- If you need to add a new author, see Author section below

#### **Main Image** *Recommended*
1. Click **"Select image"**
2. Either:
   - **Upload new**: Drag & drop your image file
   - **Choose existing**: Pick from uploaded images
3. **Image specs**: 1200px wide minimum, JPG/PNG format
4. **Add Alt Text**: Click the image → fill "Alternative text" field
   - Example: `"Marine equipment installation at industrial facility"`

#### **Categories** *Optional*
- Click **"Add item"** to select categories
- Choose existing categories or create new ones
- Examples: "Engineering", "Southeast Asia", "Maritime"

#### **Published At** ⭐ *Required*
- Default is current date/time
- To schedule: Click the date/time to change it
- For immediate publish: Leave as current date

#### **Excerpt** *Recommended*
- Write 1-2 sentences summarizing your post
- **Character limit**: 200 characters max
- Example: `"Exploring unique engineering challenges in Vietnamese maritime projects and practical solutions developed through hands-on field experience."`

### Step 3: Write Your Article Content

#### **Body** - Main Content Area
1. Click in the large **"Body"** text area
2. You'll see a rich text editor with these options:

**Text Formatting:**
- **Normal text** - Just start typing
- **Headings** - Use toolbar buttons H2, H3, H4
- **Bold** - Select text, click **B** button
- **Italic** - Select text, click *I* button
- **Links** - Select text, click link button, paste URL

**Content Structure:**
```
H2: Main Section Title
Normal paragraph text here. Keep paragraphs 3-5 sentences.

H3: Subsection Title  
More detailed content here.

• Bullet points
• For lists
• And key points
```

**Adding Images:**
1. Place cursor where you want image
2. Click **"+"** in toolbar
3. Select **"Image"**
4. Upload or choose existing image
5. Add caption if desired

**Adding Lists:**
- Click bullet list button for bulleted lists
- Click numbered list button for numbered lists

**Adding Quotes:**
1. Click **"+"** in toolbar
2. Select **"Quote"**
3. Type your quoted text

### Step 4: Additional Settings

#### **Enable Comments** 
- Toggle ON if you want comments (default: enabled)

#### **Featured Post**
- Toggle ON to feature this post on homepage
- Only use for your best/most important articles

### Step 5: Publish Your Post

1. **Save Draft**: Your work saves automatically
2. **Preview**: Click eye icon to preview
3. **Publish**: Click **"Publish"** button when ready
4. **Verify**: Check your website to see the live post

---

## 👤 MANAGING AUTHORS

### Adding a New Author

1. Click **"Authors"** in left sidebar
2. Click **"+"** to create new author
3. Fill required fields:

#### **Name** ⭐ *Required*
- Example: `"Dr. Nils Johansson"`

#### **Subtitle** *Optional but Recommended*
- Professional title/description  
- Example: `"Marine Engineer & Global Field Service Expert"`

#### **Slug** ⭐ *Required*
- Click **"Generate"** (creates: `dr-nils-johansson`)

#### **Image** *Recommended*
- Upload professional headshot
- Square format works best
- 300px × 300px minimum

#### **Bio** *Recommended*
- 2-3 sentence professional bio
- Example: `"Marine engineering specialist with 15+ years of experience in Southeast Asian industrial projects. Expert in cross-cultural project management and technical system optimization."`

#### **Avatar Color**
- Choose Blue or Red for author color theme

4. Click **"Publish"** to save

---

## 📂 MANAGING CATEGORIES

### Adding New Categories

1. Click **"Categories"** in left sidebar  
2. Click **"+"** to create new category
3. Fill fields:
   - **Title**: `"Southeast Asia"`, `"Engineering"`, `"Maritime"`
   - **Slug**: Auto-generated from title
   - **Description**: Brief description of category

---

## 🖼️ IMAGE BEST PRACTICES

### Featured Images (Main Image)
- **Size**: 1200px wide × 675px tall (16:9 ratio)
- **Format**: JPG or PNG
- **File size**: Under 2MB
- **Content**: Professional, relevant to article topic

### Content Images  
- **Size**: 800px-1200px wide
- **Format**: JPG for photos, PNG for graphics
- **Always add alt text** for accessibility
- **Add captions** to explain the image

### Uploading Images
1. **Drag & drop** files directly into Sanity
2. **Or click "Upload"** button to browse files
3. Images are automatically optimized for web
4. **Always fill alt text** - required for accessibility

---

## 📝 CONTENT WRITING TIPS

### Article Structure
```
Title: Clear, specific, under 60 characters

H2: Introduction
Brief overview of what you'll cover

H2: Main Content Section
Your primary content with examples

H3: Subsection if needed
More detailed information

H2: Conclusion/Key Takeaways
Summary of main points

H2: Next Steps or Call to Action
What readers should do next
```

### Writing Style
- **Professional but approachable** tone
- **First-person perspective** is fine ("In my experience...")
- **Specific examples** and case studies
- **Technical details** explained clearly
- **Cultural insights** when relevant

### Content Ideas
- Project case studies from Southeast Asia
- Engineering problem-solving approaches
- Cross-cultural business insights
- Technical tutorials and guides
- Industry trends and analysis

---

## 🔍 SEO OPTIMIZATION

### For Each Post, Ensure:
- **Compelling title** (40-60 characters)
- **Descriptive excerpt** (1-2 sentences)
- **Proper headings** (H2, H3, H4 structure)
- **Alt text on all images**
- **Relevant categories** selected
- **Links to related content** when appropriate

### Keywords to Consider:
- Marine engineering
- Southeast Asia projects
- Industrial systems
- Cross-cultural project management
- Field service engineering
- Vietnam/Thailand/Japan projects

---

## ✅ PUBLISHING CHECKLIST

Before clicking "Publish":

- [ ] **Title** is clear and compelling
- [ ] **Slug** is clean (auto-generated is usually fine)
- [ ] **Author** selected correctly
- [ ] **Featured image** uploaded with alt text
- [ ] **Excerpt** written (under 200 characters)
- [ ] **Article content** complete with proper headings
- [ ] **Images** have alt text and captions
- [ ] **Categories** selected appropriately
- [ ] **Publication date** set correctly
- [ ] **Preview** looks good

---

## 🚀 AFTER PUBLISHING

1. **Check your website**: Visit your live site to see the new post
2. **Share on social media**: Use the built-in sharing buttons
3. **Monitor engagement**: Check for comments and feedback
4. **Update as needed**: You can always edit and republish

---

## 🔧 TROUBLESHOOTING

### "I can't see my published post on the website"
- Wait 2-3 minutes for content to sync
- Check that "Published At" date is not in the future
- Ensure post is actually published (not just saved as draft)

### "Images aren't showing up"
- Make sure alt text is filled in
- Check image file size (under 2MB)
- Try re-uploading the image

### "I made a mistake in a published post"
- Just edit the post and click "Publish" again
- Changes appear on website within 2-3 minutes
- No need to delete and recreate

### Need Help?
- Check if Sanity Studio is running: `npm run dev:sanity`
- Restart studio if having issues: Stop (Ctrl+C) and run again
- Contact technical support if persistent issues

---

**Your Sanity Studio URL**: `http://localhost:3333` (when running locally)

This guide is specific to your exact Sanity setup and field configuration. Follow these steps and you'll have professional blog posts published in minutes!