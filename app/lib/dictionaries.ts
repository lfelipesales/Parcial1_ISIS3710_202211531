import 'server-only'

const dictionaries = {
  en: async () => (await import('../dictionaries/en.json')).default,
  es: async () => (await import('../dictionaries/es.json')).default
}

export async function getDictionary(locale: 'en' | 'es') {
  return dictionaries[locale]()
}