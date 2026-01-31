import { motion } from 'framer-motion';
import {
  Plane,
  ShoppingCart,
  Home,
  Wheat,
  UtensilsCrossed,
  Truck,
} from 'lucide-react';

const industries = [
  {
    icon: Plane,
    title: 'Туризм и гостеприимство',
    description: 'Исследования туристического потока, предпочтений отдыхающих, оценка качества услуг',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    stats: '75% туристов из России',
  },
  {
    icon: ShoppingCart,
    title: 'Ритейл и торговля',
    description: 'Анализ потребительского поведения, оценка локаций, исследование конкурентов',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
    stats: 'Рост рынка на 15% в год',
  },
  {
    icon: Home,
    title: 'Недвижимость и строительство',
    description: 'Оценка спроса, анализ ценовых трендов, исследование инвесторов',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    stats: '200+ новых объектов',
  },
  {
    icon: Wheat,
    title: 'Сельское хозяйство',
    description: 'Исследования аграрного рынка, анализ экспортного потенциала',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    stats: 'Чай, вино, цитрусовые',
  },
  {
    icon: UtensilsCrossed,
    title: 'Общественное питание',
    description: 'Анализ рынка ресторанов, предпочтений посетителей, оценка концепций',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    stats: 'Сезонность спроса',
  },
  {
    icon: Truck,
    title: 'Транспорт и логистика',
    description: 'Исследования транспортной инфраструктуры, логистических цепочек',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
    stats: 'Порт Сухум',
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

export default function Industries() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
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
              Специализация
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
              Отрасли, которые мы исследуем
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Глубокое понимание ключевых секторов экономики Республики Абхазия
            </p>
          </motion.div>

          {/* Industries Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-[#1A1A2E]/40 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <industry.icon className="w-5 h-5 text-[#1E3A5F]" />
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#C9A227]/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-medium text-white">{industry.stats}</span>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white">
                      {industry.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                  
                  {/* Hover Link */}
                  <div className="mt-4 flex items-center text-[#1E3A5F] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Подробнее об отрасли</span>
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
