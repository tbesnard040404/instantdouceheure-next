import { LegalPage, Mail } from '@/components/layout/LegalPage'

export const metadata = {
  title: "RGPD — Vos données — Instant Douce'Heure",
  description: 'Vos droits et nos engagements en matière de protection des données.',
}

export default function RgpdPage() {
  return (
    <LegalPage title="RGPD — Vos données" subtitle="Vos droits et nos engagements en matière de protection des données">
      <h2>1. Base légale des traitements</h2>
      <p>Les traitements de données mis en œuvre sur ce site reposent sur les bases légales suivantes :</p>
      <ul>
        <li>
          <strong>Intérêt légitime</strong> (art. 6.1.f RGPD) : répondre aux demandes entrantes via le formulaire de
          contact, assurer la relation commerciale et la gestion des rendez-vous.
        </li>
        <li>
          <strong>Consentement</strong> (art. 6.1.a RGPD) : si vous choisissez de vous abonner à une liste de diffusion ou
          de recevoir des informations commerciales (non proposé actuellement sur ce site).
        </li>
      </ul>

      <h2>2. Absence de cookies analytics et de traçage</h2>
      <p>
        Ce site ne dépose <strong>aucun cookie de mesure d&apos;audience</strong> (Google Analytics, Matomo, Hotjar,
        Facebook Pixel ou équivalent). Votre navigation sur instantdouceheure.com n&apos;est pas suivie à des fins
        statistiques ou publicitaires. Aucune donnée comportementale n&apos;est transmise à des régies publicitaires.
      </p>

      <h2>3. Pas de transfert commercial des données</h2>
      <p>
        Les données que vous communiquez (via le formulaire de contact ou lors d&apos;une réservation via Planity) ne sont{' '}
        <strong>jamais vendues, louées ni cédées à titre commercial</strong> à des tiers. Elles ne sont transmises
        qu&apos;aux sous-traitants techniques strictement nécessaires au fonctionnement du service (Formspree, Planity,
        Vercel), dans les limites décrites dans la politique de confidentialité.
      </p>

      <h2>4. Massages bien-être — mention importante</h2>
      <p>
        Les massages et soins proposés par Instant Douce&apos;Heure sont des{' '}
        <strong>massages de bien-être non thérapeutiques et non médicaux</strong>. Ils visent la détente, le relâchement
        musculaire et le mieux-être global, et ne constituent en aucun cas un acte médical, paramédical ou de
        kinésithérapie. Ils ne remplacent pas une consultation médicale et ne peuvent être prescrits en lieu et place
        d&apos;un traitement médical.
      </p>
      <p>
        Si vous présentez une pathologie, un état de santé particulier, une grossesse ou prenez un traitement médical,
        veuillez consulter votre médecin avant de prendre rendez-vous.
      </p>

      <h2>5. Exercice de vos droits</h2>
      <p>
        Vous pouvez exercer l&apos;ensemble de vos droits RGPD (accès, rectification, effacement, portabilité,
        opposition, limitation) en adressant votre demande par email à : <Mail />
      </p>
      <p>
        Une réponse vous sera apportée dans un délai maximum d&apos;<strong>un mois</strong> à compter de la réception de
        votre demande (délai pouvant être prolongé de deux mois supplémentaires en cas de complexité, avec information
        préalable).
      </p>
      <p>
        En cas de réclamation non résolue, vous pouvez saisir la <strong>CNIL</strong> à l&apos;adresse{' '}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a> ou par courrier : CNIL —
        3 Place de Fontenoy, TSA 80715 — 75334 Paris Cedex 07.
      </p>

      <h2>6. Sécurité des données</h2>
      <p>
        Des mesures techniques et organisationnelles appropriées sont mises en œuvre pour protéger vos données contre la
        perte, l&apos;accès non autorisé ou la divulgation accidentelle. Les échanges sont chiffrés via le protocole HTTPS
        (TLS). L&apos;accès aux données est strictement limité à la responsable du traitement.
      </p>
    </LegalPage>
  )
}
