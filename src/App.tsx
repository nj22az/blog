
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-purple"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Suspense fallback={<LoadingSpinner />}>
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
          </Suspense>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
