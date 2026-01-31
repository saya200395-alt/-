import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Услуги', href: '#services' },
  { label: 'О нас', href: '#about' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Контакты', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="section-inner">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-[#1E3A5F]' : 'bg-white/20'}`}>
                <BarChart3 className={`w-5 h-5 ${isScrolled ? 'text-white' : 'text-white'}`} />
              </div>
              <span
                className={`font-semibold text-lg transition-colors ${
                  isScrolled ? 'text-[#1E3A5F]' : 'text-white'
                }`}
              >
                Аналитика Абхазии
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors relative group ${
                    isScrolled
                      ? 'text-gray-700 hover:text-[#1E3A5F]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-[#C9A227]' : 'bg-white'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection('#contact')}
                className={`transition-all ${
                  isScrolled
                    ? 'bg-[#1E3A5F] hover:bg-[#2D5A87] text-white'
                    : 'bg-white text-[#1E3A5F] hover:bg-white/90'
                }`}
              >
                Заказать исследование
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-[#1E3A5F]' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <div className="section-container py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1E3A5F] rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="mt-2 bg-[#1E3A5F] hover:bg-[#2D5A87] text-white"
                >
                  Заказать исследование
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
