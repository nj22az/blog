import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, ExternalLink, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-hierarchy-1 mb-3">Let's Connect</h1>
        <p className="text-body-large max-w-2xl mx-auto">
          Ready to discuss marine engineering solutions, explore collaboration opportunities, or connect professionally? I'm here to help.
        </p>
      </div>
      
      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ContactCard 
          icon={<MessageSquare className="h-6 w-6 text-accent-600" />}
          title="Direct Message"
          description="Project inquiries and consultation"
          content="Reach out through my secure contact form to discuss marine engineering projects, automation solutions, or technical consulting opportunities."
          buttonText="Send Message"
          buttonIcon={<Mail className="h-4 w-4" />}
          href="https://theofficeofnils.wordpress.com/contact-me/"
        />

        <ContactCard 
          icon={<Linkedin className="h-6 w-6 text-accent-600" />}
          title="LinkedIn"
          description="Professional networking and connections"
          content="Connect with me on LinkedIn to explore collaboration opportunities, discuss industry insights, or learn more about my marine engineering expertise."
          buttonText="Connect on LinkedIn"
          buttonIcon={<Linkedin className="h-4 w-4" />}
          href="https://www.linkedin.com/in/nils-johansson-86744583/"
        />
      </div>
      
      {/* Response Time */}
      <div className="text-center glass-surface p-8 rounded-2xl mb-10">
        <h3 className="text-hierarchy-3 mb-3 text-glass-800">Response Commitment</h3>
        <p className="text-body text-glass-600">
          Professional inquiries receive a response within 24-48 hours during business days.
        </p>
      </div>
    </div>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string;
  buttonText: string;
  buttonIcon: React.ReactNode;
  href: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  content,
  buttonText,
  buttonIcon,
  href
}) => {
  return (
    <Card className={cn(
      "glass-card overflow-hidden transition-all duration-300 interactive-glow interactive-scale h-full flex flex-col"
    )}>
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-accent-50 border border-accent-200/50">
            {icon}
          </div>
          <div>
            <h2 className="text-hierarchy-3 mb-1">{title}</h2>
            <p className="text-body-small text-glass-500">{description}</p>
          </div>
        </div>
        
        <p className="text-body text-glass-600 leading-relaxed mb-8 flex-grow">
          {content}
        </p>
        
        <div className="mt-auto">
          <Button 
            asChild 
            variant="outline"
            size="lg" 
            className="w-full rounded-xl font-medium interactive-scale border-accent-200 hover:bg-accent-50 hover:border-accent-300"
          >
            <a 
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3"
            >
              {buttonIcon}
              {buttonText}
              <ExternalLink className="h-4 w-4 opacity-60" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact; 