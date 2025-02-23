import React, { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

// Lazy load pages with preloading
const Index = lazy(() => import("./pages/Index"));
const Experience = lazy(() => import("./pages/Experience"));
const Downloads = lazy(() => import("./pages/Downloads"));
const Store = lazy(() => import("./pages/Store"));
const Skills = lazy(() => import("./pages/Skills"));
const Blog = lazy(() => import("./pages/Blog"));
const Settings = lazy(() => import("./pages/Settings"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Preload all routes
const preloadRoutes = () => {
  const routes = [
    () => import("./pages/Index"),
    () => import("./pages/Experience"),
    () => import("./pages/Downloads"),
    () => import("./pages/Store"),
    () => import("./pages/Skills"),
    () => import("./pages/Blog"),
    () => import("./pages/Settings"),
  ];
  routes.forEach(route => route());
};

// Loading component with better visual feedback
const LoadingSpinner = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="relative">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-purple"></div>
      <div className="mt-2 text-sm text-neutral-gray">Loading...</div>
    </div>
  </div>
);

// Layout component to handle common structure
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-0 md:ml-64 min-h-[calc(100vh-4rem)] mt-16">
          <div className="max-w-3xl mx-auto px-4 py-8">
            <Suspense fallback={<LoadingSpinner />}>
              {children}
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
};

// Configure Query Client with better error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  useEffect(() => {
    preloadRoutes();
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/store" element={<Store />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
