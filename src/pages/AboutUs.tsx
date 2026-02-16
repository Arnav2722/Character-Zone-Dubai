import { motion } from "framer-motion";
import { Heart, Globe, Users, Award, Star, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Play",
    description:
      "We believe play is the foundation of childhood development. Every toy we offer is chosen with care and purpose.",
  },
  {
    icon: Globe,
    title: "Global Selection",
    description:
      "We source the finest toys from trusted brands worldwide, bringing diversity and quality to UAE families.",
  },
  {
    icon: Users,
    title: "Family First",
    description:
      "As a family-run business, we understand what parents look for — safety, value, and endless fun.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description:
      "Every product meets international safety standards. We never compromise on quality or safety.",
  },
];

const milestones = [
  { year: "2018", label: "Founded in Dubai" },
  { year: "2020", label: "Expanded to all Emirates" },
  { year: "2023", label: "5,000+ happy families" },
  { year: "2025", label: "Launched online showcase" },
];

const AboutUs = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-4 inline-block text-5xl">🧸</span>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              About <span className="text-primary">Characters Zone</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Your trusted toy destination in the United Arab Emirates —
              bringing joy, learning, and adventure to children since 2018.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground">
                Born from a Love of Play
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Characters Zone started as a small family venture in Dubai,
                driven by a simple idea: every child deserves toys that inspire
                creativity, learning, and pure happiness. What began as a
                passion project quickly grew into one of the UAE's most trusted
                toy destinations.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Today, we curate hundreds of products from leading international
                brands, ensuring that every item on our shelves meets the
                highest standards of safety and quality. From educational STEM
                kits to imaginative playsets, we cater to every age and
                interest.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className="rounded-xl border bg-card p-5 text-center transition-all hover:toy-shadow"
                >
                  <span className="font-display text-2xl font-bold text-primary">
                    {m.year}
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {m.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-2 text-muted-foreground">
              The values that guide everything we do
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border bg-card p-6 text-center transition-all hover:toy-shadow"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl gap-8 text-center sm:grid-cols-3">
            {[
              { value: "5,000+", label: "Happy Families" },
              { value: "500+", label: "Products" },
              { value: "7", label: "Emirates Covered" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="font-display text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </span>
                <p className="mt-1 text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
