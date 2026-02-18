// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { blogPosts } from "@/data/blogs";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";

// const BlogDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const post = blogPosts.find((p) => p.id === id);

//   if (!post) {
//     return (
//       <section className="py-20 text-center">
//         <span className="mb-4 block text-5xl">📝</span>
//         <h1 className="font-display text-2xl font-bold text-foreground">
//           Article Not Found
//         </h1>
//         <p className="mt-2 text-muted-foreground">
//           The blog post you're looking for doesn't exist.
//         </p>
//         <Button asChild className="mt-6" variant="outline">
//           <Link to="/blogs">
//             <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
//           </Link>
//         </Button>
//       </section>
//     );
//   }

//   // Render content paragraphs — supports **bold** via simple parsing
//   const renderContent = (text: string) => {
//     return text.split("\n\n").map((paragraph, i) => {
//       // Check if it's a heading (starts with **)
//       if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
//         return (
//           <h3
//             key={i}
//             className="mt-6 font-display text-xl font-semibold text-foreground"
//           >
//             {paragraph.replace(/\*\*/g, "")}
//           </h3>
//         );
//       }

//       // Replace inline bold
//       const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
//       return (
//         <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
//           {parts.map((part, j) =>
//             part.startsWith("**") && part.endsWith("**") ? (
//               <strong key={j} className="font-semibold text-foreground">
//                 {part.replace(/\*\*/g, "")}
//               </strong>
//             ) : (
//               part
//             )
//           )}
//         </p>
//       );
//     });
//   };

//   return (
//     <section className="py-8 md:py-12">
//       <div className="container mx-auto px-4">
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
//                 <Link to="/blogs">Blog</Link>
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator />
//             <BreadcrumbItem>
//               <BreadcrumbPage>{post.title}</BreadcrumbPage>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </Breadcrumb>

//         <article className="mx-auto max-w-3xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <Badge className="mb-4">{post.category}</Badge>
//             <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
//               {post.title}
//             </h1>

//             <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
//               <span className="flex items-center gap-1">
//                 <User className="h-4 w-4" />
//                 {post.author}
//               </span>
//               <span className="flex items-center gap-1">
//                 <Calendar className="h-4 w-4" />
//                 {new Date(post.date).toLocaleDateString("en-AE", {
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 })}
//               </span>
//               <span className="flex items-center gap-1">
//                 <Clock className="h-4 w-4" />
//                 {post.readTime}
//               </span>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="mt-8 overflow-hidden rounded-2xl"
//           >
//             <img
//               src={post.image}
//               alt={post.title}
//               className="w-full object-cover"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="prose-toyhaven mt-8"
//           >
//             {renderContent(post.content)}
//           </motion.div>

//           <div className="mt-12 border-t pt-6">
//             <Button asChild variant="outline">
//               <Link to="/blogs">
//                 <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
//               </Link>
//             </Button>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// };

// export default BlogDetail;


// src/pages/BlogDetail.tsx
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, Facebook, Linkedin, Twitter, User } from "lucide-react";

const BlogDetail = () => {
  // const { id } = useParams();
  const post = {
    title: "The 10 Best Educational Toys for Toddlers in 2024",
    content: `
      <p class="lead">Choosing the right toys for your toddler is more than just keeping them entertained; it's about fostering their development during crucial early years. In 2024, we're seeing a fantastic range of toys designed to spark curiosity, improve motor skills, and introduce basic concepts of problem-solving.</p>
      
      <h2>Why Educational Toys Matter</h2>
      <p>Toddlers are natural explorers. Their brains are developing at a rapid pace, and play is their primary way of learning. Educational toys are specifically designed to stimulate this learning process. They can help with:</p>
      <ul>
        <li><strong>Cognitive Development:</strong> Puzzles and building blocks teach problem-solving and cause-and-effect.</li>
        <li><strong>Fine Motor Skills:</strong> Stacking rings, shape sorters, and peg boards improve hand-eye coordination and dexterity.</li>
        <li><strong>Language Skills:</strong> Toys that encourage pretend play or have interactive voices can boost vocabulary.</li>
      </ul>

      <h2>Our Top Picks for 2024</h2>
      <h3>1. The Ultimate Building Block Set</h3>
      <p>Building blocks are a timeless classic for a reason. This new set features larger, easy-to-grip pieces in vibrant colors, perfect for little hands. It encourages open-ended play and creativity.</p>
      <img src="https://placehold.co/800x400/FFC107/FFFFFF?text=Building+Blocks" alt="Building Blocks" />
      
      <h3>2. Interactive Learning Tablet</h3>
      <p>For a more modern approach, this screen-free tablet uses lights and sounds to teach letters, numbers, and animal sounds. It's durable and perfect for on-the-go learning.</p>
      
      <h3>3. Musical Activity Table</h3>
      <p>Music is a wonderful way to engage a toddler. This activity table has various instruments, buttons, and levers that produce different sounds, encouraging rhythmic movement and auditory exploration.</p>

      <h2>Conclusion</h2>
      <p>When selecting a toy, always consider your child's current developmental stage and interests. The best toy is one that challenges them just enough to be engaging but not so much that it becomes frustrating. Happy playing!</p>
    `,
    img: "https://placehold.co/1200x600/FFC107/FFFFFF?text=Blog+Hero+Image",
    date: "May 15, 2024",
    author: "Sarah Johnson",
    category: "Parenting Tips",
    authorBio: "Sarah is a child development specialist and mother of two. She loves reviewing toys that make learning fun."
  };

  return (
    <div className="bg-white pb-16">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-gray-500 font-bold hover:text-purple-600 mb-8">
           <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        
        <span className="text-purple-600 font-bold text-sm uppercase tracking-wider block mb-4">{post.category}</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">{post.title}</h1>
        
        <div className="flex items-center gap-6 text-sm text-gray-500 font-medium mb-8 pb-8 border-b">
            <div className="flex items-center gap-2">
               <img src="https://placehold.co/40x40/9C27B0/FFFFFF?text=SJ" alt={post.author} className="rounded-full" />
               <span>By <strong className="text-gray-900">{post.author}</strong></span>
            </div>
            <div className="flex items-center gap-2">
               <CalendarDays className="h-4 w-4" />
               <span>{post.date}</span>
            </div>
         </div>

         <div className="rounded-3xl overflow-hidden mb-10 shadow-xl">
            <img src={post.img} alt={post.title} className="w-full object-cover" />
         </div>

        {/* Blog Content using dangerouslySetInnerHTML for HTML string */}
        <div 
          className="prose prose-lg prose-purple max-w-none prose-img:rounded-2xl prose-headings:font-bold prose-a:text-purple-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

         {/* Share & Author Box */}
         <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
               <div className="flex items-center gap-4">
                  <span className="font-bold text-gray-900">Share this post:</span>
                  <div className="flex gap-2">
                     <Button size="icon" variant="outline" className="rounded-full hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/10"><Facebook className="h-4 w-4" /></Button>
                     <Button size="icon" variant="outline" className="rounded-full hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/10"><Twitter className="h-4 w-4" /></Button>
                     <Button size="icon" variant="outline" className="rounded-full hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10"><Linkedin className="h-4 w-4" /></Button>
                  </div>
               </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left border-2 border-gray-100">
               <img src="https://placehold.co/80x80/9C27B0/FFFFFF?text=SJ" alt={post.author} className="rounded-full w-20 h-20" />
               <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">About {post.author}</h3>
                  <p className="text-gray-600">{post.authorBio}</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default BlogDetail;