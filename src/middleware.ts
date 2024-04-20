import createMiddleware from 'next-intl/middleware'
import { LOCALES } from './constantes'
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,
 
  // Used when no locale matches
  defaultLocale: 'fr'
})
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr)/:path*']
}