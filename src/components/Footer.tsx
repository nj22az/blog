import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full py-3 px-6 bg-gray-50/80 backdrop-blur-sm dark:bg-gray-900/80 border-t border-gray-200 dark:border-gray-800 z-10">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2024-2025 Nils Johansson. All rights reserved.
        </p>
        <div className="h-4 w-px bg-gray-300 dark:bg-gray-700" />
        <a
          href="https://github.com/nj22az"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer; 