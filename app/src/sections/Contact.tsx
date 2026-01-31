import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Адрес',
    content: 'г. Сухум, ул. Пушкина, д. 16, офис 6',
    link: null,
  },
  {
    icon: Phone,
    title: 'Телефон',
    content: '+7 (940) 123-45-67',
    link: 'tel:+79401234567',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@analitika-abkhazia.ru',
    link: 'mailto:info@analitika-abkhazia.ru',
  },
  {
    icon: Clock,
    title: 'Режим работы',
    content: 'Пн-Пт: 9:00 - 18:00',
    link: null,
  },
];

const researchTypes = [
  'Маркетинговое исследование',
  'Опросы и анкетирование',
  'Бизнес-аналитика',
  'Презентационные материалы',
  'Стратегический консалтинг',
  'Мониторинг рынка',
  'Другое',
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    researchType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        researchType: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
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
              Контакты
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Заполните форму или свяжитесь с нами напрямую
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1A1A2E] mb-2">
                      Заявка отправлена!
                    </h3>
                    <p className="text-gray-600">
                      Мы свяжемся с вами в ближайшее время
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ваше имя *</Label>
                        <Input
                          id="name"
                          placeholder="Иван Иванов"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="example@mail.ru"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="researchType">Тип исследования</Label>
                        <Select
                          value={formData.researchType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, researchType: value })
                          }
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Выберите тип" />
                          </SelectTrigger>
                          <SelectContent>
                            {researchTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        placeholder="Опишите вашу задачу..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#1E3A5F] hover:bg-[#2D5A87] text-white"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Отправить заявку
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#1E3A5F]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1A1A2E] mb-1">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 hover:text-[#1E3A5F] transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="pt-6 border-t"
                >
                  <h4 className="font-medium text-[#1A1A2E] mb-4">
                    Мы в социальных сетях
                  </h4>
                  <div className="flex gap-3">
                    {['Telegram', 'WhatsApp', 'Instagram'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-[#1E3A5F] hover:text-white transition-colors"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="bg-[#1E3A5F] rounded-xl p-6 text-white"
                >
                  <h4 className="font-semibold mb-2">Нужна срочная консультация?</h4>
                  <p className="text-white/80 text-sm mb-4">
                    Позвоните нам или напишите в мессенджер
                  </p>
                  <a
                    href="tel:+79401234567"
                    className="inline-flex items-center gap-2 text-[#C9A227] font-semibold hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    +7 (940) 123-45-67
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
