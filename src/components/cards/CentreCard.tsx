import Link from "next/link";
import Image from "next/image";
import { Centre } from "@/types";
import { centreMembership } from "@/lib/centres";

export default function CentreCard({ centre }: { centre: Centre }) {
  return (
    <Link href={`/centres/${centre.slug}`} className="group flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-sand">
        {centre.image && (
          <Image
            src={centre.image}
            alt={centre.name}
            fill
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        <span className="absolute bottom-4 left-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-medium text-navy">
          {centre.country}
        </span>
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <h3 className="text-2xl leading-snug text-navy transition-colors group-hover:text-violet">{centre.name}</h3>
        <p className="mt-1 text-sm text-muted">{centre.location}</p>
        <p className="mt-3 line-clamp-2 flex-1 text-[15px] leading-relaxed text-ink/75">{centre.description}</p>
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-4">
          <div className="flex items-center gap-3">
            <span>
              <span className="block text-sm font-medium text-navy">{centre.leader.name}</span>
              <span className="block text-sm text-muted">{centre.leader.title}</span>
            </span>
          </div>
          <span className="text-right text-sm font-medium text-gold-ink">{centreMembership(centre.memberCount)}</span>
        </div>
      </div>
    </Link>
  );
}
