'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HiOutlinePlay } from 'react-icons/hi2';

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

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section label */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 rounded-full bg-[#D4A843]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a6c1a]">
              Video Teachings
            </span>
            <span className="h-px w-8 rounded-full bg-[#D4A843]" />
          </div>
          <h2 className="text-3xl font-semibold leading-tight text-[#000B58] sm:text-4xl">
            Conversations with Dr. Jan
          </h2>
        </div>

        {/* Main video player */}
        <div className="mx-auto max-w-4xl">
          <div
            className="relative w-full overflow-hidden rounded-2xl shadow-xl shadow-black/10"
            style={{ paddingBottom: '56.25%' }}
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${activeVideo.id}?rel=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Now playing label */}
          <div className="mt-5 flex items-start gap-3">
            <span className="mt-0.5 shrink-0 rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              Now Playing
            </span>
            <h3 className="text-base font-semibold leading-snug text-[#000B58] sm:text-lg">
              {activeVideo.title}
            </h3>
          </div>
        </div>

        {/* Video list */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm font-medium text-[#1a1a1a]/60">
              {videos.length} teachings in this series
            </p>
            <a
              href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              View all on YouTube &rarr;
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => {
              const isActive = video.id === activeVideo.id;
              return (
                <button
                  key={video.id}
                  onClick={() => {
                    setActiveVideo(video);
                    // Scroll to player on mobile
                    if (window.innerWidth < 1024) {
                      document
                        .getElementById('video-player-top')
                        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={[
                    'group flex gap-3 rounded-xl border p-3 text-left transition-all duration-200',
                    isActive
                      ? 'border-primary/30 bg-primary/5 shadow-sm'
                      : 'border-[#e8e4dc] bg-[#FDFBF7] hover:border-primary/20 hover:shadow-sm',
                  ].join(' ')}
                >
                  {/* Thumbnail */}
                  <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg sm:h-18 sm:w-32">
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="128px"
                    />
                    {/* Play overlay */}
                    {!isActive && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <HiOutlinePlay className="h-6 w-6 text-white" />
                      </div>
                    )}
                    {isActive && (
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/30">
                        <div className="flex items-center gap-0.5">
                          <span className="block h-3 w-0.5 animate-pulse rounded-full bg-white" />
                          <span className="block h-4 w-0.5 animate-pulse rounded-full bg-white" style={{ animationDelay: '0.15s' }} />
                          <span className="block h-2.5 w-0.5 animate-pulse rounded-full bg-white" style={{ animationDelay: '0.3s' }} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <div className="flex min-w-0 flex-col justify-center">
                    <p
                      className={[
                        'line-clamp-2 text-sm font-medium leading-snug transition-colors',
                        isActive
                          ? 'text-primary'
                          : 'text-[#000B58] group-hover:text-primary',
                      ].join(' ')}
                    >
                      {video.title}
                    </p>
                    <span className="mt-1 text-xs text-[#1a1a1a]/40">
                      Dr. Baffour Jan
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
