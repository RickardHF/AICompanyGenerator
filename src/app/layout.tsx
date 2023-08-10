import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

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

  return (
    <html>
      <body className={inter.className + " min-h-screen flex flex-col justify-center space-between font-mono"}>
        <Header />
        <main className="flex flex-col items-center justify-center">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
