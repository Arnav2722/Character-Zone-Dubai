// import { useState, useMemo } from "react";
// import { useSearchParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import ProductCard from "@/components/ProductCard";
// import { categories } from "@/data/categories";
// import { products } from "@/data/products";

// const Products = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const selectedCategory = searchParams.get("category") || "all";
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredProducts = useMemo(() => {
//     return products.filter((product) => {
//       const matchesCategory =
//         selectedCategory === "all" || product.category === selectedCategory;
//       const matchesSearch =
//         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesCategory && matchesSearch;
//     });
//   }, [selectedCategory, searchQuery]);

//   const handleCategoryChange = (slug: string) => {
//     if (slug === "all") {
//       searchParams.delete("category");
//     } else {
//       searchParams.set("category", slug);
//     }
//     setSearchParams(searchParams);
//   };

//   return (
//     <section className="py-10 md:py-16">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8"
//         >
//           <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
//             Our Products
//           </h1>
//           <p className="mt-2 text-muted-foreground">
//             Browse our complete collection of toys
//           </p>
//         </motion.div>

//         {/* Search */}
//         <div className="mb-6 flex flex-col gap-4 sm:flex-row">
//           <div className="relative flex-1">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//             <Input
//               type="text"
//               placeholder="Search products..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-10"
//             />
//           </div>
//         </div>

//         {/* Category Filters */}
//         <div className="mb-8 flex flex-wrap gap-2">
//           <button
//             onClick={() => handleCategoryChange("all")}
//             className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
//               selectedCategory === "all"
//                 ? "toy-gradient text-primary-foreground shadow-md"
//                 : "bg-muted text-muted-foreground hover:bg-muted/80"
//             }`}
//           >
//             All Products
//           </button>
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => handleCategoryChange(category.slug)}
//               className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
//                 selectedCategory === category.slug
//                   ? "toy-gradient text-primary-foreground shadow-md"
//                   : "bg-muted text-muted-foreground hover:bg-muted/80"
//               }`}
//             >
//               {category.icon} {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Results Count */}
//         <p className="mb-6 text-sm text-muted-foreground">
//           Showing {filteredProducts.length} product
//           {filteredProducts.length !== 1 ? "s" : ""}
//         </p>

//         {/* Products Grid */}
//         {filteredProducts.length > 0 ? (
//           <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {filteredProducts.map((product, index) => (
//               <ProductCard
//                 key={product.id}
//                 product={product}
//                 index={index}
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="py-20 text-center">
//             <span className="mb-4 block text-5xl">🔍</span>
//             <h3 className="font-display text-xl font-semibold text-foreground">
//               No products found
//             </h3>
//             <p className="mt-2 text-muted-foreground">
//               Try adjusting your search or filter
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Products;

import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Heart,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

// --- MOCK DATA GENERATION (150 Products) ---
const BRANDS = [
  "LEGO",
  "Disney",
  "Barbie",
  "Hot Wheels",
  "Nerf",
  "Fisher-Price",
];
const CATEGORIES = [
  "Action Figures",
  "Dolls & Playsets",
  "Arts & Crafts",
  "Building Sets",
  "Vehicles",
];

const GENERATED_PRODUCTS = Array.from({ length: 144 }).map((_, i) => {
  const brand = BRANDS[i % BRANDS.length];
  const category = CATEGORIES[i % CATEGORIES.length];
  const price = Math.floor(Math.random() * 450) + 50; // Random price 50 - 500

  return {
    id: i + 1,
    title: `${brand} ${category} Super Set ${i + 1}`,
    price: price,
    originalPrice: Math.random() > 0.7 ? price + 50 : null, // 30% chance of being on sale
    img: `https://placehold.co/300x300/png?text=${brand}+${i + 1}`,
    isNew: i < 10, // First 10 are "New"
    brand: brand,
    category: category,
    rating: (Math.random() * 2 + 3).toFixed(1), // 3.0 to 5.0
    reviews: Math.floor(Math.random() * 200),
  };
});

const ITEMS_PER_PAGE = 12;

const Products = () => {
  // --- STATE MANAGEMENT ---
  const [searchParams, setSearchParams] = useSearchParams();

  // Filters
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 500]);

  // Sorting & Pagination
  const [sortBy, setSortBy] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // --- INITIALIZATION FROM URL (Optional but good UX) ---
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const brandParam = searchParams.get("brand");
    if (categoryParam) setSelectedCategories([categoryParam]);
    if (brandParam) setSelectedBrands([brandParam]);
  }, []);

  // --- FILTERING LOGIC ---
  const filteredProducts = useMemo(() => {
    return GENERATED_PRODUCTS.filter((product) => {
      // 1. Price Filter
      const inPriceRange =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      // 2. Brand Filter
      const inBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);

      // 3. Category Filter
      const inCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      return inPriceRange && inBrand && inCategory;
    });
  }, [selectedBrands, selectedCategories, priceRange]);

  // --- SORTING LOGIC ---
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "latest":
        return sorted.sort((a, b) =>
          b.isNew === a.isNew ? 0 : b.isNew ? 1 : -1,
        );
      default: // popularity (using random reviews as proxy)
        return sorted.sort((a, b) => b.reviews - a.reviews);
    }
  }, [filteredProducts, sortBy]);

  // --- PAGINATION LOGIC ---
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  // Reset to page 1 if filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBrands, selectedCategories, priceRange, sortBy]);

  // --- HANDLERS ---
  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setPriceRange([0, 500]);
    setCurrentPage(1);
  };

  // Helper to generate pagination numbers (1, 2, ..., 12)
  const getPageNumbers = () => {
    const pages = [];
    // Always show 1
    pages.push(1);

    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage <= 3) {
      endPage = Math.min(totalPages - 1, 4);
    }
    if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - 3);
    }

    if (startPage > 2) pages.push("...");

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) pages.push("...");

    // Always show last page if exists
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Page Banner */}
      <div className="bg-yellow-400 py-12 text-center relative overflow-hidden mb-8">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x400/FFC107/FFFFFF?text=Pattern')] opacity-20 bg-cover bg-center"></div>
        <h1 className="text-4xl font-black uppercase relative z-10 text-blue-900">
          Shop All Toys
        </h1>
        <p className="relative z-10 text-blue-900 font-medium mt-2">
          {filteredProducts.length} products found
        </p>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 relative">
        {/* MOBILE FILTER TOGGLE */}
        <div className="md:hidden mb-4">
          <Button
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="w-full flex justify-between"
          >
            <span className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </span>
            <Badge variant="secondary" className="bg-white text-black">
              {selectedBrands.length + selectedCategories.length}
            </Badge>
          </Button>
        </div>

        {/* SIDEBAR FILTERS */}
        <aside
          className={`
            w-full md:w-64 shrink-0 space-y-8 bg-white z-20
            ${isMobileFiltersOpen ? "block fixed inset-0 p-6 overflow-y-auto" : "hidden md:block"}
         `}
        >
          {isMobileFiltersOpen && (
            <div className="flex justify-between items-center mb-6 md:hidden">
              <h2 className="text-xl font-bold">Filters</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileFiltersOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          )}

          {/* Active Filters Summary */}
          {(selectedBrands.length > 0 ||
            selectedCategories.length > 0 ||
            priceRange[0] > 0 ||
            priceRange[1] < 500) && (
            <div className="bg-gray-50 p-4 rounded-xl border">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-sm uppercase">Active Filters</h3>
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-red-500 font-bold hover:underline"
                >
                  Clear All
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedBrands.map((b) => (
                  <Badge
                    key={b}
                    variant="secondary"
                    className="text-xs flex gap-1 items-center cursor-pointer"
                    onClick={() => toggleBrand(b)}
                  >
                    {b} <X className="h-3 w-3" />
                  </Badge>
                ))}
                {selectedCategories.map((c) => (
                  <Badge
                    key={c}
                    variant="secondary"
                    className="text-xs flex gap-1 items-center cursor-pointer"
                    onClick={() => toggleCategory(c)}
                  >
                    {c} <X className="h-3 w-3" />
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Price Filter */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase flex justify-between">
              Price
              <span className="text-sm text-blue-600">
                Đ{priceRange[0]} - Đ{priceRange[1]}
              </span>
            </h3>
            <Slider
              defaultValue={[0, 500]}
              max={500}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="my-6"
            />
          </div>

          {/* Categories Filter */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Categories</h3>
            <div className="space-y-3">
              {CATEGORIES.map((cat) => (
                <div key={cat} className="flex items-center space-x-2">
                  <Checkbox
                    id={`cat-${cat}`}
                    checked={selectedCategories.includes(cat)}
                    onCheckedChange={() => toggleCategory(cat)}
                  />
                  <label
                    htmlFor={`cat-${cat}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {cat}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Brands Filter */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase">Brands</h3>
            <div className="space-y-3">
              {BRANDS.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => toggleBrand(brand)}
                  />
                  <label
                    htmlFor={`brand-${brand}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 pb-4 border-b gap-4">
            <p className="text-gray-500 font-medium text-sm">
              Showing{" "}
              <span className="text-black font-bold">
                {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
                {Math.min(currentPage * ITEMS_PER_PAGE, sortedProducts.length)}
              </span>{" "}
              of {sortedProducts.length} results
            </p>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-sm font-bold text-gray-700 whitespace-nowrap hidden sm:inline">
                Sort by:
              </span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="latest">Newest Arrivals</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* PRODUCT GRID */}
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {currentProducts.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="group relative border border-gray-100 rounded-2xl p-3 md:p-4 hover:shadow-xl transition-all bg-white hover:border-blue-200 flex flex-col h-full"
                >
                  {/* Badge */}
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded z-10 shadow-sm">
                      NEW
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded z-10 shadow-sm">
                      SALE
                    </span>
                  )}

                  {/* Image */}
                  <div className="aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center p-4 relative overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white hover:text-red-500 text-gray-400 opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-center flex-1 flex flex-col justify-end">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                      {product.brand}
                    </p>
                    <h3 className="text-sm text-gray-800 line-clamp-2 font-bold group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>

                    <div className="flex items-center justify-center gap-2 py-1">
                      <span className="font-black text-lg text-red-600">
                        Đ{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through font-medium">
                          Đ{product.originalPrice}
                        </span>
                      )}
                    </div>

                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full text-xs md:text-sm h-9 md:h-10 mt-auto">
                      ADD TO CART
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <h3 className="text-xl font-bold text-gray-400">
                No products match your filters
              </h3>
              <Button
                variant="link"
                onClick={clearAllFilters}
                className="text-blue-600"
              >
                Clear filters to see all products
              </Button>
            </div>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hidden sm:flex"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {getPageNumbers().map((pageNum, idx) =>
                pageNum === "..." ? (
                  <span
                    key={`ellipsis-${idx}`}
                    className="px-2 self-end pb-2 text-gray-400 font-bold"
                  >
                    ...
                  </span>
                ) : (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    className={`
                          w-10 h-10 p-0 rounded-full font-bold border-2
                          ${
                            currentPage === pageNum
                              ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                              : "text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                          }
                        `}
                    onClick={() => setCurrentPage(Number(pageNum))}
                  >
                    {pageNum}
                  </Button>
                ),
              )}

              <Button
                variant="outline"
                size="icon"
                className="rounded-full hidden sm:flex"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;