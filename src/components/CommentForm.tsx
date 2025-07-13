import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { sanityClient } from '@services/sanity';

interface CommentFormProps {
  postId: string;
  onCommentSubmitted?: () => void;
}

export function CommentForm({ postId, onCommentSubmitted }: CommentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sanityClient.create({
        _type: 'comment',
        post: {
          _type: 'reference',
          _ref: postId,
        },
        name: formData.name,
        email: formData.email,
        website: formData.website || undefined,
        comment: formData.comment,
        approved: false,
        createdAt: new Date().toISOString(),
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', website: '', comment: '' });
      onCommentSubmitted?.();
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('Failed to submit comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className="mt-8">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              Thank you for your comment!
            </h3>
            <p className="text-muted-foreground">
              Your comment has been submitted and is awaiting approval.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setSubmitted(false)}
            >
              Add Another Comment
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Leave a Comment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name *
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="website" className="block text-sm font-medium mb-1">
              Website (Optional)
            </label>
            <Input
              id="website"
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              placeholder="https://your-website.com"
            />
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-medium mb-1">
              Comment *
            </label>
            <Textarea
              id="comment"
              required
              rows={4}
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              placeholder="Share your thoughts..."
              minLength={10}
              maxLength={1000}
            />
            <p className="text-xs text-muted-foreground mt-1">
              {formData.comment.length}/1000 characters
            </p>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Comment'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}