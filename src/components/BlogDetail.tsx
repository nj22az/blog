import { CalendarIcon, ArrowLeft, ExternalLink, MessageSquare, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WordPressPost, fetchAuthor } from "@services/wordpress-api";
import { MonoAvatar } from "@/components/MonoAvatar";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import NilsProfile from '@/assets/images/nils-profile.jpeg';

interface BlogDetailProps {
  post: WordPressPost;
}

export function BlogDetail({ post }: BlogDetailProps) {
  const [authorName, setAuthorName] = useState<string>('');

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
          return;
        }

        // If no embedded author but we have author ID, fetch it
        if (post.author) {
          const authorData = await fetchAuthor(post.author);
          if (authorData) {
            setAuthorName(authorData.name || 'Nils Johansson');
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
  
  // Strip HTML tags
  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <article className="space-y-8 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <Button asChild variant="ghost" size="sm">
          <Link to="/blog" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
        
        <Button asChild variant="outline" size="sm">
          <a 
            href={post.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <ExternalLink className="h-4 w-4" />
            View on WordPress
          </a>
        </Button>
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold leading-tight md:text-4xl tracking-tight" 
            dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MonoAvatar 
              src={NilsProfile} 
              alt={authorName || "Nils Johansson"} 
              owner="nils" 
              size="sm"
            />
            <span>{authorName}</span>
          </div>
          
          <Separator className="hidden sm:block h-4 w-px bg-border" orientation="vertical" />
          
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>

      {featuredImage && (
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg">
          <img 
            src={featuredImage} 
            alt={stripHtml(post.title.rendered)}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div 
        className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-md"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
      />

      {/* Comments Section */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="flex items-center gap-2 mb-6">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Comments</h2>
        </div>
        
        <div className="bg-muted/50 p-6 rounded-lg text-center">
          <p className="text-muted-foreground mb-4">
            Comments are managed through WordPress. To leave a comment, please visit the original post.
          </p>
          <Button asChild>
            <a 
              href={`${post.link}#comments`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              View & Add Comments
            </a>
          </Button>
        </div>
      </div>
      
      <div className="flex justify-center pt-6">
        <Button asChild variant="outline">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    </article>
  );
} 