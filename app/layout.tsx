import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://principbobrova.ru"),
  title: "Принцип Боброва — стоматология системного подхода",
  description: "Стоматологическая клиника комплексной диагностики и восстановления функции зубочелюстной системы.",
  openGraph: {
    title: "Принцип Боброва",
    description: "Устраняем причины болезней, а не только их следствие.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
