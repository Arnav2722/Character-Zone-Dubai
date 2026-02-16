import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/categories";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const category = categories.find((c) => c.slug === product.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/products/${product.id}`}>
        <Card className="group overflow-hidden border-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {product.isNew && (
              <Badge className="toy-gradient absolute left-3 top-3 border-0 text-primary-foreground">
                NEW
              </Badge>
            )}
          </div>

          {/* Content */}
          <CardContent className="p-4">
            {category && (
              <span
                className="mb-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                style={{
                  backgroundColor: category.bgColor,
                  color: category.accentColor,
                }}
              >
                {category.name}
              </span>
            )}
            <h3 className="font-display text-base font-semibold text-foreground line-clamp-1">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-display text-lg font-bold text-primary">
                AED {product.price}
              </span>
              <span className="text-xs text-muted-foreground">
                {product.ageRange}
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
