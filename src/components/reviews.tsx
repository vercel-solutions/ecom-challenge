"use client";

import {Star} from "lucide-react";

import {useProductWithPolling} from "@/hooks/use-product-with-polling";

interface ReviewsProps {
  productId: string;
  initialProduct?: {rating: number; reviews: number};
  polling?: boolean;
}

export function Reviews({productId, initialProduct, polling = false}: ReviewsProps) {
  const product = useProductWithPolling({productId, initialProduct, polling});

  return product ? (
    <div>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < Math.floor(product.rating) ? "fill-current text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="ml-2 text-sm">({product.reviews} reviews)</span>
    </div>
  ) : null;
}
