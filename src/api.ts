const PRODUCTS = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    category: "Electronics",
    rating: 4.5,
    image: "/placeholder.svg",
    reviews: 187,
    description:
      "High-quality wireless headphones with noise-cancellation technology and long battery life.",
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 49.99,
    category: "Clothing",
    rating: 4.2,
    image: "/placeholder.svg",
    reviews: 92,
    description:
      "Comfortable and stylish slim fit jeans made from premium denim, perfect for any casual occasion.",
  },
  {
    id: "3",
    name: "Indoor Plant Set",
    price: 34.99,
    category: "Home & Garden",
    rating: 4.7,
    image: "/placeholder.svg",
    reviews: 253,
    description:
      "Set of low-maintenance indoor plants to add a touch of nature to your home or office.",
  },
  {
    id: "4",
    name: "Bestselling Novel",
    price: 14.99,
    category: "Books",
    rating: 4.8,
    image: "/placeholder.svg",
    reviews: 278,
    description:
      "Captivating page-turner that's topping the charts, perfect for your next reading adventure.",
  },
  {
    id: "5",
    name: "Smart Watch",
    price: 129.99,
    category: "Electronics",
    rating: 4.6,
    image: "/placeholder.svg",
    reviews: 215,
    description:
      "Feature-packed smartwatch with fitness tracking, notifications, and customizable watch faces.",
  },
  {
    id: "6",
    name: "Cozy Throw Blanket",
    price: 29.99,
    category: "Home & Garden",
    rating: 4.4,
    image: "/placeholder.svg",
    reviews: 156,
    description:
      "Soft and warm throw blanket, ideal for snuggling up on the couch or adding warmth to your bed.",
  },
  {
    id: "7",
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    category: "Sports & Outdoors",
    rating: 4.3,
    image: "/placeholder.svg",
    reviews: 132,
    description:
      "Durable, leak-proof water bottle that keeps your drinks cold for hours, perfect for outdoor activities.",
  },
  {
    id: "8",
    name: "Organic Cotton T-Shirt",
    price: 19.99,
    category: "Clothing",
    rating: 4.1,
    image: "/placeholder.svg",
    reviews: 78,
    description:
      "Comfortable, breathable t-shirt made from 100% organic cotton, available in various colors.",
  },
  {
    id: "9",
    name: "Wireless Charging Pad",
    price: 39.99,
    category: "Electronics",
    rating: 4.4,
    image: "/placeholder.svg",
    reviews: 167,
    description:
      "Convenient wireless charging pad compatible with most smartphones and wireless earbuds.",
  },
  {
    id: "10",
    name: "Yoga Mat",
    price: 29.99,
    category: "Sports & Outdoors",
    rating: 4.6,
    image: "/placeholder.svg",
    reviews: 201,
    description:
      "Non-slip, eco-friendly yoga mat with excellent cushioning for comfortable practice.",
  },
  {
    id: "11",
    name: "Scented Candle Set",
    price: 34.99,
    category: "Home & Garden",
    rating: 4.5,
    image: "/placeholder.svg",
    reviews: 189,
    description:
      "Set of aromatic candles with long-lasting fragrances to create a relaxing ambiance in your home.",
  },
  {
    id: "12",
    name: "Leather Wallet",
    price: 44.99,
    category: "Accessories",
    rating: 4.7,
    image: "/placeholder.svg",
    reviews: 245,
    description:
      "Sleek and durable leather wallet with multiple card slots and RFID-blocking technology.",
  },
  {
    id: "13",
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    category: "Electronics",
    rating: 4.2,
    image: "/placeholder.svg",
    reviews: 112,
    description:
      "Compact, waterproof Bluetooth speaker with impressive sound quality and long battery life.",
  },
  {
    id: "14",
    name: "Stainless Steel Cookware Set",
    price: 149.99,
    category: "Home & Garden",
    rating: 4.8,
    image: "/placeholder.svg",
    reviews: 289,
    description:
      "Complete set of high-quality stainless steel pots and pans suitable for all cooktop types.",
  },
  {
    id: "15",
    name: "Fitness Tracker",
    price: 89.99,
    category: "Electronics",
    rating: 4.3,
    image: "/placeholder.svg",
    reviews: 143,
    description:
      "Advanced fitness tracker with heart rate monitoring, sleep tracking, and smartphone notifications.",
  },
  {
    id: "16",
    name: "Backpack",
    price: 54.99,
    category: "Accessories",
    rating: 4.5,
    image: "/placeholder.svg",
    reviews: 178,
    description:
      "Versatile and durable backpack with multiple compartments, perfect for daily use or travel.",
  },
];

const CAMPAIGNS = [
  {
    title: "Summer Collection",
    description: "Discover our latest summer styles. Light, breezy, and perfect for the season.",
    imageAlt: "Summer Collection",
    bucket: "a",
    imageSrc: "/placeholder.svg?height=550&width=550",
    buttons: [
      {text: "Shop Now", variant: "default"},
      {text: "Learn More", variant: "outline"},
    ],
  },
  {
    title: "Fall Preview",
    description:
      "Get ready for cooler days with our upcoming fall collection. Cozy sweaters and stylish boots await.",
    imageAlt: "Fall Preview",
    bucket: "a",
    imageSrc: "/placeholder.svg?height=550&width=550",
    buttons: [{text: "Explore Fall Collection", variant: "outline"}],
  },
  {
    title: "Holiday Special",
    description:
      "Tis the season to be stylish! Discover our festive collection and find the perfect gifts for your loved ones.",
    imageAlt: "Holiday Special",
    imageSrc: "/placeholder.svg?height=550&width=550",
    bucket: "b",
    buttons: [
      {text: "Shop Holiday Collection", variant: "default"},
      {text: "Gift Guide", variant: "outline"},
    ],
  },
  {
    title: "Spring Renewal",
    bucket: "c",
    description:
      "Refresh your wardrobe with our vibrant spring collection. Embrace the season of new beginnings.",
    imageAlt: "Spring Renewal",
    imageSrc: "/placeholder.svg?height=550&width=550",
    buttons: [{text: "View Spring Styles", variant: "outline"}],
  },
];

export const getRandomCampaignBucket = () => {
  const buckets = CAMPAIGNS.map((campaign) => campaign.bucket);

  return buckets[Math.floor(Math.random() * buckets.length)];
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  campaign: {
    async list(bucket?: string) {
      await sleep(Math.random() * 1000);

      let campaigns = structuredClone(CAMPAIGNS);

      if (bucket) {
        campaigns = campaigns.filter((campaign) => campaign.bucket === bucket);
      }

      return campaigns;
    },
  },
  product: {
    async get(id: string) {
      await sleep(Math.random() * 1000);

      const product = PRODUCTS.find((product) => product.id === id);

      if (!product) {
        throw new Error("Product not found");
      }

      return product;
    },
    async list(category?: string) {
      await sleep(Math.random() * 1000);

      let products = structuredClone(PRODUCTS);

      if (category) {
        products = products.filter((product) => product.category === category);
      }

      return products;
    },
  },
};
