import 'server-only'

const dictionaries = {
  en: async () => (await import('../../app/dictionaries/en.json')).default,
  es: async () => (await import('../../app/dictionaries/es.json')).default
}

export async function getDictionary(locale: 'en' | 'es') {
  return dictionaries[locale]()
}