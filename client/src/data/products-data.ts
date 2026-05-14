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

// Latest product images (clean photos, no text)
import activityCubeImg from "@assets/image_1777452448186.png";
import incyCotImg from "@assets/image_1777452480908.png";
import nurseryRockingChairImg from "@assets/image_1777452496074.png";
import rockingHorseWhiteImg from "@assets/image_1777452524136.png";
import nikeJordansImg from "@assets/image_1777453380250.png";
import slideImg from "@assets/image_1777452560714.png";
import rockingHorseBrownImg from "@assets/image_1777452586483.png";
import ukuleleImg from "@assets/image_1777452603852.png";
import swanPyjamasImg from "@assets/image_1777452691758.png";
import bumbleBeeRideToyImg from "@assets/image_1777452772322.png";

// Newer product images (clean photos, no text)
import boysBundleImg from "@assets/image_1777453811742.png";
import chibebeSnugglePodImg from "@assets/image_1777453831416.png";
import hugABubCarrierImg from "@assets/image_1777453845377.png";
import babyPlayMatImg from "@assets/image_1777453857572.png";
import pinkHeartJumperImg from "@assets/image_1777453869389.png";
import tonkaTrucksImg from "@assets/image_1777453875821.png";
import girlsBundle23Img from "@assets/image_1777453887513.png";
import floralTutuDressImg from "@assets/image_1777453915500.png";
import hotPinkTutuSkirtImg from "@assets/image_1777453928433.png";

// All-in-one screenshot product images (batch 5) — cropped to product photo only
import pureWesternHatImg from "@assets/image_1778725539410_crop.png";
import boysShortsBundle12Img from "@assets/image_1778725550338_crop.png";
import ergopouchSleepSuitImg from "@assets/image_1778725582645_crop.png";
import boysSuitSize10Img from "@assets/image_1778725590617_crop.png";
import cottonOnKinksPinkDress2tImg from "@assets/image_1778725599383_crop.png";
import bondsSummerZippy2tImg from "@assets/image_1778725606330_crop.png";
import oodieGreySmallImg from "@assets/image_1778725612911_crop.png";
import girlsHeadbandsBundleImg from "@assets/image_1778725619967_crop.png";
import kmartPinkPufferVest2tImg from "@assets/image_1778725627228_crop.png";
import hoodedTowelNewbornImg from "@assets/image_1778725634033_crop.png";
import hmUnicornPartyDressImg from "@assets/image_1778725640949_crop.png";
import rainbowTutuSkirtSize6Img from "@assets/image_1778725647524_crop.png";
import loveToDreamSleepingBagImg from "@assets/image_1778725654262_crop.png";
import sheinPinkCheckeredJeansImg from "@assets/image_1778725660497_crop.png";
import versaceTopSize10Img from "@assets/image_1778725668013_crop.png";
import cottonOnKidsRainbowDressImg from "@assets/image_1778725673664_crop.png";
import greyLongSleeveTop23Img from "@assets/image_1778725679582_crop.png";
import skeletonLeggings3tImg from "@assets/image_1778725685628_crop.png";
import rainbowLeggings3tImg from "@assets/image_1778725691459_crop.png";
import cottonOnKidsLongSleeveDressImg from "@assets/image_1778725698869_crop.png";

// Book product images (clean photos, no text)
import digDumpRollImg from "@assets/image_1777454587878.png";
import landOfDinosaursImg from "@assets/image_1777454602556.png";
import blueyHammerbarnImg from "@assets/image_1777454619278.png";
import spotGrandparentsImg from "@assets/image_1777454634370.png";
import thelmaUnicornImg from "@assets/image_1777454647287.png";
import babySensoryBooksImg from "@assets/image_1777454660248.png";
import windUpBusyCarImg from "@assets/image_1777454673032.png";

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
  { id: "accessories", categoryId: "clothing-shoes", name: "Accessories" },
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
  {
    id: "twist-learn-activity-cube",
    categoryId: "toys-games",
    subcategoryId: "educational-toys",
    name: "Twist & Learn Activity Cube",
    condition: "Good Condition",
    originalPrice: 50,
    appPrice: 15,
    image: activityCubeImg,
  },
  {
    id: "incy-interiors-cot",
    categoryId: "furniture-nursery",
    subcategoryId: "cribs-cots",
    name: "Incy Interiors Cot",
    condition: "Good Condition",
    originalPrice: 1100,
    appPrice: 150,
    image: incyCotImg,
  },
  {
    id: "nursery-rocking-chair",
    categoryId: "furniture-nursery",
    subcategoryId: "chairs",
    name: "Nursery Rocking Chair",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 50,
    image: nurseryRockingChairImg,
  },
  {
    id: "rocking-horse-white-timber",
    categoryId: "toys-games",
    subcategoryId: "general-toys",
    name: "Rocking Horse (White + Timber)",
    condition: "Very Good",
    originalPrice: 0,
    appPrice: 50,
    image: rockingHorseWhiteImg,
  },
  {
    id: "nike-jordans-size-8",
    categoryId: "clothing-shoes",
    subcategoryId: "shoes",
    name: "Nike Jordans (Kids Size 8)",
    condition: "Very Good",
    originalPrice: 150,
    appPrice: 70,
    image: nikeJordansImg,
  },
  {
    id: "kmart-kids-slide",
    categoryId: "toys-games",
    subcategoryId: "outdoor-toys",
    name: "Kmart Kids Slide",
    condition: "Good Condition",
    originalPrice: 50,
    appPrice: 30,
    image: slideImg,
  },
  {
    id: "rocking-horse-brown-plush",
    categoryId: "toys-games",
    subcategoryId: "general-toys",
    name: "Plush Rocking Horse",
    condition: "Good Condition",
    originalPrice: 50,
    appPrice: 15,
    image: rockingHorseBrownImg,
  },
  {
    id: "ukulele",
    categoryId: "toys-games",
    subcategoryId: "general-toys",
    name: "Ukulele",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 15,
    image: ukuleleImg,
  },
  {
    id: "swan-princess-pyjamas-3t",
    categoryId: "clothing-shoes",
    subcategoryId: "sleepwear",
    name: "Milkshake Swan Princess Summer Pyjamas (Size 3)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 10,
    image: swanPyjamasImg,
  },
  {
    id: "ride-n-roll-bumble-bee",
    categoryId: "toys-games",
    subcategoryId: "outdoor-toys",
    name: "Ride N Roll Bumble Bee Toy",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 30,
    image: bumbleBeeRideToyImg,
  },
  {
    id: "boys-size-10-bundle",
    categoryId: "clothing-shoes",
    subcategoryId: "tops",
    name: "Boys Size 10 Clothing Bundle",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 15,
    image: boysBundleImg,
  },
  {
    id: "chibebe-snuggle-pod",
    categoryId: "furniture-nursery",
    subcategoryId: "chairs",
    name: "Chibebe Snuggle Pod",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 30,
    image: chibebeSnugglePodImg,
  },
  {
    id: "hug-a-bub-wrap-carrier",
    categoryId: "prams-strollers",
    subcategoryId: "baby-carriers",
    name: "Hug a Bub Wrap Carrier",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 15,
    image: hugABubCarrierImg,
  },
  {
    id: "baby-play-mat",
    categoryId: "toys-games",
    subcategoryId: "educational-toys",
    name: "Baby Play Mat",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 20,
    image: babyPlayMatImg,
  },
  {
    id: "pink-polka-dot-heart-jumper-3t",
    categoryId: "clothing-shoes",
    subcategoryId: "tops",
    name: "Pink Jumper with Polka Dot Love Heart (Size 3)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 7,
    image: pinkHeartJumperImg,
  },
  {
    id: "metal-tonka-trucks",
    categoryId: "toys-games",
    subcategoryId: "outdoor-toys",
    name: "Metal Tonka Trucks (Bundle of 3)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 100,
    image: tonkaTrucksImg,
  },
  {
    id: "girls-2-3-clothes-bundle",
    categoryId: "clothing-shoes",
    subcategoryId: "tops",
    name: "Girls Size 2-3 Clothes Bundle (Bonds, Kmart)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 20,
    image: girlsBundle23Img,
  },
  {
    id: "rock-your-kid-floral-tutu-dress-3t",
    categoryId: "clothing-shoes",
    subcategoryId: "dresses",
    name: "Rock Your Kid Floral Tutu Circus Dress (Size 3)",
    condition: "Good Condition",
    originalPrice: 75,
    appPrice: 20,
    image: floralTutuDressImg,
  },
  {
    id: "hot-pink-tulle-tutu-skirt-3-4",
    categoryId: "clothing-shoes",
    subcategoryId: "bottoms",
    name: "Hot Pink Tulle Tutu Skirt (Size 3-4)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 15,
    image: hotPinkTutuSkirtImg,
  },
  {
    id: "dig-dump-roll-book",
    categoryId: "books-learning",
    subcategoryId: "childrens-books",
    name: "Dig, Dump, Roll",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 5,
    image: digDumpRollImg,
  },
  {
    id: "land-of-the-dinosaurs-book",
    categoryId: "books-learning",
    subcategoryId: "childrens-books",
    name: "Land Of The Dinosaurs (Factivity)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 4,
    image: landOfDinosaursImg,
  },
  {
    id: "bluey-hammerbarn-book",
    categoryId: "books-learning",
    subcategoryId: "childrens-books",
    name: "Bluey - Hammerbarn",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 8,
    image: blueyHammerbarnImg,
  },
  {
    id: "spot-visits-grandparents-book",
    categoryId: "books-learning",
    subcategoryId: "childrens-books",
    name: "Spot Visits His Grandparents (Lift-the-Flap)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 5,
    image: spotGrandparentsImg,
  },
  {
    id: "thelma-the-unicorn-book",
    categoryId: "books-learning",
    subcategoryId: "childrens-books",
    name: "Thelma the Unicorn",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 2,
    image: thelmaUnicornImg,
  },
  {
    id: "baby-sensory-books",
    categoryId: "books-learning",
    subcategoryId: "childrens-books",
    name: "Baby Sensory Books (Where's Elmo? + Dolphin)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 2,
    image: babySensoryBooksImg,
  },
  {
    id: "wind-up-busy-car-book",
    categoryId: "books-learning",
    subcategoryId: "childrens-books",
    name: "Usborne Wind-Up Busy Car Book",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 10,
    image: windUpBusyCarImg,
  },
  {
    id: "pure-western-hat",
    categoryId: "other",
    subcategoryId: "other-items",
    name: "Pure Western Hat",
    condition: "Good Condition",
    originalPrice: 100,
    appPrice: 30,
    image: pureWesternHatImg,
  },
  {
    id: "boys-shorts-bundle-size-12",
    categoryId: "clothing-shoes",
    subcategoryId: "bottoms",
    name: "Boys Shorts Bundle (Size 12)",
    condition: "Good Condition",
    originalPrice: 30,
    appPrice: 15,
    image: boysShortsBundle12Img,
  },
  {
    id: "ergopouch-sleep-suit-00-2",
    categoryId: "clothing-shoes",
    subcategoryId: "sleepwear",
    name: "Ergopouch Sleep Suit (Size 00-2)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 5,
    image: ergopouchSleepSuitImg,
  },
  {
    id: "boys-suit-size-10",
    categoryId: "clothing-shoes",
    subcategoryId: "outerwear",
    name: "Boys Suit (Size 10)",
    condition: "Good Condition",
    originalPrice: 100,
    appPrice: 40,
    image: boysSuitSize10Img,
  },
  {
    id: "cotton-on-kids-pink-dress-2t",
    categoryId: "clothing-shoes",
    subcategoryId: "dresses",
    name: "Cotton On Kids Pink Dress (Size 2)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 5,
    image: cottonOnKinksPinkDress2tImg,
  },
  {
    id: "bonds-summer-zippy-2t",
    categoryId: "clothing-shoes",
    subcategoryId: "sleepwear",
    name: "Bonds Summer Zippy (Size 2)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 5,
    image: bondsSummerZippy2tImg,
  },
  {
    id: "oodie-grey-small",
    categoryId: "clothing-shoes",
    subcategoryId: "outerwear",
    name: "Oodie (Size Small)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 20,
    image: oodieGreySmallImg,
  },
  {
    id: "girls-headbands-bundle-4x",
    categoryId: "clothing-shoes",
    subcategoryId: "accessories",
    name: "Girls Headbands Bundle (4x)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 4,
    image: girlsHeadbandsBundleImg,
  },
  {
    id: "kmart-pink-puffer-vest-2t",
    categoryId: "clothing-shoes",
    subcategoryId: "outerwear",
    name: "Kmart Kids Pink Puffer Vest (Size 2)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 5,
    image: kmartPinkPufferVest2tImg,
  },
  {
    id: "hooded-towel-newborn",
    categoryId: "feeding-bathing",
    subcategoryId: "accessories",
    name: "Baby Hooded Towel (Newborn)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 5,
    image: hoodedTowelNewbornImg,
  },
  {
    id: "hm-unicorn-party-dress-size-6",
    categoryId: "clothing-shoes",
    subcategoryId: "dresses",
    name: "H&M Unicorn Girls Party Dress (Size 6)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 4,
    image: hmUnicornPartyDressImg,
  },
  {
    id: "rainbow-tutu-skirt-size-6",
    categoryId: "clothing-shoes",
    subcategoryId: "bottoms",
    name: "Rainbow Tutu Skirt (Size 6)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 3,
    image: rainbowTutuSkirtSize6Img,
  },
  {
    id: "love-to-dream-sleeping-bag-0-3m",
    categoryId: "clothing-shoes",
    subcategoryId: "sleepwear",
    name: "Love To Dream Sleeping Bag (0-3 Months)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 10,
    image: loveToDreamSleepingBagImg,
  },
  {
    id: "shein-pink-checkered-jeans-3t",
    categoryId: "clothing-shoes",
    subcategoryId: "bottoms",
    name: "Shein Pink Checkered Jeans (Size 3)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 10,
    image: sheinPinkCheckeredJeansImg,
  },
  {
    id: "versace-top-size-10-boy",
    categoryId: "clothing-shoes",
    subcategoryId: "tops",
    name: "Versace Top (Size 10)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 10,
    image: versaceTopSize10Img,
  },
  {
    id: "cotton-on-kids-rainbow-dress-3t",
    categoryId: "clothing-shoes",
    subcategoryId: "dresses",
    name: "Cotton On Kids Dusty Pink Rainbow Tulle Dress (Size 3)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 10,
    image: cottonOnKidsRainbowDressImg,
  },
  {
    id: "grey-long-sleeve-top-2-3",
    categoryId: "clothing-shoes",
    subcategoryId: "tops",
    name: "Grey Long Sleeve Waffle Top (Size 2-3)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 5,
    image: greyLongSleeveTop23Img,
  },
  {
    id: "skeleton-skull-leggings-3t",
    categoryId: "clothing-shoes",
    subcategoryId: "bottoms",
    name: "Cotton On Kids Skeleton Skull Leggings (Size 3)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 7,
    image: skeletonLeggings3tImg,
  },
  {
    id: "rainbow-leggings-3t",
    categoryId: "clothing-shoes",
    subcategoryId: "bottoms",
    name: "Rainbow Striped Leggings (Size 3)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 7,
    image: rainbowLeggings3tImg,
  },
  {
    id: "cotton-on-kids-long-sleeve-dress-3t",
    categoryId: "clothing-shoes",
    subcategoryId: "dresses",
    name: "Cotton On Kids Long Sleeve Floral Dress (Size 3)",
    condition: "Good Condition",
    originalPrice: 0,
    appPrice: 8,
    image: cottonOnKidsLongSleeveDressImg,
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
