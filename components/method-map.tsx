"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/assets";

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
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const items = root.current?.querySelectorAll<HTMLElement>("[data-method-step]");
    if (!items) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.methodStep)); }), { rootMargin: "-38% 0px -38% 0px", threshold: .1 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return <div className="method-story" ref={root}>
    <div className="method-steps">
      {nodes.map(([label, text], index) => <article data-method-step={index} key={label} className={active === index ? "method-step method-step--active" : "method-step"} onMouseEnter={() => setActive(index)}>
        <span>0{index + 1}</span><div><h3>{label}</h3><p>{text}</p></div>
      </article>)}
    </div>
    <div className="method-visual">
      <div className="method-image"><Image src={asset("/media/digital.jpg")} alt="Цифровая модель зубочелюстной системы" fill sizes="(max-width: 900px) 100vw, 48vw" /></div>
      <svg className="method-orbit" viewBox="0 0 600 600" aria-hidden="true"><circle cx="300" cy="300" r="210"/><path d="M90 300 C180 80 420 80 510 300 C420 520 180 520 90 300Z"/></svg>
      <div className="method-focus" style={{ "--step": active } as CSSProperties}><i/><span>0{active + 1}</span><strong>{nodes[active][0]}</strong></div>
      <div className="method-progress"><i style={{ height: `${((active + 1) / nodes.length) * 100}%` }}/></div>
    </div>
  </div>;
}
