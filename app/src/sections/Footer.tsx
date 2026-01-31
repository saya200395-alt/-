import { motion } from 'framer-motion';
import { BarChart3, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const quickLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'О нас', href: '#about' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Контакты', href: '#contact' },
];

const services = [
  'Маркетинговые исследования',
  'Бизнес-аналитика',
  'Презентационные материалы',
  'Стратегический консалтинг',
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1A2E] text-white">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="section-inner">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 mb-6"
              >
                <div className="w-10 h-10 bg-[#C9A227] rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-lg">Аналитика Абхазии</span>
              </a>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Профессиональные маркетинговые исследования и бизнес-аналитика в
                Республике Абхазия с 2016 года.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {['TG', 'WA', 'IG'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-sm font-medium hover:bg-[#C9A227] transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold text-lg mb-6">Навигация</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 text-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold text-lg mb-6">Услуги</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-semibold text-lg mb-6">Контакты</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    г. Сухум, ул. Пушкина, д. 16, офис 6
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                  <a
                    href="tel:+79401234567"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    +7 (940) 123-45-67
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                  <a
                    href="mailto:info@analitika-abkhazia.ru"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    info@analitika-abkhazia.ru
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="section-inner">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">
                © 2024 Аналитика Абхазии. Все права защищены.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                  Пользовательское соглашение
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
