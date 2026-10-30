import { LegalPage, Mail } from '@/components/layout/LegalPage'

export const metadata = {
  title: "Politique de confidentialité — Instant Douce'Heure",
  description: 'Comment vos données personnelles sont collectées et utilisées sur instantdouceheure.com.',
}

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      subtitle="Comment vos données personnelles sont collectées et utilisées"
    >
      <h2>1. Responsable du traitement</h2>
      <p>Océane Delannoy-Ferrero, 23 rue Jules Ancel, 76600 Le Havre — <Mail /></p>

      <h2>2. Données collectées</h2>
      <p>Dans le cadre du formulaire de contact présent sur ce site, les données suivantes peuvent être collectées :</p>
      <ul>
        <li>Prénom et nom</li>
        <li>Adresse e-mail</li>
        <li>Numéro de téléphone (facultatif)</li>
        <li>Contenu du message</li>
      </ul>
      <p>
        Aucune donnée bancaire n&apos;est collectée via ce site. Les réservations et paiements sont gérés par la
        plateforme <strong>Planity</strong>, soumise à sa propre politique de confidentialité.
      </p>

      <h2>3. Finalité du traitement</h2>
      <p>
        Les données collectées via le formulaire de contact ont pour unique finalité de{' '}
        <strong>répondre à vos demandes d&apos;information</strong>. Elles ne sont pas utilisées à des fins de prospection
        commerciale ni transmises à des tiers à des fins de marketing.
      </p>

      <h2>4. Durée de conservation</h2>
      <p>
        Vos données sont conservées pendant <strong>3 ans</strong> à compter de votre dernier contact, puis supprimées. À
        l&apos;issue de ce délai, elles sont effacées de manière définitive.
      </p>

      <h2>5. Vos droits (RGPD)</h2>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi
        Informatique et Libertés, vous disposez des droits suivants :
      </p>
      <ul>
        <li><strong>Droit d&apos;accès</strong> : obtenir une copie des données vous concernant</li>
        <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
        <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
        <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
        <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
        <li><strong>Droit à la limitation</strong> : demander la suspension temporaire du traitement</li>
      </ul>
      <p>Pour exercer ces droits, contactez : <Mail /></p>
      <p>
        Vous disposez également du droit d&apos;introduire une réclamation auprès de la{' '}
        <strong>Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</strong> :{' '}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
      </p>

      <h2>6. Sous-traitants et tiers</h2>
      <p>Le site fait appel aux prestataires suivants, chacun soumis à sa propre politique de confidentialité :</p>
      <ul>
        <li><strong>Formspree</strong> (formspree.io) — traitement et acheminement des messages envoyés via le formulaire de contact</li>
        <li><strong>Planity</strong> (planity.com) — gestion des réservations en ligne et de la relation client associée</li>
        <li>
          <strong>Vercel Inc.</strong> (vercel.com) — hébergement du site, serveurs basés aux États-Unis (transfert encadré
          par les clauses contractuelles types de la Commission européenne)
        </li>
      </ul>

      <h2>7. Cookies</h2>
      <p>
        Ce site n&apos;utilise <strong>aucun cookie de traçage ni d&apos;analyse comportementale</strong>. Aucun outil de
        type Google Analytics, Hotjar ou équivalent n&apos;est installé. Des cookies techniques strictement nécessaires au
        fonctionnement du site peuvent être déposés par Vercel (hébergeur) ; ils ne nécessitent pas votre consentement.
      </p>
    </LegalPage>
  )
}
