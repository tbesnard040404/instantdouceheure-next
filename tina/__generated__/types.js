export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const HomePartsFragmentDoc = gql`
    fragment HomeParts on Home {
  __typename
  hero {
    __typename
    eyebrow
    title
    subtitle
    ctaPrimary
    ctaSecondary
    badgeNumber
    badgeLabel
  }
  services {
    __typename
    eyebrow
    title
    subtitle
    cards {
      __typename
      title
      desc
      price
      cta
    }
  }
  philosophy {
    __typename
    title
    text
    cta
  }
  cta {
    __typename
    eyebrow
    title
    text
    ctaPrimary
    ctaSecondary
  }
}
    `;
export const TarifsPartsFragmentDoc = gql`
    fragment TarifsParts on Tarifs {
  __typename
  pageTitle
  pageSubtitle
  notice
  rows {
    __typename
    duree
    type
    typeDetail
    prix
    description
  }
  soins {
    __typename
    title
    desc
    cta
    ctaLink
  }
}
    `;
export const AbonnementsPartsFragmentDoc = gql`
    fragment AbonnementsParts on Abonnements {
  __typename
  pageTitle
  pageSubtitle
  sectionTitle
  sectionSubtitle
  plans {
    __typename
    name
    price
    period
    desc
    popular
    feats
  }
}
    `;
export const AteliersPartsFragmentDoc = gql`
    fragment AteliersParts on Ateliers {
  __typename
  pageTitle
  pageSubtitle
  introEyebrow
  introTitle
  introText
  items {
    __typename
    title
    price
    priceUnit
    desc
    date
  }
  promo {
    __typename
    title
    text
    priceBefore
    priceAfter
  }
}
    `;
export const RetraitesPartsFragmentDoc = gql`
    fragment RetraitesParts on Retraites {
  __typename
  pageTitle
  pageSubtitle
  introEyebrow
  introTitle
  introText
  retreats {
    __typename
    tag
    title
    date
    location
    activities
    cta
  }
}
    `;
export const PhilosophiePartsFragmentDoc = gql`
    fragment PhilosophieParts on Philosophie {
  __typename
  pageTitle
  pageSubtitle
  eyebrow
  title
  paragraphs
  quote
  quoteAuthor
  quoteRole
  certs {
    __typename
    text
    sub
  }
}
    `;
export const ContactPartsFragmentDoc = gql`
    fragment ContactParts on Contact {
  __typename
  pageTitle
  pageSubtitle
  notice
  address
  phone
  email
  hoursWeek
  hoursSunday
  hoursSundayNote
}
    `;
export const CollaborationsPartsFragmentDoc = gql`
    fragment CollaborationsParts on Collaborations {
  __typename
  pageTitle
  pageSubtitle
  introTitle
  introText
  collabs {
    __typename
    initials
    name
    role
    desc
  }
}
    `;
export const SettingsPartsFragmentDoc = gql`
    fragment SettingsParts on Settings {
  __typename
  siteName
  siteTagline
  planityUrl
  instagramUrl
  facebookUrl
  formspreeId
  siret
  footer {
    __typename
    description
    copyright
  }
}
    `;
export const HomeDocument = gql`
    query home($relativePath: String!) {
  home(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeParts
  }
}
    ${HomePartsFragmentDoc}`;
export const HomeConnectionDocument = gql`
    query homeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeFilter) {
  homeConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeParts
      }
    }
  }
}
    ${HomePartsFragmentDoc}`;
export const TarifsDocument = gql`
    query tarifs($relativePath: String!) {
  tarifs(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TarifsParts
  }
}
    ${TarifsPartsFragmentDoc}`;
export const TarifsConnectionDocument = gql`
    query tarifsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TarifsFilter) {
  tarifsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TarifsParts
      }
    }
  }
}
    ${TarifsPartsFragmentDoc}`;
export const AbonnementsDocument = gql`
    query abonnements($relativePath: String!) {
  abonnements(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AbonnementsParts
  }
}
    ${AbonnementsPartsFragmentDoc}`;
export const AbonnementsConnectionDocument = gql`
    query abonnementsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AbonnementsFilter) {
  abonnementsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AbonnementsParts
      }
    }
  }
}
    ${AbonnementsPartsFragmentDoc}`;
export const AteliersDocument = gql`
    query ateliers($relativePath: String!) {
  ateliers(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AteliersParts
  }
}
    ${AteliersPartsFragmentDoc}`;
export const AteliersConnectionDocument = gql`
    query ateliersConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AteliersFilter) {
  ateliersConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AteliersParts
      }
    }
  }
}
    ${AteliersPartsFragmentDoc}`;
export const RetraitesDocument = gql`
    query retraites($relativePath: String!) {
  retraites(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...RetraitesParts
  }
}
    ${RetraitesPartsFragmentDoc}`;
export const RetraitesConnectionDocument = gql`
    query retraitesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: RetraitesFilter) {
  retraitesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...RetraitesParts
      }
    }
  }
}
    ${RetraitesPartsFragmentDoc}`;
export const PhilosophieDocument = gql`
    query philosophie($relativePath: String!) {
  philosophie(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PhilosophieParts
  }
}
    ${PhilosophiePartsFragmentDoc}`;
export const PhilosophieConnectionDocument = gql`
    query philosophieConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PhilosophieFilter) {
  philosophieConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PhilosophieParts
      }
    }
  }
}
    ${PhilosophiePartsFragmentDoc}`;
export const ContactDocument = gql`
    query contact($relativePath: String!) {
  contact(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ContactParts
  }
}
    ${ContactPartsFragmentDoc}`;
export const ContactConnectionDocument = gql`
    query contactConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContactFilter) {
  contactConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ContactParts
      }
    }
  }
}
    ${ContactPartsFragmentDoc}`;
export const CollaborationsDocument = gql`
    query collaborations($relativePath: String!) {
  collaborations(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CollaborationsParts
  }
}
    ${CollaborationsPartsFragmentDoc}`;
export const CollaborationsConnectionDocument = gql`
    query collaborationsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CollaborationsFilter) {
  collaborationsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CollaborationsParts
      }
    }
  }
}
    ${CollaborationsPartsFragmentDoc}`;
export const SettingsDocument = gql`
    query settings($relativePath: String!) {
  settings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SettingsParts
  }
}
    ${SettingsPartsFragmentDoc}`;
export const SettingsConnectionDocument = gql`
    query settingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SettingsFilter) {
  settingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SettingsParts
      }
    }
  }
}
    ${SettingsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    home(variables, options) {
      return requester(HomeDocument, variables, options);
    },
    homeConnection(variables, options) {
      return requester(HomeConnectionDocument, variables, options);
    },
    tarifs(variables, options) {
      return requester(TarifsDocument, variables, options);
    },
    tarifsConnection(variables, options) {
      return requester(TarifsConnectionDocument, variables, options);
    },
    abonnements(variables, options) {
      return requester(AbonnementsDocument, variables, options);
    },
    abonnementsConnection(variables, options) {
      return requester(AbonnementsConnectionDocument, variables, options);
    },
    ateliers(variables, options) {
      return requester(AteliersDocument, variables, options);
    },
    ateliersConnection(variables, options) {
      return requester(AteliersConnectionDocument, variables, options);
    },
    retraites(variables, options) {
      return requester(RetraitesDocument, variables, options);
    },
    retraitesConnection(variables, options) {
      return requester(RetraitesConnectionDocument, variables, options);
    },
    philosophie(variables, options) {
      return requester(PhilosophieDocument, variables, options);
    },
    philosophieConnection(variables, options) {
      return requester(PhilosophieConnectionDocument, variables, options);
    },
    contact(variables, options) {
      return requester(ContactDocument, variables, options);
    },
    contactConnection(variables, options) {
      return requester(ContactConnectionDocument, variables, options);
    },
    collaborations(variables, options) {
      return requester(CollaborationsDocument, variables, options);
    },
    collaborationsConnection(variables, options) {
      return requester(CollaborationsConnectionDocument, variables, options);
    },
    settings(variables, options) {
      return requester(SettingsDocument, variables, options);
    },
    settingsConnection(variables, options) {
      return requester(SettingsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/628ca68d-64b1-480b-9332-c239e0444bfc/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
