import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Search,
  ClipboardList,
  BarChart3,
  Presentation,
  Target,
  TrendingUp,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Маркетинговые исследования',
    description:
      'Глубокий анализ рынка, конкурентов и целевой аудитории. Получите полную картину вашей отрасли.',
    color: 'bg-blue-500',
  },
  {
    icon: ClipboardList,
    title: 'Опросы и анкетирование',
    description:
      'Полевые и онлайн-опросы с представительной выборкой. Узнайте мнение ваших клиентов.',
    color: 'bg-emerald-500',
  },
  {
    icon: BarChart3,
    title: 'Бизнес-аналитика',
    description:
      'Анализ финансовых показателей и бизнес-процессов. Оптимизируйте эффективность компании.',
    color: 'bg-violet-500',
  },
  {
    icon: Presentation,
    title: 'Презентационные материалы',
    description:
      'Профессиональные презентации и инфографика для инвесторов и stakeholders.',
    color: 'bg-amber-500',
  },
  {
    icon: Target,
    title: 'Стратегический консалтинг',
    description:
      'Разработка стратегий выхода на рынок и развития бизнеса в Абхазии.',
    color: 'bg-rose-500',
  },
  {
    icon: TrendingUp,
    title: 'Мониторинг рынка',
    description:
      'Регулярный трекинг трендов и изменений в отрасли. Будьте в курсе событий.',
    color: 'bg-cyan-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="section-container">
        <div className="section-inner">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#1E3A5F]/10 rounded-full text-[#1E3A5F] text-sm font-medium mb-4">
              Что мы предлагаем
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для анализа рынка и развития бизнеса в Республике
              Абхазия
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#1A1A2E] mb-3 group-hover:text-[#1E3A5F] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-6 flex items-center text-[#1E3A5F] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Подробнее</span>
                  <TrendingUp className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
