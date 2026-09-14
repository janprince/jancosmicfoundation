'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/react';
import { ArrowLeft, ArrowRight, X } from '@phosphor-icons/react';
import PageHero from '@/components/layout/PageHero';
import type { GalleryItem } from '@/types';

export default function GalleryPageContent({ items }: { items: GalleryItem[] }) {
  const [category, setCategory] = useState('all');
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const categories = ['all', ...new Set(items.map(item => item.category).filter(Boolean))];
  const visible = category === 'all' ? items : items.filter(item => item.category === category);
  const index = selected ? visible.findIndex(item => item.id === selected.id) : -1;
  function move(direction: number) {
    const item = visible[index + direction];
    if (item) setSelected(item);
  }
  return <>
    <PageHero title="Life at the Foundation" subtitle="Photographs from teachings, gatherings, and time in community." />
    <section className="section bg-cream"><div className="wrap">
      {categories.length > 2 && <div className="filter-pills mb-8" role="group" aria-label="Filter photographs">
        {categories.map(value => <button key={value} aria-pressed={category === value} onClick={() => setCategory(value)}>{value === 'all' ? 'All photographs' : value.charAt(0).toUpperCase() + value.slice(1)}</button>)}
      </div>}
      <p className="text-sm text-muted mb-8" role="status">{visible.length} {visible.length === 1 ? 'photograph' : 'photographs'}</p>
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map(item => <button key={item.id} type="button" onClick={() => setSelected(item)} className="block text-left" aria-label={`Open ${item.title}`}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-sand"><Image src={item.thumbnail || item.url} alt="" fill className="object-contain" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div>
          <span className="block mt-4 text-2xl font-serif text-navy">{item.title}</span>
          {item.description && <span className="block mt-2 text-base text-muted">{item.description}</span>}
        </button>)}
      </div>
      {!visible.length && <p className="py-10 text-muted">Photographs will appear here as they are published.</p>}
    </div></section>
    <Dialog open={selected !== null} onClose={() => setSelected(null)} className="relative z-[80]" onKeyDown={event => {
      if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    }}>
      <div className="fixed inset-0 bg-navy/90" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-3 sm:p-6">
        <DialogPanel className="w-full max-w-4xl max-h-[92svh] overflow-y-auto rounded-card bg-cream">
          <div className="flex items-center justify-between px-5 py-3 border-b border-line">
            <p className="text-sm text-muted" aria-live="polite">Photograph {index + 1} of {visible.length}</p>
            <button autoFocus aria-label="Close photograph" onClick={() => setSelected(null)} className="grid h-11 w-11 place-items-center"><X size={24} aria-hidden="true" /></button>
          </div>
          {selected && <>
            <div className="relative h-[48svh] min-h-48 bg-sand"><Image src={selected.url} alt={selected.title} fill className="object-contain" sizes="(max-width: 900px) 100vw, 900px" /></div>
            <div className="p-6">
              <DialogTitle className="text-3xl">{selected.title}</DialogTitle>
              <DialogDescription className="mt-3 text-muted">{selected.description || 'A photograph from life at the Foundation.'}</DialogDescription>
              <div className="flex justify-between gap-4 mt-6">
                <button disabled={index <= 0} onClick={() => move(-1)} className="button outline button-sm"><ArrowLeft size={18} aria-hidden="true" />Previous</button>
                <button disabled={index >= visible.length - 1} onClick={() => move(1)} className="button outline button-sm">Next<ArrowRight size={18} aria-hidden="true" /></button>
              </div>
            </div>
          </>}
        </DialogPanel>
      </div>
    </Dialog>
  </>;
}
