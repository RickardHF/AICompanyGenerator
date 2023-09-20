import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { LocalizerWrapper, Configuration } from 'nextjs-static-page-localizer'
import { ConfigurationInterface } from 'nextjs-static-page-localizer/interfaces'

const config = require('@/messages/config')

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Company Name and Slogan Generator - Powered by AI',
  description: 'Our AI-powered company name and slogan generator will help you find the perfect name for your business. All you need to do is describe your business and the generator takes it from there',
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: any
}) {

  const configuration: ConfigurationInterface = new Configuration(config.default, config.languages, config.messages)

  return (
    <html>
      <head>
        <link rel="icon" href="/icon.jpg" />
      </head>
      <body className={inter.className + " min-h-screen flex flex-col justify-center space-between font-mono"}>
        <LocalizerWrapper configuration={configuration}>
          <Header />
          <main className="flex flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
        </LocalizerWrapper>
      </body>
    </html>
  )
}
