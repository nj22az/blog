
import { useQuery } from "@tanstack/react-query";
import { CalendarDays } from "lucide-react";

interface BlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
}

const BlogContent = () => {
  // Replace this URL with your WordPress site URL
  const WORDPRESS_API_URL = "https://your-wordpress-site.com/wp-json/wp/v2";

  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const response = await fetch(`${WORDPRESS_API_URL}/posts`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json() as Promise<BlogPost[]>;
    },
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 animate-pulse"
          >
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-brand-dark">Blog Posts</h2>
      <div className="space-y-4">
        {posts?.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h3
              className="text-lg font-semibold text-brand-dark mb-2"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div
              className="text-neutral-gray mb-4"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <div className="flex items-center text-sm text-neutral-gray">
              <CalendarDays className="h-4 w-4 mr-2" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogContent;
