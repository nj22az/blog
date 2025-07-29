import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/theofficeofnilsjohansson/' : '/',
  server: { 
    host: 'localhost', 
    port: 8080,
    hmr: { overlay: false }
  },
  plugins: [
    react({
      // Enable Fast Refresh for optimal development experience
      fastRefresh: true,
    })
  ],
  
  // 🚀 Advanced Bundle Optimization
  build: {
    // Target modern browsers for smaller bundles
    target: 'es2020',
    
    // Optimize chunk splitting for maximum performance
    rollupOptions: {
      output: {
        // Manual chunking for optimal loading
        manualChunks: (id) => {
          // Core React ecosystem - loaded first
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
            return 'react-core';
          }
          
          // UI library components - shared across routes
          if (id.includes('@radix-ui/')) {
            return 'ui-components';
          }
          
          // Form and interaction libraries
          if (id.includes('@hookform/') || id.includes('react-hook-form') || 
              id.includes('zod') || id.includes('@tanstack/react-query')) {
            return 'forms-interaction';
          }
          
          // Content management - Sanity ecosystem
          if (id.includes('@sanity/') || id.includes('@portabletext/') || 
              id.includes('next-sanity')) {
            return 'cms-sanity';
          }
          
          // Animation and graphics libraries
          if (id.includes('framer-motion') || id.includes('three') || 
              id.includes('lucide-react')) {
            return 'animations-graphics';
          }
          
          // Utility libraries
          if (id.includes('clsx') || id.includes('class-variance-authority') || 
              id.includes('tailwind-merge') || id.includes('date-fns') || 
              id.includes('axios')) {
            return 'utilities';
          }
          
          // Development and styling tools
          if (id.includes('next-themes') || id.includes('react-helmet-async') || 
              id.includes('styled-components')) {
            return 'styling-tools';
          }
          
          // Large node_modules get their own chunks
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        
        // Optimize chunk file names for caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? 
            chunkInfo.facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '') : 
            'chunk';
          return `assets/js/[name]-[hash:8].js`;
        },
        
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType || '')) {
            return 'assets/images/[name]-[hash:8][extname]';
          }
          if (/css/i.test(extType || '')) {
            return 'assets/css/[name]-[hash:8][extname]';
          }
          return 'assets/[name]-[hash:8][extname]';
        },
        
        // Entry file naming
        entryFileNames: 'assets/js/[name]-[hash:8].js',
      },
      
      // External dependencies to exclude from bundle
      external: (id) => {
        // Don't bundle large libraries that can be CDN-served
        return ['lodash'].includes(id);
      }
    },
    
    // Further size optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : [],
      },
      mangle: {
        safari10: true,
      },
    },
    
    // Size analysis
    reportCompressedSize: true,
    chunkSizeWarningLimit: 800, // Increased from default 500kb
    
    // Source maps for production debugging
    sourcemap: mode === 'production' ? 'hidden' : true,
  },
  
  // Performance optimizations for development
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'framer-motion',
      'lucide-react'
    ],
    exclude: ['@sanity/ui', '@sanity/vision'] // Heavy Sanity packages only loaded when needed
  },
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@premium": path.resolve(__dirname, "./src/components/premium"),
    },
  },
  
  // Enable experimental features for better performance
  esbuild: {
    // Drop console and debugger in production
    drop: mode === 'production' ? ['console', 'debugger'] : [],
    // Use advanced optimizations
    treeShaking: true,
  },
}));
