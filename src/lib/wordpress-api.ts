// WordPress API service for fetching blog posts from theofficeofnils.wordpress.com

export interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
    'author'?: Array<{
      name: string;
      slug?: string;
      avatar_urls?: {
        [key: string]: string;
      };
    }>;
  };
  author: number;
  link: string;
  slug: string;
  categories?: number[];
  tags?: number[];
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text?: string;
  media_details?: {
    width: number;
    height: number;
    sizes?: {
      [key: string]: {
        source_url: string;
        width: number;
        height: number;
      };
    };
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WordPressTag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// WordPress site URL - change this to your WordPress site URL
const WP_API_URL = 'https://public-api.wordpress.com/wp/v2/sites/theofficeofnils.wordpress.com';

/**
 * Fetch blog posts from WordPress
 * @param page Page number
 * @param perPage Number of posts per page
 * @param categoryId Optional category ID to filter by
 * @returns Promise with blog posts
 */
export async function fetchBlogPosts(page = 1, perPage = 10, categoryId?: number): Promise<WordPressPost[]> {
  try {
    console.log(`DEBUG - Fetching WordPress posts: page ${page}, perPage ${perPage}${categoryId ? `, category ${categoryId}` : ''}`);
    
    // Build the URL with all needed parameters
    // Using _embed=true ensures we get author and featured media data
    let url = `${WP_API_URL}/posts?_embed=true&page=${page}&per_page=${perPage}`;
    
    // Add category filter if provided
    if (categoryId) {
      url += `&categories=${categoryId}`;
    }
    
    const response = await fetch(url);
    
    // Check for response headers to handle pagination
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0', 10);
    const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0', 10);
    
    console.log(`DEBUG - WordPress API headers: Total pages: ${totalPages}, Total posts: ${totalPosts}`);
    
    if (!response.ok) {
      // If it's a 400 error on page > 1, it's likely we're out of posts
      if (response.status === 400 && page > 1) {
        console.log("DEBUG - No more posts available (page out of range)");
        return [];
      }
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log(`DEBUG - Successfully fetched ${data.length} posts`);
    
    // Log the first post to check author data
    if (data.length > 0) {
      console.log('DEBUG - First post author data:', data[0].author, data[0]._embedded?.author);
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error; // Re-throw to let the component handle it
  }
}

/**
 * Fetch a single blog post by slug
 * @param slug Post slug
 * @returns Promise with blog post
 */
export async function fetchPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    console.log(`DEBUG - Fetching post with slug: ${slug}`);
    const response = await fetch(
      `${WP_API_URL}/posts?_embed=true&slug=${encodeURIComponent(slug)}`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.status} ${response.statusText}`);
    }
    
    const posts = await response.json();
    if (posts.length === 0) {
      console.log(`DEBUG - No post found with slug: ${slug}`);
      return null;
    }
    
    console.log(`DEBUG - Successfully fetched post with slug: ${slug}`);
    console.log('DEBUG - Post author data:', posts[0].author, posts[0]._embedded?.author);
    return posts[0];
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch media by ID
 * @param mediaId Media ID
 * @returns Promise with media object
 */
export async function fetchMedia(mediaId: number): Promise<WordPressMedia | null> {
  try {
    console.log(`DEBUG - Fetching media with ID: ${mediaId}`);
    const response = await fetch(`${WP_API_URL}/media/${mediaId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch media: ${response.status} ${response.statusText}`);
    }
    
    const media = await response.json();
    console.log(`DEBUG - Successfully fetched media with ID: ${mediaId}`);
    return media;
  } catch (error) {
    console.error(`Error fetching media with ID ${mediaId}:`, error);
    return null;
  }
}

/**
 * Fetch categories
 * @returns Promise with categories
 */
export async function fetchCategories(): Promise<WordPressCategory[]> {
  try {
    console.log('DEBUG - Fetching categories');
    const response = await fetch(`${WP_API_URL}/categories?per_page=100`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status} ${response.statusText}`);
    }
    
    const categories = await response.json();
    console.log(`DEBUG - Successfully fetched ${categories.length} categories`);
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

/**
 * Fetch tags
 * @returns Promise with tags
 */
export async function fetchTags(): Promise<WordPressTag[]> {
  try {
    console.log('DEBUG - Fetching tags');
    const response = await fetch(`${WP_API_URL}/tags?per_page=100`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch tags: ${response.status} ${response.statusText}`);
    }
    
    const tags = await response.json();
    console.log(`DEBUG - Successfully fetched ${tags.length} tags`);
    return tags;
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}

/**
 * Fetch author by ID
 * @param authorId Author ID
 * @returns Promise with author data
 */
export async function fetchAuthor(authorId: number): Promise<any | null> {
  try {
    console.log(`DEBUG - Fetching author with ID: ${authorId}`);
    const response = await fetch(`${WP_API_URL}/users/${authorId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch author: ${response.status} ${response.statusText}`);
    }
    
    const author = await response.json();
    console.log(`DEBUG - Successfully fetched author with ID: ${authorId}`, author);
    return author;
  } catch (error) {
    console.error(`Error fetching author with ID ${authorId}:`, error);
    return null;
  }
} 