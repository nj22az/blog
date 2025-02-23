
import { CalendarDays } from "lucide-react";

const Blog = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold text-brand-dark mb-6">Blog</h2>
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CalendarDays className="h-12 w-12 text-brand-purple mb-4" />
        <h3 className="text-xl font-medium text-brand-dark mb-2">Coming Soon</h3>
        <p className="text-neutral-gray max-w-md">
          Our blog is currently under development. Check back soon for articles about industrial automation, 
          calibration expertise, and maritime engineering insights.
        </p>
      </div>
    </div>
  );
};

export default Blog;
