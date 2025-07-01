import {Star, Truck, RefreshCcw, ShieldCheck} from "lucide-react";
import Image from "next/image";

import {Button} from "@/components/ui/button";
import api from "@/api";
import { Suspense } from "react";
import { RelatedProducts } from "./_components/RelatedProducts";
import { LiveReviews } from "./_components/LiveReviews";

export async function generateStaticParams() {
  const products = await api.product.list();
  const moreThanHundredReviews = products.filter(({ reviews }) => reviews >= 100).map(({ id }) => ({ id }));

  return moreThanHundredReviews;
}

export default async function ProductDetailPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const product = await api.product.get(id);

  const liveUpdateReviews = Boolean(product.price > 50);

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
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-current text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              {liveUpdateReviews ? (
                <LiveReviews id={id} />
              ) : (
                <span className="ml-2 text-sm">
                  ({product.reviews} reviews)
                </span>
              )}
            </div>
            <p className="mb-4 text-2xl font-bold">
              ${product.price.toFixed(2)}
            </p>
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={<div>Loading...</div>}>
            <RelatedProducts product={product} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
