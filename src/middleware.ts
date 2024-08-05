import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { accessible_routes, localePrefix, locales, protected_routes } from './navigation';

const matchPath = (path: string, patterns: string[]) => {
  return patterns.some((pattern) => {
    const regex = new RegExp(`^${pattern.replace(/:\w+/g, '\\w+')}$`);
    return regex.test(path);
  });
};

export async function middleware(req: NextRequest) {
  const intlMiddlewareResponse = createMiddleware({
    locales,
    defaultLocale: 'fr',
    localePrefix
  })(req);

  const url = req.nextUrl.clone();
  const normalizedPath = url.pathname.replace(/^\/[a-z]{2}\//, '').replace(/^\//, '');

  const token = req.cookies.get('token')?.value;

  const pathWithoutToken = matchPath(normalizedPath, accessible_routes);
  const pathWithToken = matchPath(normalizedPath, protected_routes);

  const absoluteLoginUrl = new URL('/login', req.url).toString();
  const absoluteProfileUrl = new URL('/profil', req.url).toString();

  // Route accessible sans authentification
  if (pathWithoutToken) {
    return intlMiddlewareResponse;
  }

  // Route protégée nécessitant une authentification
  if (pathWithToken) {
    if (!token) {
      // Si l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
      url.pathname = '/login';
      return NextResponse.redirect(absoluteLoginUrl);
    }

    const isValidToken = await verifyToken(token);
    if (!isValidToken) {
      // Vider les cookies si le token est invalide
      const response = NextResponse.redirect(absoluteLoginUrl);
      response.cookies.delete('token');
      return response;
    }
  } else {
    // Routes accessibles uniquement si l'utilisateur est authentifié
    if (token && normalizedPath !== 'profil') {
      url.pathname = '/profil';
      return NextResponse.redirect(absoluteProfileUrl);
    }
  }

  return intlMiddlewareResponse;
}

export const config = {
  matcher: ['/profil', '/:locale/profil', '/((?!api|_next|_vercel|.*\\..*).*)']
};
const verifyToken = async (token: string) => {
  console.log('token', {token})
  console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-token`)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  });
  //const data = await response.json()
  //console.log('data', data)
  return response.ok
};