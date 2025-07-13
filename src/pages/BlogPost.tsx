import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface WPPost {
  title: { rendered: string };
  content: { rendered: string };
}

const BlogPost = () => {
  // 1. Grab the slug from the URL
  const { slug } = useParams<{ slug: string }>();

  // 2. Local state for the post
  const [post, setPost] = useState<WPPost | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 3. Fetch from your WordPress site
    axios
      .get<WPPost[]>(
        `https://public-api.wordpress.com/wp/v2/sites/theofficeofnils.wordpress.com/posts?slug=${slug}`
      )
      .then((res) => {
        if (res.data.length > 0) {
          setPost(res.data[0]);
        } else {
          setError("Post not found.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load post.");
      });
  }, [slug]);

  // 4. Loading / error states
  if (error) {
    return <p className="text-red-600">{error}</p>;
  }
  if (!post) {
    return <p>Loading blog post: {slug}</p>;
  }

  // 5. Render the post title & body
  return (
    <article className="prose lg:prose-lg mx-auto py-8">
      {/* WordPress titles & content come back as HTML */}
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  );
};

export default BlogPost; 