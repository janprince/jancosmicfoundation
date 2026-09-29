'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog, DialogPanel, DialogTitle, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { CaretDown, X } from '@phosphor-icons/react';
import type { NavLink } from '@/types';

export default function MobileMenu({ isOpen, onClose, navLinks }: { isOpen: boolean; onClose: () => void; navLinks: NavLink[] }) {
  const pathname = usePathname();
  return <Dialog open={isOpen} onClose={onClose} className="relative z-[70]">
    <div className="fixed inset-0 bg-navy/50" aria-hidden="true" />
    <DialogPanel className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col bg-cream">
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <DialogTitle className="font-serif text-2xl text-navy">Jan Cosmic Foundation</DialogTitle>
        <button onClick={onClose} className="grid h-11 w-11 shrink-0 place-items-center" aria-label="Close navigation menu"><X size={23} aria-hidden="true" /></button>
      </div>
      <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-6 py-4">
        <Link href="/" onClick={onClose} aria-current={pathname === '/' ? 'page' : undefined} className="mobile-nav-link">Home</Link>
        {navLinks.map(link => <Disclosure key={link.href} defaultOpen={link.children?.some(child => child.href === pathname)}>
          <DisclosureButton className="group flex min-h-12 w-full items-center justify-between border-t border-line py-3 text-left font-medium text-navy">
            {link.label}<CaretDown size={16} className="group-data-open:rotate-180" aria-hidden="true" />
          </DisclosureButton>
          <DisclosurePanel className="pb-3 pl-4">
            {link.children?.map(child => <Link key={child.href} href={child.href} onClick={onClose} aria-current={pathname === child.href ? 'page' : undefined} className="mobile-nav-link">{child.label}</Link>)}
          </DisclosurePanel>
        </Disclosure>)}
        <Link href="/contact" onClick={onClose} aria-current={pathname === '/contact' ? 'page' : undefined} className="mobile-nav-link border-t border-line">Contact & directions</Link>
      </nav>
      <div className="border-t border-line p-6 space-y-3"><Link href="/join" onClick={onClose} className="button w-full" aria-current={pathname === '/join' ? 'page' : undefined}>Join the Foundation</Link><Link href="/donate" onClick={onClose} className="button gold w-full">Give to the Foundation</Link></div>
    </DialogPanel>
  </Dialog>;
}
