import Image from "next/image";

import {Card, CardContent} from "./ui/card";

import api from "@/api";

interface RelatedProductsProps {
  category: string;
}

export async function RelatedProducts({category}: RelatedProductsProps) {
  const relatedProducts = await api.product.list(category);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {relatedProducts.slice(0, 3).map((product) => (
        <Card key={product.id}>
          <CardContent className="p-4">
            <div className="relative mb-4 h-48">
              <Image alt={product.name} layout="fill" objectFit="contain" src={product.image} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
            <p className="">${product.price.toFixed(2)}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function RelatedProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({length: 3}).map((_, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <div className="relative mb-4 flex h-48 items-center justify-center">
              <div className="h-[192px] w-[192px] animate-pulse bg-gray-200 text-center" />
            </div>
            <div className="mb-2 h-6 w-3/4 animate-pulse bg-gray-200" />
            <p className="h-6 w-1/2 animate-pulse bg-gray-200" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
