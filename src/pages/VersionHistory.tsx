import React, { useEffect, useState } from 'react';
import { History } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VersionHistory = () => {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the version history markdown file
    fetch('/theoffice-clean/CHANGELOG.md')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load version history');
        }
        return response.text();
      })
      .then(text => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading version history:', error);
        setMarkdown('# Error\n\nFailed to load version history. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <History className="h-8 w-8 text-primary" />
          Version History
        </h1>
        <p className="text-xl text-muted-foreground">
          Track the evolution and improvements of The Office of Nils Johansson
        </p>
      </div>

      {/* Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Changelog
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center p-12">
              <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
            </div>
          ) : (
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VersionHistory; 