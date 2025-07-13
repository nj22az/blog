import { sanityClient } from './sanity';

export interface SanityPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  excerpt?: string;
  body: any[];
  mainImage?: any;
  author?: {
    name: string;
    _id: string;
  };
}

export async function fetchSanityPosts(): Promise<SanityPost[]> {
  try {
    const posts = await sanityClient.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        body,
        mainImage,
        author->{
          name,
          _id
        }
      }
    `);
    return posts;
  } catch (error) {
    console.error('Error fetching Sanity posts:', error);
    return [];
  }
}

export async function fetchSanityPostBySlug(slug: string): Promise<SanityPost | null> {
  try {
    const post = await sanityClient.fetch(`
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        body,
        mainImage,
        author->{
          name,
          _id
        }
      }
    `, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching Sanity post:', error);
    return null;
  }
}