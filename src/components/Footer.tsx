import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full py-3 px-6 bg-gray-50/80 backdrop-blur-sm dark:bg-gray-900/80 border-t border-gray-200 dark:border-gray-800 z-10">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2024-2025 Nils Johansson. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 