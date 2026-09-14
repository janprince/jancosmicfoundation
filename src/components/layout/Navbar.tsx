'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { CaretDown, List } from '@phosphor-icons/react';
import type { NavLink } from '@/types';
import MobileMenu from './MobileMenu';

const navLinks: NavLink[] = [
  { label: 'The Foundation', href: '/about', children: [
    { label: 'About the Foundation', href: '/about' },
    { label: 'Dr. Baffour Jan', href: '/about/founder' },
    { label: 'Community', href: '/community' },
    { label: 'Life at the Foundation', href: '/gallery' },
  ] },
  { label: 'Teachings', href: '/teachings', children: [
    { label: 'Public teachings', href: '/teachings' },
    { label: 'Writings', href: '/blog' },
    { label: 'InnerSpace — structured study', href: '/innerspace' },
  ] },
  { label: 'Visit & gatherings', href: '/visit', children: [
    { label: 'Plan a visit', href: '/visit' },
    { label: 'Retreats & events', href: '/events' },
    { label: 'Centres & communities', href: '/centres' },
  ] },
  { label: 'Our work', href: '/programs', children: [
    { label: 'Programmes & service', href: '/programs' },
    { label: 'Volunteer', href: '/volunteer' },
  ] },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  return <>
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/" className="site-wordmark" aria-label="Jan Cosmic Foundation — home">
          <Image src="/images/logo.png" alt="" width={36} height={36} className="rounded-full" />
          <span className="sm:hidden">JCF</span>
          <span className="hidden sm:inline">Jan Cosmic Foundation</span>
        </Link>
        <div className="hidden xl:flex items-center gap-1" key={pathname}>
          {navLinks.map(link => <Popover key={link.href} className="relative">
            <PopoverButton className="nav-trigger" data-current={link.children?.some(child => child.href === pathname) || undefined}>
              {link.label}<CaretDown size={14} aria-hidden="true" />
            </PopoverButton>
            <PopoverPanel className="nav-panel">
              {({ close }) => <>{link.children?.map(child => <Link key={child.href} href={child.href} onClick={() => close()} aria-current={pathname === child.href ? 'page' : undefined}>{child.label}</Link>)}</>}
            </PopoverPanel>
          </Popover>)}
          <Link href="/contact" className="nav-trigger" aria-current={pathname === '/contact' ? 'page' : undefined}>Contact</Link>
          <Link href="/donate" className="button gold button-sm ml-3" aria-current={pathname === '/donate' ? 'page' : undefined}>Give</Link>
        </div>
        <button onClick={() => setMobileOpen(true)} className="xl:hidden grid h-11 w-11 place-items-center text-navy" aria-label="Open navigation menu"><List size={25} aria-hidden="true" /></button>
      </nav>
    </header>
    <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} navLinks={navLinks} />
  </>;
}
