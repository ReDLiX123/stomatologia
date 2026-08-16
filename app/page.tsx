import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { MethodMap } from "@/components/method-map";
import { SymptomExplorer } from "@/components/symptom-explorer";
import { PatientJourney } from "@/components/patient-journey";
import { BeforeAfter } from "@/components/before-after";
import { LeadForm } from "@/components/lead-form";
import { BlurFade } from "@/components/ui/blur-fade";
import { doctors, services, technologies } from "@/data/site";
import { asset } from "@/lib/assets";

export default function Home() {
  return <main>
    <section className="hero-shell"><Header/><div className="hero">
      <div className="hero-photo"><Image src={asset("/media/hero-bobrov.png")} alt="Дмитрий Бобров, основатель клиники" fill priority sizes="(max-width: 800px) 100vw, 58vw"/><div className="hero-photo-label"><span>Дмитрий Бобров</span><span>Основатель / главный врач</span></div></div>
      <div className="hero-copy-block"><BlurFade delay={.08} inView><p className="hero-kicker">Стоматология системного подхода <span>Иркутск</span></p></BlurFade><BlurFade delay={.18} inView><h1>Лечим <em>причину.</em><br/>Не следствие.</h1></BlurFade><BlurFade delay={.3} inView><div className="hero-bottom"><p>Исследуем прикус, суставы и работу мышц, чтобы восстановить не отдельный зуб, а систему.</p><div className="hero-actions"><Link className="button button--accent" href="#appointment">Записаться на диагностику <ArrowUpRight size={16}/></Link><Link className="text-link text-link--light" href="#method">О принципе <ArrowDownRight size={16}/></Link></div></div></BlurFade></div>
      <div className="hero-rule" aria-hidden="true"><i/></div>
    </div></section>

    <section className="method" id="method"><div className="method-intro"><p className="overline">Принцип Боброва</p><h2>Видеть связь.<br/><em>Находить причину.</em></h2><p>Боль в одном месте не всегда означает, что причина находится там же. Поэтому мы исследуем взаимосвязи — от зубов до общего самочувствия.</p></div><MethodMap/></section>

    <section className="symptoms"><div className="symptoms-heading"><p className="overline">Говорите своими словами</p><h2>Не обязательно знать<br/>название процедуры.</h2><p>Выберите то, что узнаёте. На консультации врач определит, какая диагностика нужна именно вам.</p></div><SymptomExplorer/></section>

    <section className="services" id="services"><div className="services-title"><p className="overline">Направления лечения</p><h2>Одна система.<br/>Разные точки работы.</h2></div><div className="service-collage">{services.map((service, i) => <Link href={`/services/${service.slug}`} className={`service-tile service-tile--${i + 1}`} key={service.slug}><Image src={service.image} alt={service.title} fill sizes={i === 0 ? "(max-width: 800px) 100vw, 55vw" : "(max-width: 800px) 100vw, 35vw"}/><div className="service-shade"/><span>{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><ArrowUpRight/></Link>)}</div></section>

    <section className="founder"><div className="founder-portrait"><Image src={asset("/media/bobrov-founder.jpg")} alt="Дмитрий Алексеевич Бобров" fill sizes="(max-width: 800px) 100vw, 50vw"/><span>Автор подхода</span></div><div className="founder-statement"><p className="overline">Дмитрий Алексеевич Бобров</p><blockquote>«Лечение начинается с вопроса: <em>почему</em> это произошло?»</blockquote><p>Основатель и главный врач. Объединяет ортопедию, хирургию, имплантологию, терапию и функциональную диагностику в одну систему лечения.</p><Link className="text-link" href="/doctors/dmitry-bobrov">Познакомиться с доктором <ArrowUpRight size={16}/></Link><div className="vertical-wordmark">ПРИНЦИП / БОБРОВА</div></div></section>

    <section className="journey" id="journey"><div className="journey-head"><div><p className="overline">Путь пациента</p><h2>Сначала понимаем.<br/><em>Потом лечим.</em></h2></div><p>Каждый этап уточняет следующий. Решения принимаются на основании данных и понятного плана.</p></div><PatientJourney/></section>

    <section className="cases" id="cases"><div className="cases-head"><div><p className="overline">Результат</p><h2>Видимый результат.<br/><em>Системная работа.</em></h2></div><p>Перемещайте разделитель, чтобы сравнить фотографии до и после восстановления улыбки.</p></div><BeforeAfter/><div className="case-meta"><strong>Комплексное восстановление улыбки</strong><span>Фотографии до / после</span><Link href="/cases">Смотреть кейсы <ArrowUpRight size={16}/></Link></div></section>

    <section className="technologies"><div className="tech-heading"><p className="overline overline--dark">Технологии клиники</p><h2>Точность,<br/><em>которую можно объяснить.</em></h2><p>Инструмент ценен не сам по себе, а тем, какое решение он помогает принять врачу.</p></div><div className="tech-composition">{technologies.map((tech, i) => <article className={`tech-feature tech-feature--${i + 1}`} key={tech.title}><div><Image src={tech.image} alt={tech.title} fill sizes={i === 0 ? "60vw" : "34vw"}/><span className="tech-coordinate">PB — 0{i + 1}</span></div><header><span>0{i + 1}</span><h3>{tech.title}</h3></header><p>{tech.benefit}</p></article>)}</div></section>

    <section className="doctors" id="doctors"><div className="doctors-head"><p className="overline">Команда</p><h2>Разные специалисты.<br/><em>Один принцип.</em></h2><p>Комплексный план требует общего языка между врачами разных направлений.</p></div><div className="doctor-grid">{doctors.map((doctor, i) => <Link href={`/doctors/${doctor.slug}`} key={doctor.slug} className={`doctor doctor--${i + 1}`}><div><Image src={doctor.image} alt={doctor.name} fill sizes="(max-width: 700px) 82vw, 28vw"/></div><span>{doctor.role}</span><h3>{doctor.name}</h3><ArrowUpRight/></Link>)}</div></section>

    <section className="clinic-manifesto"><Image src={asset("/media/clinic-team.jpg")} alt="Команда клиники Принцип Боброва" fill sizes="100vw"/><div/><p>Здесь врач видит<br/>не отдельный зуб,<br/><em>а человека целиком.</em></p></section>
    <section className="appointment" id="appointment"><div className="appointment-copy"><p className="overline overline--dark">Первый шаг</p><h2>Начните<br/><em>с диагностики.</em></h2><p>Администратор уточнит ваш запрос и подберёт подходящего специалиста.</p></div><LeadForm/></section>
    <footer id="contacts"><div className="footer-brand">ПРИНЦИП<br/><em>БОБРОВА</em></div><div><span>Навигация</span><Link href="#method">Метод</Link><Link href="#services">Направления</Link><Link href="#doctors">Врачи</Link><Link href="#cases">Кейсы</Link></div><div><span>Пациентам</span><Link href="/prices">Цены</Link><Link href="/reviews">Отзывы</Link><Link href="/legal">Правовая информация</Link></div><div><span>Контакты</span><p>Актуальные адрес, телефон и график необходимо подтвердить перед публикацией.</p></div><small>© {new Date().getFullYear()} Стоматологическая клиника «Принцип Боброва»</small></footer>
  </main>;
}
