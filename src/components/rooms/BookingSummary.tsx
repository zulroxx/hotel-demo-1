import type { Rate, Room } from "../../lib/types";
import {
  computeTotals,
  formatDateReadable,
  formatIDR,
  nightCount,
} from "../../lib/booking";

interface BookingSummaryProps {
  room: Room;
  rate: Rate;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export default function BookingSummary({
  room,
  rate,
  checkIn,
  checkOut,
  guests,
}: BookingSummaryProps) {
  const nights = nightCount(checkIn, checkOut);
  const totals = computeTotals(rate.price, nights);

  return (
    <div className="rounded-none">
      <h2 className="font-serif text-xl font-semibold text-ink">
        Booking Summary
      </h2>

      <div className="mt-5 flex gap-4">
        <img
          src={room.images[0]}
          alt={room.name}
          className="h-20 w-28 shrink-0 rounded-none object-cover"
        />
        <div>
          <p className="font-semibold text-ink">{room.name}</p>
          <p className="mt-0.5 text-sm text-muted">{rate.name}</p>
          <p className="mt-1 text-sm text-ink/70">
            {guests} {guests === 1 ? "guest" : "guests"}
          </p>
        </div>
      </div>

      <dl className="mt-6 space-y-2.5 border-t border-line pt-5 text-sm">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-muted">Check-in</dt>
          <dd className="font-medium text-ink">{formatDateReadable(checkIn)}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-muted">Check-out</dt>
          <dd className="font-medium text-ink">{formatDateReadable(checkOut)}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-muted">
            {formatIDR(rate.price)} × {nights} {nights === 1 ? "night" : "nights"}
          </dt>
          <dd className="font-medium text-ink">{formatIDR(totals.subtotal)}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-muted">Tax &amp; service (10%)</dt>
          <dd className="font-medium text-ink">{formatIDR(totals.tax)}</dd>
        </div>
      </dl>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="text-sm font-semibold text-ink">Total</span>
        <span className="text-2xl font-semibold text-teal">
          {formatIDR(totals.total)}
        </span>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-muted">
        Free cancellation up to 7 days before arrival. No booking fees.
      </p>
    </div>
  );
}
