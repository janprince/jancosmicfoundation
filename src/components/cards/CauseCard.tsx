import Link from "next/link";
import Image from "next/image";
import { Cause } from "@/types";
import ProgressBar from "@/components/ui/ProgressBar";

export default function CauseCard({ cause }: { cause: Cause }) {
  const isSpecific = cause.type === 'specific';

  return (
    <Link href={`/donate/${cause.slug}`} className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-card bg-white transition-shadow duration-500 group-hover:shadow-[0_24px_48px_-28px_rgba(0,11,88,0.35)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={cause.image}
            alt={cause.title}
            fill
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {!isSpecific && (
            <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-cream/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              Ongoing
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="line-clamp-2 text-2xl leading-snug text-navy">{cause.title}</h3>
          <p className="mt-2 line-clamp-3 flex-1 text-[15px] leading-relaxed text-muted">{cause.description}</p>

          {isSpecific ? (
            <div className="mt-5">
              <ProgressBar current={cause.raisedAmount} goal={cause.goalAmount} currency={cause.currency} />
            </div>
          ) : (
            cause.impactStatement && (
              <p className="mt-5 rounded-xl bg-sand px-4 py-3 text-sm leading-relaxed text-ink/75">{cause.impactStatement}</p>
            )
          )}

          <div className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-4">
            <span className="text-xs text-muted">
              {isSpecific
                ? cause.donorsCount == null ? '' : `${cause.donorsCount} donor${cause.donorsCount !== 1 ? 's' : ''}`
                : (cause.donorsCount ?? 0) > 0
                ? `${cause.donorsCount} supporter${cause.donorsCount !== 1 ? 's' : ''}`
                : 'Contributions welcome'}
            </span>
            <span className="text-link text-sm">{isSpecific ? 'Donate' : 'Support this work'}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
