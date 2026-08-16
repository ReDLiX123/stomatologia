"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <Link href="/" className="brand" aria-label="Принцип Боброва — на главную"><span className="brand-mark">ПБ</span><span>ПРИНЦИП<br/>БОБРОВА</span></Link>
    <nav className={open ? "nav nav--open" : "nav"} aria-label="Основная навигация">
      <Link href="#method" onClick={() => setOpen(false)}>Метод</Link>
      <Link href="#services" onClick={() => setOpen(false)}>Направления</Link>
      <Link href="#doctors" onClick={() => setOpen(false)}>Врачи</Link>
      <Link href="#cases" onClick={() => setOpen(false)}>Кейсы</Link>
      <Link href="#contacts" onClick={() => setOpen(false)}>Контакты</Link>
    </nav>
    <Link className="header-cta" href="#appointment">Записаться <span>↗</span></Link>
    <button className="menu" aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/></button>
  </header>;
}
