# Sanity.io Migration Script

This document provides a Node.js script to migrate your existing WordPress posts to your new Sanity.io project. Please follow the instructions carefully.

**IMPORTANT SECURITY NOTE:** This script requires a Sanity API token with **write permissions**. Do NOT commit this token to your version control system (Git). Generate a temporary token for this migration and revoke it after the migration is complete, or ensure it has appropriate access controls.

---

## Instructions

1.  **Create a Dedicated Directory for the Script:**
    It is recommended to create a new, empty directory *outside* of your main React project for this script. For example, you could create a folder named `blog-migration` in your `Documents` or `Desktop`.

    ```bash
    # Example: Create a new directory on your Desktop
    mkdir ~/Desktop/blog-migration
    cd ~/Desktop/blog-migration
    ```

2.  **Initialize Node.js Project and Install Dependencies:**
    Inside the `blog-migration` directory you just created, initialize a new Node.js project and install the required packages.

    ```bash
    npm init -y
    npm install axios @sanity/client @sanity/image-url
    ```

3.  **Create the Migration Script File:**
    In the same `blog-migration` directory, create a new file named `migrate.js`.

    ```bash
    touch migrate.js
    ```

4.  **Paste the Script Content:**
    Open the `migrate.js` file you just created and paste the entire content of the script provided below into it.

5.  **Configure the Script:**
    **Before running the script**, you MUST replace the placeholder values in the `migrate.js` file with your actual project details:

    *   `WORDPRESS_SITE_SLUG`: Your WordPress.com site slug (e.g., `theofficeofnils.wordpress.com`).
    *   `SANITY_PROJECT_ID`: Your Sanity Project ID (`hqpjl36z`).
    *   `SANITY_DATASET`: Your Sanity Dataset (usually `production`).
    *   `SANITY_API_TOKEN`: **Generate a new API token with `Editor` or `Administrator` permissions** from your Sanity project dashboard (`Settings` -> `API` -> `Tokens`).

6.  **Run the Migration Script:**
    Once the `migrate.js` file is configured, save it, and then run it from your terminal while *inside* the `blog-migration` directory:

    ```bash
    node migrate.js
    ```

    The script will log its progress to the console. It might take some time depending on the number of posts and images.

---

## `migrate.js` Script Content

```javascript
const axios = require('axios');
const sanityClient = require('@sanity/client');
const imageUrlBuilder = require('@sanity/image-url');

// --- Configuration --- 
// !!! IMPORTANT: REPLACE THESE PLACEHOLDERS WITH YOUR ACTUAL VALUES !!!
const WORDPRESS_SITE_SLUG = 'YOUR_WORDPRESS_SITE_SLUG'; // e.g., 'theofficeofnils.wordpress.com'
const SANITY_PROJECT_ID = 'YOUR_SANITY_PROJECT_ID'; // e.g., 'hqpjl36z'
const SANITY_DATASET = 'YOUR_SANITY_DATASET'; // e.g., 'production'
const SANITY_API_TOKEN = 'YOUR_SANITY_API_TOKEN'; // !!! GENERATE A TOKEN WITH WRITE ACCESS IN SANITY SETTINGS !!!

const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: '2023-01-01', // use current date (YYYY-MM-DD) to target the latest API version
  token: SANITY_API_TOKEN,
  useCdn: false, // Don't use CDN for writing
});

const builder = imageUrlBuilder(client);

async function migratePosts() {
  console.log('Starting WordPress to Sanity migration...');

  try {
    // 1. Fetch all posts from WordPress
    let allWpPosts = [];
    let page = 1;
    let totalPages = 1;

    do {
      console.log(`Fetching WordPress posts - Page ${page} of ${totalPages}...`);
      const wpResponse = await axios.get(
        `https://public-api.wordpress.com/wp/v2/sites/${WORDPRESS_SITE_SLUG}/posts`,
        {
          params: {
            per_page: 100, // Fetch as many as possible per page
            page: page,
            _embed: 1, // Embed featured media and author
          },
        }
      );

      allWpPosts = allWpPosts.concat(wpResponse.data);
      totalPages = parseInt(wpResponse.headers['x-wp-totalpages'] || '1', 10);
      page++;
    } while (page <= totalPages);

    console.log(`Fetched ${allWpPosts.length} posts from WordPress.`);

    // 2. Process and upload each post to Sanity
    for (const wpPost of allWpPosts) {
      console.log(`Processing post: "${wpPost.title.rendered}"`);

      // Handle author (create or find)
      let authorRef = null;
      if (wpPost._embedded && wpPost._embedded.author && wpPost._embedded.author.length > 0) {
        const wpAuthor = wpPost._embedded.author[0];
        const authorDoc = {
          _type: 'author', // Ensure this matches your Sanity schema type for authors
          name: wpAuthor.name,
          slug: { _type: 'slug', current: wpAuthor.slug },
          bio: wpAuthor.description || '',
          // You might want to handle author images here too
        };

        // Check if author already exists
        const existingAuthor = await client.fetch(`*[_type == "author" && slug.current == $slug][0]`, { slug: wpAuthor.slug });
        if (existingAuthor) {
          authorRef = { _ref: existingAuthor._id, _type: 'reference' };
          console.log(`  Author "${wpAuthor.name}" already exists.`);
        } else {
          const newAuthor = await client.createIfNotExists(authorDoc);
          authorRef = { _ref: newAuthor._id, _type: 'reference' };
          console.log(`  Created author: "${wpAuthor.name}"`);
        }
      }

      // Handle featured image upload
      let mainImageRef = null;
      if (wpPost._embedded && wpPost._embedded['wp:featuredmedia'] && wpPost._embedded['wp:featuredmedia'].length > 0) {
        const imageUrl = wpPost._embedded['wp:featuredmedia'][0].source_url;
        try {
          const imageAsset = await client.assets.upload('image', await axios.get(imageUrl, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data)), {
            filename: wpPost.slug + '-featured-image.jpg',
          });
          mainImageRef = {
            _type: 'image',
            asset: {
              _ref: imageAsset._id,
              _type: 'reference',
            },
          };
          console.log(`  Uploaded featured image for "${wpPost.title.rendered}"`);
        } catch (imgErr) {
          console.error(`  Failed to upload image for "${wpPost.title.rendered}":`, imgErr.message);
        }
      }

      // Convert WordPress HTML content to Sanity Portable Text (simplified)
      // This is a very basic conversion. For complex HTML, consider a dedicated library
      // like 'html-to-portable-text' or 'sanity-blocks-to-html'.
      const blocks = [{
        _key: 'contentBlock',
        _type: 'block',
        children: [{ _key: 'span', _type: 'span', text: wpPost.content.rendered }],
        markDefs: [],
        style: 'normal',
      }];

      const sanityDoc = {
        _type: 'post', // Ensure this matches your Sanity schema type for posts
        title: wpPost.title.rendered,
        slug: {
          _type: 'slug',
          current: wpPost.slug,
        },
        publishedAt: wpPost.date,
        excerpt: wpPost.excerpt.rendered.replace(/<[^>]*>?/gm, '').substring(0, 200) + '...', // Strip HTML from excerpt
        body: blocks, // Portable Text content
        mainImage: mainImageRef,
        author: authorRef,
        // Add other fields as per your Sanity schema (categories, tags, etc.)
      };

      // Create the document in Sanity
      const createdDoc = await client.create(sanityDoc);
      console.log(`  Successfully created post in Sanity: "${createdDoc.title}" (ID: ${createdDoc._id})`);
    }

    console.log('Migration complete!');
  } catch (error) {
    console.error('Migration failed:', error.message);
    if (error.response) {
      console.error('WordPress API Error Data:', error.response.data);
    }
  }
}

migratePosts();
```
