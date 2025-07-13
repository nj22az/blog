import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Loader2 } from 'lucide-react';

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="relative">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <div className="mt-4 text-sm text-muted-foreground">Loading...</div>
    </div>
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
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        staleTime: 30000,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="glass" 
          enableSystem
          themes={["glass", "light", "dark", "soft-pastel", "dos-prompt", "synthwave"]}
          forcedTheme={undefined}
          disableTransitionOnChange
        >
          <TooltipProvider>
            <SEO />
            <Router>
              <div className="min-h-screen bg-background text-foreground">
                <Header />
                <main className="max-w-7xl mx-auto px-4 py-8 mt-16">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/experience" element={<Experience />} />
                      <Route path="/blog/:slug" element={<BlogPost />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </main>
              </div>
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
