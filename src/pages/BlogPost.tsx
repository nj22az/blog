import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Blog Post</h1>
      <div className="prose dark:prose-invert max-w-none">
        {/* Blog post content will be loaded here based on the slug */}
        <p>Loading blog post: {slug}</p>
      </div>
    </div>
  );
};

export default BlogPost; 