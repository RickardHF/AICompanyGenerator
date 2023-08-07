import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Company Name and Slogan Generator',
  description: 'Our AI-powered company name and slogan generator will help you find the perfect name for your business. All you need to do is describe your business and the generator takes it from there',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-center">
          {children}
        </main>
        <footer>
          <p>@2021</p>
        </footer>
      </body>
    </html>
  )
}
