import Image from "next/image";
import Link from "next/link";

import {Card, CardContent, CardFooter} from "@/components/ui/card";
import api from "@/api";

export default async function ProductListingPage() {
  const products = await api.product.list();

  return (
    <div className="container px-4 py-12 md:px-6">
      <h1 className="mb-8 text-3xl font-bold">Our Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Link key={product.id} href={`/p/${product.id}`}>
            <Card className="flex flex-col overflow-hidden bg-gray-500/5 transition-shadow duration-200 hover:shadow-lg">
              <div className="relative w-full pt-[75%]">
                <Image
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  src="/placeholder.svg?height=300&width=400"
                />
              </div>
              <CardContent className="grid flex-grow gap-1 p-4">
                <h2 className="text-lg font-semibold leading-5">{product.name}</h2>
                <p className="text-sm opacity-75">{product.category}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={`${product.id}-${i}`}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm">{product.rating}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4">
                <span className="text-xl font-bold">
                  {product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
