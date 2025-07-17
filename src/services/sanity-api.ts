import { sanityClient } from './sanity';

// Core types
export interface SanityImageAsset {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

export interface SanityAuthor {
  name: string;
  _id: string;
  slug: {
    current: string;
  };
  subtitle?: string;
  image?: SanityImageAsset;
  bio?: string;
  color?: string;
}

export interface SanityBlockContent {
  _type: string;
  _key: string;
  style?: string;
  children?: Array<{
    _type: string;
    _key: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: unknown[];
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  excerpt?: string;
  body: SanityBlockContent[];
  mainImage?: SanityImageAsset;
  author?: SanityAuthor;
}

// Site Settings types
export interface SanityNavLink {
  title: string;
  href: string;
  icon?: string;
  description?: string;
  showInHeader?: boolean;
  showInFooter?: boolean;
}

export interface SanityPageTitle {
  path: string;
  title: string;
  subtitle?: string;
}

export interface SanitySocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface SanityJapaneseDesign {
  enableZenMode?: boolean;
  colorTheme?: 'sumi' | 'shiro' | 'cha' | 'mizu' | 'mori';
  emphasizeMa?: boolean;
  subtleAnimations?: boolean;
}

export interface SanitySiteSettings {
  _id: string;
  siteTitle: string;
  siteSubtitle?: string;
  siteDescription?: string;
  logoImage?: SanityImageAsset;
  openGraphImage?: SanityImageAsset;
  headerStyle?: 'minimal' | 'glass' | 'zen' | 'sophisticated';
  headerBackground?: 'transparent' | 'glass' | 'solid' | 'gradient';
  showPageTitle?: boolean;
  navLinks?: SanityNavLink[];
  pageTitles?: SanityPageTitle[];
  socialLinks?: SanitySocialLink[];
  footerText?: string;
  japaneseDesign?: SanityJapaneseDesign;
}

// Hero section types
export interface SanityHeroOverlay {
  enabled?: boolean;
  opacity?: number;
  color?: 'black' | 'blue' | 'gray' | 'custom';
}

export interface SanityHeroJapaneseDesign {
  enableZen?: boolean;
  emphasizeMa?: boolean;
  subtleAnimations?: boolean;
}

export interface SanityHeroSEO {
  altText?: string;
  priority?: boolean;
}

export interface SanityHero {
  _id: string;
  headline: string;
  subhead?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaStyle?: 'primary' | 'secondary' | 'glass' | 'minimal';
  backgroundImage: SanityImageAsset;
  backgroundOverlay?: SanityHeroOverlay;
  textAlignment?: 'left' | 'center' | 'right';
  showAuthors?: boolean;
  heroHeight?: 'screen' | 'large' | 'medium' | 'small';
  japaneseDesign?: SanityHeroJapaneseDesign;
  seo?: SanityHeroSEO;
}

export interface SanityAboutPage {
  _id: string;
  nilsBio?: SanityBlockContent[];
  thuanBio?: SanityBlockContent[];
  philosophyTitle?: string;
  philosophyText?: SanityBlockContent[];
  metaTitle?: string;
  metaDescription?: string;
}

// API functions
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
          _id,
          slug,
          subtitle,
          image,
          bio,
          color
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
          _id,
          slug,
          subtitle,
          image,
          bio,
          color
        }
      }
    `, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching Sanity post:', error);
    return null;
  }
}

export async function fetchSanityAuthors(): Promise<SanityAuthor[]> {
  try {
    const authors = await sanityClient.fetch(`
      *[_type == "author"] | order(name asc) {
        _id,
        name,
        slug,
        subtitle,
        image,
        bio,
        color
      }
    `);
    return authors;
  } catch (error) {
    console.error('Error fetching Sanity authors:', error);
    return [];
  }
}

export async function fetchSiteSettings(): Promise<SanitySiteSettings | null> {
  try {
    const settings = await sanityClient.fetch(`
      *[_type == "siteSettings"][0] {
        _id,
        siteTitle,
        siteSubtitle,
        siteDescription,
        logoImage,
        openGraphImage,
        headerStyle,
        headerBackground,
        showPageTitle,
        navLinks,
        pageTitles,
        socialLinks,
        footerText,
        japaneseDesign
      }
    `);
    return settings;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}

export async function fetchHero(): Promise<SanityHero | null> {
  try {
    const hero = await sanityClient.fetch(`
      *[_type == "hero"][0] {
        _id,
        headline,
        subhead,
        ctaText,
        ctaLink,
        ctaStyle,
        backgroundImage,
        backgroundOverlay,
        textAlignment,
        showAuthors,
        heroHeight,
        japaneseDesign,
        seo
      }
    `);
    return hero;
  } catch (error) {
    console.error('Error fetching hero:', error);
    return null;
  }
}

export async function fetchAboutPage(): Promise<SanityAboutPage | null> {
  try {
    const aboutPage = await sanityClient.fetch(`
      *[_type == "aboutPage"][0] {
        _id,
        nilsBio,
        thuanBio,
        philosophyTitle,
        philosophyText,
        metaTitle,
        metaDescription
      }
    `);
    return aboutPage;
  } catch (error) {
    console.error('Error fetching about page:', error);
    return null;
  }
}

// Convenience exports
export { fetchSanityPosts as fetchAllBlogPosts };
export { fetchSanityPostBySlug as fetchBlogPostBySlug };
export type { SanityPost as BlogPost };