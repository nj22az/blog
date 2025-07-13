import axios from "axios";
import { ApiClient } from "./api-client";
import { WordPressPost } from "@types/blog";

// WordPress API client with specific configuration
const wordpressClient = new ApiClient("https://public-api.wordpress.com/wp/v2/sites/theofficeofnils.wordpress.com");

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
    const params = new URLSearchParams({
      _embed: 'true',
      page: page.toString(),
      per_page: perPage.toString(),
    });
    
    if (categoryId) {
      params.append('categories', categoryId.toString());
    }
    
    return await wordpressClient.get<WordPressPost[]>(`/posts?${params}`);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    if (axios.isAxiosError(error) && error.response?.status === 400 && page > 1) {
      return []; // No more posts available
    }
    throw error;
  }
}

/**
 * Fetch a single blog post by slug
 * @param slug Post slug
 * @returns Promise with blog post
 */
export async function fetchPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const params = new URLSearchParams({
      _embed: 'true',
      slug: encodeURIComponent(slug),
    });
    
    const posts = await wordpressClient.get<WordPressPost[]>(`/posts?${params}`);
    return posts.length > 0 ? posts[0] : null;
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