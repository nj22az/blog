import React from 'react';
import authorPortrait from '@/assets/images/nils-profile.jpeg';

const Hero: React.FC = () => {
  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
        <div className="text-left">
          {/* Newspaper-style header */}
          <div className="mb-8">
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">
              Engineering Insights & Global Perspectives
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 leading-tight">
              The Office of Nils Johansson
            </h1>
          </div>

          {/* Ingress */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl sm:text-2xl text-neutral-700 leading-relaxed font-medium mb-6">
              Engineering insights. Global perspective.
              Maritime experience meets cultural understanding.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed font-light">
              Explore in-depth articles on marine systems, international project management, 
              and the intersection of engineering excellence with cultural understanding.
            </p>
          </div>

          {/* Author byline with portrait */}
          <div className="mt-8 pt-6 border-t border-neutral-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0">
                <img
                  src={authorPortrait}
                  alt="Nils Johansson"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700">
                  Nils Johansson
                </p>
                <p className="text-xs text-neutral-500">
                  Latest insights and technical articles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;