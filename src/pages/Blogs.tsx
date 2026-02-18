// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Clock, ArrowRight, User } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { blogPosts } from "@/data/blogs";

// const Blogs = () => {
//   return (
//     <section className="py-10 md:py-16">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-10"
//         >
//           <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
//             Blog & Articles 📝
//           </h1>
//           <p className="mt-2 text-muted-foreground">
//             Tips, guides, and toy inspiration for parents
//           </p>
//         </motion.div>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {blogPosts.map((post, index) => (
//             <motion.div
//               key={post.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.05 }}
//             >
//               <Link to={`/blogs/${post.id}`}>
//                 <Card className="group h-full overflow-hidden border-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
//                   <div className="relative aspect-video overflow-hidden bg-muted">
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                       loading="lazy"
//                     />
//                     <Badge className="absolute left-3 top-3 bg-card/90 text-foreground backdrop-blur-sm">
//                       {post.category}
//                     </Badge>
//                   </div>
//                   <CardContent className="p-5">
//                     <h2 className="font-display text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
//                       {post.title}
//                     </h2>
//                     <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
//                       {post.excerpt}
//                     </p>
//                     <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
//                       <div className="flex items-center gap-3">
//                         <span className="flex items-center gap-1">
//                           <User className="h-3 w-3" />
//                           {post.author}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Clock className="h-3 w-3" />
//                           {post.readTime}
//                         </span>
//                       </div>
//                       <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blogs;


// src/pages/Blogs.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarDays, User } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The 10 Best Educational Toys for Toddlers in 2024",
    excerpt: "Discover the top toys that spark curiosity and aid development in your little ones. From building blocks to interactive learning sets.",
    img: "https://placehold.co/600x400/FFC107/FFFFFF?text=Blog+Post+1",
    date: "May 15, 2024",
    author: "Sarah Johnson",
    category: "Parenting Tips"
  },
  {
    id: 2,
    title: "Outdoor Play: Why It's Crucial for Child Development",
    excerpt: "Explore the benefits of fresh air and active play. We review the best scooters, bikes, and garden toys for endless summer fun.",
    img: "https://placehold.co/600x400/4CAF50/FFFFFF?text=Blog+Post+2",
    date: "May 10, 2024",
    author: "Mike Williams",
    category: "Play Ideas"
  },
  {
    id: 3,
    title: "A Parent's Guide to Choosing the Right LEGO Set",
    excerpt: "Navigating the world of LEGO can be overwhelming. Our guide breaks down sets by age, interest, and complexity to find the perfect match.",
    img: "https://placehold.co/600x400/F44336/FFFFFF?text=Blog+Post+3",
    date: "May 5, 2024",
    author: "Emily Davis",
    category: "Toy Guides"
  },
  // Add more mock posts...
];

const Blogs = () => {
  return (
    <div className="bg-white pb-16">
      <div className="bg-purple-600 py-16 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://placehold.co/1920x600/9C27B0/FFFFFF?text=Pattern')] opacity-10 bg-cover bg-center"></div>
        <h1 className="text-4xl font-black uppercase relative z-10">Colorland Blog</h1>
        <p className="text-lg mt-4 opacity-90 relative z-10">Playful insights, parenting tips, and toy news.</p>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
         {/* Featured Post */}
         <Link to={`/blog/${BLOG_POSTS[0].id}`} className="group mb-16 block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-4 md:p-0 border-2 border-gray-100 hover:border-purple-300 transition-all overflow-hidden">
               <div className="h-64 md:h-96 overflow-hidden rounded-2xl md:rounded-l-3xl md:rounded-r-none">
                  <img src={BLOG_POSTS[0].img} alt={BLOG_POSTS[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="p-4 md:p-8 space-y-4">
                  <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">{BLOG_POSTS[0].category}</span>
                  <h2 className="text-3xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{BLOG_POSTS[0].title}</h2>
                  <p className="text-gray-600 line-clamp-3 text-lg">{BLOG_POSTS[0].excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 font-medium pt-4">
                     <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        <span>{BLOG_POSTS[0].date}</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{BLOG_POSTS[0].author}</span>
                     </div>
                  </div>
               </div>
            </div>
         </Link>

         {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {BLOG_POSTS.slice(1).map((post) => (
            <article key={post.id} className="group">
               <Link to={`/blog/${post.id}`}>
                  <div className="rounded-2xl overflow-hidden mb-4 h-60 relative">
                     <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                     <span className="absolute top-4 left-4 bg-white/90 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 font-medium border-t pt-4">
                     <span>{post.date}</span>
                     <span className="uppercase text-purple-600 font-bold">Read More</span>
                  </div>
               </Link>
            </article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <Button variant="outline" size="lg" className="rounded-full font-bold border-2 px-8">Load More Posts</Button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;