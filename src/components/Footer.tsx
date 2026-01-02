import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Sports Educate" className="h-12 w-auto" />
              <span className="text-xl font-bold tracking-tight">Sports Educate Foundation</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Revolutionizing physical education in schools. Empowering children through 
              age-appropriate sports programs that enhance fitness, development, and academic excellence.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2.5 rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-background/70 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/programs" className="text-background/70 hover:text-primary transition-colors text-sm">Programs</Link></li>
              <li><Link to="/gallery" className="text-background/70 hover:text-primary transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/events" className="text-background/70 hover:text-primary transition-colors text-sm">Events</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {["Physical Education Program", "Sports Program", "After School Coaching", "Movement Mastery", "Sports Starters"].map((program) => (
                <li key={program}>
                  <Link
                    to="/programs"
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  A2 401, Provident Green Park, Muthusamy Colony Extension, Selvapuram, Coimbatore - 641026
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+916374173855" className="text-background/70 hover:text-primary transition-colors text-sm">
                  +91 63741 73855
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info.sportseducate@gmail.com" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Info.sportseducate@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2026 Sports Educate Foundation. All rights reserved.
          </p>
          <a 
            href="https://www.linkedin.com/in/v-manikandan1142/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-background/50 hover:text-primary transition-colors group"
          >
            Crafted with <span className="text-primary group-hover:animate-pulse">♥</span> by{" "}
            <span className="font-semibold text-background/70 group-hover:text-primary transition-colors">
              Manikandan V
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
