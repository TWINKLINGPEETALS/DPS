import { motion } from 'framer-motion';
import { Heart, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Programs', href: '#programs' },
  { name: 'Features', href: '#features' },
  { name: 'About Us', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-main section-padding">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                <span className="text-xl font-bold">LJ</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Little Junior DPS</h3>
                <span className="text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider">
                  Pre School / Day Care
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Nurturing young minds with love, care, and quality education. Building strong
              foundations for a bright future.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center 
                           hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary transition-colors 
                             flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 
                                   transition-transform" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  123, Education Lane, Knowledge Park
                  <br />
                  Sector 15, Noida - 201301
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919742992750"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  +91 1234 567 890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@littlejuniordps.edu"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  info@littlejuniordps.edu
                </a>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6">School Hours</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-semibold">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold">9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold text-primary">Closed</span>
              </li>
            </ul>

            {/* Trust Badge */}
            <div className="mt-6 p-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
              <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink" />
                Trusted by Parents
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow text-lg">★</span>
                ))}
                <span className="ml-2 text-sm text-primary-foreground/70">
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70 text-center sm:text-left">
            © {currentYear} Little Junior DPS. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span className="text-primary-foreground/30">|</span>
            <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground 
                 shadow-glow-green flex items-center justify-center z-40
                 hover:scale-110 transition-transform duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
