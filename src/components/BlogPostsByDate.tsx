import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts, WordPressPost, fetchAuthor } from '@/lib/wordpress-api';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, ExternalLink, User } from 'lucide-react';
import { formatDistance } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BlogPostsByDateProps {
  year: number;
  month: number;
  day?: number;
  maxPosts?: number;
  showTitle?: boolean;
}

export function BlogPostsByDate({ 
  year, 
  month, 
  day, 
  maxPosts = 3,
  showTitle = true 
}: BlogPostsByDateProps) {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Format the month name for display
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        
        // Fetch all recent posts
        const allPosts = await fetchBlogPosts(1, 100);
        
        // Filter posts by date
        const filteredPosts = allPosts.filter(post => {
          const postDate = new Date(post.date);
          
          if (day) {
            // Filter by exact day
            return (
              postDate.getFullYear() === year &&
              postDate.getMonth() === month &&
              postDate.getDate() === day
            );
          } else {
            // Filter by month only
            return (
              postDate.getFullYear() === year &&
              postDate.getMonth() === month
            );
          }
        });
        
        // Take only the requested number of posts
        setPosts(filteredPosts.slice(0, maxPosts));
        setError(null);
      } catch (err) {
        console.error('Error fetching posts by date:', err);
        setError('Failed to load blog posts for this date');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [year, month, day, maxPosts]);

  // Strip HTML from title and excerpt
  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getTitle = () => {
    if (day) {
      return `Posts from ${monthNames[month]} ${day}, ${year}`;
    }
    return `Posts from ${monthNames[month]} ${year}`;
  };

  if (loading) {
    return (
      <div className="py-4">
        <div className="h-6 bg-muted animate-pulse rounded w-3/4 mb-4"></div>
        <div className="h-24 bg-muted animate-pulse rounded w-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-destructive text-sm">
        {error}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="py-2">
        {showTitle && <h3 className="text-lg font-medium mb-3">{getTitle()}</h3>}
        <p className="text-muted-foreground text-sm italic">
          No posts available for this {day ? 'day' : 'month'}.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {showTitle && <h3 className="text-lg font-medium mb-1">{getTitle()}</h3>}
      
      <div className="space-y-3">
        {posts.map(post => {
          const postDate = new Date(post.date);
          const timeAgo = formatDistance(postDate, new Date(), { addSuffix: true });
          
          // Get author information from embedded data
          const authorName = post._embedded?.author?.[0]?.name || 'Nils Johansson';
          const authorAvatar = post._embedded?.author?.[0]?.avatar_urls?.['96'] || '';
          
          return (
            <Card key={post.id} className="overflow-hidden">
              <CardHeader className="pb-2 pt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground mb-1">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>{timeAgo}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={authorAvatar} alt={authorName} />
                      <AvatarFallback>
                        <User className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{authorName}</span>
                  </div>
                </div>
                <CardTitle className="text-base line-clamp-1">
                  <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <CardDescription className="text-xs line-clamp-2">
                  {stripHtml(post.excerpt.rendered).substring(0, 100)}...
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-0 pb-3 flex justify-between">
                <Button asChild size="sm" variant="ghost" className="text-xs px-2 h-7">
                  <Link to={`/blog/${post.slug}`}>
                    Read More
                  </Link>
                </Button>
                <Button asChild size="sm" variant="ghost" className="text-xs px-2 h-7">
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <span>WordPress</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      
      {posts.length >= maxPosts && (
        <div className="text-right">
          <Button asChild variant="link" size="sm" className="text-xs">
            <Link to="/blog">
              View More Posts
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
} 