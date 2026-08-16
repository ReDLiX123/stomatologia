import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p className="eyebrow">404</p><h1>Эта страница пока не готова</h1><Link className="button button--dark" href="/">Вернуться на главную</Link></main>;
}
