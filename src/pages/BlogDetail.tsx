import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blogs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <section className="py-20 text-center">
        <span className="mb-4 block text-5xl">📝</span>
        <h1 className="font-display text-2xl font-bold text-foreground">
          Article Not Found
        </h1>
        <p className="mt-2 text-muted-foreground">
          The blog post you're looking for doesn't exist.
        </p>
        <Button asChild className="mt-6" variant="outline">
          <Link to="/blogs">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </section>
    );
  }

  // Render content paragraphs — supports **bold** via simple parsing
  const renderContent = (text: string) => {
    return text.split("\n\n").map((paragraph, i) => {
      // Check if it's a heading (starts with **)
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        return (
          <h3
            key={i}
            className="mt-6 font-display text-xl font-semibold text-foreground"
          >
            {paragraph.replace(/\*\*/g, "")}
          </h3>
        );
      }

      // Replace inline bold
      const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="font-semibold text-foreground">
                {part.replace(/\*\*/g, "")}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
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
                <Link to="/blogs">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-AE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 overflow-hidden rounded-2xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose-toyhaven mt-8"
          >
            {renderContent(post.content)}
          </motion.div>

          <div className="mt-12 border-t pt-6">
            <Button asChild variant="outline">
              <Link to="/blogs">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogDetail;
