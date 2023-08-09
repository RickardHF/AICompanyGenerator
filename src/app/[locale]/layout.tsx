import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';

// Test Start
import {NextIntlClientProvider} from 'next-intl';
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'de'}];
}
// Test Stop

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Company Name and Slogan Generator',
  description: 'Our AI-powered company name and slogan generator will help you find the perfect name for your business. All you need to do is describe your business and the generator takes it from there',
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: any
}) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className + " min-h-screen flex flex-col justify-center space-between font-mono"}>
        <Header />
        <main className="flex flex-col items-center justify-center">
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}
