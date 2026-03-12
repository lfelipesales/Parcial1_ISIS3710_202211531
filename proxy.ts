import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'es']
const defaultLocale = 'es'

export function proxy(request: NextRequest) {

  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  const locale = request.headers
    .get('accept-language')
    ?.split(',')[0]
    .split('-')[0]

  const selectedLocale =
    locale && locales.includes(locale) ? locale : defaultLocale

  request.nextUrl.pathname = `/${selectedLocale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next).*)'],
}