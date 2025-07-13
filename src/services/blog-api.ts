import { fetchSanityPosts, fetchSanityPostBySlug, SanityPost } from './sanity-api';

// Unified blog post interface (Sanity-based)
export interface BlogPost {
  _id: string;
  title: {
    rendered: string;
  };
  slug: string;
  date: string;
  excerpt: {
    rendered: string;
  };
  body?: any[];
  mainImage?: any;
  author?: {
    name: string;
  };
  source: 'sanity';
}

// Convert Sanity post to unified format
function convertSanityPost(post: SanityPost): BlogPost {
  return {
    _id: post._id,
    title: {
      rendered: post.title
    },
    slug: post.slug.current,
    date: post.publishedAt,
    excerpt: {
      rendered: post.excerpt || ''
    },
    body: post.body,
    mainImage: post.mainImage,
    author: post.author,
    source: 'sanity'
  };
}


export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  try {
    // Fetch posts from Sanity only (migration completed)
    const sanityPosts = await fetchSanityPosts();
    console.log(`Loaded ${sanityPosts.length} posts from Sanity`);
    return sanityPosts.map(convertSanityPost);
  } catch (error) {
    console.error('Error fetching blog posts from Sanity:', error);
    return [];
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Fetch from Sanity only (migration completed)
    const sanityPost = await fetchSanityPostBySlug(slug);
    if (sanityPost) {
      return convertSanityPost(sanityPost);
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
}