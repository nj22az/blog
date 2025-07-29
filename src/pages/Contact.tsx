import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, ExternalLink, User, Briefcase, MessageCircle } from 'lucide-react';
import { GlassButton } from '@/components/ui/GlassButton';
import { usePremiumAnimations } from '@/hooks/usePremiumAnimations';
import { cn } from '@/lib/utils';

const Contact: React.FC = () => {
  const { slideUp } = usePremiumAnimations();

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
        {/* Newspaper-style header */}
        <div className="text-left mb-12">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">
            Professional Connections
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 leading-tight mb-6">
            Let's Connect
          </h1>
          <div className="prose prose-lg max-w-none border-b border-neutral-200 pb-8">
            <p className="text-xl sm:text-2xl text-neutral-700 leading-relaxed font-light">
              Ready to discuss marine engineering solutions, explore collaboration opportunities, 
              or connect professionally? Reach out through LinkedIn.
            </p>
          </div>
        </div>
      
        {/* LinkedIn Connection Card */}
        <div {...slideUp({ delay: 100 })} className="max-w-2xl mx-auto mb-12">
          <Card className={cn(
            "apple-glass-premium overflow-hidden transition-all duration-300 interactive-glow interactive-scale"
          )}>
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neutral-200/50 mb-6">
                  <Linkedin className="h-10 w-10 text-neutral-800" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-800 mb-3">Connect on LinkedIn</h2>
                <p className="text-lg text-neutral-600 max-w-md mx-auto font-light">
                  The best way to reach me is through LinkedIn. I'm active there and respond to messages promptly.
                </p>
              </div>
              
              <GlassButton 
                asChild 
                size="lg" 
                className="group rounded-xl px-8 py-3 mb-6"
              >
                <a 
                  href="https://www.linkedin.com/in/nils-johansson-86744583/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                  <ExternalLink className="h-4 w-4 opacity-60 group-hover:translate-x-1 transition-transform" />
                </a>
              </GlassButton>
              
              <p className="text-sm text-neutral-500">
                I typically respond within 24-48 hours during business days
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* What I Can Help With */}
        <div {...slideUp({ delay: 200 })} className="mb-12">
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 text-center mb-8">What I Can Help With</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center apple-glass-premium p-8 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-200/50 mb-4">
                <Briefcase className="h-8 w-8 text-cultural-maritime-navy" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-neutral-800">Marine Engineering</h4>
              <p className="text-base text-neutral-600 font-light">Consulting, project advisory, and operational guidance</p>
            </div>
            
            <div className="text-center apple-glass-premium p-8 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-200/50 mb-4">
                <User className="h-8 w-8 text-cultural-vietnam" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-neutral-800">Collaboration & Partnerships</h4>
              <p className="text-base text-neutral-600 font-light">Engaging in professional dialogue and collaborative initiatives</p>
            </div>
            
            <div className="text-center apple-glass-premium p-8 rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-200/50 mb-4">
                <MessageCircle className="h-8 w-8 text-cultural-japan-sakura" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-neutral-800">Sharing Expertise</h4>
              <p className="text-base text-neutral-600 font-light">Providing insights, training, and practical advice from a global engineering perspective</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
