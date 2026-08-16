"use client";

import Image from "next/image";
import { useState } from "react";
import { asset } from "@/lib/assets";

export function BeforeAfter() {
  const [position, setPosition] = useState(52);
  return <div className="comparison">
    <Image src={asset("/media/case-before.jpg")} alt="Состояние улыбки до лечения" fill sizes="(max-width: 800px) 100vw, 60vw" className="comparison-image" />
    <div className="comparison-after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}><Image src={asset("/media/case-after.jpg")} alt="Результат восстановления улыбки" fill sizes="(max-width: 800px) 100vw, 60vw" className="comparison-image" /></div>
    <div className="comparison-line" style={{ left: `${position}%` }}><span>↔</span></div>
    <input aria-label="Сравнить до и после" type="range" min="10" max="90" value={position} onChange={(e) => setPosition(Number(e.target.value))} />
    <span className="before-label">До</span><span className="after-label">После</span>
  </div>;
}
