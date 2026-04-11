import pramsImg from "@assets/image_1775926747411.png";
import furnitureImg from "@assets/image_1775926828252.png";
import feedingImg from "@assets/image_1775926890344.png";
import carSeatsImg from "@assets/image_1775926956131.png";
import booksImg from "@assets/image_1775927605321.png";
import otherImg from "@assets/image_1775927675534.png";
import bugabooPramImg from "@assets/image_1775928859938.png";

export type Product = {
  id: string;
  categoryId: string;
  name: string;
  condition: string;
  originalPrice: number;
  appPrice: number;
  image: string;
};

export type Category = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export const categories: Category[] = [
  {
    id: "prams-strollers",
    name: "Prams and Strollers",
    image: pramsImg,
    description: "Quality prams and travel systems at prices that make sense.",
  },
  {
    id: "clothing-shoes",
    name: "Clothing and Shoes",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80",
    description: "Preloved kids' clothes in great condition, from newborn to teen.",
  },
  {
    id: "toys-games",
    name: "Toys and Games",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
    description: "Puzzles, ride-ons, LEGO and more. Give great toys a second home.",
  },
  {
    id: "furniture-nursery",
    name: "Furniture and Nursery",
    image: furnitureImg,
    description: "Cots, change tables, highchairs and nursery essentials.",
  },
  {
    id: "feeding-bathing",
    name: "Feeding and Bathing",
    image: feedingImg,
    description: "Everything baby needs, gently used and locally listed.",
  },
  {
    id: "car-seats",
    name: "Car Seats",
    image: carSeatsImg,
    description: "Safety gear from trusted local families at honest prices.",
  },
  {
    id: "books-learning",
    name: "Books and Learning",
    image: booksImg,
    description: "Kids' books, educational toys and school supplies.",
  },
  {
    id: "other",
    name: "Other",
    image: otherImg,
    description: "Household items, kitchen gear and everything in between.",
  },
];

export const products: Product[] = [
  {
    id: "bugaboo-pram",
    categoryId: "prams-strollers",
    name: "Bugaboo Pram",
    condition: "Extremely Good Condition",
    originalPrice: 1200,
    appPrice: 150,
    image: bugabooPramImg,
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}
