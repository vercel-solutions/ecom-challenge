import {Truck, RefreshCcw, ShieldCheck} from "lucide-react";
import Image from "next/image";
import {Suspense} from "react";

import {Button} from "@/components/ui/button";
import api from "@/api";
import {RelatedProducts, RelatedProductsSkeleton} from "@/components/related-products";
import {Reviews} from "@/components/reviews";

export const experimental_ppr = true;

export const generateStaticParams = async () => {
  const products = await api.product.list();

  const highlyReviewedProducts = products.filter((product) => product.reviews >= 100);

  return highlyReviewedProducts.map((product) => ({id: product.id}));
};

export default async function ProductDetailPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const product = await api.product.get(id);

  return (
    <div className="container flex-1 px-4 py-4 md:px-6 md:py-12">
      <div className="rounded-lgshadow-xl grid gap-8 overflow-hidden">
        <div className="gap-8 md:flex">
          <div className="md:w-1/2">
            <div className="relative h-96">
              <Image
                alt={product.name}
                className="rounded-lg"
                layout="fill"
                objectFit="contain"
                src={product.image}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
            <div className="mb-4 flex items-center">
              <Reviews
                initialProduct={product}
                polling={product.price > 5}
                productId={product.id}
              />
            </div>
            <p className="mb-4 text-2xl font-bold">${product.price.toFixed(2)}</p>
            <p className="mb-6">{product.description}</p>
            <Button className="mb-4 w-full">Add to Cart</Button>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <Truck className="mr-2 h-5 w-5" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center">
                <RefreshCcw className="mr-2 h-5 w-5" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5" />
                <span>2-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
        <Suspense fallback={<RelatedProductsSkeleton />}>
          <RelatedProducts category={product.category} />
        </Suspense>
      </div>
    </div>
  );
}
