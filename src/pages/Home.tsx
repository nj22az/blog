import React, { useState, useEffect } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';
import { GlassButton } from '@/components/ui/GlassButton';
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Featured Blog Posts */}
        <section {...fadeIn({ delay: 100 })} className="space-y-8">
          {/* Newspaper-style section header */}
          <div className="border-b border-neutral-200 pb-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">
                  Latest Insights
                </p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900">
                  Featured Articles
                </h2>
              </div>
              <GlassButton 
                asChild 
                className="rounded-full px-6 py-3"
              >
                <Link to="/blog">
                  Explore All Articles
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </GlassButton>
            </div>
          </div>
          
          {loading ? (
            <div className="py-16 flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-neutral-600" />
            </div>
          ) : (
            <div {...slideUp({ delay: 200 })} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 6).map(post => (
                <div key={post._id} className="apple-glass-interactive">
                  <BlogPost post={post} />
                </div>
              ))}
            </div>
          )}

          {posts.length > 6 && (
            <div {...fadeIn({ delay: 300 })} className="flex justify-center mt-12">
              <GlassButton 
                asChild 
                className="rounded-full px-8 py-4 text-lg"
              >
                <Link to="/blog">
                  Read More Insights ({posts.length} Articles)
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </GlassButton>
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