"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { asset } from "@/lib/assets";

const symptoms = [
  { title: "Щёлкает челюсть", hint: "Начните с оценки суставов, движения челюсти и работы мышц.", image: "/media/vnchs.jpg" },
  { title: "Стираются зубы", hint: "Врач проверит распределение нагрузки и положение нижней челюсти.", image: "/media/gnathology.jpg" },
  { title: "Неудобно жевать", hint: "Диагностика поможет связать симптом с прикусом и состоянием зубов.", image: "/media/digital.jpg" },
  { title: "Отсутствуют зубы", hint: "Составим общий план восстановления функции и зубного ряда.", image: "/media/implantation.jpg" },
  { title: "Болит зуб", hint: "Определим источник боли и выберем способ сохранить ткани зуба.", image: "/media/treatment.jpg" },
  { title: "Хочу восстановить улыбку", hint: "Оценим эстетику вместе с прикусом и функцией.", image: "/media/prosthetics.jpg" },
];

export function SymptomExplorer() {
  const [active, setActive] = useState(0);
  return <div className="symptom-explorer">
    <div className="symptom-list">{symptoms.map((item, i) => <button key={item.title} className={active === i ? "is-active" : ""} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}><span>0{i + 1}</span><strong>{item.title}</strong><ArrowUpRight/></button>)}</div>
    <div className="symptom-preview">
      <Image key={symptoms[active].image} src={asset(symptoms[active].image)} alt="" fill sizes="(max-width: 800px) 100vw, 42vw"/>
      <div><span>Возможный первый шаг</span><p>{symptoms[active].hint}</p><Link href="#appointment">Обсудить с врачом <ArrowUpRight size={16}/></Link></div>
    </div>
  </div>;
}
