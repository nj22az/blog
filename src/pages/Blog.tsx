import { Calendar, User, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "Industrial Automation Trends 2024",
    excerpt: "Exploring the latest trends in industrial automation and their impact on manufacturing.",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Nils Johansson"
  },
  {
    title: "Maritime Engineering: A Decade of Experience",
    excerpt: "Reflecting on my journey through maritime engineering and lessons learned.",
    date: "March 10, 2024",
    readTime: "8 min read",
    author: "Nils Johansson"
  }
];

const Blog = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold text-brand-dark mb-6">Blog</h2>
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="p-6 rounded-xl border border-gray-200 group-hover:shadow-md transition-all">
              <h3 className="text-xl font-medium text-brand-dark group-hover:text-brand-purple transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-neutral-gray">{post.excerpt}</p>
              <div className="flex items-center gap-4 mt-4 text-sm text-neutral-gray">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
