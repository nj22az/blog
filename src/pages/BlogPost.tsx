import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CalendarIcon, ArrowLeft, Loader2 } from "lucide-react";
import { fetchBlogPostBySlug, SanityPost } from "@/services/sanity-api";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/services/sanity";
import { MonoAvatar } from "@/components/MonoAvatar";
import { Button } from "@/components/ui/button";
import { usePremiumAnimations } from "@/hooks/usePremiumAnimations";
import NilsProfile from '@/assets/images/nils-profile.jpeg';
import ThuanProfile from '@/assets/images/thuan-profile.jpeg';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<SanityPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { fadeIn, slideUp } = usePremiumAnimations();

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setError("No slug provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        // Fetch from Sanity
        const sanityPost = await fetchBlogPostBySlug(slug);
        if (sanityPost) {
          setPost(sanityPost);
        } else {
          setError("Post not found");
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  // Get author image helper
  const getAuthorImage = (author?: SanityPost['author']) => {
    if (!author) return NilsProfile;
    
    if (author.image && author.image.asset) {
      return urlFor(author.image).width(200).url();
    }
    
    // Fallback based on author
    if (author.name?.toLowerCase().includes('nils')) return NilsProfile;
    if (author.name?.toLowerCase().includes('thuan')) return ThuanProfile;
    return NilsProfile;
  };

  // Get author color helper
  const getAuthorOwner = (author?: SanityPost['author']) => {
    if (!author) return 'nils';
    if (author.color) return author.color;
    if (author.name?.toLowerCase().includes('nils')) return 'nils';
    if (author.name?.toLowerCase().includes('thuan')) return 'thuan';
    return 'nils';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <Button asChild variant="outline">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">Post not found</p>
        <Button asChild variant="outline">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back button */}
      <div {...fadeIn({ delay: 0 })} className="mb-8">
        <Button asChild variant="outline" size="sm" className="btn-outline focus-industrial">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>
        </Button>
      </div>

      {/* Article header */}
      <header {...slideUp({ delay: 100 })} className="mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 mb-12">{post.title}</h1>
        
        <div className="flex items-center gap-8 text-eink-medium-gray mb-8">
          <div className="flex items-center gap-4">
            <MonoAvatar 
              src={getAuthorImage(post.author)} 
              alt={post.author?.name || "Author"} 
              owner={getAuthorOwner(post.author)}
              size="sm"
            />
            <span className="font-medium text-neutral-900">{post.author?.name || "Unknown Author"}</span>
          </div>
          <div className="flex items-center gap-3">
            <CalendarIcon className="h-4 w-4" />
            <span className="font-medium text-neutral-700">{formattedDate}</span>
          </div>
        </div>

        {post.author?.subtitle && (
          <p className="text-sm text-neutral-600 mt-6">{post.author.subtitle}</p>
        )}
      </header>

      {/* Featured image */}
      {post.mainImage && (
        <div {...fadeIn({ delay: 200 })} className="mb-8 rounded-sm overflow-hidden card-industrial">
          <img 
            src={urlFor(post.mainImage).width(800).url()}
            alt={post.mainImage.alt || post.title}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Article content */}
      <div 
        {...slideUp({ delay: 300 })} 
        className="prose prose-lg max-w-none card-industrial ma-industrial"
      >
        <div className="text-neutral-900 leading-relaxed space-y-6">
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p className="text-base text-neutral-700">
              {post.excerpt || 'No content available.'}
            </p>
          )}
        </div>
      </div>

      {/* Article footer */}
      <footer {...fadeIn({ delay: 400 })} className="mt-16 pt-8 border-t border-neutral-200 card-industrial ma-industrial">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <MonoAvatar 
              src={getAuthorImage(post.author)} 
              alt={post.author?.name || "Author"} 
              owner={getAuthorOwner(post.author)}
              size="md"
            />
            <div>
              <p className="font-medium text-neutral-900">{post.author?.name || "Unknown Author"}</p>
              {post.author?.bio && (
                <p className="text-sm text-neutral-700 mt-2">{post.author.bio}</p>
              )}
            </div>
          </div>
          
          <Button asChild variant="outline" className="btn-outline">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              More Articles
            </Link>
          </Button>
        </div>
      </footer>
    </article>
  );
};

export default BlogPost; 