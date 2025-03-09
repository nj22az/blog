import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, ExternalLink, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">Get in Touch</h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, opportunities, or just connecting.
        </p>
      </div>
      
      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ContactCard 
          icon={<MessageSquare className="h-8 w-8 text-primary" />}
          title="Contact Form"
          description="Send me a message directly"
          content="Use my contact form to reach out about engineering projects, automation solutions, or any other professional inquiries."
          buttonText="Open Contact Form"
          buttonIcon={<Mail className="h-5 w-5" />}
          href="https://theofficeofnils.wordpress.com/contact-me/"
          isMainOption={true}
        />

        <ContactCard 
          icon={<Linkedin className="h-8 w-8 text-primary" />}
          title="LinkedIn"
          description="Professional networking"
          content="Connect with me on LinkedIn to discuss opportunities, collaborations, or to learn more about my experience in marine engineering."
          buttonText="View LinkedIn Profile"
          buttonIcon={<Linkedin className="h-5 w-5" />}
          href="https://www.linkedin.com/in/nils-johansson-86744583/"
          isMainOption={true}
        />
      </div>
      
      {/* Response Time */}
      <div className="text-center p-6 rounded-xl border border-border mb-10 bg-card">
        <h3 className="text-lg font-semibold mb-2">Response Time</h3>
        <p className="text-sm text-muted-foreground">
          I typically respond to inquiries within 24-48 hours during business days.
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
  isMainOption: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  content,
  buttonText,
  buttonIcon,
  href,
  isMainOption
}) => {
  return (
    <Card className={cn(
      "overflow-hidden border transition-all duration-300 hover:shadow-md h-full flex flex-col",
      isMainOption ? "border-primary/20" : "border-border"
    )}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className={cn(
            "p-2 rounded-full",
            isMainOption ? "bg-primary/10" : "bg-muted"
          )}>
            {icon}
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
          {content}
        </p>
        
        <div className="mt-auto">
          <Button 
            asChild 
            variant="default"
            size="lg" 
            className="w-full rounded-lg font-medium"
          >
            <a 
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              {buttonIcon}
              {buttonText}
              <ExternalLink className="h-4 w-4 ml-1 opacity-70" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact; 