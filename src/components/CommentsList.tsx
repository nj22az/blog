import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { sanityClient } from '@services/sanity';
import { formatDistanceToNow } from 'date-fns';

interface Comment {
  _id: string;
  name: string;
  comment: string;
  createdAt: string;
  website?: string;
  approved: boolean;
}

interface CommentsListProps {
  postId: string;
}

export function CommentsList({ postId }: CommentsListProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const fetchedComments = await sanityClient.fetch(`
        *[_type == "comment" && post._ref == $postId && approved == true] | order(createdAt desc) {
          _id,
          name,
          comment,
          createdAt,
          website,
          approved
        }
      `, { postId });
      
      setComments(fetchedComments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Comments</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="pt-6">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (comments.length === 0) {
    return (
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Comments</h3>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              No comments yet. Be the first to share your thoughts!
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">
        Comments ({comments.length})
      </h3>
      <div className="space-y-6">
        {comments.map((comment) => (
          <Card key={comment._id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {comment.website ? (
                    <a 
                      href={comment.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline"
                    >
                      {comment.name}
                    </a>
                  ) : (
                    <span className="font-medium">{comment.name}</span>
                  )}
                </div>
                <time className="text-sm text-muted-foreground">
                  {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                </time>
              </div>
              <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                {comment.comment}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}