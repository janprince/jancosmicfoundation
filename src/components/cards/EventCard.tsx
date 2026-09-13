import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Event } from "@/types";
import Badge from "@/components/ui/Badge";

export default function EventCard({ event }: { event: Event }) {
  const date = new Date(event.date);
  const month = date.toLocaleString("en", { month: "short" }).toUpperCase();
  const day = date.getDate();

  return (
    <Link href={`/events/${event.slug}`} className="group flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-sand">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute left-4 top-4 rounded-xl bg-cream px-3 py-2 text-center">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-ink">{month}</span>
          <span className="block font-serif text-3xl leading-none text-navy">{day}</span>
        </div>
        {event.isPast && (
          <div className="absolute right-4 top-4">
            <Badge variant="secondary">Past</Badge>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <h3 className="line-clamp-2 text-2xl leading-snug text-navy transition-colors group-hover:text-violet">
          {event.title}
        </h3>
        <div className="mt-3 space-y-1.5 text-sm text-muted">
          <p className="flex items-center gap-2">
            <Clock size={16} weight="light" className="shrink-0 text-gold-ink" aria-hidden="true" />
            {event.time}
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={16} weight="light" className="shrink-0 text-gold-ink" aria-hidden="true" />
            {event.location}
          </p>
        </div>
        <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-muted">{event.description}</p>
      </div>
    </Link>
  );
}
