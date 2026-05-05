// src/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['es-MX', 'es-ES', 'en-US', 'en-GB', 'fr-FR'],
  defaultLocale: 'es-MX',

  // Detecta automáticamente según el navegador del usuario
  localeDetection: true
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};