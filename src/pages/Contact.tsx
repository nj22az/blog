import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, ExternalLink, User, Briefcase, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePremiumAnimations } from '@/hooks/usePremiumAnimations';

const Contact: React.FC = () => {
  const { fadeIn, slideUp } = usePremiumAnimations();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div {...fadeIn()} className="text-center mb-16 space-y-4">
        <h1 className="text-hierarchy-1 mb-6">Let's Connect</h1>
        <p className="text-body-large max-w-2xl mx-auto text-sumi-600">
          Ready to discuss marine engineering solutions, explore collaboration opportunities, or connect professionally? Let's connect on LinkedIn.
        </p>
      </div>
      
      {/* LinkedIn Connection Card */}
      <div {...slideUp({ delay: 100 })} className="max-w-2xl mx-auto mb-12">
        <Card className={cn(
          "glass-card overflow-hidden transition-all duration-300 interactive-glow interactive-scale"
        )}>
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mb-6">
                <Linkedin className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-hierarchy-2 mb-3">Connect on LinkedIn</h2>
              <p className="text-body text-sumi-600 max-w-md mx-auto">
                The best way to reach me is through LinkedIn. I'm active there and respond to messages promptly.
              </p>
            </div>
            
            <Button 
              asChild 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium interactive-scale px-8 py-3 mb-6"
            >
              <a 
                href="https://www.linkedin.com/in/nils-johansson-86744583/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
                <ExternalLink className="h-4 w-4 opacity-60" />
              </a>
            </Button>
            
            <p className="text-body-small text-sumi-500">
              I typically respond within 24-48 hours during business days
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* What I Can Help With */}
      <div {...slideUp({ delay: 200 })} className="mb-12">
        <h3 className="text-hierarchy-3 text-center mb-8 text-sumi-700">What I Can Help With</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center glass-surface p-6 rounded-xl">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-mizu-clear/20 mb-4">
              <Briefcase className="h-6 w-6 text-mizu-ocean" />
            </div>
            <h4 className="font-semibold mb-2 text-sumi-700">Marine Engineering</h4>
            <p className="text-body-small text-sumi-600">Technical consulting and project collaboration</p>
          </div>
          
          <div className="text-center glass-surface p-6 rounded-xl">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-mori-bamboo/20 mb-4">
              <User className="h-6 w-6 text-mori-pine" />
            </div>
            <h4 className="font-semibold mb-2 text-sumi-700">Career Opportunities</h4>
            <p className="text-body-small text-sumi-600">Discussing potential roles and collaborations</p>
          </div>
          
          <div className="text-center glass-surface p-6 rounded-xl">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cha-light/20 mb-4">
              <MessageCircle className="h-6 w-6 text-cha-dark" />
            </div>
            <h4 className="font-semibold mb-2 text-sumi-700">Industry Insights</h4>
            <p className="text-body-small text-sumi-600">Sharing knowledge and best practices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 