"use client";

import { useState } from "react";

const nodes = [
  ["Зубы", "Состояние отдельных зубов — только видимая часть картины."],
  ["Прикус", "То, как смыкаются зубы, влияет на распределение нагрузки."],
  ["ВНЧС", "Суставы направляют движение нижней челюсти."],
  ["Мышцы", "Компенсация может проявляться напряжением и зажимами."],
  ["Осанка", "Положение головы и тела рассматривается в общей системе."],
  ["Самочувствие", "Цель — устойчивый функциональный результат."],
] as const;

export function MethodMap() {
  const [active, setActive] = useState(0);
  return <div className="method-map">
    <div className="method-track" aria-label="Связи зубочелюстной системы">
      {nodes.map(([label], index) => <button key={label} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={active === index ? "node node--active" : "node"}><span>{String(index + 1).padStart(2, "0")}</span>{label}</button>)}
    </div>
    <div className="method-reading"><span>0{active + 1} / 06</span><p>{nodes[active][1]}</p></div>
  </div>;
}
