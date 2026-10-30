import { LegalPage, Mail } from '@/components/layout/LegalPage'

export const metadata = {
  title: "Mentions légales — Instant Douce'Heure",
  description: 'Informations légales du site instantdouceheure.com.',
}

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" subtitle="Informations légales du site instantdouceheure.com">
      <h2>1. Éditeur du site</h2>
      <p>Le présent site est édité par :</p>
      <ul className="legal__facts">
        <li><strong>Nom :</strong> Océane Delannoy-Ferrero</li>
        <li><strong>Activité :</strong> Praticienne en massage bien-être &amp; soins énergétiques</li>
        <li><strong>Adresse :</strong> 23 rue Jules Ancel, 76600 Le Havre, France</li>
        <li><strong>Téléphone :</strong> <a href="tel:+33618980522">06.18.98.05.22</a></li>
        <li><strong>Email :</strong> <Mail /></li>
        <li><strong>SIRET :</strong> 80414431900030</li>
        <li><strong>Site web :</strong> instantdouceheure.com</li>
      </ul>

      <h2>2. Directrice de la publication</h2>
      <p>Océane Delannoy-Ferrero, en sa qualité d&apos;exploitante individuelle du site instantdouceheure.com.</p>

      <h2>3. Hébergeur</h2>
      <p>Le site est hébergé par :</p>
      <ul className="legal__facts">
        <li><strong>Société :</strong> Vercel Inc.</li>
        <li><strong>Adresse :</strong> 340 Pine Street, Suite 701 — San Francisco, CA 94104, États-Unis</li>
        <li><strong>Site :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
      </ul>

      <h2>4. Nature de l&apos;activité — mention déontologique importante</h2>
      <p>
        Les massages proposés sur ce site sont des <strong>massages de bien-être non thérapeutiques et non médicaux</strong>.
        Ils ne sont pas réalisés par un professionnel de santé au sens du Code de la santé publique, ne relèvent pas de
        l&apos;ordre des médecins, des kinésithérapeutes ou de toute autre profession médicale ou paramédicale réglementée,
        et <strong>ne se substituent en aucun cas à un avis, un diagnostic ou un traitement médical</strong>.
      </p>
      <p>En cas de problème de santé, consultez un médecin ou un professionnel de santé qualifié.</p>

      <h2>5. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur ce site (textes, visuels, graphismes, logo, structure) est la propriété
        exclusive d&apos;Océane Delannoy-Ferrero, sauf mention contraire expresse. Toute reproduction, représentation,
        modification, publication ou adaptation, totale ou partielle, de ces contenus, par quelque moyen que ce soit, est
        interdite sans autorisation écrite préalable de l&apos;éditrice.
      </p>
      <p>Les marques et logos reproduits sur le site sont la propriété de leurs titulaires respectifs.</p>

      <h2>6. Limitation de responsabilité</h2>
      <p>
        Les informations publiées sur ce site sont données à titre indicatif. Océane Delannoy-Ferrero s&apos;efforce
        d&apos;en assurer l&apos;exactitude mais ne saurait garantir l&apos;exhaustivité ni l&apos;absence d&apos;erreur.
        Des liens hypertextes peuvent pointer vers des sites tiers ; l&apos;éditrice décline toute responsabilité quant à
        leur contenu.
      </p>
    </LegalPage>
  )
}
