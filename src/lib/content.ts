/**
 * Helpers pour lire les fichiers JSON de contenu gérés par Tina CMS.
 * Ces fonctions s'exécutent côté serveur (Server Components Next.js).
 * Tina édite les fichiers JSON → Next.js les lit à chaque build/request.
 */

import fs from 'fs'
import path from 'path'

function readJson<T>(filePath: string): T {
  const fullPath = path.join(process.cwd(), filePath)
  const raw = fs.readFileSync(fullPath, 'utf-8')
  return JSON.parse(raw) as T
}

// ── Types ──────────────────────────────────────────────────────────────────

export interface HomeContent {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    badgeNumber: string
    badgeLabel: string
  }
  services: {
    eyebrow: string
    title: string
    subtitle: string
    cards: Array<{ title: string; desc: string; price: string; cta: string }>
  }
  philosophy: { title: string; text: string; cta: string }
  cta: {
    eyebrow: string
    title: string
    text: string
    ctaPrimary: string
    ctaSecondary: string
  }
}

export interface TarifRow {
  duree: string
  type: string
  typeDetail?: string
  prix: string
  description: string
}

export interface TarifsContent {
  pageTitle: string
  pageSubtitle: string
  notice: string
  rows: TarifRow[]
  soins: Array<{ title: string; desc: string; cta: string; ctaLink: string }>
}

export interface AbonnementsContent {
  pageTitle: string
  pageSubtitle: string
  sectionTitle: string
  sectionSubtitle: string
  plans: Array<{
    name: string
    price: string
    period: string
    desc: string
    popular: boolean
    feats: string[]
  }>
}

export interface AteliersContent {
  pageTitle: string
  pageSubtitle: string
  introEyebrow: string
  introTitle: string
  introText: string
  items: Array<{
    title: string
    price: string
    priceUnit: string
    desc: string
    date: string
  }>
  promo: {
    title: string
    text: string
    priceBefore: string
    priceAfter: string
  }
}

export interface RetraitesContent {
  pageTitle: string
  pageSubtitle: string
  introEyebrow: string
  introTitle: string
  introText: string
  retreats: Array<{
    tag: string
    title: string
    date: string
    location: string
    activities: string[]
    cta: string
  }>
}

export interface PhilosophieContent {
  pageTitle: string
  pageSubtitle: string
  eyebrow: string
  title: string
  paragraphs: string[]
  quote: string
  quoteAuthor: string
  quoteRole: string
  certs: Array<{ text: string; sub: string }>
}

export interface ContactContent {
  pageTitle: string
  pageSubtitle: string
  notice: string
  address: string
  phone: string
  email: string
  hoursWeek: string
  hoursSunday: string
  hoursSundayNote: string
}

export interface CollaborationsContent {
  pageTitle: string
  pageSubtitle: string
  introTitle: string
  introText: string
  collabs: Array<{
    initials: string
    name: string
    role: string
    desc: string
  }>
}

export interface SiteSettings {
  siteName: string
  siteTagline: string
  planityUrl: string
  instagramUrl: string
  facebookUrl: string
  formspreeId: string
  siret: string
  footer: { description: string; copyright: string }
}

// ── Fonctions de lecture ───────────────────────────────────────────────────

export const getHomeContent = () => readJson<HomeContent>('content/pages/home.json')
export const getTarifsContent = () => readJson<TarifsContent>('content/pages/tarifs.json')
export const getAbonnementsContent = () => readJson<AbonnementsContent>('content/pages/abonnements.json')
export const getAteliersContent = () => readJson<AteliersContent>('content/pages/ateliers.json')
export const getRetraitesContent = () => readJson<RetraitesContent>('content/pages/retraites.json')
export const getPhilosophieContent = () => readJson<PhilosophieContent>('content/pages/philosophie.json')
export const getContactContent = () => readJson<ContactContent>('content/pages/contact.json')
export const getCollaborationsContent = () => readJson<CollaborationsContent>('content/pages/collaborations.json')
export const getSiteSettings = () => readJson<SiteSettings>('content/settings.json')
