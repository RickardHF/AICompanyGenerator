import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Company Name and Slogan Generator - Powered by AI',
  description: ""
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
      <head>
        <link rel="icon" href="/icon.jpg" />
      </head>
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
