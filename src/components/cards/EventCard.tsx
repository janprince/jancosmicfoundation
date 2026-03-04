import Link from "next/link";
import { Event } from "@/types";
import Badge from "@/components/ui/Badge";

export default function EventCard({ event }: { event: Event }) {
  const date = new Date(event.date);
  const month = date.toLocaleString("en", { month: "short" }).toUpperCase();
  const day = date.getDate();

  return (
    <Link href={`/events/${event.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="relative h-48 md:h-56 overflow-hidden">
          <div className="absolute inset-0 bg-[#000B58]/30 z-10" />
          <div className="w-full h-full bg-gradient-to-br from-[#2D6A4F] to-[#000B58] group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute top-4 left-4 z-20 bg-white rounded-lg px-3 py-2 text-center shadow-md">
            <span className="block text-xs font-semibold text-[#C05021] uppercase tracking-wider">
              {month}
            </span>
            <span className="block text-2xl font-bold text-[#000B58] leading-none">
              {day}
            </span>
          </div>
          {event.isPast && (
            <div className="absolute top-4 right-4 z-20">
              <Badge variant="accent">Past Event</Badge>
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-[#000B58] group-hover:text-[#2D6A4F] transition-colors line-clamp-2">
            {event.title}
          </h3>
          <div className="mt-3 space-y-1.5">
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="text-[#2D6A4F]">&#9719;</span> {event.time}
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="text-[#2D6A4F]">&#9906;</span> {event.location}
            </p>
          </div>
          <p className="mt-3 text-sm text-gray-600 line-clamp-2">
            {event.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
