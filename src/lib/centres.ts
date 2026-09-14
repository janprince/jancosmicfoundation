// Counts do not establish whether a community is new or operational.
export function centreMembership(count: number | null): string {
  return count && count > 0 ? `${count.toLocaleString()} members` : 'Contact the local community';
}
export function centreMembershipDetail(count: number | null): string {
  return count && count > 0 ? `${count.toLocaleString()} members` : 'Membership count not published';
}
