import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import api from "@/api";

export const RelatedProducts = async ({ product }: { product: any}) => {
  const relatedProducts = await(async () => {
    // Timeout included to exaggerate load time for demo purposes
    // Timeout is not required
    await (new Promise((resolve) => setTimeout(resolve, 2000)))

    return await api.product.list(product.category);
  })();

  return relatedProducts.slice(0, 3).map((product) => (
    <Card key={product.id}>
      <CardContent className="p-4">
        <div className="relative mb-4 h-48">
          <Image
            alt={product.name}
            layout="fill"
            objectFit="contain"
            src={product.image}
          />
        </div>
        <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
        <p className="">${product.price.toFixed(2)}</p>
      </CardContent>
    </Card>
  ));
}