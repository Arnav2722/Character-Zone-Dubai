import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2">
              <span className="text-2xl">🧸</span>
              <span className="font-display text-xl font-bold">
                Characters Zone
              </span>
            </Link>
            <p className="text-sm leading-relaxed opacity-70">
              Your trusted toy destination in the UAE. We bring joy to children
              with the finest collection of toys from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <Link to="/" className="transition-opacity hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="transition-opacity hover:opacity-100"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-opacity hover:opacity-100"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">
              Categories
            </h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <Link
                  to="/products?category=action-figures"
                  className="transition-opacity hover:opacity-100"
                >
                  Action Figures
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=educational-stem"
                  className="transition-opacity hover:opacity-100"
                >
                  Educational & STEM
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=building-construction"
                  className="transition-opacity hover:opacity-100"
                >
                  Building & Construction
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=baby-toddler"
                  className="transition-opacity hover:opacity-100"
                >
                  Baby & Toddler
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Al Quoz Industrial Area, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+971 4 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@toyhaven.ae</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>Sat-Thu: 9AM - 9PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-background/10 pt-6 text-center text-sm opacity-50">
          <p>
            &copy; {new Date().getFullYear()} Characters Zone UAE. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
