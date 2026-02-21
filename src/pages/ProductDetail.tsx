// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowLeft, MessageCircle, Tag, Calendar, Users } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { products } from "@/data/products";
// import { categories } from "@/data/categories";
// import ProductCard from "@/components/ProductCard";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";

// const ProductDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const product = products.find((p) => p.id === id);

//   if (!product) {
//     return (
//       <section className="py-20 text-center">
//         <span className="mb-4 block text-5xl">😕</span>
//         <h1 className="font-display text-2xl font-bold text-foreground">
//           Product Not Found
//         </h1>
//         <p className="mt-2 text-muted-foreground">
//           The product you're looking for doesn't exist.
//         </p>
//         <Button asChild className="mt-6" variant="outline">
//           <Link to="/products">
//             <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
//           </Link>
//         </Button>
//       </section>
//     );
//   }

//   const category = categories.find((c) => c.slug === product.category);
//   const relatedProducts = products
//     .filter((p) => p.category === product.category && p.id !== product.id)
//     .slice(0, 4);

//   const whatsappNumber = "971XXXXXXXXX";
//   const whatsappMessage = encodeURIComponent(
//     `Hi ToyHaven! I'm interested in "${product.name}" (AED ${product.price}). Is it available?`
//   );

//   return (
//     <section className="py-8 md:py-12">
//       <div className="container mx-auto px-4">
//         {/* Breadcrumb */}
//         <Breadcrumb className="mb-6">
//           <BreadcrumbList>
//             <BreadcrumbItem>
//               <BreadcrumbLink asChild>
//                 <Link to="/">Home</Link>
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator />
//             <BreadcrumbItem>
//               <BreadcrumbLink asChild>
//                 <Link to="/products">Products</Link>
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//             {category && (
//               <>
//                 <BreadcrumbSeparator />
//                 <BreadcrumbItem>
//                   <BreadcrumbLink asChild>
//                     <Link to={`/products?category=${category.slug}`}>
//                       {category.name}
//                     </Link>
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//               </>
//             )}
//             <BreadcrumbSeparator />
//             <BreadcrumbItem>
//               <BreadcrumbPage>{product.name}</BreadcrumbPage>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </Breadcrumb>

//         {/* Product Detail */}
//         <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="overflow-hidden rounded-2xl bg-muted"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="h-full w-full object-cover"
//             />
//           </motion.div>

//           {/* Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="flex flex-col justify-center"
//           >
//             <div className="flex flex-wrap items-center gap-2">
//               {product.isNew && (
//                 <Badge className="toy-gradient border-0 text-primary-foreground">
//                   NEW
//                 </Badge>
//               )}
//               {product.isFeatured && (
//                 <Badge variant="secondary">⭐ Featured</Badge>
//               )}
//             </div>

//             <h1 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
//               {product.name}
//             </h1>

//             {category && (
//               <Link
//                 to={`/products?category=${category.slug}`}
//                 className="mt-2 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
//               >
//                 <Tag className="h-3.5 w-3.5" />
//                 {category.icon} {category.name}
//               </Link>
//             )}

//             <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
//               {product.description}
//             </p>

//             <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
//               <span className="flex items-center gap-1.5">
//                 <Users className="h-4 w-4 text-primary" />
//                 Age: {product.ageRange}
//               </span>
//               <span className="flex items-center gap-1.5">
//                 <Calendar className="h-4 w-4 text-primary" />
//                 Added: {new Date(product.dateAdded).toLocaleDateString("en-AE")}
//               </span>
//             </div>

//             <div className="mt-6 border-t pt-6">
//               <span className="font-display text-3xl font-bold text-primary">
//                 AED {product.price}
//               </span>
//               <p className="mt-1 text-xs text-muted-foreground">
//                 Prices are inclusive of VAT
//               </p>
//             </div>

//             <div className="mt-6 flex flex-wrap gap-3">
//               <Button asChild size="lg" className="gap-2">
//                 <a
//                   href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <MessageCircle className="h-5 w-5" />
//                   Enquire on WhatsApp
//                 </a>
//               </Button>
//               <Button asChild variant="outline" size="lg">
//                 <Link to="/contact">Contact Us</Link>
//               </Button>
//             </div>
//           </motion.div>
//         </div>

//         {/* Related Products */}
//         {relatedProducts.length > 0 && (
//           <div className="mt-16">
//             <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
//               You May Also Like
//             </h2>
//             <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//               {relatedProducts.map((p, i) => (
//                 <ProductCard key={p.id} product={p} index={i} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProductDetail;

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number | null;
  description: string;
  images: string[];
  isNew: boolean;
  brand: string;
  category: string;
  rating: number;
  reviews: number;
  sku: string;
  age: string;
  stock: number;
}

const getProductById = (id: string): Product | null => {
  const i = parseInt(id) - 1;
  if (isNaN(i) || i < 0) return null;

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

  const brand = BRANDS[i % BRANDS.length];
  const category = CATEGORIES[i % CATEGORIES.length];
  const price = 50 + ((i * 5) % 450);

  return {
    id: i + 1,
    title: `${brand} ${category} Super Set ${i + 1}`,
    price: price,
    originalPrice: i % 3 === 0 ? price + 50 : null,
    description: `Experience the magic of playtime with the ${brand} ${category} Super Set! Designed for children who love to explore and create, this set features high-quality materials and intricate details. Whether building a masterpiece or embarking on an imaginary adventure, this toy promises hours of engaging fun. Perfect for developing fine motor skills and creative thinking.`,
    images: [
      `https://placehold.co/600x600/png?text=${brand}+Main`,
      `https://placehold.co/600x600/png?text=${brand}+Detail+1`,
      `https://placehold.co/600x600/png?text=${brand}+Detail+2`,
      `https://placehold.co/600x600/png?text=${brand}+Box`,
    ],
    isNew: i < 10,
    brand: brand,
    category: category,
    rating: 4.5,
    reviews: 120 + i,
    sku: `${brand.toUpperCase().substring(0, 3)}-${1000 + i}`,
    age: "3+",
    stock: i % 5 === 0 ? 0 : 10,
  };
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  // 3. FIX STATE TYPE
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (id) {
      const data = getProductById(id);
      setProduct(data);
      if (data) setMainImage(data.images[0]);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
        <span className="text-6xl mb-4">😕</span>
        <h1 className="text-2xl font-bold text-gray-900">Product Not Found</h1>
        <p className="text-gray-500 mt-2 mb-6">
          The toy you are looking for seems to be missing from the shelf.
        </p>
        <Button asChild variant="outline">
          <Link to="/products">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
          </Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = Array.from({ length: 4 })
    .map((_, i) => getProductById((parseInt(id!) + i + 1).toString()))
    .filter((p): p is Product => p !== null);

  const whatsappNumber = "971500000000";
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in "${product.title}" (AED ${product.price}). Is it available?`,
  );

  return (
    <div className="bg-white pb-20">
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4 text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 truncate">{product.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT: IMAGE GALLERY */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square bg-gray-50 rounded-3xl p-8 flex items-center justify-center border-2 border-gray-100 relative overflow-hidden group">
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-600 text-white border-0 z-10 px-3 py-1">
                  NEW ARRIVAL
                </Badge>
              )}
              <img
                src={mainImage}
                alt={product.title}
                className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className={`aspect-square bg-gray-50 rounded-xl p-2 flex items-center justify-center border-2 cursor-pointer transition-all ${mainImage === img ? "border-blue-500 ring-2 ring-blue-100" : "border-gray-100 hover:border-blue-300"}`}
                  onClick={() => setMainImage(img)}
                >
                  <img
                    src={img}
                    alt={`View ${i + 1}`}
                    className="max-w-full max-h-full object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: PRODUCT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            {/* Brand & Rating */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {product.brand}
              </span>
              <div className="flex items-center text-yellow-400 text-sm font-bold gap-1">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-gray-700">{product.rating}</span>
                <span className="text-gray-400 font-normal">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-baseline gap-4 mb-6 border-b pb-6">
              <span className="text-4xl font-black text-red-600">
                AED {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through font-medium">
                  AED {product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {product.description}
            </p>

            {/* Key Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
              <div>
                <span className="block text-xs font-bold text-gray-500 uppercase mb-1">
                  Age Range
                </span>
                <span className="font-bold text-gray-900">{product.age}</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-500 uppercase mb-1">
                  SKU
                </span>
                <span className="font-bold text-gray-900">{product.sku}</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-500 uppercase mb-1">
                  Category
                </span>
                <span className="font-bold text-gray-900">
                  {product.category}
                </span>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-500 uppercase mb-1">
                  Availability
                </span>
                {product.stock > 0 ? (
                  <span className="font-bold text-green-600 flex items-center gap-1">
                    In Stock
                  </span>
                ) : (
                  <span className="font-bold text-red-500">Out of Stock</span>
                )}
              </div>
            </div>

            {/* Actions: ONLY WHATSAPP */}
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full rounded-full bg-green-500 hover:bg-green-600 text-white font-bold h-14 gap-2 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-6 w-6" /> Buy / Enquire via
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 mt-8 text-center text-xs font-medium text-gray-600">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Truck className="h-5 w-5 text-blue-600" />
                </div>
                <span>Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-gray-100 p-3 rounded-full">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                </div>
                <span>Genuine Toys</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-gray-100 p-3 rounded-full">
                  <RotateCcw className="h-5 w-5 text-blue-600" />
                </div>
                <span>Easy Returns</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-20 border-t pt-12">
          <h2 className="text-2xl font-black uppercase text-gray-900 mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Link
                to={`/product/${p.id}`}
                key={p.id}
                className="group block border border-gray-100 rounded-2xl p-4 hover:shadow-xl transition-all bg-white"
              >
                <div className="aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center p-4">
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-bold text-sm text-gray-800 line-clamp-1 group-hover:text-blue-600">
                    {p.title}
                  </h3>
                  <p className="font-black text-red-600">AED {p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;