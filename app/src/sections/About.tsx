import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, FileText, Users, Building2, Briefcase } from 'lucide-react';

const advantages = [
  'Глубокое понимание абхазского рынка',
  'Международные методологии исследований',
  'Доступ к уникальным источникам данных',
  'Команда профессиональных аналитиков',
  'Прозрачный процесс работы',
  'Гарантия конфиденциальности',
];

const stats = [
  { icon: FileText, value: 150, suffix: '+', label: 'Завершённых проектов' },
  { icon: Users, value: 50, suffix: '+', label: 'Постоянных клиентов' },
  { icon: Building2, value: 8, suffix: '', label: 'Лет на рынке' },
  { icon: Briefcase, value: 15, suffix: '+', label: 'Отраслей исследований' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-[#C9A227]/10 rounded-full text-[#C9A227] text-sm font-medium mb-4">
                О компании
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-6">
                Почему выбирают нас
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Мы — команда профессиональных аналитиков с глубоким пониманием
                  абхазского рынка. С 2016 года помогаем бизнесам принимать
                  обоснованные решения на основе достоверных данных.
                </p>
                <p>
                  Наше преимущество — сочетание международных методологий
                  исследований с локальным экспертным знанием. Мы знаем
                  особенности ведения бизнеса в Абхазии, понимаем культурный
                  контекст и имеем доступ к уникальным источникам данных.
                </p>
              </div>

              {/* Advantages List */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 bg-[#1E3A5F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{advantage}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Аналитический центр"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/60 to-transparent" />
                
                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1E3A5F] rounded-full flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1A2E]">Более 150 проектов</p>
                      <p className="text-sm text-gray-600">Успешно завершено</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C9A227]/20 rounded-full -z-10" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#1E3A5F]/10 rounded-full -z-10" />
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 lg:mt-24"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-[#1E3A5F] mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
