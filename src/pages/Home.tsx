import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BookOpen, User, Mail, Info, Ship, MapPin, Loader2, 
  Gauge, GraduationCap, Globe, Scissors, ChevronDown, Clock, 
  Briefcase, Lightbulb, Heart, Compass, Plane, Navigation 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fetchBlogPosts, WordPressPost } from '@/lib/wordpress-api';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Home = () => {
  const [latestPosts, setLatestPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLatestPosts = async () => {
      try {
        setLoading(true);
        const posts = await fetchBlogPosts(1, 2); // Fetch first page with 2 posts
        setLatestPosts(posts);
      } catch (error) {
        console.error('Error fetching latest posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLatestPosts();
  }, []);

  // Function to strip HTML tags from content
  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative rounded-xl overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/maritime-pattern.png')] bg-repeat"></div>
        <div className="relative z-10 px-8 py-20 md:py-28 md:px-16 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            The Office of Nils Johansson
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-200 font-light max-w-2xl leading-relaxed">
            Bridging marine engineering expertise with Southeast Asian cultural insights for innovative solutions.
          </p>
          <div className="flex flex-wrap gap-5">
            <Button asChild size="lg" className="rounded-full px-8 h-12 text-base font-medium shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link to="/about" className="flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-medium bg-white/5 hover:bg-white/10 text-white border-white/10 backdrop-blur-sm shadow-lg transition-all duration-300">
              <Link to="/blog" className="flex items-center gap-2">
                Read the Blog
                <BookOpen className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Timeline Presentation */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Ship className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">About The Office</h2>
        </div>
        
        <div className="max-w-3xl">
          <p className="text-lg mb-8">
            Welcome to our digital workspace—your expert partner in preventive maintenance, continuous supervision, and industrial safety.
          </p>
          
          <Accordion type="single" collapsible className="w-full mb-8">
            {/* Technical Expertise */}
            <AccordionItem value="technical-expertise" className="border-0 mb-6">
              <AccordionTrigger className="py-0 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Technical Expertise</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pl-12">
                <p className="text-muted-foreground mb-3">
                  With extensive marine engineering and global field service experience, we provide clear, practical guidance tailored to professionals both in Sweden and abroad.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Marine Engineering</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Preventive Maintenance</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Industrial Safety</span>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            {/* Knowledge Resources */}
            <AccordionItem value="knowledge-resources" className="border-0 mb-6">
              <AccordionTrigger className="py-0 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Knowledge Resources</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pl-12">
                <p className="text-muted-foreground mb-3">
                  Explore engaging online courses, specialized consulting services, and insightful resources covering pressure vessel safety, compressor tank inspections, and preventive maintenance best practices.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="flex items-center gap-1">
                    <Lightbulb className="h-3 w-3 text-primary" />
                    <span className="text-sm">Online Courses</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Lightbulb className="h-3 w-3 text-primary" />
                    <span className="text-sm">Consulting Services</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Lightbulb className="h-3 w-3 text-primary" />
                    <span className="text-sm">Technical Resources</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Lightbulb className="h-3 w-3 text-primary" />
                    <span className="text-sm">Compliance Guides</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            {/* Global Insights */}
            <AccordionItem value="global-insights" className="border-0 mb-6">
              <AccordionTrigger className="py-0 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Global Insights</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pl-12">
                <p className="text-muted-foreground mb-4">
                  Technical operations with global reach, bringing specialized expertise to projects worldwide.
                </p>
                
                <div className="relative overflow-hidden rounded-xl border border-border">
                  <div className="absolute inset-0 bg-[url('/images/world-map.png')] opacity-10 bg-center bg-no-repeat bg-contain"></div>
                  
                  <div className="relative p-5">
                    <p className="text-sm mb-4">
                      Extensive experience in <span className="font-medium">South East Asia</span>, <span className="font-medium">Europe</span>, and <span className="font-medium">the Americas</span>, with additional projects across <span className="font-medium">Africa</span>, the <span className="font-medium">Middle East</span>, and <span className="font-medium">Australia</span>.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <Ship className="h-4 w-4 text-primary" />
                        <span className="text-sm">Marine Engineering</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-primary" />
                        <span className="text-sm">Industrial Automation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span className="text-sm">Field Service</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Compass className="h-4 w-4 text-primary" />
                        <span className="text-sm">Cross-Cultural Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            {/* Cultural Connection */}
            <AccordionItem value="cultural-connection" className="border-0">
              <AccordionTrigger className="py-0 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Cultural Connection</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pl-12">
                <p className="text-muted-foreground mb-3">
                  My wife Thuan, a skilled tailor and sourcing specialist, connects clients with premium textiles and cost-effective tailoring solutions from Vietnam, offering an authentic look into vibrant communities such as Hoi An and Quang Nam.
                </p>
                <p className="text-sm italic text-muted-foreground border-l-2 border-primary/30 pl-3">
                  "Together, we combine industrial know-how, global experience, and cultural insights to support your professional success and enrich your personal journey."
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="flex justify-center">
            <Button asChild variant="outline" className="mt-4">
              <Link to="/about" className="flex items-center gap-2">
                Learn More About The Office
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Tiles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Explore The Office</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <NavigationCard 
            title="Blog" 
            description="Articles on marine engineering, travel experiences, and personal reflections"
            icon={BookOpen}
            to="/blog"
          />
          <NavigationCard 
            title="About" 
            description="Learn about The Office, Nils, and the team behind it"
            icon={Info}
            to="/about"
          />
          <NavigationCard 
            title="Contact" 
            description="Get in touch for collaborations or inquiries"
            icon={Mail}
            to="/contact"
          />
        </div>
      </section>

      {/* Latest Blog Posts Preview (real posts from WordPress) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Latest from the Blog</h2>
        
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestPosts.map(post => (
              <Card key={post.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      {formatDate(post.date)}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {post.title.rendered}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {stripHtml(post.excerpt.rendered)}
                    </p>
                    <Button asChild variant="link" className="px-0 mt-4">
                      <Link to={`/blog/${post.slug}`} className="flex items-center gap-1">
                        Read More
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

const NavigationCard = ({ 
  title, 
  description, 
  icon: Icon, 
  to 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  to: string;
}) => {
  return (
    <Link to={to}>
      <div className="border border-border rounded-lg p-6 h-full hover:border-primary/50 hover:shadow-sm transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-full bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};

export default Home; 