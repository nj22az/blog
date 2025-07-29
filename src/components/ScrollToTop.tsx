import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useScrollDirection } from '@/hooks/useScrollDirection';

export const ScrollToTop: React.FC = () => {
  const { scrollY } = useScrollDirection();

  // Show button when scrolled down more than 400px
  const isVisible = scrollY > 400;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6 z-40
        w-10 h-10 
        bg-white border border-neutral-200 
        rounded-full shadow-sm hover:shadow-md
        flex items-center justify-center
        text-neutral-600 hover:text-neutral-900
        transition-all duration-200 ease-out
        hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2
      "
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
};