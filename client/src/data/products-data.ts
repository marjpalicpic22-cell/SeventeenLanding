import pramsImg from "@assets/image_1775926747411.png";
import furnitureImg from "@assets/image_1775926828252.png";
import feedingImg from "@assets/image_1775926890344.png";
import outdoorActivitiesImg from "@assets/image_1775926956131.png";
import booksImg from "@assets/image_1775927605321.png";
import otherImg from "@assets/image_1775927675534.png";
import bugabooPramImg from "@assets/image_1775928859938.png";

// New product images (clean photos, no text)
import toysBundleImg from "@assets/image_1776910399677.png";
import girlsMixedClothesImg from "@assets/image_1776910429325.png";
import riffRaffBlueLionImg from "@assets/image_1776910458338.png";
import riffRaffFloralBunnyImg from "@assets/image_1776910482969.png";
import plushToysBundleImg from "@assets/image_1776910503068.png";
import denimJacketImg from "@assets/image_1776910519176.png";
import boysMixedClothingImg from "@assets/image_1776910535592.png";
import chekohCarrierImg from "@assets/image_1776910553798.png";
import tennisTacketsImg from "@assets/image_1776910569615.png";
import origamiArtKitImg from "@assets/image_1776910585638.png";

export type Product = {
  id: string;
  categoryId: string;
  subcategoryId?: string;
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

export type Subcategory = {
  id: string;
  categoryId: string;
  name: string;
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
    id: "outdoor-activities",
    name: "Outdoor and Activities",
    image: outdoorActivitiesImg,
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

export const subcategories: Subcategory[] = [
  // Prams and Strollers
  { id: "baby-carriers", categoryId: "prams-strollers", name: "Baby Carriers" },
  { id: "bicycles", categoryId: "prams-strollers", name: "Bicycles" },
  // Clothing and Shoes
  { id: "bottoms", categoryId: "clothing-shoes", name: "Bottoms" },
  { id: "dresses", categoryId: "clothing-shoes", name: "Dresses" },
  { id: "nursing-dresses", categoryId: "clothing-shoes", name: "Nursing Dresses" },
  { id: "outerwear", categoryId: "clothing-shoes", name: "Outerwear" },
  { id: "pants", categoryId: "clothing-shoes", name: "Pants" },
  { id: "sleepwear", categoryId: "clothing-shoes", name: "Sleepwear" },
  { id: "swimwear", categoryId: "clothing-shoes", name: "Swimwear" },
  { id: "tops", categoryId: "clothing-shoes", name: "Tops" },
  { id: "boots", categoryId: "clothing-shoes", name: "Boots" },
  { id: "runners", categoryId: "clothing-shoes", name: "Runners" },
  { id: "shoes", categoryId: "clothing-shoes", name: "Shoes" },
  // Toys and Games
  { id: "blocks", categoryId: "toys-games", name: "Blocks" },
  { id: "educational-toys", categoryId: "toys-games", name: "Educational Toys" },
  { id: "general-toys", categoryId: "toys-games", name: "General Toys" },
  { id: "outdoor-toys", categoryId: "toys-games", name: "Outdoor Toys" },
  // Furniture and Nursery
  { id: "bedding", categoryId: "furniture-nursery", name: "Bedding" },
  { id: "chairs", categoryId: "furniture-nursery", name: "Chairs" },
  { id: "cribs-cots", categoryId: "furniture-nursery", name: "Cribs / Cots" },
  // Feeding and Bathing
  { id: "accessories", categoryId: "feeding-bathing", name: "Accessories" },
  // Outdoor and Activities
  { id: "outdoor-gear", categoryId: "outdoor-activities", name: "Outdoor Gear" },
  { id: "water-activities", categoryId: "outdoor-activities", name: "Water Activities" },
  // Books and Learning
  { id: "childrens-books", categoryId: "books-learning", name: "Children's Books" },
  // Other
  { id: "car-seats", categoryId: "other", name: "Car Seats" },
  { id: "other-items", categoryId: "other", name: "Other" },
];

export const products: Product[] = [
  {
    id: "bugaboo-bee",
    categoryId: "prams-strollers",
    subcategoryId: "baby-carriers",
    name: "Bugaboo Bee",
    condition: "Extremely Good Condition",
    originalPrice: 1200,
    appPrice: 150,
    image: bugabooPramImg,
  },
  {
    id: "chekoh-clip-carrier",
    categoryId: "prams-strollers",
    subcategoryId: "baby-carriers",
    name: "Chekoh Clip Carrier 2.0",
    condition: "Good Condition",
    originalPrice: 250,
    appPrice: 185,
    image: chekohCarrierImg,
  },
  {
    id: "toys-bundle",
    categoryId: "toys-games",
    subcategoryId: "general-toys",
    name: "Toys Bundle",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 30,
    image: toysBundleImg,
  },
  {
    id: "riff-raff-blue-lion",
    categoryId: "toys-games",
    subcategoryId: "general-toys",
    name: "Riff Raff Blue Lion",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 15,
    image: riffRaffBlueLionImg,
  },
  {
    id: "riff-raff-floral-bunny",
    categoryId: "toys-games",
    subcategoryId: "general-toys",
    name: "Riff Raff Floral Bunny",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 15,
    image: riffRaffFloralBunnyImg,
  },
  {
    id: "plush-toys-bundle",
    categoryId: "toys-games",
    subcategoryId: "general-toys",
    name: "Plush Toys Bundle",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 15,
    image: plushToysBundleImg,
  },
  {
    id: "origami-art-kit",
    categoryId: "toys-games",
    subcategoryId: "educational-toys",
    name: "Origami Art Kit",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 10,
    image: origamiArtKitImg,
  },
  {
    id: "girls-mixed-clothes",
    categoryId: "clothing-shoes",
    subcategoryId: "tops",
    name: "Girls Mixed Clothes Bundle",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 15,
    image: girlsMixedClothesImg,
  },
  {
    id: "denim-jacket-2t",
    categoryId: "clothing-shoes",
    subcategoryId: "outerwear",
    name: "Denim Jacket",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 30,
    image: denimJacketImg,
  },
  {
    id: "boys-mixed-clothing",
    categoryId: "clothing-shoes",
    subcategoryId: "tops",
    name: "Boys Mixed Clothing Bundle",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 20,
    image: boysMixedClothingImg,
  },
  {
    id: "kids-tennis-rackets",
    categoryId: "outdoor-activities",
    subcategoryId: "outdoor-gear",
    name: "Kids Tennis Rackets Bundle",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 20,
    image: tennisTacketsImg,
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getSubcategoriesByCategory(categoryId: string): Subcategory[] {
  return subcategories.filter((s) => s.categoryId === categoryId);
}

export function getSubcategoryById(categoryId: string, subcategoryId: string): Subcategory | undefined {
  return subcategories.find((s) => s.categoryId === categoryId && s.id === subcategoryId);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getProductsBySubcategory(categoryId: string, subcategoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId && p.subcategoryId === subcategoryId);
}
