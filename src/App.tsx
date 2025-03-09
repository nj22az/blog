import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Loader2 } from 'lucide-react';

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Experience = lazy(() => import("./pages/Experience"));
const Downloads = lazy(() => import("./pages/Downloads"));
const Store = lazy(() => import("./pages/Store"));
const Skills = lazy(() => import("./pages/Skills"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Settings = lazy(() => import("./pages/Settings"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Links = lazy(() => import("./pages/Links"));
const VersionHistory = lazy(() => import("./pages/VersionHistory"));
const NotFound = lazy(() => import("./pages/NotFound"));
const HandwashingGuide = lazy(() => import('./pages/HandwashingGuide'));
const PressureVesselChecklist = lazy(() => import('./pages/PressureVesselChecklist'));
const CompressorMaintenance = lazy(() => import('./pages/CompressorMaintenance'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="relative">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      <div className="mt-2 text-sm text-muted-foreground">Loading...</div>
    </div>
  </div>
);

// Layout component
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-0 md:ml-64 min-h-[calc(100vh-4rem)] mt-16">
          <div className="max-w-7xl mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

// SEO Component
const SEO = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>The Office of Nils Johansson</title>
      <meta name="title" content="The Office of Nils Johansson" />
      <meta name="description" content="A digital workspace bridging marine engineering and Southeast Asian culture" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nilsjohansson.com/" />
      <meta property="og:title" content="The Office of Nils Johansson" />
      <meta property="og:description" content="A digital workspace bridging marine engineering and Southeast Asian culture" />
      <meta property="og:image" content="/images/og-image.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://nilsjohansson.com/" />
      <meta property="twitter:title" content="The Office of Nils Johansson" />
      <meta property="twitter:description" content="A digital workspace bridging marine engineering and Southeast Asian culture" />
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
          defaultTheme="system" 
          enableSystem
          themes={["light", "dark", "soft-pastel", "dos-prompt", "synthwave"]}
          forcedTheme={undefined}
          disableTransitionOnChange
        >
          <TooltipProvider>
            <SEO />
            <Router>
              <Layout>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Allow direct access to root (profile) */}
                    <Route path="/" element={<Home />} />
                    <Route path="/index" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/downloads" element={<Downloads />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/links" element={<Links />} />
                    <Route path="/version-history" element={<VersionHistory />} />
                    <Route path="/handwashing" element={<HandwashingGuide />} />
                    <Route path="/tools/pressure-vessel-checklist" element={<PressureVesselChecklist />} />
                    <Route path="/tools/compressor-maintenance" element={<CompressorMaintenance />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </Layout>
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
