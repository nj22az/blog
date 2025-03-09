import React, { useState, useEffect } from "react";
import { Book, Loader2, Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordPressPost, WordPressCategory, fetchBlogPosts, fetchCategories } from "@/lib/wordpress-api";
import { BlogPost } from "@/components/BlogPost";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const Blog = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Fetch categories when component mounts
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        // Sort categories by count (most used first)
        const sortedCategories = categoriesData.sort((a, b) => b.count - a.count);
        setCategories(sortedCategories);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    loadCategories();
  }, []);

  // Fetch blog posts when component mounts or page/category changes
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const newPosts = await fetchBlogPosts(page, 10, selectedCategory);
        
        if (newPosts.length === 0) {
          setHasMore(false);
        } else {
          setPosts(prev => page === 1 ? newPosts : [...prev, ...newPosts]);
        }
        
        setError(null);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [page, selectedCategory]);

  // Filter posts based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = posts.filter(post => {
        const title = post.title.rendered.toLowerCase();
        const content = post.excerpt.rendered.toLowerCase();
        return title.includes(query) || content.includes(query);
      });
      setFilteredPosts(filtered);
    }
  }, [posts, searchQuery]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleCategorySelect = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
    setPage(1); // Reset to first page when changing category
    setHasMore(true); // Reset hasMore when changing category
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
    setPage(1);
    setHasMore(true);
  };

  const displayedPosts = searchQuery.trim() !== "" ? filteredPosts : posts;
  const hasFiltersApplied = selectedCategory !== null || searchQuery.trim() !== "";

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2 tracking-tight">Blog</h1>
          <p className="text-muted-foreground">
            Latest articles and updates from our WordPress site
          </p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => setShowHelp(!showHelp)}
          >
            <Book className="h-4 w-4" />
            {showHelp ? "Hide Info" : "Show Info"}
          </Button>
        </div>
      </div>

      {showHelp && (
        <div className="bg-muted/50 rounded-lg p-4 mb-6 text-sm">
          <h3 className="font-medium mb-2">Blog Features:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Articles are automatically fetched from the WordPress site</li>
            <li>Click on any post to read the full article</li>
            <li>You can view the original post on WordPress using the link at the bottom</li>
            <li>Comments are managed through the WordPress platform</li>
            <li>New posts will appear here automatically when published on WordPress</li>
            <li>Filter posts by category or search for specific content</li>
          </ul>
        </div>
      )}

      {showFilters && (
        <div className="bg-card border rounded-lg p-4 mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <h3 className="font-medium text-lg">Filter Posts</h3>
            {hasFiltersApplied && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4 mr-1" />
                Clear Filters
              </Button>
            )}
          </div>
          
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search posts..."
              className="pl-9 pr-9"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {searchQuery && (
              <button 
                className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground"
                onClick={clearSearch}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Categories</h4>
            <ScrollArea className="h-[120px] rounded-md border p-2">
              <div className="flex flex-wrap gap-2 pb-2">
                <Badge 
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => handleCategorySelect(null)}
                >
                  All
                </Badge>
                {categories.map(category => (
                  <Badge 
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleCategorySelect(category.id)}
                  >
                    {category.name} ({category.count})
                  </Badge>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      )}

      {error && (
        <div className="rounded-md bg-destructive/15 p-4 text-destructive">
          <p className="font-medium">{error}</p>
        </div>
      )}

      {/* Results summary */}
      {hasFiltersApplied && !loading && (
        <div className="text-sm text-muted-foreground mb-4">
          Showing {displayedPosts.length} {displayedPosts.length === 1 ? 'result' : 'results'}
          {selectedCategory !== null && categories.find(c => c.id === selectedCategory) && (
            <> in category <span className="font-medium">{categories.find(c => c.id === selectedCategory)?.name}</span></>
          )}
          {searchQuery && (
            <> for <span className="font-medium">"{searchQuery}"</span></>
          )}
        </div>
      )}

      {/* Blog posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPosts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
        
        {/* Loading skeleton if needed */}
        {loading && page === 1 && (
          Array(3).fill(0).map((_, i) => (
            <div key={`skeleton-${i}`} className="border rounded-lg p-4 h-80 animate-pulse">
              <div className="bg-muted h-40 w-full mb-4 rounded"></div>
              <div className="bg-muted h-4 w-1/4 mb-3 rounded"></div>
              <div className="bg-muted h-6 w-3/4 mb-3 rounded"></div>
              <div className="bg-muted h-4 w-full mb-2 rounded"></div>
              <div className="bg-muted h-4 w-2/3 mb-6 rounded"></div>
              <div className="bg-muted h-8 w-full rounded"></div>
            </div>
          ))
        )}
      </div>

      {/* Empty state */}
      {!loading && displayedPosts.length === 0 && (
        <div className="text-center py-12 bg-muted/30 rounded-lg">
          <h3 className="text-xl font-medium mb-2">No posts found</h3>
          <p className="text-muted-foreground mb-4">
            {hasFiltersApplied 
              ? "Try adjusting your filters or search query" 
              : "There are currently no articles available from the WordPress site."}
          </p>
          {hasFiltersApplied && (
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          )}
        </div>
      )}

      {/* Load more button */}
      {!loading && hasMore && displayedPosts.length > 0 && !searchQuery && (
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

      {/* Loading indicator for "load more" */}
      {loading && page > 1 && (
        <div className="flex justify-center my-8">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </div>
      )}
    </div>
  );
};

export default Blog;
