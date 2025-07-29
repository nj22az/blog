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
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center justify-center py-16">
          <Loader2 className="h-8 w-8 animate-spin text-neutral-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
        {/* Newspaper-style header */}
        <div className="text-left mb-8">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">
            Complete Archive
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 leading-tight mb-6">
            All Articles
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl sm:text-2xl text-neutral-700 leading-relaxed font-light">
              Maritime engineering insights, cultural bridges, and field service expertise from Southeast Asia, 
              Vietnam, and Japan.
            </p>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-b border-neutral-200 pb-8 mb-12">
          {posts.length > 0 && (
            <p className="text-sm text-neutral-500">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} published
            </p>
          )}
        </div>

        {/* Articles grid */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-neutral-600 text-lg">No articles found.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPost key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;