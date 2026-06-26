'use client'

import { useState } from 'react'

interface TarifRow {
  duree: string
  type: string
  typeDetail?: string
  prix: string
  description: string
}

const tarifs: TarifRow[] = [
  {
    duree: '30 minutes',
    type: 'Massage bien-être',
    prix: '35 €',
    description: "Séance courte idéale pour découvrir le massage ou cibler une zone précise : nuque, dos, jambes. Parfaite pour une première expérience ou une pause revitalisante entre deux rendez-vous. Sélection d'huiles adaptée à votre peau.",
  },
  {
    duree: '45 minutes',
    type: 'Massage bien-être',
    prix: '50 €',
    description: "Séance équilibrée pour un véritable lâcher-prise. Le temps nécessaire pour que le corps commence à relâcher les tensions profondes. Idéale en entretien régulier ou comme découverte approfondie du massage holistique.",
  },
  {
    duree: '1 heure',
    type: 'Massage bien-être',
    prix: '75 €',
    description: "La séance complète par excellence. Prise en charge globale du corps, du visage et de la tête selon vos besoins. Entretien de 5 à 10 minutes en début de séance, choix des huiles personnalisé, temps de détente final inclus.",
  },
  {
    duree: '1h15',
    type: 'Massage bien-être en duo',
    typeDetail: '· réalisé avec Céline · 2 personnes',
    prix: '180 €',
    description: "Partagez un moment de bien-être à deux — en couple, entre amis, entre parent et enfant. Séance réalisée en duo avec Céline : chaque personne bénéficie d'1h15 de massage personnalisé en simultané (soit 90 € par personne). À réserver via le formulaire de contact, environ un mois avant la date souhaitée.",
  },
  {
    duree: '1h30',
    type: 'Massage bien-être',
    prix: '95 €',
    description: "Séance approfondie pour un travail complet sur le corps entier avec attention particulière aux zones de tension. Inclut un temps de consultation, un massage intégral et un temps de retour au calme pour une détente maximale.",
  },
  {
    duree: '2 heures',
    type: 'Massage bien-être',
    prix: '150 €',
    description: "L'expérience ultime du massage holistique. Deux heures consacrées entièrement à votre bien-être : corps, visage, cuir chevelu, pieds. Soin complet avec huiles de massage haut de gamme sélectionnées selon votre profil. Un voyage sensoriel profond.",
  },
  {
    duree: '1h15',
    type: 'Soin énergétique (Chin Daï)',
    prix: '75 €',
    description: "Méthode inspirée du Chin Daï, art martial transmis par Renato Pappalardo. Ce soin travaille sur les dimensions physico-psychiques et développe une conscience raffinée de l'énergie. Travail sur les chakras et circuits énergétiques pour soutenir le bien-être mental, physique et intuitif. Non recommandé comme première séance.",
  },
  {
    duree: '2h30',
    type: 'Soin rituel Rebozo',
    prix: '250 €',
    description: "Soin cérémoniel mexicain traditionnel : massage à quatre mains sur tout le corps (30–45 min), bain d'herbes sacrées, enveloppement en sept points avec le tissu traditionnel. Disponible le vendredi/samedi matin — à domicile (avec baignoire) ou au salon. Idéal pour le post-partum et toutes les grandes transitions de vie.",
  },
]

export function TarifTable() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="tarif-wrap">
      <table className="tarif-table">
        <thead>
          <tr>
            <th>Durée</th>
            <th>Type de soin</th>
            <th>Tarif</th>
          </tr>
        </thead>
        <tbody>
          {tarifs.map((row, i) => (
            <>
              <tr
                key={`row-${i}`}
                className={`tarif-row${openIndex === i ? ' tarif-row--open' : ''}`}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <td>{row.duree}</td>
                <td>
                  {row.type}
                  {row.typeDetail && (
                    <span style={{ fontSize: '.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                      {' '}{row.typeDetail}
                    </span>
                  )}
                </td>
                <td className="price">{row.prix}</td>
              </tr>
              {openIndex === i && (
                <tr key={`desc-${i}`} className="tarif-desc-row" style={{ display: 'table-row' }}>
                  <td colSpan={3}>{row.description}</td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
