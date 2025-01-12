import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Store, Link, FileText, Construction } from 'lucide-react';

const MenuDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const menuItems = [
    {
      icon: <Store className="w-5 h-5 text-blue-500" />,
      text: 'Benjo Office',
      subtext: '',
      link: 'https://www.benjooffice.com',
      color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      icon: <Link className="w-5 h-5 text-purple-500" />,
      text: 'Affiliate Links',
      subtext: 'I may earn a commission from purchases',
      link: '#',
      color: 'hover:bg-purple-50 dark:hover:bg-purple-900/20'
    },
    {
      icon: <FileText className="w-5 h-5 text-green-500" />,
      text: 'Templates & Documents',
      subtext: 'Professional templates for purchase',
      link: '#',
      color: 'hover:bg-green-50 dark:hover:bg-green-900/20'
    },
    {
      icon: <Construction className="w-5 h-5 text-amber-500" />,
      text: 'Coming Soon',
      subtext: `Last updated: ${today}`,
      link: '#',
      color: 'hover:bg-amber-50 dark:hover:bg-amber-900/20'
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-72 rounded-lg shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
            >
              <div className="py-2">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-start px-4 py-3 hover:bg-opacity-50 transition-colors ${item.color}`}
                  >
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {item.text}
                      </p>
                      {item.subtext && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {item.subtext}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuDropdown; 