import { CalendarIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MonoAvatar } from "./MonoAvatar";
import { SanityPost } from "@/services/sanity-api";
import { urlFor } from "@/services/sanity";
import { usePremiumAnimations } from "@/hooks/usePremiumAnimations";
import NilsProfile from '@/assets/images/nils-profile.jpeg';
import ThuanProfile from '@/assets/images/thuan-profile.jpeg';

interface BlogPostProps {
  post: SanityPost;
}

export function BlogPost({ post }: BlogPostProps) {
  const { fadeIn } = usePremiumAnimations();

  // Format the date
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Get featured image from Sanity
  const getFeaturedImage = () => {
    if (post.mainImage?.asset) {
      return urlFor(post.mainImage).width(600).url();
    }
    return null;
  };

  // Get author image
  const getAuthorImage = () => {
    if (post.author?.image?.asset) {
      return urlFor(post.author.image).width(200).url();
    }
    
    // Fallback based on author name
    if (post.author?.name?.toLowerCase().includes('nils')) return NilsProfile;
    if (post.author?.name?.toLowerCase().includes('thuan')) return ThuanProfile;
    return NilsProfile;
  };

  // Get author color/owner
  const getAuthorOwner = () => {
    if (post.author?.color) return post.author.color;
    if (post.author?.name?.toLowerCase().includes('nils')) return 'nils';
    if (post.author?.name?.toLowerCase().includes('thuan')) return 'thuan';
    return 'nils';
  };
  
  // Get excerpt (no HTML stripping needed for Sanity)
  const excerpt = post.excerpt ? 
    (post.excerpt.length > 150 ? post.excerpt.substring(0, 150) + '...' : post.excerpt) :
    'No excerpt available.';

  const featuredImage = getFeaturedImage();

  return (
    <Card 
      {...fadeIn({ delay: 100 })}
      className="card-industrial overflow-hidden flex flex-col h-full hover-lift"
    >
      {featuredImage && (
        <div className="relative aspect-video w-full overflow-hidden bg-pastel-cream">
          <img 
            src={featuredImage} 
            alt={post.mainImage?.alt || post.title}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-eink-black/50 via-transparent to-transparent" />
        </div>
      )}
      <CardHeader className="pb-6 flex-none p-8">
        <div className="flex items-center justify-between text-sm text-eink-medium-gray mb-6">
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span className="font-light text-xs tracking-wide">{formattedDate}</span>
          </div>
        </div>
        <CardTitle className="line-clamp-2 text-xl font-semibold text-neutral-900 leading-tight">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-6 flex-grow px-8">
        <CardDescription className="line-clamp-3 text-base font-medium text-neutral-700 leading-relaxed">
          {excerpt}
        </CardDescription>
      </CardContent>
      <div className="px-8 pb-6 flex-none">
        <div className="flex items-center space-x-4 mb-6">
          <MonoAvatar 
            src={getAuthorImage()} 
            alt={post.author?.name || "Author"} 
            owner={getAuthorOwner()} 
            size="sm"
          />
          <div>
            <span className="text-sm text-neutral-900 font-medium">{post.author?.name || "Unknown Author"}</span>
            {post.author?.subtitle && (
              <p className="text-xs text-neutral-600 mt-1">{post.author.subtitle}</p>
            )}
          </div>
        </div>
      </div>
      <CardFooter className="flex flex-col gap-2 pt-0 flex-none p-8">
        <Button 
          asChild 
          variant="outline" 
          size="sm" 
          className="w-full btn-primary"
        >
          <Link to={`/blog/${post.slug.current}`}>
            Read More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
} 