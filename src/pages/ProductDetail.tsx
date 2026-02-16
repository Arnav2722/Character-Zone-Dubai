import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Tag, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <section className="py-20 text-center">
        <span className="mb-4 block text-5xl">😕</span>
        <h1 className="font-display text-2xl font-bold text-foreground">
          Product Not Found
        </h1>
        <p className="mt-2 text-muted-foreground">
          The product you're looking for doesn't exist.
        </p>
        <Button asChild className="mt-6" variant="outline">
          <Link to="/products">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Link>
        </Button>
      </section>
    );
  }

  const category = categories.find((c) => c.slug === product.category);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const whatsappNumber = "971XXXXXXXXX";
  const whatsappMessage = encodeURIComponent(
    `Hi ToyHaven! I'm interested in "${product.name}" (AED ${product.price}). Is it available?`
  );

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/products">Products</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {category && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={`/products?category=${category.slug}`}>
                      {category.name}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Product Detail */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl bg-muted"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <div className="flex flex-wrap items-center gap-2">
              {product.isNew && (
                <Badge className="toy-gradient border-0 text-primary-foreground">
                  NEW
                </Badge>
              )}
              {product.isFeatured && (
                <Badge variant="secondary">⭐ Featured</Badge>
              )}
            </div>

            <h1 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              {product.name}
            </h1>

            {category && (
              <Link
                to={`/products?category=${category.slug}`}
                className="mt-2 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
              >
                <Tag className="h-3.5 w-3.5" />
                {category.icon} {category.name}
              </Link>
            )}

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-primary" />
                Age: {product.ageRange}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary" />
                Added: {new Date(product.dateAdded).toLocaleDateString("en-AE")}
              </span>
            </div>

            <div className="mt-6 border-t pt-6">
              <span className="font-display text-3xl font-bold text-primary">
                AED {product.price}
              </span>
              <p className="mt-1 text-xs text-muted-foreground">
                Prices are inclusive of VAT
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enquire on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
              You May Also Like
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
