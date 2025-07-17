import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { fetchAllBlogPosts, SanityPost } from '@/services/sanity-api';
import { BlogPost } from "@/components/BlogPost";

const Blog = () => {
  const [posts, setPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const allPosts = await fetchAllBlogPosts();
        setPosts(allPosts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">All Blog Posts</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          Insights on marine engineering, global experiences, and cultural bridges. 
          Explore our complete collection of articles and stories.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No blog posts found.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPost key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;