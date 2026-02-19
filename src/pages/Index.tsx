// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Shield, Truck, BadgePercent, RotateCcw } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import HeroSection from "@/components/HeroSection";
// import CategoryCard from "@/components/CategoryCard";
// import ProductCard from "@/components/ProductCard";
// import { categories } from "@/data/categories";
// import { products } from "@/data/products";

// const featuredProducts = products
//   .filter((p) => p.isNew || p.isFeatured)
//   .slice(0, 8);

// const trustFeatures = [
//   {
//     icon: Shield,
//     title: "Quality Assured",
//     description: "All products meet international safety standards",
//   },
//   {
//     icon: Truck,
//     title: "UAE-Wide Delivery",
//     description: "Fast delivery across all Emirates",
//   },
//   {
//     icon: BadgePercent,
//     title: "Best Prices",
//     description: "Competitive prices with regular offers",
//   },
//   {
//     icon: RotateCcw,
//     title: "Easy Returns",
//     description: "14-day hassle-free return policy",
//   },
// ];

// const Index = () => {
//   return (
//     <>
//       {/* Hero */}
//       <HeroSection />

//       {/* Categories */}
//       <section className="py-16 md:py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-10 text-center"
//           >
//             <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
//               Shop by Category
//             </h2>
//             <p className="mt-2 text-muted-foreground">
//               Find the perfect toy for every child
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//             {categories.map((category, index) => (
//               <CategoryCard
//                 key={category.id}
//                 category={category}
//                 index={index}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured / New Arrivals */}
//       <section className="bg-muted/50 py-16 md:py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row"
//           >
//             <div>
//               <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
//                 New Arrivals ✨
//               </h2>
//               <p className="mt-2 text-muted-foreground">
//                 Check out our latest products
//               </p>
//             </div>
//             <Button asChild variant="outline">
//               <Link to="/products">View All Products</Link>
//             </Button>
//           </motion.div>

//           <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {featuredProducts.map((product, index) => (
//               <ProductCard key={product.id} product={product} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 md:py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-10 text-center"
//           >
//             <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
//               Why Choose Characters Zone?
//             </h2>
//             <p className="mt-2 text-muted-foreground">
//               Trusted by families across the UAE
//             </p>
//           </motion.div>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {trustFeatures.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 className="rounded-xl border bg-card p-6 text-center transition-all duration-300 hover:toy-shadow"
//               >
//                 <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
//                   <feature.icon className="h-7 w-7 text-primary" />
//                 </div>
//                 <h3 className="font-display text-lg font-semibold text-foreground">
//                   {feature.title}
//                 </h3>
//                 <p className="mt-1 text-sm text-muted-foreground">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Index;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- HERO CAROUSEL DATA ---
const HERO_SLIDES = [
  {
    id: 1,
    title: "Where Every Toy Tells a Story",
    subtitle: "Discover the finest collection of toys from around the world.",
    cta: "Explore Collection",
    link: "/products",
    // Using a warm gradient placeholder to match your uploaded image style
    image: "https://placehold.co/1920x800/FF9800/FFFFFF?text=World+of+Toys",
    theme: "bg-orange-500",
  },
  {
    id: 2,
    title: "MEGA CLEARANCE SALE",
    subtitle: "FLAT 70% OFF ON SELECTED ITEMS. HURRY UP!",
    cta: "SHOP SALE NOW",
    link: "/products?sort=sale",
    image: "https://placehold.co/1920x800/D32F2F/FFFFFF?text=70%25+OFF+SALE",
    theme: "bg-red-600",
  },
  {
    id: 3,
    title: "SUMMER SPLASH FUN",
    subtitle: "Pools, Water Guns & Outdoor Gear for the Heat.",
    cta: "VIEW OUTDOOR",
    link: "/products?category=outdoor",
    image: "https://placehold.co/1920x800/0288D1/FFFFFF?text=Summer+Fun",
    theme: "bg-blue-500",
  },
];

// --- MOCK DATA ---
const shopByAge = [
  {
    label: "0-18 MONTH",
    value: "0-18m",
    img: "../products/shopByAge/baby.jpeg",
  },
  {
    label: "18-36 MONTH",
    value: "18-36m",
    img: "../products/shopByAge/2yoChild.jpeg",
  },
  {
    label: "3-5 YEARS",
    value: "3-5y",
    img: "../products/shopByAge/5yo.jpg",
  },
  {
    label: "6-8 YEARS",
    value: "6-8y",
    img: "../products/shopByAge/8yo.jpg",
  },
  {
    label: "9-14 YEARS",
    value: "9-14y",
    img: "../products/shopByAge/12yo.jpg",
  },
];

const bestBuys = [
  {
    label: "Best Buys",
    discount: "up to 70%",
    img: "",
    type: "main",
    link: "/products?sort=sale",
  },
  {
    label: "Scooters",
    discount: "up to 20%",
    img: "../products/scooter.jpeg",
    link: "/products?category=scooters",
  },
  {
    label: "Build and Create",
    discount: "up to 40%",
    img: "../products/build&Create.jpeg",
    link: "/products?category=building",
  },
  {
    label: "RC and Diecast",
    discount: "up to 30%",
    img: "../products/rcCars.jpeg",
    link: "/products?category=rc",
  },
  {
    label: "Rideons",
    discount: "up to 70%",
    img: "../products/rideOns.jpeg",
    link: "/products?category=rideons",
  },
  {
    label: "Strollers",
    discount: "up to 50%",
    img: "../products/strollers.jpeg",
    link: "/products?category=strollers",
  },
  {
    label: "Bicycles",
    discount: "up to 30%",
    img: "../products/bicycle.jpeg",
    link: "/products?category=bicycles",
  },
];

const brands = [
  { name: "LEGO", logo: "../products/logos/legoLogo.png" },
  {
    name: "Disney",
    logo: "../products/logos/Disney.jpeg",
  },
  { name: "NERF", logo: "../products/logos/nerf.png" },
  {
    name: "Bestway",
    logo: "../products/logos/bestways.jpeg",
  },
  {
    name: "MARVEL",
    logo: "../products/logos/marvel.jpeg",
  },
  {
    name: "HotWheels",
    logo: "../products/logos/hw.jpeg",
  },
  {
    name: "Barbie",
    logo: "../products/logos/barbie.jpeg",
  },
  {
    name: "Play-Doh",
    logo: "../products/logos/playdoh.jpeg",
  },
  { name: "LOL", logo: "../products/logos/lol.jpeg" },
];

const newArrivals = [
  {
    id: 1,
    title: "Gabby's Dollhouse Cakey Cat",
    price: 29.0,
    img: "../products/gabbyCat.jpeg",
  },
  {
    id: 2,
    title: "Yima Toys Dancing Challenge",
    price: 149.0,
    img: "../products/yimaToys.jpeg",
  },
  {
    id: 3,
    title: "Wood Piano 37 Keys",
    price: 349.0,
    img: "../products/woodenPiano.jpeg",
  },
  {
    id: 4,
    title: "VTECH Swipe Laptop",
    price: 199.0,
    img: "../products/vtechLaptop.jpeg",
  },
  {
    id: 5,
    title: "VTECH Splashing Fun Otter",
    price: 199.0,
    img: "../products/vtechSplashing.jpeg",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play logic for Hero Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );

  return (
    <div className="bg-white pb-20">
      {/* SECTION 1: DYNAMIC HERO CAROUSEL (Replaces static HeroSection) */}
      <section className="relative h-[500px] w-full overflow-hidden bg-gray-100 group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image */}
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              className="w-full h-full object-cover"
            />

            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/30 bg-gradient-to-r from-black/60 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-center text-white">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="max-w-2xl space-y-6"
              >
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none drop-shadow-lg">
                  {HERO_SLIDES[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl font-medium drop-shadow-md opacity-90">
                  {HERO_SLIDES[currentSlide].subtitle}
                </p>
                <Button
                  asChild
                  size="lg"
                  className={`${HERO_SLIDES[currentSlide].theme} hover:brightness-110 text-white font-bold rounded-full px-8 py-6 text-lg shadow-xl border-2 border-white/20`}
                >
                  <Link to={HERO_SLIDES[currentSlide].link}>
                    {HERO_SLIDES[currentSlide].cta}
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows (Hidden on mobile, show on hover) */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all md:opacity-0 md:group-hover:opacity-100"
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* SECTION 2: NEW ARRIVALS */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold tracking-tight uppercase">
            New Arrivals
          </h2>
          <Link
            to="/products?sort=latest"
            className="text-red-500 text-sm font-semibold hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {newArrivals.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group relative border rounded-xl p-4 hover:shadow-xl transition-all bg-white"
            >
              <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                NEW
              </span>
              <div className="aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center p-2">
                <img
                  src={product.img}
                  alt={product.title}
                  className="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-red-600">
                  Đ{product.price.toFixed(2)}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-2 leading-tight h-10 font-medium">
                  {product.title}
                </p>
                <div className="pt-2 flex gap-2">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full text-xs pointer-events-none">
                    ADD TO CART
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-red-100 text-red-400 hover:text-red-500 hover:bg-red-50 shrink-0"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: BEST BUYS / YELLOW CARDS */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {bestBuys.map((item, idx) => (
            <Link
              to={item.link}
              key={idx}
              className={`block relative ${item.type === "main" ? "col-span-1 row-span-1" : ""}`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`h-full w-full rounded-2xl p-4 flex flex-col items-center justify-between text-center relative overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer ${
                  item.type === "main"
                    ? "bg-yellow-400 flex justify-center items-center"
                    : "bg-yellow-300"
                }`}
              >
                {item.type === "main" ? (
                  <div className="bg-black text-white p-6 transform -rotate-2 shadow-xl relative z-10 w-full">
                    <h3 className="text-2xl font-black uppercase leading-none">
                      Best
                      <br />
                      Buys
                    </h3>
                    <span className="text-yellow-400 font-bold text-sm">
                      up to {item.discount}
                    </span>
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
                  </div>
                ) : (
                  <>
                    <div className="bg-white/90 rounded-full px-3 py-1 text-xs font-bold mb-2 shadow-sm">
                      {item.discount}
                    </div>
                    <img
                      src={item.img}
                      alt={item.label}
                      className="h-24 w-auto object-contain my-2 mix-blend-multiply"
                    />
                    <span className="font-bold text-sm text-gray-900">
                      {item.label}
                    </span>
                  </>
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 4: PROMOTIONAL BANNERS */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "SUMMER PICKS",
              img: "https://placehold.co/600x400/4FC3F7/FFFFFF?text=Summer+Fun",
              link: "/products?collection=summer",
            },
            {
              title: "DISNEY STITCH TOYS",
              img: "https://placehold.co/600x400/7E57C2/FFFFFF?text=Stitch",
              link: "/products?brand=disney",
            },
            {
              title: "OUTDOOR PLAY",
              img: "https://placehold.co/600x400/66BB6A/FFFFFF?text=Outdoor",
              link: "/products?category=outdoor",
            },
          ].map((banner, i) => (
            <Link
              to={banner.link}
              key={i}
              className="rounded-2xl overflow-hidden h-48 md:h-64 relative group cursor-pointer shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={banner.img}
                alt={banner.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white font-bold uppercase tracking-wide text-xl md:text-2xl drop-shadow-lg">
                  {banner.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 5: GENDER SHOP */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/products?gender=boy"
            className="rounded-3xl bg-gradient-to-r from-blue-400 to-blue-300 h-64 relative overflow-hidden flex items-center p-8 group cursor-pointer shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="bg-white/20 absolute inset-0 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            <div className="relative z-10 w-1/2">
              <h3 className="text-4xl font-black text-white uppercase italic drop-shadow-md mb-2 leading-none">
                Toys For
                <br />
                Boys
              </h3>
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full font-bold mt-4 pointer-events-none"
              >
                Shop Now
              </Button>
            </div>
            <img
              src="https://placehold.co/300x300/png?text=Boy+Toy"
              alt="Toys for Boys"
              className="absolute right-0 bottom-0 h-[110%] object-contain object-bottom transform group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
          <Link
            to="/products?gender=girl"
            className="rounded-3xl bg-gradient-to-r from-pink-400 to-pink-300 h-64 relative overflow-hidden flex items-center p-8 group cursor-pointer shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="bg-white/20 absolute inset-0 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            <div className="relative z-10 w-1/2">
              <h3 className="text-4xl font-black text-white uppercase italic drop-shadow-md mb-2 leading-none">
                Toys For
                <br />
                Girls
              </h3>
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full font-bold mt-4 pointer-events-none"
              >
                Shop Now
              </Button>
            </div>
            <img
              src="https://placehold.co/300x300/png?text=Girl+Toy"
              alt="Toys for Girls"
              className="absolute right-0 bottom-0 h-[110%] object-contain object-bottom transform group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        </div>
      </section>

      {/* SECTION 6: SHOP BY BRANDS */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold uppercase text-blue-900">
              Shop by Brands
            </h2>
            <Link
              to="/products"
              className="text-red-500 text-sm font-semibold hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {brands.map((brand, i) => (
              <Link
                to={`/products?brand=${brand.name}`}
                key={i}
                className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white flex items-center justify-center p-4 shadow-sm hover:shadow-lg transition-all cursor-pointer border border-blue-100 hover:border-blue-300"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: SHOP BY AGE */}
      <section className="container mx-auto px-4 py-16 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-50/50 to-transparent -z-10"></div>
        <h2 className="text-2xl font-bold uppercase mb-12 text-left">
          Shop By Age
        </h2>
        <div className="flex flex-wrap justify-center md:justify-between gap-8">
          {shopByAge.map((age, i) => (
            <Link
              to={`/products?age=${age.value}`}
              key={i}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-b from-yellow-100 to-orange-50 p-3 overflow-hidden shadow-md group-hover:shadow-2xl transition-all border-4 border-white group-hover:border-yellow-300">
                <img
                  src={age.img}
                  alt={age.label}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-bold text-gray-800 group-hover:text-red-500 transition-colors text-lg">
                {age.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 8: SHOP BY CATEGORY (Circular) */}
      <section className="container mx-auto px-4 py-12 pb-24">
        <h2 className="text-2xl font-bold uppercase mb-8">
          Shop By Categories
        </h2>
        <div className="flex overflow-x-auto pb-6 gap-6 no-scrollbar snap-x snap-mandatory">
          {[
            "Action Figures",
            "Dolls",
            "Arts & Crafts",
            "Vehicles",
            "Games & Puzzles",
            "Outdoor",
            "Plush",
          ].map((cat, i) => (
            <Link
              to={`/products?category=${cat.toLowerCase()}`}
              key={i}
              className="min-w-[120px] flex flex-col items-center snap-start group cursor-pointer"
            >
              <div className="w-28 h-28 bg-red-50 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-all border-2 border-transparent group-hover:border-red-200">
                <ShoppingCart className="h-10 w-10 text-red-400 group-hover:text-red-500 transition-colors" />
              </div>
              <span className="text-xs font-bold uppercase text-center group-hover:text-red-500 transition-colors">
                {cat}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Text */}
      <div className="text-center py-12 max-w-4xl mx-auto px-4 border-t">
        <h3 className="text-xl font-black uppercase mb-4 text-blue-900">
          THE MERRYLAND OF EXCITING PLAYTIMES
        </h3>
        <p className="text-gray-500 leading-relaxed">
          For over three decades, Colorland Toys has been a trusted name for
          families across the UAE. From our humble beginnings to becoming a
          leading toy retailer, our mission has always been to bring joy,
          imagination, and learning to every child. We offer a curated selection
          of the latest toys, games, and educational products from
          world-renowned brands.
        </p>
      </div>
    </div>
  );
};

export default Index;
