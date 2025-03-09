import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";
import { 
  BookOpen, 
  ExternalLink, 
  Bookmark, 
  Book, 
  Wrench, 
  Code, 
  Link2, 
  Coffee,
  Heart,
  Star,
  AlertCircle,
  Info,
  ShoppingCart
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import linksData from '@/lib/links-data.json';

// Import all icons from lucide-react to dynamically use them
import * as LucideIcons from 'lucide-react';

// Type for the dynamic icon component
type IconName = keyof typeof LucideIcons;

// Type definitions for our data structure
interface LinkItem {
  title: string;
  description: string;
  url: string;
  icon: IconName;
  tags: string[];
  isAffiliate?: boolean;
}

interface Category {
  id: string;
  title: string;
  icon: IconName;
  items: LinkItem[];
}

interface LinksData {
  recommendations: {
    categories: Category[];
  };
  tools: {
    categories: Category[];
  };
  affiliateDisclosure: {
    title: string;
    content: string;
  };
}

// Component to render a link item
const LinkItemComponent: React.FC<{ item: LinkItem }> = ({ item }) => {
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Link2;
  
  const isExternal = item.url.startsWith('http');
  const linkClassName = `block p-6 rounded-lg transition-all duration-300 ${
    item.isAffiliate
      ? 'bg-yellow-50 hover:bg-yellow-100 border border-yellow-200'
      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
  }`;

  return (
    <div className={linkClassName}>
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-full ${item.isAffiliate ? 'bg-yellow-200' : 'bg-primary/10'}`}>
          <IconComponent className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{item.title}</h3>
            {item.isAffiliate && (
              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                <ShoppingCart className="h-3 w-3 mr-1" />
                Affiliate Link
              </span>
            )}
          </div>
          <p className="text-muted-foreground mt-1">{item.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded text-xs font-medium ${
                  item.isAffiliate
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-primary/10 text-primary'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {isExternal ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-sm hover:underline"
        >
          Visit Link
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      ) : (
        <RouterLink
          to={item.url}
          className="mt-4 inline-flex items-center text-sm hover:underline"
        >
          View Guide
          <ExternalLink className="h-4 w-4 ml-1" />
        </RouterLink>
      )}
    </div>
  );
};

const Links: React.FC = () => {
  const [data, setData] = useState<LinksData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // In a real app, you might fetch this from an API
    // For now, we're using the imported JSON
    setData(linksData as unknown as LinksData);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-[400px]">Loading...</div>;
  }

  if (!data) {
    return <div className="flex justify-center items-center min-h-[400px]">Failed to load data</div>;
  }

  // Function to get the icon component dynamically
  const getIcon = (iconName: IconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className="h-5 w-5" /> : <Info className="h-5 w-5" />;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">Useful Links</h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A curated collection of resources, tools, and recommendations.
        </p>
      </div>
      
      {/* Tabs for different link categories */}
      <Tabs defaultValue="recommendations" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="recommendations" className="flex items-center gap-2">
            <Book className="h-4 w-4" />
            <span>Thuan's Recommendations</span>
          </TabsTrigger>
          <TabsTrigger value="tools" className="flex items-center gap-2">
            <Wrench className="h-4 w-4" />
            <span>Tools</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Thuan's Recommendations */}
        <TabsContent value="recommendations">
          <div className="space-y-6">
            {data.recommendations.categories.map((category) => (
              <Card key={category.id}>
                <CardHeader className="flex flex-row items-center gap-2 py-4">
                  {getIcon(category.icon)}
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {category.items.length > 0 ? (
                      category.items.map((item, index) => (
                        <div key={index}>
                          <LinkItemComponent item={item} />
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground py-2">
                        No items in this category yet. Check back soon!
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Tools */}
        <TabsContent value="tools">
          <div className="space-y-6">
            {data.tools.categories.map((category) => (
              <Card key={category.id}>
                <CardHeader className="flex flex-row items-center gap-2 py-4">
                  {getIcon(category.icon)}
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {category.items.length > 0 ? (
                      category.items.map((item, index) => (
                        <div key={index}>
                          <LinkItemComponent item={item} />
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground py-2">
                        No items in this category yet. Check back soon!
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Affiliate Disclosure */}
      <Card className="bg-muted/50 border-border mb-8">
        <CardContent className="p-6">
          <div className="flex items-start gap-3 mb-3">
            <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">{data.affiliateDisclosure.title}</h3>
              <p className="text-sm text-muted-foreground">
                {data.affiliateDisclosure.content}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Links; 