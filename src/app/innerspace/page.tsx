import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = pageMetadata('/innerspace', { title: 'Inner Space — guided study', description: 'Explore Inner Space, Dr. Baffour Jan’s guided study programme, or begin with freely available public teachings.' });

export default function InnerSpacePage() {
  return <>
    <PageHero title="Study with Inner Space" subtitle="A structured path for seekers ready to study consistently, enter more deeply into practice, and receive guidance." />
    <section className="section"><div className="wrap grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
      <figure><Image src="/images/studentinmeditation.jpg" alt="Foundation members seated in meditation" width={1200} height={900} className="rounded-card w-full h-auto" priority /></figure>
      <div>
        <h2 className="text-3xl sm:text-4xl">A regular rhythm of study and practice</h2>
        <p className="text-lg text-muted mt-5">Public talks give you a place to begin listening. Inner Space is for those who want to work with the teaching more steadily and bring it into daily life.</p>
        <ul className="mt-6 space-y-3 list-disc pl-5 text-muted marker:text-gold-ink">
          <li>Courses to study at your own pace.</li>
          <li>Recorded teachings to return to as your understanding deepens.</li>
          <li>Monthly live guidance with Dr. Jan.</li>
        </ul>
        <h3 className="text-2xl mt-8">Before you join</h3>
        <p className="text-muted mt-3">Inner Space is hosted on Dr. Jan’s teaching website. Explore the programme, what access includes, and the current enrolment details there.</p>
        <a href="https://www.drbaffourjan.com/inner-space" className="button mt-6">Explore Inner Space</a>
        <p className="form-note mt-3">Continue to drbaffourjan.com.</p>
        <div className="border-t border-line mt-8 pt-6">
          <h3 className="text-2xl">New to the teachings?</h3>
          <p className="mt-3 text-muted">Begin with freely available talks. Take time to listen and explore before deciding whether guided study is right for you.</p>
          <Link href="/teachings" className="text-link mt-4">Explore public teachings</Link>
        </div>
      </div>
    </div></section>
  </>;
}
