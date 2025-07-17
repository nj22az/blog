import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Loader2 } from "lucide-react";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Simple loading component
const SimpleLoader = () => (
  <div className="flex items-center justify-center min-h-64">
    <Loader2 className="h-8 w-8 animate-spin" />
  </div>
);

// SEO Component
const SEO = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Nils Johansson's Blog</title>
      <meta name="title" content="Nils Johansson's Blog" />
      <meta name="description" content="A collection of articles on marine engineering, travel, and personal reflections." />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nilsjohansson.com/" />
      <meta property="og:title" content="Nils Johansson's Blog" />
      <meta property="og:description" content="A collection of articles on marine engineering, travel, and personal reflections." />
      <meta property="og:image" content="/images/og-image.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://nilsjohansson.com/" />
      <meta property="twitter:title" content="Nils Johansson's Blog" />
      <meta property="twitter:description" content="A collection of articles on marine engineering, travel, and personal reflections." />
      <meta property="twitter:image" content="/images/og-image.jpg" />
      
      {/* Language Tags for Browser Translation */}
      <html lang="en" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="google" content="notranslate" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://nilsjohansson.com/" />
    </Helmet>
  );
};

const App = () => {
  // Simple QueryClient configuration
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000,   // 10 minutes
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem
          themes={["light", "dark"]}
        >
          <TooltipProvider>
            <SEO />
            <Router>
              {/* Clean layout */}
              <div className="min-h-screen bg-white text-slate-900 antialiased">
                <Header />
                
                {/* Main content */}
                <main className="relative">
                  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 mt-16">
                    <Suspense fallback={<SimpleLoader />}>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Suspense>
                  </div>
                </main>

                {/* Simple footer */}
                <footer className="mt-32 border-t border-slate-200 bg-white">
                  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                    <div className="text-center">
                      <p className="text-xs text-slate-400">
                        © 2025 The Office of Nils Johansson · All rights reserved
                      </p>
                    </div>
                  </div>
                </footer>
              </div>
              
              {/* Toast notifications */}
              <Toaster />
              <Sonner />
            </Router>
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
