'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

// Real Foundation photographs only — captions describe what is in the frame.
const moments = [
  { src: '/images/exercise.jpg', width: 6720, height: 4480, alt: 'Dr. Baffour Jan, seen from behind, leading members in movement on the lawn', caption: 'Dr. Jan leading movement practice' },
  { src: '/images/studentslistening.jpg', width: 6720, height: 4480, alt: 'Members seated on the grass, listening', caption: 'Listening together' },
  { src: '/images/group-posture.jpg', width: 5472, height: 3648, alt: 'Members kneeling in rows on the lawn', caption: 'Group practice' },
  { src: '/images/masterseated.jpg', width: 5472, height: 3648, alt: 'Dr. Baffour Jan seated before the 14-day JCF service training banner', caption: 'The 14-day JCF service training' },
  { src: '/images/students-sitting-down-on-grass.jpg', width: 5472, height: 3648, alt: 'Members of the Foundation sitting together outdoors', caption: 'Time in community' },
  { src: '/images/drjan-thinking.jpg', width: 3420, height: 2280, alt: 'Dr. Baffour Jan standing in reflection during a session', caption: 'A moment of reflection' },
];

export default function LifeStrip() {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ first: true, last: false });
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => setEdges({ first: element.scrollLeft <= 2, last: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2 });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener('scroll', update, { passive: true });
    return () => { observer.disconnect(); element.removeEventListener('scroll', update); };
  }, []);
  const move = (direction: 1 | -1) =>
    track.current?.scrollBy({ left: direction * track.current.clientWidth * 0.7, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });

  return (
    <>
      <ul ref={track} className="life-track" aria-label="Photographs from life at the Foundation" tabIndex={0}>
        {moments.map((moment) => (
          <li key={moment.src}>
            <figure className="home-figure">
              <Image src={moment.src} alt={moment.alt} width={moment.width} height={moment.height} sizes="(max-width: 600px) 76vw, 30vw" />
              <figcaption>{moment.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="wrap life-controls">
        <Link className="text-link" href="/gallery">See the gallery</Link>
        <div>
          <button type="button" onClick={() => move(-1)} disabled={edges.first} aria-label="Previous photographs"><ArrowLeft size={20} /></button>
          <button type="button" onClick={() => move(1)} disabled={edges.last} aria-label="Next photographs"><ArrowRight size={20} /></button>
        </div>
      </div>
    </>
  );
}
