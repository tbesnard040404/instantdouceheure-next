import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Instant Douce'Heure — Massages & Soins Énergétiques · Le Havre",
  description:
    'Massages de bien-être, soins énergétiques et produits naturels au Havre. Praticienne certifiée depuis 2011. Réservation en ligne via Planity.',
  openGraph: {
    title: "Instant Douce'Heure",
    description: 'Massages de bien-être & soins énergétiques au Havre',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <a href="#main" className="skip">Aller au contenu principal</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
