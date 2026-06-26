import { defineConfig } from 'tinacms'

// ─── TINA CMS — Configuration Instant Douce'Heure ───────────────────────────
// Ce fichier définit tous les champs que la cliente peut modifier
// via l'interface d'administration accessible sur /admin
// ─────────────────────────────────────────────────────────────────────────────

export default defineConfig({
  // Connexion Tina Cloud (remplacer par les vraies valeurs depuis app.tina.io)
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? '',
  token: process.env.TINA_TOKEN ?? '',
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH ?? 'main',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [

      // ══════════════════════════════════════════
      //  PAGE ACCUEIL
      // ══════════════════════════════════════════
      {
        name: 'home',
        label: '🏠 Page Accueil',
        path: 'content/pages',
        match: { include: 'home' },
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: 'object',
            name: 'hero',
            label: 'Bannière principale (Hero)',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Texte au-dessus du titre' },
              { type: 'string', name: 'title', label: 'Titre principal' },
              { type: 'string', name: 'subtitle', label: 'Sous-titre', ui: { component: 'textarea' } },
              { type: 'string', name: 'ctaPrimary', label: 'Bouton principal (texte)' },
              { type: 'string', name: 'ctaSecondary', label: 'Bouton secondaire (texte)' },
              { type: 'string', name: 'badgeNumber', label: 'Badge (chiffre ex: +15)' },
              { type: 'string', name: 'badgeLabel', label: 'Badge (label ex: ans de passion)' },
            ],
          },
          {
            type: 'object',
            name: 'services',
            label: 'Section Soins',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Étiquette au-dessus du titre' },
              { type: 'string', name: 'title', label: 'Titre de la section' },
              { type: 'string', name: 'subtitle', label: 'Sous-titre', ui: { component: 'textarea' } },
              {
                type: 'object',
                name: 'cards',
                label: 'Cartes de soins (3)',
                list: true,
                ui: { itemProps: (item) => ({ label: item.title ?? 'Soin' }) },
                fields: [
                  { type: 'string', name: 'title', label: 'Titre' },
                  { type: 'string', name: 'desc', label: 'Description', ui: { component: 'textarea' } },
                  { type: 'string', name: 'price', label: 'Prix affiché' },
                  { type: 'string', name: 'cta', label: 'Texte du bouton' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'philosophy',
            label: 'Section Philosophie (teaser)',
            fields: [
              { type: 'string', name: 'title', label: 'Titre' },
              { type: 'string', name: 'text', label: 'Texte', ui: { component: 'textarea' } },
              { type: 'string', name: 'cta', label: 'Texte du bouton' },
            ],
          },
          {
            type: 'object',
            name: 'cta',
            label: 'Bandeau CTA (bas de page)',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Étiquette' },
              { type: 'string', name: 'title', label: 'Titre' },
              { type: 'string', name: 'text', label: 'Texte sous le titre', ui: { component: 'textarea' } },
              { type: 'string', name: 'ctaPrimary', label: 'Bouton principal (texte)' },
              { type: 'string', name: 'ctaSecondary', label: 'Bouton secondaire (texte)' },
            ],
          },
        ],
      },

      // ══════════════════════════════════════════
      //  PAGE TARIFS
      // ══════════════════════════════════════════
      {
        name: 'tarifs',
        label: '💶 Page Tarifs',
        path: 'content/pages',
        match: { include: 'tarifs' },
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'pageTitle', label: 'Titre de la page' },
          { type: 'string', name: 'pageSubtitle', label: 'Sous-titre' },
          { type: 'string', name: 'notice', label: "Notice d'information", ui: { component: 'textarea' } },
          {
            type: 'object',
            name: 'rows',
            label: 'Tableau des tarifs',
            list: true,
            ui: { itemProps: (item) => ({ label: `${item.duree ?? '?'} — ${item.type ?? ''}` }) },
            fields: [
              { type: 'string', name: 'duree', label: 'Durée' },
              { type: 'string', name: 'type', label: 'Type de soin' },
              { type: 'string', name: 'typeDetail', label: 'Détail (optionnel, ex: réalisé avec Céline)' },
              { type: 'string', name: 'prix', label: 'Prix' },
              { type: 'string', name: 'description', label: 'Description détaillée', ui: { component: 'textarea' } },
            ],
          },
          {
            type: 'object',
            name: 'soins',
            label: 'Cartes soins en détail (4)',
            list: true,
            ui: { itemProps: (item) => ({ label: item.title ?? 'Soin' }) },
            fields: [
              { type: 'string', name: 'title', label: 'Titre' },
              { type: 'string', name: 'desc', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'cta', label: 'Texte du bouton' },
              { type: 'string', name: 'ctaLink', label: 'Lien du bouton' },
            ],
          },
        ],
      },

      // ══════════════════════════════════════════
      //  PAGE ABONNEMENTS
      // ══════════════════════════════════════════
      {
        name: 'abonnements',
        label: '📅 Page Abonnements',
        path: 'content/pages',
        match: { include: 'abonnements' },
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'pageTitle', label: 'Titre de la page' },
          { type: 'string', name: 'pageSubtitle', label: 'Sous-titre' },
          { type: 'string', name: 'sectionTitle', label: 'Titre de la section' },
          { type: 'string', name: 'sectionSubtitle', label: 'Description de la section', ui: { component: 'textarea' } },
          {
            type: 'object',
            name: 'plans',
            label: 'Formules (5)',
            list: true,
            ui: { itemProps: (item) => ({ label: item.name ?? 'Formule' }) },
            fields: [
              { type: 'string', name: 'name', label: 'Nom de la formule' },
              { type: 'string', name: 'price', label: 'Prix (ex: 32€)' },
              { type: 'string', name: 'period', label: 'Période (ex: 12 mois · 6 séances/an)' },
              { type: 'string', name: 'desc', label: 'Description courte', ui: { component: 'textarea' } },
              { type: 'boolean', name: 'popular', label: 'Formule la plus populaire ?' },
              {
                type: 'string',
                name: 'feats',
                label: 'Avantages inclus',
                list: true,
                ui: { component: 'tags' },
              },
            ],
          },
        ],
      },

      // ══════════════════════════════════════════
      //  PAGE ATELIERS
      // ══════════════════════════════════════════
      {
        name: 'ateliers',
        label: '🌿 Page Ateliers',
        path: 'content/pages',
        match: { include: 'ateliers' },
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'pageTitle', label: 'Titre de la page' },
          { type: 'string', name: 'pageSubtitle', label: 'Sous-titre' },
          { type: 'string', name: 'introEyebrow', label: 'Étiquette intro' },
          { type: 'string', name: 'introTitle', label: 'Titre intro' },
          { type: 'string', name: 'introText', label: 'Texte intro', ui: { component: 'textarea' } },
          {
            type: 'object',
            name: 'items',
            label: 'Ateliers (9)',
            list: true,
            ui: { itemProps: (item) => ({ label: item.title ?? 'Atelier' }) },
            fields: [
              { type: 'string', name: 'title', label: 'Titre' },
              { type: 'string', name: 'price', label: 'Prix' },
              { type: 'string', name: 'priceUnit', label: 'Unité de prix (ex: /personne)' },
              { type: 'string', name: 'desc', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'date', label: 'Date(s)' },
            ],
          },
          {
            type: 'object',
            name: 'promo',
            label: 'Offre Trio Connexion',
            fields: [
              { type: 'string', name: 'title', label: 'Titre' },
              { type: 'string', name: 'text', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'priceBefore', label: 'Prix barré' },
              { type: 'string', name: 'priceAfter', label: 'Prix promo' },
            ],
          },
        ],
      },

      // ══════════════════════════════════════════
      //  PAGE RETRAITES
      // ══════════════════════════════════════════
      {
        name: 'retraites',
        label: '🏕 Page Retraites',
        path: 'content/pages',
        match: { include: 'retraites' },
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'pageTitle', label: 'Titre de la page' },
          { type: 'string', name: 'pageSubtitle', label: 'Sous-titre' },
          { type: 'string', name: 'introEyebrow', label: 'Étiquette intro' },
          { type: 'string', name: 'introTitle', label: 'Titre intro' },
          { type: 'string', name: 'introText', label: 'Texte intro', ui: { component: 'textarea' } },
          {
            type: 'object',
            name: 'retreats',
            label: 'Retraites (2)',
            list: true,
            ui: { itemProps: (item) => ({ label: item.title ?? 'Retraite' }) },
            fields: [
              { type: 'string', name: 'tag', label: 'Tag (ex: Réservé aux femmes)' },
              { type: 'string', name: 'title', label: 'Titre' },
              { type: 'string', name: 'date', label: 'Date' },
              { type: 'string', name: 'location', label: 'Lieu' },
              {
                type: 'string',
                name: 'activities',
                label: 'Activités',
                list: true,
                ui: { component: 'tags' },
              },
              { type: 'string', name: 'cta', label: 'Texte du bouton' },
            ],
          },
        ],
      },

      // ══════════════════════════════════════════
      //  PAGE PHILOSOPHIE
      // ══════════════════════════════════════════
      {
        name: 'philosophie',
        label: '🌱 Page Philosophie',
        path: 'content/pages',
        match: { include: 'philosophie' },
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'pageTitle', label: 'Titre de la page' },
          { type: 'string', name: 'pageSubtitle', label: 'Sous-titre' },
          { type: 'string', name: 'eyebrow', label: 'Étiquette' },
          { type: 'string', name: 'title', label: 'Titre principal' },
          {
            type: 'string',
            name: 'paragraphs',
            label: 'Paragraphes (un par champ)',
            list: true,
            ui: { component: 'textarea' },
          },
          { type: 'string', name: 'quote', label: 'Citation', ui: { component: 'textarea' } },
          { type: 'string', name: 'quoteAuthor', label: "Auteur de la citation" },
          { type: 'string', name: 'quoteRole', label: "Rôle de l'auteur" },
          {
            type: 'object',
            name: 'certs',
            label: 'Certifications (3)',
            list: true,
            ui: { itemProps: (item) => ({ label: item.text ?? 'Certification' }) },
            fields: [
              { type: 'string', name: 'text', label: 'Titre de la certification' },
              { type: 'string', name: 'sub', label: 'Établissement' },
            ],
          },
        ],
      },

      // ══════════════════════════════════════════
      //  PAGE CONTACT
      // ══════════════════════════════════════════
      {
        name: 'contact',
        label: '📞 Page Contact',
        path: 'content/pages',
        match: { include: 'contact' },
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'pageTitle', label: 'Titre de la page' },
          { type: 'string', name: 'pageSubtitle', label: 'Sous-titre' },
          { type: 'string', name: 'notice', label: 'Notice en haut de page', ui: { component: 'textarea' } },
          { type: 'string', name: 'address', label: 'Adresse' },
          { type: 'string', name: 'phone', label: 'Téléphone' },
          { type: 'string', name: 'email', label: 'Email' },
          { type: 'string', name: 'hoursWeek', label: 'Horaires semaine (ex: Lundi – Samedi : 10h – 19h)' },
          { type: 'string', name: 'hoursSunday', label: 'Horaires dimanche' },
          { type: 'string', name: 'hoursSundayNote', label: 'Note horaire dimanche (supplément)' },
        ],
      },

      // ══════════════════════════════════════════
      //  PAGE COLLABORATIONS
      // ══════════════════════════════════════════
      {
        name: 'collaborations',
        label: '🤝 Page Collaborations',
        path: 'content/pages',
        match: { include: 'collaborations' },
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'pageTitle', label: 'Titre de la page' },
          { type: 'string', name: 'pageSubtitle', label: 'Sous-titre' },
          { type: 'string', name: 'introTitle', label: 'Titre intro' },
          { type: 'string', name: 'introText', label: 'Texte intro', ui: { component: 'textarea' } },
          {
            type: 'object',
            name: 'collabs',
            label: 'Collaborateurs (3)',
            list: true,
            ui: { itemProps: (item) => ({ label: item.name ?? 'Collaborateur' }) },
            fields: [
              { type: 'string', name: 'initials', label: 'Initiales (ex: CB)' },
              { type: 'string', name: 'name', label: 'Nom complet' },
              { type: 'string', name: 'role', label: 'Rôle / Titre' },
              { type: 'string', name: 'desc', label: 'Description', ui: { component: 'textarea' } },
            ],
          },
        ],
      },

      // ══════════════════════════════════════════
      //  PARAMÈTRES GLOBAUX (footer, nav, liens)
      // ══════════════════════════════════════════
      {
        name: 'settings',
        label: '⚙️ Paramètres du site',
        path: 'content',
        match: { include: 'settings' },
        format: 'json',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: 'string', name: 'siteName', label: 'Nom du site' },
          { type: 'string', name: 'siteTagline', label: 'Accroche (sous le logo)' },
          { type: 'string', name: 'planityUrl', label: 'URL Planity (réservation)' },
          { type: 'string', name: 'instagramUrl', label: 'URL Instagram' },
          { type: 'string', name: 'facebookUrl', label: 'URL Facebook' },
          { type: 'string', name: 'formspreeId', label: 'ID Formspree (formulaire de contact)' },
          { type: 'string', name: 'siret', label: 'Numéro SIRET' },
          {
            type: 'object',
            name: 'footer',
            label: 'Pied de page',
            fields: [
              { type: 'string', name: 'description', label: 'Description de la marque', ui: { component: 'textarea' } },
              { type: 'string', name: 'copyright', label: 'Texte copyright' },
            ],
          },
        ],
      },

    ],
  },
})
