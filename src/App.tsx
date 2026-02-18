// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Index from "./pages/Index";
// import Products from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
// import AboutUs from "./pages/AboutUs";
// import Blogs from "./pages/Blogs";
// import BlogDetail from "./pages/BlogDetail";
// import Contact from "./pages/Contact";
// import TermsAndConditions from "./pages/TermsAndConditions";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route element={<Layout />}>
//             <Route path="/" element={<Index />} />
//             <Route path="/about" element={<AboutUs />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/products/:id" element={<ProductDetail />} />
//             <Route path="/blogs" element={<Blogs />} />
//             <Route path="/blogs/:id" element={<BlogDetail />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/terms" element={<TermsAndConditions />} />
//           </Route>
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Assuming you have a layout wrapper

// Page Imports
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail"; // <--- IMPORT THIS
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Wrap pages in Layout if you have a Navbar/Footer component */}
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />

            {/* THIS IS THE MISSING LINE FIXING YOUR 404 ERROR */}
            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/terms" element={<TermsAndConditions />} />

            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
