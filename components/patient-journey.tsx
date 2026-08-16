"use client";

import { useState } from "react";

const steps = [
  ["Консультация", "Слушаем ваш запрос и изучаем имеющиеся исследования."],
  ["Цифровая диагностика", "Собираем точные данные о зубах и зубочелюстной системе."],
  ["Анализ функции", "Оцениваем движение челюсти, суставы и работу мышц."],
  ["План лечения", "Соединяем методы и специалистов в понятную последовательность."],
  ["Лечение", "Действуем по согласованному плану и контролируем каждый этап."],
  ["Контроль результата", "Проверяем не только эстетику, но и устойчивость функции."],
] as const;

export function PatientJourney() {
  const [active, setActive] = useState(0);
  return <div className="journey-experience">
    <div className="journey-rail"><i style={{ width: `${(active / (steps.length - 1)) * 100}%` }}/>{steps.map(([title], i) => <button key={title} className={active === i ? "is-active" : ""} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}><span>0{i + 1}</span><b>{title}</b></button>)}</div>
    <div className="journey-reading"><span>Этап {active + 1} из {steps.length}</span><p>{steps[active][1]}</p></div>
  </div>;
}
