import Link from 'next/link';
import { getEvents } from '@/lib/api';

export default async function GatheringNotice() {
  const [nextEvent] = await getEvents('upcoming');
  return <div className="gathering-notice">
    {nextEvent ? <><p className="caption">Next gathering</p><h3><Link href={`/events/${nextEvent.slug}`}>{nextEvent.title}</Link></h3><p>{new Date(nextEvent.date).toLocaleDateString('en-GH', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Africa/Accra' })}<br />{nextEvent.location}</p><Link className="button" href={`/events/${nextEvent.slug}`}>View gathering details</Link></> : <><p className="caption">For upcoming dates, please contact the Foundation.</p><Link className="button" href="/contact">Ask about the next gathering</Link></>}
    <Link className="text-link calendar-link" href="/events">View the events calendar</Link>
  </div>;
}
