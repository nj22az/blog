import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Experience = lazy(() => import("./pages/Experience"));
const Downloads = lazy(() => import("./pages/Downloads"));
const Store = lazy(() => import("./pages/Store"));
const Skills = lazy(() => import("./pages/Skills"));
const Blog = lazy(() => import("./pages/Blog"));
const Settings = lazy(() => import("./pages/Settings"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
          <div className="max-w-3xl mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
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
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <Router>
            <Layout>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/downloads" element={<Downloads />} />
                  <Route path="/store" element={<Store />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Layout>
            <Toaster />
            <Sonner />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
