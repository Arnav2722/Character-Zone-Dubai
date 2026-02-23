/**
 * ========================================
 * 🎁 PRODUCT DATA - Characters Zone UAE
 * ========================================
 *
 * HOW TO ADD A NEW PRODUCT:
 * 1. Add your product image to the  public/products/  folder
 * 2. Copy the TEMPLATE below
 * 3. Paste it at the TOP of the products array (newest first)
 * 4. Fill in all the fields
 * 5. Save this file — done!
 *
 * TEMPLATE (copy everything between the braces):
 * {
 *   id: "unique-id",
 *   name: "Product Name",
 *   category: "category-slug",
 *   price: 99,
 *   image: "/products/your-image.jpg",
 *   description: "A short description of the product",
 *   ageRange: "3-6 years",
 *   isNew: true,
 *   isFeatured: false,
 *   dateAdded: "2026-02-10",
 * },
 *
 * CATEGORY SLUGS (use one of these):
 *   action-figures | educational-stem | outdoor-sports
 *   building-construction | dolls-playsets | board-games-puzzles
 *   remote-control | baby-toddler | arts-crafts | vehicles
 *
 * ========================================
 */

export interface Product {
  // id: string;
  // name: string;
  // category: string;
  // price: number;
  // image: string;
  // description: string;
  // ageRange: string;
  // isNew: boolean;
  // isFeatured: boolean;
  // dateAdded: string;
  id: string;
  name: string;
  category: string;
  brand: string; // Add this
  gender: "Boys" | "Girls" | "Unisex"; // Add this
  price: number;
  image: string;
  description: string;
  ageRange: string;
  isNew: boolean;
  isFeatured: boolean;
  dateAdded: string;
}

export const PRODUCTS: Product[] = [
  // ─── NEW ARRIVALS (add new products here) ───────────────────
  {
    id: "p001",
    name: "Rainbow Stacking Rings",
    category: "baby-toddler",
    brand:"Hotwheels",
    gender:"Unisex",
    price: 45,
    image: "/products/stacking-rings.jpg",
    description: "Colorful stacking rings that help develop motor skills and color recognition.",
    ageRange: "6-24 months",
    isNew: true,
    isFeatured: true,
    dateAdded: "2026-02-08",
  },
  {
    id: "p002",
    name: "Superhero Action Figure Set",
    category: "action-figures",
    brand:"Hotwheels",
    gender:"Unisex",
    price: 89,
    image: "/products/action-figure.jpg",
    description: "Poseable superhero figure with cape and accessories. Spark imagination!",
    ageRange: "4-10 years",
    isNew: true,
    isFeatured: true,
    dateAdded: "2026-02-07",
  },
  {
    id: "p003",
    name: "Speed Racer RC Car",
    category: "remote-control",
    brand:"Hotwheels",
    gender:"Unisex",
    price: 149,
    image: "/products/rc-car.jpg",
    description: "High-speed remote control car with rechargeable battery. Races up to 15 km/h!",
    ageRange: "6-14 years",
    isNew: true,
    isFeatured: true,
    dateAdded: "2026-02-05",
  },
  {
    id: "p004",
    name: "Creative Building Blocks 500pc",
    category: "building-construction",
    brand:"Hotwheels",
    gender:"Unisex",
    price: 129,
    image: "/products/building-blocks.jpg",
    description: "500-piece building block set with multiple colors and shapes. Hours of fun!",
    ageRange: "3-12 years",
    isNew: true,
    isFeatured: true,
    dateAdded: "2026-02-03",
  },
  {
    id: "p005",
    name: "Wooden Jigsaw Puzzle Set",
    category: "board-games-puzzles",
    brand:"Hotwheels",
    gender:"Unisex",
    price: 59,
    image: "/products/puzzle.jpg",
    description: "Educational wooden puzzle set with vibrant colors. Improves problem-solving skills.",
    ageRange: "3-8 years",
    isNew: true,
    isFeatured: false,
    dateAdded: "2026-02-01",
  },
  {
    id: "p006",
    name: "Watercolor Art Kit Deluxe",
    category: "arts-crafts",
    brand:"Hotwheels",
    gender:"Unisex",
    price: 79,
    image: "/products/art-supplies.jpg",
    description: "Complete art kit with watercolors, brushes, pencils, and sketch pad.",
    ageRange: "5-14 years",
    isNew: true,
    isFeatured: true,
    dateAdded: "2026-01-28",
  },
  // ─── EXISTING PRODUCTS ──────────────────────────────────────
  {
    id: "p007",
    name: "Outdoor Adventure Kit",
    category: "outdoor-sports",
    brand:"Hotwheels",
    gender:"Unisex",
    price: 119,
    image: "/products/action-figure.jpg",
    description: "Complete outdoor exploration kit with binoculars, compass, and bug catcher.",
    ageRange: "5-12 years",
    isNew: false,
    isFeatured: false,
    dateAdded: "2026-01-15",
  },
  {
    id: "p008",
    name: "STEM Robot Building Kit",
    category: "educational-stem",
    brand:"Hotwheels",
    gender:"Unisex",
    price: 199,
    image: "/products/building-blocks.jpg",
    description: "Build and program your own robot! Includes 150+ parts and coding guide.",
    ageRange: "8-14 years",
    isNew: false,
    isFeatured: true,
    dateAdded: "2026-01-10",
  },
  {
    id: "p009",
    name: "Princess Castle Playset",
    category: "dolls-playsets",
    brand:"Hotwheels",
    gender:"Unisex",
    price: 159,
    image: "../products/stacking-rings.jpg",
    description: "Magical castle playset with furniture, figures, and light-up features.",
    ageRange: "3-8 years",
    isNew: false,
    isFeatured: false,
    dateAdded: "2026-01-05",
  },
  {
    id: "p010",
    name: "Wooden Train Set",
    category: "vehicles",
    brand:"Hotwheels",
    gender:"Unisex",
    price: 99,
    image: "/products/puzzle.jpg",
    description: "Classic wooden train set with tracks, bridges, and a station.",
    ageRange: "3-7 years",
    isNew: false,
    isFeatured: false,
    dateAdded: "2025-12-20",
  },
  {
    id: "p011",
    name: "Baby Musical Play Gym",
    category: "baby-toddler",
    brand:"Hotwheels",
    gender:"Unisex",
    price: 135,
    image: "/products/stacking-rings.jpg",
    description: "Soft play gym with hanging toys, music, and tummy time mat.",
    ageRange: "0-12 months",
    isNew: false,
    isFeatured: false,
    dateAdded: "2025-12-15",
  },
  {
    id: "p012",
    name: "Family Board Game Collection",
    category: "board-games-puzzles",
    brand:"Hotwheels",
    gender:"Unisex",
    price: 89,
    image: "/products/puzzle.jpg",
    description: "Collection of 5 classic board games for the whole family to enjoy.",
    ageRange: "6+ years",
    isNew: false,
    isFeatured: false,
    dateAdded: "2025-12-10",
  },
];
