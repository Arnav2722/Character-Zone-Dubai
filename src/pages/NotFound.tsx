// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

// const NotFound = () => {
//   const location = useLocation();

//   useEffect(() => {
//     console.error("404 Error: User attempted to access non-existent route:", location.pathname);
//   }, [location.pathname]);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-muted">
//       <div className="text-center">
//         <h1 className="mb-4 text-4xl font-bold">404</h1>
//         <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
//         <a href="/" className="text-primary underline hover:text-primary/90">
//           Return to Home
//         </a>
//       </div>
//     </div>
//   );
// };

// export default NotFound;

// src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] bg-white flex items-center justify-center text-center px-4">
      <div className="space-y-6">
        {/* Playful 404 Illustration Placeholder */}
        <img 
            src="https://placehold.co/400x300/FFC107/FFFFFF?text=Uh-oh!+Broken+Toy" 
            alt="404 Illustration" 
            className="mx-auto mix-blend-multiply"
        />
        <h1 className="text-6xl font-black text-blue-900">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 uppercase">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Oops! It seems like the page you're looking for has gotten lost in the toy box. Let's get you back to playtime!
        </p>
        <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full mt-4">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Go Back Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;