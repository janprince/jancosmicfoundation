'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      { label: 'The Founder', href: '/about/founder' },
      { label: 'Mission & Vision', href: '/about/mission-vision' },
      { label: 'Our Programmes', href: '/programs' },
      { label: 'Our Centres', href: '/centres' },
      { label: 'Testimonials', href: '/testimonials' },
    ],
  },
  {
    label: 'Events',
    href: '/events',
    children: [
      { label: 'Upcoming Events', href: '/events' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  { label: 'Teachings', href: '/teachings' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Get Involved',
    href: '/join',
    children: [
      { label: 'Join a Centre', href: '/join' },
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
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
    // Check if pathname matches the href or any of its children
    const link = navLinks.find((l) => l.href === href);
    if (link?.children) {
      return link.children.some((child) => pathname.startsWith(child.href));
    }
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
              className="flex items-center gap-3 shrink-0 group"
              aria-label="Jan Cosmic Foundation — home"
            >
              <Image src="/images/logo.png" alt="JCF Logo" width={36} height={36} className="rounded-full" />
              <span
                className={[
                  'text-sm font-normal uppercase tracking-[0.2em] transition-colors duration-300',
                  scrolled ? 'text-[#000B58]' : 'text-white',
                ].join(' ')}
              >
                <span className="sm:hidden">JCF</span>
                <span className="hidden sm:inline">Jan Cosmic Foundation</span>
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
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.href ? null : link.href,
                        )
                      }
                      aria-expanded={activeDropdown === link.href}
                      aria-haspopup="true"
                      className={[
                        'flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium',
                        'transition-all duration-200 relative group',
                        scrolled
                          ? 'text-gray-700 hover:text-primary'
                          : 'text-white/90 hover:text-white',
                        isActivePath(link.href)
                          ? scrolled
                            ? 'text-primary'
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
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      />
                    </button>

                    {/* Dropdown panel */}
                    {activeDropdown === link.href && (
                      <div
                        className="absolute top-full left-0 pt-1 w-52 z-50"
                      >
                        <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 py-2 animate-dropdown-enter">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={[
                                'block px-4 py-2.5 text-sm transition-colors duration-150',
                                'hover:bg-primary/8 hover:text-primary',
                                isActivePath(child.href)
                                  ? 'text-primary font-medium bg-primary/5'
                                  : 'text-gray-700',
                              ].join(' ')}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
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
                        ? 'text-gray-700 hover:text-primary'
                        : 'text-white/90 hover:text-white',
                      isActivePath(link.href)
                        ? scrolled
                          ? 'text-primary'
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
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    />
                  </Link>
                ),
              )}

              {/* Donate CTA button */}
              <Link
                href="/donate"
                className="ml-3 inline-flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold text-[#000B58] bg-[#D4A843] transition-all duration-200 hover:bg-[#c49a38] hover:shadow-lg hover:scale-105 active:scale-100"
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
