import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Store, FileText, Construction, Download } from 'lucide-react';

interface MenuDropdownProps {
  onDownloadCV: () => void;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ onDownloadCV }) => {
  const [isOpen, setIsOpen] = useState(false);
  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const menuItems = [
    {
      icon: <Download className="w-5 h-5 text-gray-500" />,
      text: 'Download CV',
      subtext: 'Get a copy of my CV',
      action: onDownloadCV,
      color: 'hover:bg-gray-50 dark:hover:bg-gray-900/20'
    },
    {
      icon: <Store className="w-5 h-5 text-blue-500" />,
      text: 'Amazon Affiliate Shop',
      subtext: 'I may earn a commission on purchases',
      link: 'https://www.benjooffice.com',
      color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
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
                  item.action ? (
                    <button
                      key={index}
                      onClick={() => {
                        item.action();
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-start px-4 py-3 hover:bg-opacity-50 transition-colors ${item.color}`}
                    >
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="ml-3 text-left">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {item.text}
                        </p>
                        {item.subtext && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            {item.subtext}
                          </p>
                        )}
                      </div>
                    </button>
                  ) : (
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
                  )
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