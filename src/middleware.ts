// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
const locales = [
  'es-MX', 'en-US', 'en-CA', 'fr-CA', 'es-ES',
  'es-GT', 'es-BZ', 'es-HN', 'es-SV', 'es-NI', 'es-CR', 'es-PA',
  'es-CU', 'es-DO', 'es-PR',
  'es-CO', 'es-VE', 'es-EC', 'es-PE', 'es-BO', 'es-CL',
  'es-AR', 'es-UY', 'es-PY', 'pt-BR', 'es-GY', 'es-SR',
];

export default createMiddleware({
  locales,
  defaultLocale: 'es-MX',

  // Detecta automáticamente según el navegador del usuario
  localeDetection: true
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};