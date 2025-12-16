import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Programs', href: '#programs' },
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  }, [reduceMotion]);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft">
              <span className="text-xl font-bold text-primary-foreground">LJ</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading font-bold text-foreground leading-tight">
                Little Junior DPS
              </h1>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Pre School / Day Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-primary 
                         transition-colors duration-200 rounded-xl hover:bg-primary/5"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA & Reduce Motion Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setReduceMotion(!reduceMotion)}
              className={`px-3 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                reduceMotion
                  ? 'bg-primary/10 text-primary'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
              aria-label="Toggle reduced motion"
            >
              {reduceMotion ? '✓ Motion Off' : '⚡ Motion On'}
            </button>
            <button
              onClick={() => scrollToSection('#admissions')}
              className="btn-primary text-sm py-3 px-6 animate-pulse-glow"
            >
              Admissions Open
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container-main py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-left px-4 py-3 text-base font-semibold text-foreground 
                           hover:bg-primary/5 rounded-xl transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <button
                  onClick={() => setReduceMotion(!reduceMotion)}
                  className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                    reduceMotion
                      ? 'bg-primary/10 text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {reduceMotion ? '✓ Reduced Motion' : '⚡ Full Animations'}
                </button>
                <button
                  onClick={() => scrollToSection('#admissions')}
                  className="btn-primary text-center"
                >
                  Admissions Open
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
