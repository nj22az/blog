import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { GlassButton } from '@/components/ui/GlassButton';
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-12 apple-glass-premium rounded-lg">
        {/* Newspaper-style header */}
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">
            Error
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 leading-tight mb-4">
            Page Not Found
          </h1>
        </div>
        <p className="text-2xl text-neutral-700 mb-8 font-light">Oops! The page you're looking for doesn't exist.</p>
        <GlassButton asChild>
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return to Home
          </Link>
        </GlassButton>
      </div>
    </div>
  );
};

export default NotFound;
