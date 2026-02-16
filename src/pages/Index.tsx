import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Truck, BadgePercent, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

const featuredProducts = products.filter((p) => p.isNew || p.isFeatured).slice(0, 8);

const trustFeatures = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "All products meet international safety standards",
  },
  {
    icon: Truck,
    title: "UAE-Wide Delivery",
    description: "Fast delivery across all Emirates",
  },
  {
    icon: BadgePercent,
    title: "Best Prices",
    description: "Competitive prices with regular offers",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "14-day hassle-free return policy",
  },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Categories */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Shop by Category
            </h2>
            <p className="mt-2 text-muted-foreground">
              Find the perfect toy for every child
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured / New Arrivals */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row"
          >
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                New Arrivals ✨
              </h2>
              <p className="mt-2 text-muted-foreground">
                Check out our latest products
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/products">View All Products</Link>
            </Button>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Why Choose ToyHaven?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Trusted by families across the UAE
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border bg-card p-6 text-center transition-all duration-300 hover:toy-shadow"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
