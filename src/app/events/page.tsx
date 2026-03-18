import { getEvents } from '@/lib/api';
import EventsPageContent from './EventsPageContent';

export default async function EventsPage() {
  const events = await getEvents();
  return <EventsPageContent events={events} />;
}
