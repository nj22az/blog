
import React from "react";
import { ShoppingCart } from "lucide-react";

const Store = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="p-4 rounded-full bg-brand-purple/10 mb-6">
          <ShoppingCart className="h-8 w-8 text-brand-purple" />
        </div>
        <h2 className="text-2xl font-semibold text-brand-dark mb-3">Professional Training Store</h2>
        <p className="text-neutral-gray">
          Our store is coming soon. We're working hard to bring you professional training materials and courses.
        </p>
      </div>
    </div>
  );
};

export default Store;
