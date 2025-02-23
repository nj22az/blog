import { ExternalLink, ShoppingCart, BookOpen, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const storeItems = [
  {
    title: "Advanced React Patterns Course",
    icon: Code,
    description: "Learn advanced React patterns and best practices",
    price: "$49.99",
    type: "Course",
  },
  {
    title: "Tech Leadership Handbook",
    icon: BookOpen,
    description: "A comprehensive guide to technical leadership",
    price: "$24.99",
    type: "eBook",
  },
  {
    title: "Development Tools Bundle",
    icon: ShoppingCart,
    description: "Curated collection of premium development tools",
    price: "Varies",
    type: "Affiliate",
  },
];

const Store = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold text-brand-dark mb-6">Digital Store</h2>
      <div className="grid gap-6">
        {storeItems.map((item) => (
          <div key={item.title} className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all">
            <div className="p-3 rounded-lg bg-brand-purple/10">
              <item.icon className="h-6 w-6 text-brand-purple" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-brand-dark">{item.title}</h3>
                  <p className="text-sm text-neutral-gray mt-1">{item.description}</p>
                </div>
                <span className="text-lg font-semibold text-brand-purple">{item.price}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm px-2 py-1 rounded-full bg-brand-purple/10 text-brand-purple">
                  {item.type}
                </span>
                <Button className="gap-2">
                  {item.type === "Affiliate" ? (
                    <>
                      <ExternalLink className="h-4 w-4" />
                      Learn More
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-4 w-4" />
                      Buy Now
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
