import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { MethodMap } from "@/components/method-map";
import { BeforeAfter } from "@/components/before-after";
import { LeadForm } from "@/components/lead-form";
import { BlurFade } from "@/components/ui/blur-fade";
import { doctors, services, technologies } from "@/data/site";
import { asset } from "@/lib/assets";

const symptoms = ["Щёлкает челюсть", "Стираются зубы", "Неудобно жевать", "Болит зуб", "Отсутствуют зубы", "Беспокоит прикус", "Хочется восстановить улыбку", "Нужно сложное восстановление"];
const journey = ["Консультация", "Цифровая диагностика", "Анализ функции", "План лечения", "Лечение", "Контроль результата"];

export default function Home() {
  return <main>
    <div className="hero-shell">
      <Header />
      <section className="hero">
        <div className="hero-grid">
          <BlurFade delay={0.08} inView><div className="hero-kicker"><span>Стоматология системного подхода</span><span>Иркутск</span></div></BlurFade>
          <BlurFade delay={0.16} inView><h1>Лечим<br/><span>причину,</span><br/>не следствие</h1></BlurFade>
          <BlurFade delay={0.26} inView><p className="hero-copy">Смотрим шире одного зуба: исследуем прикус, суставы и работу мышц, чтобы составить персональный план восстановления.</p></BlurFade>
          <BlurFade delay={0.34} inView><div className="hero-actions"><Link className="button button--light" href="#appointment">Записаться на диагностику <ArrowUpRight size={17}/></Link><Link className="text-link text-link--light" href="#method">Узнать о принципе <ArrowDownRight size={17}/></Link></div></BlurFade>
        </div>
        <div className="hero-visual">
          <Image src={asset("/media/hero-bobrov.png")} alt="Дмитрий Бобров в клинике" fill priority sizes="(max-width: 800px) 100vw, 46vw" />
          <div className="hero-caption"><span>Дмитрий Бобров</span><span>Основатель клиники<br/>Автор подхода</span></div>
          <div className="scan-line" aria-hidden="true" />
        </div>
      </section>
    </div>

    <section className="intro" id="method">
      <div className="section-index"><span>01</span><span>Метод</span></div>
      <div className="intro-heading"><p className="eyebrow">Принцип Боброва</p><h2>Организм —<br/>не набор <em>деталей</em></h2></div>
      <p className="intro-copy">Боль в одном месте не всегда означает, что причина находится там же. Поэтому мы начинаем не с процедуры, а с диагностики взаимосвязей.</p>
      <MethodMap />
    </section>

    <section className="symptoms section-dark">
      <div className="section-index section-index--light"><span>02</span><span>С чего начать</span></div>
      <div className="symptom-head"><h2>Не обязательно знать<br/><span>название процедуры</span></h2><p>Выберите то, что узнаёте. На консультации врач определит, какая диагностика нужна именно вам.</p></div>
      <div className="symptom-list">{symptoms.map((item, i) => <Link key={item} href="#appointment"><span>{String(i + 1).padStart(2, "0")}</span><strong>{item}</strong><ArrowUpRight/></Link>)}</div>
    </section>

    <section className="services" id="services">
      <div className="section-index"><span>03</span><span>Направления</span></div>
      <div className="section-title-row"><h2>Одна система.<br/>Разные точки работы.</h2><p>План объединяет нужных специалистов и методы вокруг общей цели лечения.</p></div>
      <div className="service-list">{services.map((service) => <article className="service" key={service.slug}>
        <span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p></div>
        <div className="service-image"><Image src={service.image} alt="" fill sizes="360px" /></div>
        <Link aria-label={`Подробнее: ${service.title}`} href={`/services/${service.slug}`}><ArrowUpRight/></Link>
      </article>)}</div>
    </section>

    <section className="founder">
      <div className="founder-image"><Image src={asset("/media/bobrov-founder.jpg")} alt="Дмитрий Алексеевич Бобров" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
      <div className="founder-content"><div className="section-index section-index--light"><span>04</span><span>Автор метода</span></div><p className="eyebrow eyebrow--light">Дмитрий Алексеевич Бобров</p><h2>«Лечение начинается с вопроса: <em>почему</em> это произошло?»</h2><p>Основатель и главный врач клиники. Объединяет ортопедию, хирургию, имплантологию, терапию и функциональный подход в единую систему лечения.</p><Link className="text-link text-link--light" href="/doctors/dmitry-bobrov">Познакомиться с доктором <ArrowUpRight size={17}/></Link><div className="founder-sign">ПРИНЦИП / БОБРОВА</div></div>
    </section>

    <section className="journey">
      <div className="section-index"><span>05</span><span>Путь пациента</span></div>
      <div className="journey-grid"><div><p className="eyebrow">Начните с диагностики</p><h2>Сначала понимаем.<br/>Потом лечим.</h2></div><p>Последовательность нужна не для формальности. Каждый этап уточняет следующий и помогает принимать решения на основании данных.</p></div>
      <ol>{journey.map((step, i) => <li key={step}><span>{String(i + 1).padStart(2, "0")}</span><strong>{step}</strong><i/></li>)}</ol>
    </section>

    <section className="cases section-dark" id="cases">
      <div className="section-index section-index--light"><span>06</span><span>Результаты</span></div>
      <div className="cases-head"><h2>Видимый результат.<br/><span>Системная работа.</span></h2><p>Пример восстановления эстетики улыбки. Перемещайте разделитель, чтобы сравнить фотографии.</p></div>
      <BeforeAfter />
      <div className="case-meta"><span>Комплексное восстановление улыбки</span><span>До / после</span><Link href="/cases">Смотреть кейсы <ArrowUpRight size={16}/></Link></div>
    </section>

    <section className="technologies">
      <div className="section-index"><span>07</span><span>Технологии</span></div>
      <div className="section-title-row"><h2>Точность, которую<br/>можно объяснить.</h2><p>Технология ценна не сама по себе — а тем, какое решение она помогает принять врачу.</p></div>
      <div className="tech-grid">{technologies.map((tech, i) => <article key={tech.title} className={i === 0 ? "tech tech--wide" : "tech"}><div className="tech-image"><Image src={tech.image} alt={tech.title} fill sizes={i === 0 ? "60vw" : "30vw"}/></div><span>0{i + 1}</span><h3>{tech.title}</h3><p>{tech.benefit}</p></article>)}</div>
    </section>

    <section className="doctors" id="doctors">
      <div className="section-index"><span>08</span><span>Команда</span></div>
      <div className="doctors-head"><h2>Специалисты,<br/>которые работают <em>вместе</em></h2><p>Комплексный план требует общего языка между врачами разных направлений.</p></div>
      <div className="doctor-grid">{doctors.map((doctor, i) => <Link href={`/doctors/${doctor.slug}`} key={doctor.slug} className={`doctor doctor--${i + 1}`}><div><Image src={doctor.image} alt={doctor.name} fill sizes="(max-width: 700px) 80vw, 25vw"/></div><span>{doctor.role}</span><h3>{doctor.name}</h3><ArrowUpRight/></Link>)}</div>
    </section>

    <section className="clinic-strip"><div><Image src={asset("/media/clinic-team.jpg")} alt="Команда клиники Принцип Боброва" fill sizes="100vw"/></div><p>Место, где врач видит<br/>не отдельный зуб,<br/><em>а человека целиком.</em></p></section>

    <section className="appointment section-dark" id="appointment">
      <div className="appointment-copy"><p className="eyebrow eyebrow--light">Первый шаг</p><h2>Начните<br/>с диагностики.</h2><p>Оставьте контакты. Администратор уточнит ваш запрос и подберёт подходящего специалиста.</p></div><LeadForm />
    </section>

    <footer id="contacts"><div className="footer-brand">ПРИНЦИП<br/>БОБРОВА</div><div><span>Навигация</span><Link href="#method">Метод</Link><Link href="#services">Направления</Link><Link href="#doctors">Врачи</Link><Link href="#cases">Кейсы</Link></div><div><span>Пациентам</span><Link href="/prices">Цены</Link><Link href="/reviews">Отзывы</Link><Link href="/legal">Правовая информация</Link></div><div><span>Контакты</span><p>Актуальные адрес, телефон и график необходимо подтвердить перед публикацией.</p></div><small>© {new Date().getFullYear()} Стоматологическая клиника «Принцип Боброва»</small></footer>
  </main>;
}
