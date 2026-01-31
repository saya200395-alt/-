import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, FileText, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'Исследование туристического рынка Нового Афона',
    client: 'Администрация города Новый Афон',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    category: 'Туризм',
    description:
      'Комплексное исследование предпочтений туристов, анализ удовлетворённости качеством услуг, оценка инфраструктуры и разработка рекомендаций по развитию туристической отрасли города.',
    results: [
      'Опрос более 800 туристов',
      'Выявлены ключевые факторы выбора дестинации',
      'Разработана стратегия развития на 2024-2026',
      'Рост удовлетворённости на 25%',
    ],
    stats: {
      respondents: 865,
      duration: '3 месяца',
      pages: 120,
    },
  },
  {
    id: 2,
    title: 'Анализ рынка гостиничных услуг Сухума',
    client: 'Инвестиционная компания «Черноморье»',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    category: 'Недвижимость',
    description:
      'Оценка ёмкости рынка гостиничных услуг, анализ конкурентной среды, прогноз развития рынка и рекомендации по позиционированию нового гостиничного комплекса.',
    results: [
      'Изучены 45 объектов размещения',
      'Проанализирован спрос по сегментам',
      'Определена оптимальная ценовая политика',
      'Разработана концепция отеля',
    ],
    stats: {
      respondents: 320,
      duration: '2 месяца',
      pages: 85,
    },
  },
  {
    id: 3,
    title: 'Изучение потребительского поведения в ритейле',
    client: 'Сеть супермаркетов «Абхазия»',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    category: 'Ритейл',
    description:
      'Анализ покупательских предпочтений, оценка лояльности клиентов, исследование факторов выбора магазина и разработка рекомендаций по повышению продаж.',
    results: [
      'Проведено 1500 интервью',
      'Выявлены ключевые драйверы лояльности',
      'Оптимизирована продуктовая матрица',
      'Рост повторных покупок на 18%',
    ],
    stats: {
      respondents: 1500,
      duration: '2.5 месяца',
      pages: 95,
    },
  },
  {
    id: 4,
    title: 'Исследование рынка общественного питания',
    client: 'Ресторанная группа «Сухум»',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    category: 'HoReCa',
    description:
      'Анализ рынка ресторанов и кафе Сухума, изучение предпочтений посетителей, оценка конкурентов и разработка концепции нового заведения.',
    results: [
      'Изучены 78 заведений',
      'Опрос 600 посетителей',
      'Разработана уникальная концепция',
      'Успешный запуск ресторана',
    ],
    stats: {
      respondents: 600,
      duration: '2 месяца',
      pages: 70,
    },
  },
  {
    id: 5,
    title: 'Анализ аграрного рынка и экспортного потенциала',
    client: 'Министерство сельского хозяйства РА',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    category: 'Агро',
    description:
      'Исследование производственных мощностей сельского хозяйства, анализ экспортного потенциала ключевых культур, оценка логистических возможностей.',
    results: [
      'Проанализированы 15 культур',
      'Изучены 5 целевых рынков',
      'Разработана экспортная стратегия',
      'Привлечены иностранные инвесторы',
    ],
    stats: {
      respondents: 200,
      duration: '4 месяца',
      pages: 150,
    },
  },
  {
    id: 6,
    title: 'Исследование транспортной инфраструктуры',
    client: 'Государственное инвестиционное агентство',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80',
    category: 'Логистика',
    description:
      'Комплексный анализ транспортной инфраструктуры Республики, оценка логистических цепочек, разработка рекомендаций по развитию транспортной системы.',
    results: [
      'Изучены все порты и границы',
      'Проанализированы логистические маршруты',
      'Выявлены узкие места',
      'Разработан план модернизации',
    ],
    stats: {
      respondents: 150,
      duration: '3.5 месяца',
      pages: 110,
    },
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-gray-50">
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
              Портфолио
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
              Наши проекты
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Примеры успешно реализованных исследований для клиентов в Абхазии
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/70 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#C9A227] rounded-full">
                    <span className="text-xs font-medium text-white">{project.category}</span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-medium text-[#1A1A2E]">{project.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2 group-hover:text-[#1E3A5F] transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {project.client}
                  </p>
                  
                  {/* View Button */}
                  <div className="flex items-center text-[#1E3A5F] font-medium text-sm">
                    <span>Подробнее</span>
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#1A1A2E]">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              {/* Image */}
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/50 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-[#C9A227] rounded-full text-xs font-medium text-white">
                    {selectedProject.category}
                  </span>
                  <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-[#1A1A2E]">
                    {selectedProject.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Client Info */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{selectedProject.client}</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-semibold text-[#1A1A2E] mb-2">О проекте</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <Users className="w-5 h-5 text-[#1E3A5F] mx-auto mb-2" />
                    <div className="text-lg font-bold text-[#1A1A2E]">
                      {selectedProject.stats.respondents}
                    </div>
                    <div className="text-xs text-gray-500">Респондентов</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <Calendar className="w-5 h-5 text-[#1E3A5F] mx-auto mb-2" />
                    <div className="text-lg font-bold text-[#1A1A2E]">
                      {selectedProject.stats.duration}
                    </div>
                    <div className="text-xs text-gray-500">Длительность</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <FileText className="w-5 h-5 text-[#1E3A5F] mx-auto mb-2" />
                    <div className="text-lg font-bold text-[#1A1A2E]">
                      {selectedProject.stats.pages}
                    </div>
                    <div className="text-xs text-gray-500">Страниц отчёта</div>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-[#1A1A2E] mb-3">Ключевые результаты</h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#C9A227] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
