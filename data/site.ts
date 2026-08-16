export interface Service { slug: string; title: string; number: string; description: string; image: string; }
export interface Doctor { slug: string; name: string; role: string; image: string; }
export interface Technology { title: string; benefit: string; image: string; }

export const services: Service[] = [
  { slug: "gnathology", number: "01", title: "Гнатология", description: "Ищем источник боли, щелчков и напряжения в работе прикуса, суставов и мышц.", image: asset("/media/gnathology.jpg") },
  { slug: "implantation", number: "02", title: "Имплантация", description: "Восстанавливаем отсутствующие зубы с опорой на точную диагностику и общий план лечения.", image: asset("/media/implantation.jpg") },
  { slug: "prosthetics", number: "03", title: "Протезирование", description: "Возвращаем функцию и эстетику: от виниров и коронок до комплексных конструкций.", image: asset("/media/prosthetics.jpg") },
  { slug: "treatment", number: "04", title: "Лечение зубов", description: "Лечим кариес и корневые каналы, сохраняем ткани зуба и восстанавливаем его форму.", image: asset("/media/treatment.jpg") },
];

export const doctors: Doctor[] = [
  { slug: "dmitry-bobrov", name: "Дмитрий Бобров", role: "Основатель, главный врач", image: asset("/media/bobrov-portrait.jpg") },
  { slug: "vyacheslav-shchegolev", name: "Вячеслав Щёголев", role: "Стоматолог-ортопед", image: asset("/media/shchegolev.jpg") },
  { slug: "kristina-lukyanova", name: "Кристина Лукьянова", role: "Стоматолог-терапевт", image: asset("/media/lukyanova.jpg") },
  { slug: "vladimir-huttunen", name: "Владимир Хуттунен", role: "Хирург-имплантолог", image: asset("/media/huttunen.webp") },
];

export const technologies: Technology[] = [
  { title: "Цифровая диагностика", benefit: "Помогает увидеть систему целиком до начала лечения.", image: asset("/media/digital.jpg") },
  { title: "Стоматологический микроскоп", benefit: "Даёт врачу точность там, где детали измеряются долями миллиметра.", image: asset("/media/microscope.jpg") },
  { title: "Диагностика ВНЧС", benefit: "Показывает, как связаны движение челюсти, суставы и мышцы.", image: asset("/media/vnchs.jpg") },
];
import { asset } from "@/lib/assets";
