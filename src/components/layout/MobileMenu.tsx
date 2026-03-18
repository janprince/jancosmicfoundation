'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { HiXMark, HiChevronDown } from 'react-icons/hi2';
import { NavLink } from '@/types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href],
    );
  };

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Separate donate from the rest for the bottom CTA
  const mainLinks = navLinks.filter((l) => l.href !== '/donate');

  return (
    <Transition show={isOpen}>
      <Dialog onClose={onClose} className="relative z-50 lg:hidden">

        {/* Dark overlay */}
        <TransitionChild
          enter="transition-opacity duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />
        </TransitionChild>

        {/* Slide-in drawer */}
        <TransitionChild
          enter="transition-transform duration-300 ease-out"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-200 ease-in"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-xs bg-white flex flex-col shadow-2xl">

            {/* Drawer header */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b border-gray-100"
              style={{ backgroundColor: '#000B58' }}
            >
              {/* Logo mark */}
              <div className="flex items-center gap-3">
                <Image src="/images/logo.png" alt="JCF Logo" width={32} height={32} className="rounded-full" />
                <span className="text-white text-xs font-light uppercase tracking-[0.18em]">
                  Jan Cosmic Foundation
                </span>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="p-1.5 rounded-md text-white/85 hover:text-white hover:bg-white/10 transition-colors duration-150"
              >
                <HiXMark className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
              {mainLinks.map((link) => (
                <div key={link.href}>
                  {link.children ? (
                    // Expandable item
                    <div>
                      <button
                        onClick={() => toggleExpanded(link.href)}
                        className={[
                          'w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium',
                          'transition-colors duration-150',
                          isActivePath(link.href)
                            ? 'text-primary bg-primary/8'
                            : 'text-gray-700 hover:text-primary hover:bg-primary/5',
                        ].join(' ')}
                        aria-expanded={expandedItems.includes(link.href)}
                      >
                        <span>{link.label}</span>
                        <HiChevronDown
                          className={[
                            'w-4 h-4 transition-transform duration-200',
                            expandedItems.includes(link.href) ? 'rotate-180' : '',
                          ].join(' ')}
                        />
                      </button>

                      {/* Children — always expanded/visible on mobile */}
                      {(expandedItems.includes(link.href) || isActivePath(link.href)) && (
                        <div className="mt-1 ml-4 pl-3 border-l-2 border-primary/20 space-y-1">
                          {/* Parent link itself */}
                          <Link
                            href={link.href}
                            onClick={onClose}
                            className={[
                              'block px-3 py-2.5 rounded-lg text-sm transition-colors duration-150',
                              isActivePath(link.href) && pathname === link.href
                                ? 'text-primary font-semibold bg-primary/8'
                                : 'text-gray-600 hover:text-primary hover:bg-primary/5',
                            ].join(' ')}
                          >
                            Overview
                          </Link>
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={onClose}
                              className={[
                                'block px-3 py-2.5 rounded-lg text-sm transition-colors duration-150',
                                isActivePath(child.href)
                                  ? 'text-primary font-semibold bg-primary/8'
                                  : 'text-gray-600 hover:text-primary hover:bg-primary/5',
                              ].join(' ')}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Plain link
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={[
                        'flex items-center px-3 py-3 rounded-lg text-sm font-medium',
                        'transition-colors duration-150',
                        isActivePath(link.href)
                          ? 'text-primary bg-primary/8 font-semibold'
                          : 'text-gray-700 hover:text-primary hover:bg-primary/5',
                      ].join(' ')}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Donate CTA pinned at bottom */}
            <div className="px-5 py-5 border-t border-gray-100 space-y-3">
              <Link
                href="/donate"
                onClick={onClose}
                className={[
                  'block w-full text-center py-3 px-6 rounded-xl text-sm font-semibold text-white',
                  'transition-all duration-200 hover:shadow-lg active:scale-[0.98]',
                ].join(' ')}
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Donate Now
              </Link>
              <p className="text-center text-xs text-gray-400">
                Your support makes a difference.
              </p>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}
