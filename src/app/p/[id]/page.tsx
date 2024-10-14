import {Star, Truck, RefreshCcw, ShieldCheck} from "lucide-react";
import Image from "next/image";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import api from "@/api";

export default async function ProductDetailPage({params}: {params: {id: string}}) {
  const product = await api.product.get(params.id);
  const relatedProducts = await api.product.list(product.category);

  return (
    <div className="container flex-1 px-4 py-4 md:px-6 md:py-12">
      <div className="rounded-lgshadow-xl grid gap-8 overflow-hidden">
        <div className="gap-8 md:flex">
          {/* Product Images */}
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

          {/* Product Info */}
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
              <span className="ml-2 text-sm">({product.reviews} reviews)</span>
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

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
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
      </div>
    </div>
  );
}
