import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="ToyHaven - Colorful toys and fun"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl"
          >
            Where Every Toy
            <br />
            <span className="text-accent">Tells a Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8 text-lg text-primary-foreground/80 md:text-xl"
          >
            Discover the finest collection of toys from around the world,
            delivered across the UAE. Fun, learning &amp; adventure await!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild variant="hero" size="lg">
              <Link to="/products">Explore Collection</Link>
            </Button>
            <Button asChild variant="outline-hero" size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
