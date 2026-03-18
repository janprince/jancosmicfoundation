'use client';

import { useState, useEffect } from 'react';

const themes = [
  {
    id: 'green',
    label: 'Current Green',
    primary: '#2D6A4F',
    rgb: '45, 106, 79',
    swatch: '#2D6A4F',
  },
  {
    id: 'amber',
    label: 'Warm Amber',
    primary: '#C4922A',
    rgb: '196, 146, 42',
    swatch: '#C4922A',
  },
  {
    id: 'royal',
    label: 'Royal Blue',
    primary: '#2541B2',
    rgb: '37, 65, 178',
    swatch: '#2541B2',
  },
  {
    id: 'teal',
    label: 'Muted Teal',
    primary: '#1B6B6D',
    rgb: '27, 107, 109',
    swatch: '#1B6B6D',
  },
] as const;

export default function ThemeSwitcher() {
  const [active, setActive] = useState('green');
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const theme = themes.find((t) => t.id === active)!;
    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-primary-rgb', theme.rgb);
  }, [active]);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {expanded ? (
        <div
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-64"
          style={{ fontFamily: 'var(--font-sans), sans-serif' }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Compare Colors
            </span>
            <button
              onClick={() => setExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors text-lg leading-none"
              aria-label="Minimize theme switcher"
            >
              &times;
            </button>
          </div>

          <div className="space-y-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActive(theme.id)}
                className={[
                  'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200',
                  active === theme.id
                    ? 'bg-gray-100 ring-2 ring-gray-300'
                    : 'hover:bg-gray-50',
                ].join(' ')}
              >
                <span
                  className="w-8 h-8 rounded-full shrink-0 shadow-inner border-2 border-white ring-1 ring-gray-200"
                  style={{ backgroundColor: theme.swatch }}
                />
                <div>
                  <span className="text-sm font-medium text-gray-800 block">
                    {theme.label}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    {theme.primary}
                  </span>
                </div>
                {active === theme.id && (
                  <svg className="w-4 h-4 ml-auto text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-[10px] text-gray-400 leading-snug">
              Paired with Deep Indigo #000B58 and Gold #D4A843. Navigate the site to compare.
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setExpanded(true)}
          className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Open theme switcher"
        >
          <span
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: themes.find((t) => t.id === active)?.swatch }}
          />
        </button>
      )}
    </div>
  );
}
