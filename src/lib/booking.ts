export const TAX_RATE = 0.1;

export function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

/** yyyy-mm-dd, safe for <input type="date"> */
export function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function nightCount(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
  const nights = Math.round(diff / 86_400_000);
  return nights > 0 ? nights : 0;
}

export function formatIDR(value: number): string {
  return `IDR ${value.toLocaleString("en-US")}`;
}

export function formatDateReadable(iso: string): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export interface Totals {
  subtotal: number;
  tax: number;
  total: number;
  nights: number;
}

export function computeTotals(pricePerNight: number, nights: number): Totals {
  const safeNights = Math.max(nights, 0);
  const subtotal = pricePerNight * safeNights;
  const tax = Math.round(subtotal * TAX_RATE);
  return { subtotal, tax, total: subtotal + tax, nights: safeNights };
}

/** e.g. MHS250415-7283 */
export function generateReference(date = new Date()): string {
  const yy = String(date.getFullYear()).slice(2);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `MHS${yy}${mm}${dd}-${rand}`;
}
