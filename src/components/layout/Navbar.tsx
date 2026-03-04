'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import { HiChevronDown } from 'react-icons/hi2';
import { NavLink } from '@/types';
import MobileMenu from './MobileMenu';

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Mission & Vision', href: '/about/mission-vision' },
    ],
  },
  { label: 'Events', href: '/events' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Centres', href: '/centres' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Track scroll position to toggle solid background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white shadow-md shadow-black/8'
            : 'bg-transparent',
        ].join(' ')}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0 group"
              aria-label="Jan Cosmic Foundation — home"
            >
              {/* Emblem mark */}
              <span
                className="flex items-center justify-center w-9 h-9 rounded-full text-white text-sm font-bold shrink-0"
                style={{ backgroundColor: '#2D6A4F' }}
              >
                <span style={{ color: '#D4A843' }}>JCF</span>
              </span>
              {/* Full name — hidden on very small screens */}
              <span
                className={[
                  'hidden sm:block text-lg font-bold leading-tight transition-colors duration-300',
                  scrolled ? 'text-[#000B58]' : 'text-white',
                ].join(' ')}
              >
                Jan Cosmic{' '}
                <span style={{ color: '#D4A843' }}>Foundation</span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <div
              ref={dropdownRef}
              className="hidden lg:flex items-center gap-1"
            >
              {navLinks.map((link) =>
                link.children ? (
                  // Dropdown link
                  <div key={link.href} className="relative">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.href ? null : link.href,
                        )
                      }
                      onMouseEnter={() => setActiveDropdown(link.href)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      aria-expanded={activeDropdown === link.href}
                      aria-haspopup="true"
                      className={[
                        'flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium',
                        'transition-all duration-200 relative group',
                        scrolled
                          ? 'text-gray-700 hover:text-[#2D6A4F]'
                          : 'text-white/90 hover:text-white',
                        isActivePath(link.href)
                          ? scrolled
                            ? 'text-[#2D6A4F]'
                            : 'text-white'
                          : '',
                      ].join(' ')}
                    >
                      {link.label}
                      <HiChevronDown
                        className={[
                          'w-4 h-4 transition-transform duration-200',
                          activeDropdown === link.href ? 'rotate-180' : '',
                        ].join(' ')}
                      />
                      {/* Underline indicator */}
                      <span
                        className={[
                          'absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-transform duration-200 origin-left',
                          isActivePath(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                        ].join(' ')}
                        style={{ backgroundColor: '#2D6A4F' }}
                      />
                    </button>

                    {/* Dropdown panel */}
                    {activeDropdown === link.href && (
                      <div
                        onMouseEnter={() => setActiveDropdown(link.href)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 py-2 z-50 animate-fade-in"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={[
                              'block px-4 py-2.5 text-sm transition-colors duration-150',
                              'hover:bg-[#2D6A4F]/8 hover:text-[#2D6A4F]',
                              isActivePath(child.href)
                                ? 'text-[#2D6A4F] font-medium bg-[#2D6A4F]/5'
                                : 'text-gray-700',
                            ].join(' ')}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular link
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      'relative px-3 py-2 rounded-md text-sm font-medium',
                      'transition-all duration-200 group',
                      scrolled
                        ? 'text-gray-700 hover:text-[#2D6A4F]'
                        : 'text-white/90 hover:text-white',
                      isActivePath(link.href)
                        ? scrolled
                          ? 'text-[#2D6A4F]'
                          : 'text-white'
                        : '',
                    ].join(' ')}
                  >
                    {link.label}
                    {/* Animated underline */}
                    <span
                      className={[
                        'absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-transform duration-200 origin-left',
                        isActivePath(link.href)
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100',
                      ].join(' ')}
                      style={{ backgroundColor: '#2D6A4F' }}
                    />
                  </Link>
                ),
              )}

              {/* Donate CTA button */}
              <Link
                href="/donate"
                className={[
                  'ml-3 px-5 py-2 rounded-lg text-sm font-semibold text-white',
                  'transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-100',
                ].join(' ')}
                style={{ backgroundColor: '#2D6A4F' }}
              >
                Donate
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className={[
                'lg:hidden p-2 rounded-md transition-colors duration-200',
                scrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10',
              ].join(' ')}
            >
              <HiOutlineBars3BottomRight className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
