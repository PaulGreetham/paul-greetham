import "./globals.css"
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Paul Greetham',
  description: 'Personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative min-h-screen overflow-x-hidden bg-background antialiased">
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
