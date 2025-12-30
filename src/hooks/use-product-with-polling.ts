import {useEffect, useState} from "react";

import api from "@/api";

export const useProductWithPolling = ({
  productId,
  initialProduct,
  polling,
  pollingInterval = 10000,
}: {
  productId: string;
  initialProduct?: {rating: number; reviews: number};
  pollingInterval?: number;
  polling?: boolean;
}) => {
  const [product, setProduct] = useState(initialProduct);

  // NOTE (raph): With a real api, instead of our mocked one, using `useSwr` with a
  // polling interval will lead to a more standardized, repeatable, cached
  // implementation.
  useEffect(() => {
    async function refetchProduct() {
      // Note(raph): this can be uncommented to check polling intervals in the browser console
      // console.log(`useProductWithPolling: refetching product ${productId}`);

      const product = await api.product.get(productId);

      setProduct(product);
    }

    if (polling) {
      const interval = setInterval(() => {
        refetchProduct();
      }, pollingInterval);

      return () => {
        clearInterval(interval);
      };
    } else {
      refetchProduct();
    }
  }, [productId, pollingInterval, polling]);

  return product;
};
