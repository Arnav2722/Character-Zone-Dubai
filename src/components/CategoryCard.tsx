import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={`/products?category=${category.slug}`}
        className="group block"
      >
        <div
          className="rounded-xl p-6 text-center transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-lg"
          style={{
            backgroundColor: category.bgColor,
            borderBottom: `3px solid ${category.accentColor}`,
          }}
        >
          <span className="mb-3 block text-4xl">{category.icon}</span>
          <h3 className="font-display text-base font-semibold text-foreground">
            {category.name}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {category.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
