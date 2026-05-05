'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

const locales = [
  // América del Norte
  { code: 'es-MX', flag: '🇲🇽', label: 'ES', full: 'Español (México)' },
  { code: 'en-US', flag: '🇺🇸', label: 'EN', full: 'English (US)' },
  { code: 'en-CA', flag: '🇨🇦', label: 'EN', full: 'English (Canada)' },
  { code: 'fr-CA', flag: '🇨🇦', label: 'FR', full: 'Français (Canada)' },
  
  // España
  { code: 'es-ES', flag: '🇪🇸', label: 'ES', full: 'Español (España)' },

  // América Central
  { code: 'es-GT', flag: '🇬🇹', label: 'ES', full: 'Español (Guatemala)' },
  { code: 'es-BZ', flag: '🇧🇿', label: 'ES', full: 'Español (Belice)' },
  { code: 'es-HN', flag: '🇭🇳', label: 'ES', full: 'Español (Honduras)' },
  { code: 'es-SV', flag: '🇸🇻', label: 'ES', full: 'Español (El Salvador)' },
  { code: 'es-NI', flag: '🇳🇮', label: 'ES', full: 'Español (Nicaragua)' },
  { code: 'es-CR', flag: '🇨🇷', label: 'ES', full: 'Español (Costa Rica)' },
  { code: 'es-PA', flag: '🇵🇦', label: 'ES', full: 'Español (Panamá)' },

  // El Caribe
  { code: 'es-CU', flag: '🇨🇺', label: 'ES', full: 'Español (Cuba)' },
  { code: 'es-DO', flag: '🇩🇴', label: 'ES', full: 'Español (Rep. Dominicana)' },
  { code: 'es-PR', flag: '🇵🇷', label: 'ES', full: 'Español (Puerto Rico)' },

  // América del Sur
  { code: 'es-CO', flag: '🇨🇴', label: 'ES', full: 'Español (Colombia)' },
  { code: 'es-VE', flag: '🇻🇪', label: 'ES', full: 'Español (Venezuela)' },
  { code: 'es-EC', flag: '🇪🇨', label: 'ES', full: 'Español (Ecuador)' },
  { code: 'es-PE', flag: '🇵🇪', label: 'ES', full: 'Español (Perú)' },
  { code: 'es-BO', flag: '🇧🇴', label: 'ES', full: 'Español (Bolivia)' },
  { code: 'es-CL', flag: '🇨🇱', label: 'ES', full: 'Español (Chile)' },
  { code: 'es-AR', flag: '🇦🇷', label: 'ES', full: 'Español (Argentina)' },
  { code: 'es-UY', flag: '🇺🇾', label: 'ES', full: 'Español (Uruguay)' },
  { code: 'es-PY', flag: '🇵🇾', label: 'ES', full: 'Español (Paraguay)' },
  { code: 'pt-BR', flag: '🇧🇷', label: 'PT', full: 'Português (Brasil)' },
  { code: 'es-GY', flag: '🇬🇾', label: 'ES', full: 'Español (Guyana)' },
  { code: 'es-SR', flag: '🇸🇷', label: 'ES', full: 'Español (Surinam)' },
];

export default function LocaleSwitcher() {
  const params = useParams();
  const locale = params.locale as string;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.code === locale) ?? locales[0];

const handleChange = (newLocale: string) => {
  const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
  router.push(newPath);
  setOpen(false);
};

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-150"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span>{current.label}</span>
        <svg
          className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-1.5 w-44 z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden dropdown-enter">
          {locales.map(({ code, flag, full }) => (
            <button
              key={code}
              onClick={() => handleChange(code)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors duration-100 ${
                locale === code
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className="text-base">{flag}</span>
              <span>{full}</span>
              {locale === code && (
                <svg className="ml-auto w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}