import { motion } from 'framer-motion';
import { MessageSquare, FileText, Search, Presentation } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Консультация',
    description:
      'Обсуждаем ваши задачи, цели исследования и ожидаемые результаты. Формируем техническое задание.',
    duration: '1-2 дня',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Предложение',
    description:
      'Готовим детальное коммерческое предложение с методологией, сроками и стоимостью исследования.',
    duration: '2-3 дня',
  },
  {
    icon: Search,
    number: '03',
    title: 'Исследование',
    description:
      'Проводим сбор данных: опросы, интервью, анализ рынка. Обрабатываем и анализируем информацию.',
    duration: '2-4 недели',
  },
  {
    icon: Presentation,
    number: '04',
    title: 'Отчёт',
    description:
      'Предоставляем презентацию с выводами, инсайтами и рекомендациями для вашего бизнеса.',
    duration: 'Финальный этап',
  },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-white">
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
            <span className="inline-block px-4 py-2 bg-[#C9A227]/10 rounded-full text-[#C9A227] text-sm font-medium mb-4">
              Как мы работаем
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
              Процесс работы
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Прозрачный и понятный процесс от первой встречи до финального отчёта
            </p>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#1E3A5F] via-[#2D5A87] to-[#C9A227] origin-left"
              />
            </div>

            {/* Steps Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-gray-50 rounded-xl p-6 h-full hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
                    {/* Number Badge */}
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] rounded-xl flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-lg">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="text-center lg:text-left">
                      <span className="text-[#C9A227] font-bold text-sm">
                        Шаг {step.number}
                      </span>
                      <h3 className="text-xl font-semibold text-[#1A1A2E] mt-2 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      {/* Duration Badge */}
                      <span className="inline-block px-3 py-1 bg-[#1E3A5F]/10 rounded-full text-[#1E3A5F] text-xs font-medium">
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Connector */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-gray-200" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 mb-6">
              Готовы начать? Свяжитесь с нами для бесплатной консультации
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E3A5F] text-white rounded-xl font-semibold hover:bg-[#2D5A87] transition-colors"
            >
              Начать проект
              <svg
                className="w-5 h-5"
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
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
