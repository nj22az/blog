import { CalendarIcon, ExternalLink, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MonoAvatar } from "./MonoAvatar";
import { WordPressPost } from "@services/wordpress-api";
import NilsProfile from '@/assets/images/nils-profile.jpeg';

interface BlogPostProps {
  post: WordPressPost;
}

export function BlogPost({ post }: BlogPostProps) {
  // Format the date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Get featured image if available
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  
  // Strip HTML tags from excerpt
  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };
  
  const excerpt = stripHtml(post.excerpt.rendered).substring(0, 150) + (stripHtml(post.excerpt.rendered).length > 150 ? '...' : '');

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md flex flex-col h-full">
      {featuredImage && (
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <img 
            src={featuredImage} 
            alt={stripHtml(post.title.rendered)}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <CardHeader className="pb-2 flex-none">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <div className="flex items-center">
            <CalendarIcon className="mr-1 h-3 w-3" />
            <span>{formattedDate}</span>
          </div>
        </div>
        <CardTitle className="line-clamp-2 text-xl">
          <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <CardDescription className="line-clamp-3">
          {excerpt}
        </CardDescription>
      </CardContent>
      <div className="px-6 pb-2 flex-none">
        <div className="flex items-center space-x-2 mb-4">
          <MonoAvatar 
            src={NilsProfile} 
            alt="Nils Johansson" 
            owner="nils" 
            size="sm"
          />
          <span className="text-sm text-muted-foreground">Nils Johansson</span>
        </div>
      </div>
      <CardFooter className="flex flex-col gap-2 pt-0 flex-none">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link to={`/blog/${post.slug}`}>
            Read More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
} 