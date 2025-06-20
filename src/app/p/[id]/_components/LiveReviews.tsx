"use client"

import api from "@/api";
import { useEffect, useState } from "react";

export const LiveReviews = ({ id }: { id: string }) => {
  const [reviews, setReviews] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const product = await api.product.get(id);
      console.debug("Reviews Live Update!");
      setReviews(product.reviews);
    };

    fetchData();
    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, [reviews]);


  if (!reviews) {
    return <span className="ml-2 text-sm">Loading reviews...</span>;
  }

  return <span className="ml-2 text-sm">({reviews} reviews)</span>;
};