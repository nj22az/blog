import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronLeft, Home, Wrench } from 'lucide-react';

interface ToolNavigationProps {
  title: string;
  showBackToTools?: boolean;
}

const ToolNavigation: React.FC<ToolNavigationProps> = ({ 
  title,
  showBackToTools = true
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="h-9 px-2 flex items-center gap-1" 
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back</span>
          </Button>
          
          {showBackToTools && (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-9 px-3 flex items-center gap-1" 
              asChild
            >
              <Link to="/links">
                <Wrench className="h-4 w-4" />
                <span className="text-sm font-medium">All Tools</span>
              </Link>
            </Button>
          )}
          
          <Button 
            variant="outline" 
            size="sm" 
            className="h-9 px-3 flex items-center gap-1" 
            asChild
          >
            <Link to="/">
              <Home className="h-4 w-4" />
              <span className="text-sm font-medium">Home</span>
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold tracking-tight text-primary">{title}</h1>
      </div>
    </div>
  );
};

export default ToolNavigation; 