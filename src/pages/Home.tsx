import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Mail, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fetchAllBlogPosts, BlogPost as UnifiedBlogPost } from '@services/blog-api';
import { BlogPost } from "@/components/BlogPost";
import Contact from './Contact';
import AvatarGroup from '@/components/AvatarGroup';

const Home = () => {
  const [posts, setPosts] = useState<UnifiedBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const newPosts = await fetchAllBlogPosts(); // Sanity only (post-migration)
        
        setPosts(newPosts);
        setHasMore(false); // Since we're getting all posts at once
        
      } catch (err) {
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Our Blog!</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          This is Nils and Thuan's personal space for sharing articles on marine engineering, travel experiences, and personal reflections.
        </p>
        <AvatarGroup />
      </section>

      {/* Latest Blog Posts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Latest Articles</h2>
        
        {loading && page === 1 ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        )}

        {!loading && hasMore && (
          <div className="flex justify-center mt-8">
            <Button 
              onClick={handleLoadMore} 
              variant="outline"
              className="min-w-32"
            >
              Load More
            </Button>
          </div>
        )}

        {loading && page > 1 && (
          <div className="flex justify-center my-8">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        )}
      </section>

      </div>
  );
};

export default Home;