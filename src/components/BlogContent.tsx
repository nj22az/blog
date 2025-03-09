import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { WordPressPost, fetchPostBySlug } from '@/lib/wordpress-api';
import { BlogDetail } from '@/components/BlogDetail';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogContent() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setError('No post slug provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const fetchedPost = await fetchPostBySlug(slug);
        
        if (!fetchedPost) {
          setError('Post not found');
        } else {
          setPost(fetchedPost);
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load the blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  const handleBackClick = () => {
    navigate('/blog');
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground">Loading post...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-24 space-y-4">
        <div className="bg-destructive/15 text-destructive p-6 rounded-lg max-w-md text-center">
          <h2 className="font-bold text-xl mb-2">Error</h2>
          <p>{error}</p>
        </div>
        
        <Button onClick={handleBackClick} variant="outline">
          Back to Blog
        </Button>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-24 space-y-4">
        <div className="bg-muted p-6 rounded-lg max-w-md text-center">
          <h2 className="font-bold text-xl mb-2">Post Not Found</h2>
          <p className="text-muted-foreground">
            The blog post you're looking for doesn't seem to exist.
          </p>
        </div>
        
        <Button onClick={handleBackClick} variant="outline">
          Back to Blog
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <BlogDetail post={post} />
    </div>
  );
}
