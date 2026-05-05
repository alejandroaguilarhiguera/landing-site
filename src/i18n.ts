// src/i18n.ts
import { getRequestConfig } from 'next-intl/server';

const loadMessages = async (locale: string) => {
  switch (locale) {
    case 'es-MX': return (await import('./messages/es-MX.json')).default;
    case 'es-US': return (await import('./messages/es-US.json')).default;
    case 'en-US': return (await import('./messages/en-US.json')).default;
    case 'en-MX': return (await import('./messages/en-MX.json')).default;
    default:      return (await import('./messages/es-MX.json')).default;
  }
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale) locale = 'es-MX';

  const messages = await loadMessages(locale);

  return {
    locale,
    messages
  };
});