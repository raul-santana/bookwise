import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { getCssText } from '@/styles/stitches.config'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <title>BookWise</title>
      </head>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
