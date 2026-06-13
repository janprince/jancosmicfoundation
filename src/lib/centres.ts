// Membership display helpers for centres.
//
// We don't surface raw counts when a centre is still small — a "0 members" or
// "8 members" badge reads as empty rather than inviting. Below the threshold we
// show a "newly forming" label that frames an early-stage centre as a place to
// help build, not avoid.

export const MEMBER_DISPLAY_THRESHOLD = 20;

/** Inline membership label, e.g. "620 members" or "Newly forming". */
export function centreMembership(count: number): string {
  if (count < MEMBER_DISPLAY_THRESHOLD) return 'Newly forming';
  return `${count.toLocaleString()} members`;
}

/** Longer membership label for stat blocks, e.g. "620 active members". */
export function centreMembershipDetail(count: number): string {
  if (count < MEMBER_DISPLAY_THRESHOLD) return 'Newly forming community';
  return `${count.toLocaleString()} active members`;
}
