// src/i18n.ts
import { getRequestConfig } from 'next-intl/server';

const loadMessages = async (locale: string) => {
  switch (locale) {
    // América del Norte
    case 'es-MX': return (await import('./messages/es-MX.json')).default;
    case 'en-US': return (await import('./messages/en-US.json')).default;
    case 'en-CA': return (await import('./messages/en-CA.json')).default;
    case 'fr-CA': return (await import('./messages/fr-CA.json')).default;
    
    // España
    case 'es-ES': return (await import('./messages/es-ES.json')).default;

    // América Central
    case 'es-GT': return (await import('./messages/es-GT.json')).default;
    case 'es-BZ': return (await import('./messages/es-BZ.json')).default;
    case 'es-HN': return (await import('./messages/es-HN.json')).default;
    case 'es-SV': return (await import('./messages/es-SV.json')).default;
    case 'es-NI': return (await import('./messages/es-NI.json')).default;
    case 'es-CR': return (await import('./messages/es-CR.json')).default;
    case 'es-PA': return (await import('./messages/es-PA.json')).default;

    // El Caribe
    case 'es-CU': return (await import('./messages/es-CU.json')).default;
    case 'es-DO': return (await import('./messages/es-DO.json')).default;
    case 'es-PR': return (await import('./messages/es-PR.json')).default;

    // América del Sur
    case 'es-CO': return (await import('./messages/es-CO.json')).default;
    case 'es-VE': return (await import('./messages/es-VE.json')).default;
    case 'es-EC': return (await import('./messages/es-EC.json')).default;
    case 'es-PE': return (await import('./messages/es-PE.json')).default;
    case 'es-BO': return (await import('./messages/es-BO.json')).default;
    case 'es-CL': return (await import('./messages/es-CL.json')).default;
    case 'es-AR': return (await import('./messages/es-AR.json')).default;
    case 'es-UY': return (await import('./messages/es-UY.json')).default;
    case 'es-PY': return (await import('./messages/es-PY.json')).default;
    case 'pt-BR': return (await import('./messages/pt-BR.json')).default;
    case 'es-GY': return (await import('./messages/es-GY.json')).default;
    case 'es-SR': return (await import('./messages/es-SR.json')).default;

    // Estados Unidos (Español)
    case 'es-US': return (await import('./messages/es-US.json')).default;

    // México (Inglés)
    case 'en-MX': return (await import('./messages/en-MX.json')).default;

    // España (Inglés)
    case 'en-ES': return (await import('./messages/en-ES.json')).default;

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