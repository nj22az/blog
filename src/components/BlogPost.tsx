import { CalendarIcon, ExternalLink, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { WordPressPost, fetchAuthor } from "@/lib/wordpress-api";
import { useEffect, useState } from "react";

interface BlogPostProps {
  post: WordPressPost;
}

export function BlogPost({ post }: BlogPostProps) {
  const [authorName, setAuthorName] = useState<string>('');
  const [authorAvatar, setAuthorAvatar] = useState<string>('');

  // Format the date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Get featured image if available
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  
  // Get author data - try from _embedded first, then fetch if needed
  useEffect(() => {
    const getAuthorData = async () => {
      try {
        // Try to get author from _embedded first
        if (post._embedded?.author?.[0]) {
          const embeddedAuthor = post._embedded.author[0];
          setAuthorName(embeddedAuthor.name || 'Nils Johansson');
          setAuthorAvatar(embeddedAuthor.avatar_urls?.['96'] || '');
          return;
        }

        // If no embedded author but we have author ID, fetch it
        if (post.author) {
          const authorData = await fetchAuthor(post.author);
          if (authorData) {
            setAuthorName(authorData.name || 'Nils Johansson');
            setAuthorAvatar(authorData.avatar_urls?.['96'] || '');
            return;
          }
        }

        // Default fallback
        setAuthorName('Nils Johansson');
      } catch (error) {
        console.error('Error fetching author data:', error);
        setAuthorName('Nils Johansson');
      }
    };

    getAuthorData();
  }, [post]);
  
  // Strip HTML tags from excerpt
  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };
  
  const excerpt = stripHtml(post.excerpt.rendered).substring(0, 150) + (stripHtml(post.excerpt.rendered).length > 150 ? '...' : '');

  // Log the post object to debug
  console.log('Post in BlogPost component:', post);
  console.log('WordPress link:', post.link);

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
          <Avatar className="h-7 w-7">
            <AvatarImage src={authorAvatar} alt={authorName} />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{authorName}</span>
        </div>
      </div>
      <CardFooter className="flex flex-col gap-2 pt-0 flex-none">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link to={`/blog/${post.slug}`}>
            Read More
          </Link>
        </Button>
        <Button asChild variant="ghost" size="sm" className="w-full">
          <a 
            href={post.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              console.log('WordPress link clicked:', post.link);
              window.open(post.link, '_blank', 'noopener,noreferrer');
            }}
          >
            <span>View on WordPress</span>
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
} 