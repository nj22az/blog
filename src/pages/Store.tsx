
import { ExternalLink, ShoppingCart, BookOpen, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const storeItems = [
  {
    title: "Pressurized Equipment Safety Course",
    icon: Code,
    description: "Comprehensive training on safe operation and management of pressurized equipment. Covers risk assessment, maintenance, and safety protocols. Available in Swedish and English.",
    price: "$299",
    type: "Course",
    features: [
      "Risk Assessment Methods",
      "Safety Protocols",
      "Maintenance Guidelines",
      "Emergency Procedures",
      "Bilingual Content"
    ]
  },
  {
    title: "AFS Documentation Bundle",
    icon: BookOpen,
    description: "Complete documentation package including AFS regulations, guidelines, and practical examples for pressurized equipment safety. Available in Swedish and English.",
    price: "$149",
    type: "Documentation",
    features: [
      "Official AFS Guidelines",
      "Practical Examples",
      "Checklists",
      "Reference Materials",
      "Templates"
    ]
  },
  {
    title: "Professional Certification Program",
    icon: ShoppingCart,
    description: "Advanced certification program for professionals working with pressurized equipment. Includes practical assessments and certification tests.",
    price: "$599",
    type: "Certification",
    features: [
      "Official Certification",
      "Practical Assessments",
      "Case Studies",
      "Expert Support",
      "Lifetime Access"
    ]
  }
];

const Store = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold text-brand-dark mb-6">Professional Training Store</h2>
      <div className="grid gap-6">
        {storeItems.map((item) => (
          <div key={item.title} className="flex flex-col p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all">
            <div className="flex items-start gap-4">
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
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-brand-dark mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-neutral-gray">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple/60 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm px-2 py-1 rounded-full bg-brand-purple/10 text-brand-purple">
                    {item.type}
                  </span>
                  <Button className="gap-2">
                    {item.type === "Documentation" ? (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
