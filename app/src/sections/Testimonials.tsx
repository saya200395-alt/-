import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Геннадий К.',
    position: 'Директор инвестиционной компании',
    company: '«Черноморье Инвест»',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    text: 'Профессиональный подход и глубокая аналитика помогли нам принять правильное решение об инвестициях в гостиничный бизнес. Команда отлично знает местный рынок и предоставила ценные инсайты, которых мы не нашли бы сами. Рекомендуем!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Марина С.',
    position: 'Управляющая отелем',
    company: '«Сан-Марино»',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    text: 'Отличное понимание туристического рынка и потребителей. Исследование дало нам ценные инсайты для развития бизнеса и повышения удовлетворённости гостей. Особенно ценны были рекомендации по сезонному ценообразованию.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Дмитрий В.',
    position: 'Владелец сети магазинов',
    company: '«Абхазия Маркет»',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    text: 'Качественная работа, в срок и с понятными рекомендациями. Благодаря исследованию мы оптимизировали ассортимент и повысили продажи на 18%. Теперь обращаемся только к ним для всех маркетинговых исследований.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ирина А.',
    position: 'Директор по маркетингу',
    company: '«Новый Афон Резорт»',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    text: 'Команда продемонстрировала высочайший уровень профессионализма. Исследование рынка было проведено очень тщательно, а презентация результатов была настолько убедительной, что убедила наш совет директоров в правильности выбранной стратегии.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
              Отзывы
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
              Что говорят клиенты
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мнения наших партнёров о сотрудничестве
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-0 lg:-left-8">
              <Quote className="w-16 h-16 text-[#1E3A5F]/10" />
            </div>

            {/* Content */}
            <div className="relative bg-gray-50 rounded-2xl p-8 lg:p-12">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#C9A227] text-[#C9A227]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-white"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-[#1A1A2E]">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-sm text-[#1E3A5F]">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="rounded-full border-gray-300 hover:bg-[#1E3A5F] hover:text-white hover:border-[#1E3A5F]"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-[#1E3A5F] w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="rounded-full border-gray-300 hover:bg-[#1E3A5F] hover:text-white hover:border-[#1E3A5F]"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
