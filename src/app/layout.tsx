import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Full Stack To Do App Showcase',
  description: 'A NextJS 13.4 Web App ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-80 text-slate-100 container mx-auto p4`}>
        {children}
      </body>
    </html>
  )
}
