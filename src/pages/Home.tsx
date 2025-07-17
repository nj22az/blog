import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { fetchAllBlogPosts, SanityPost } from '@/services/sanity-api';
import { BlogPost } from "@/components/BlogPost";
import Hero from '@/components/Hero';
import { usePremiumAnimations } from '@/hooks/usePremiumAnimations';

const Home = () => {
  const [posts, setPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { fadeIn, slideUp } = usePremiumAnimations();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const newPosts = await fetchAllBlogPosts();
        setPosts(newPosts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div>
      {/* Dynamic Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Featured Blog Posts */}
        <section {...fadeIn({ delay: 100 })} className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
              <p className="text-gray-600 mt-2">Latest insights and stories from our team</p>
            </div>
            <Button asChild variant="outline" className="focus:ring-2 focus:ring-blue-500">
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
          ) : (
            <div {...slideUp({ delay: 200 })} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 6).map(post => (
                <BlogPost key={post._id} post={post} />
              ))}
            </div>
          )}

          {posts.length > 6 && (
            <div {...fadeIn({ delay: 300 })} className="flex justify-center mt-12">
              <Button asChild variant="outline" size="lg" className="focus:ring-2 focus:ring-blue-500">
                <Link to="/blog">
                  View All {posts.length} Articles
                </Link>
              </Button>
            </div>
          )}
        </section>

        {/* Additional sections can be added here */}
        {/* For example: Newsletter signup, recent projects, testimonials, etc. */}
      </div>
    </div>
  );
};

export default Home;