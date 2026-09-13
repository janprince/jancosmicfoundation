'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MagnifyingGlass, Play } from '@phosphor-icons/react';
import SectionHeader from '@/components/ui/SectionHeader';

interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  { id: '3lvQTfJfOB0', title: 'The 7 Energy Centers | What are Chakras?' },
  { id: 'lO75YxDm20Y', title: 'Beloved Brothers and Sisters | The Power of Unity and Love' },
  { id: 'GDo_shRVFaM', title: 'The Hidden Side of Sex Addiction' },
  { id: 'fDo0KwuxqUk', title: 'The True Meaning of the Parable of the Prodigal Son' },
  { id: 'Bp0LjFBCaS0', title: 'Secrets about Nephilims, Intimacy and Career Tips' },
  { id: 'NlIPosREbao', title: 'The Art of Spiritual Coaching' },
  { id: 'AyD5hQrlz20', title: 'Children and Spirituality' },
  { id: '6HDFt7eQSts', title: 'How to Clear Negative Energies in The Body' },
  { id: '3z8hIU6iy1Y', title: 'Secrets of the Mind, Spirit and Body Connection' },
  { id: 'ocTnAjEa_fc', title: 'Rapture' },
  { id: 'cLm7Tu9I2UU', title: 'The Bible' },
  { id: 'Rnd0DZDTDMU', title: 'The Bible | Part 2 | Stories of the Bible' },
  { id: 'st-JVsaYBUc', title: 'Atheism vs. Belief: The Surprising Connection Within' },
  { id: 'ETIeHPFHZMY', title: 'The Spiritual Significance of Christmas' },
  { id: 'u0I6lRce0wQ', title: 'Resurrection | The True Meaning' },
];

const PLAYLIST_ID = 'PL77C1eSjQlOJPUZ0mgkVaBZEFkrf7efcv';

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [playing, setPlaying] = useState(false);
  const [query, setQuery] = useState('');
  const visibleVideos = videos.filter(video => video.title.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <section className="section bg-cream">
      <div className="wrap">
        <SectionHeader label="Video Teachings" title="Conversations with Dr. Jan" />

        {/* Player */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative w-full overflow-hidden rounded-card bg-navy" style={{ paddingBottom: '56.25%' }}>
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${activeVideo.id}?rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="group absolute inset-0 h-full w-full cursor-pointer text-white"
                onClick={() => setPlaying(true)}
                aria-label={`Play ${activeVideo.title}`}
              >
                <Image
                  src={`https://img.youtube.com/vi/${activeVideo.id}/hqdefault.jpg`}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 900px) 100vw, 900px"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent" />
                <span className="absolute bottom-6 left-6 flex items-center gap-4">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gold text-navy shadow-[0_0_0_8px_rgba(212,168,67,0.28)] transition-shadow duration-500 group-hover:shadow-[0_0_0_14px_rgba(212,168,67,0.18)]">
                    <Play size={24} weight="fill" aria-hidden="true" />
                  </span>
                  <span className="font-medium">Play teaching</span>
                </span>
              </button>
            )}
          </div>

          <div className="mt-6">
            <p className="eyebrow">{playing ? 'Now playing' : 'Featured teaching'}</p>
            <h3 className="mt-2 text-2xl leading-snug sm:text-3xl">{activeVideo.title}</h3>
          </div>
        </div>

        {/* Collection */}
        <div className="mx-auto mt-16 max-w-4xl border-t border-line pt-12">
          <label htmlFor="teaching-search" className="field-label">Find a teaching by title</label>
          <div className="relative mb-6">
            <MagnifyingGlass size={20} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" />
            <input
              id="teaching-search"
              type="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              className="field !pl-12"
              placeholder="Search teachings"
            />
          </div>
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-sm text-muted">
              {visibleVideos.length} {visibleVideos.length === 1 ? 'teaching' : 'teachings'}
            </p>
            <a href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`} target="_blank" rel="noopener noreferrer" className="text-link text-sm">
              View all on YouTube
            </a>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {visibleVideos.map((video) => {
              const isActive = video.id === activeVideo.id;
              return (
                <button
                  key={video.id}
                  onClick={() => {
                    setActiveVideo(video);
                    setPlaying(true);
                    // Scroll to player on mobile
                    if (window.innerWidth < 1024) {
                      document.getElementById('video-player-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={[
                    'group flex gap-3 rounded-2xl border p-2.5 pr-4 text-left transition-colors duration-200',
                    isActive ? 'border-navy/20 bg-white' : 'border-transparent hover:border-line hover:bg-white',
                  ].join(' ')}
                >
                  <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-xl">
                    <Image src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} alt="" fill className="object-cover" sizes="112px" />
                    {isActive ? (
                      <div className="absolute inset-0 grid place-items-center bg-navy/45">
                        <div className="flex items-end gap-0.5">
                          <span className="block h-3 w-0.5 animate-pulse rounded-full bg-white" />
                          <span className="block h-4 w-0.5 animate-pulse rounded-full bg-white" style={{ animationDelay: '0.15s' }} />
                          <span className="block h-2.5 w-0.5 animate-pulse rounded-full bg-white" style={{ animationDelay: '0.3s' }} />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 grid place-items-center bg-navy/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <Play size={20} weight="fill" className="text-white" aria-hidden="true" />
                      </div>
                    )}
                  </div>
                  <div className="flex min-w-0 flex-col justify-center">
                    <p className={['line-clamp-2 text-sm font-medium leading-snug transition-colors', isActive ? 'text-navy' : 'text-ink group-hover:text-navy'].join(' ')}>
                      {video.title}
                    </p>
                    <span className="mt-1 text-xs text-muted">Dr. Baffour Jan</span>
                  </div>
                </button>
              );
            })}
          </div>
          {visibleVideos.length === 0 && (
            <p role="status" className="py-6 text-center text-muted">No teachings match that title. Try another word or clear your search.</p>
          )}
        </div>
      </div>
    </section>
  );
}
