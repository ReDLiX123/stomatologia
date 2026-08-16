"use client";

import { FormEvent, useState } from "react";

export function LeadForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  if (sent) return <div className="form-success" role="status"><span>✓</span><h3>Заявка принята</h3><p>Администратор свяжется с вами, чтобы подобрать удобное время.</p></div>;
  return <form className="lead-form" onSubmit={submit}>
    <label><span>Ваше имя</span><input name="name" autoComplete="name" required placeholder="Как к вам обращаться" /></label>
    <label><span>Телефон</span><input name="phone" type="tel" autoComplete="tel" required placeholder="+7 000 000 00 00" /></label>
    <label><span>Что вас беспокоит</span><select name="service" defaultValue=""><option value="" disabled>Выберите направление</option><option>Боль или дискомфорт</option><option>Прикус / ВНЧС</option><option>Отсутствуют зубы</option><option>Хочу восстановить улыбку</option><option>Пока не знаю</option></select></label>
    <button className="button button--light" type="submit">Отправить заявку <span>↗</span></button>
    <p className="form-note">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
  </form>;
}
