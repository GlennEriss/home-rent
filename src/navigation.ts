import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { LOCALES } from './constantes'

export const locales = LOCALES
export const localePrefix = 'never'

export const accessible_routes = [
  '',
  'catalogues',
  'apartment/:id',
  'house/:id',
  'studio/:id',
  'land/:id',
];

export const protected_routes = [
  'profil',
  'annonce',
  'annonce/create',
  'annonce/create/apartment',
  'annonce/create/house',
  'annonce/create/land',
  'annonce/create/studio',
]
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })