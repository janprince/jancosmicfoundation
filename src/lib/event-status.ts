/** Ghana uses UTC year-round. Date-only events remain current through their last day. */
export function eventHasEnded(date: string, endDate?: string | null, now = Date.now()): boolean {
  const lastDay = endDate || date;
  if (!lastDay) return true;
  const timestamp = Date.parse(/^\d{4}-\d{2}-\d{2}$/.test(lastDay) ? `${lastDay}T23:59:59.999Z` : lastDay);
  return !Number.isFinite(timestamp) || timestamp < now;
}
