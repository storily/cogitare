export const algolia = {
  app: process.env.ALGOLIA_APP || '2AI1VWJJIN',
  idx: process.env.ALGOLIA_IDX || 'prod_cogitare',
  key: process.env.ALGOLIA_KEY
}

export const dicere = {
  url: (process.env.DICERE_URL || 'https://dicere.cogitare.nz') + '/graphql'
}
