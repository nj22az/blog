// Blog and Post related types
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
  categories: string[];
  tags: string[];
  featuredImage?: string;
}

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

export interface Author {
  id: number;
  name: string;
  description: string;
  avatar_urls: {
    [key: string]: string;
  };
}

export interface Media {
  id: number;
  source_url: string;
  alt_text: string;
  caption: {
    rendered: string;
  };
}

export interface Comment {
  _id: string;
  name: string;
  comment: string;
  createdAt: string;
  postId?: string;
}