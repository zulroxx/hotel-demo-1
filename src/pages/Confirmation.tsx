import { Link, Navigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { getRoom } from "../data/rooms";
import { formatDateReadable } from "../lib/booking";
import { useBooking } from "../context/BookingContext";

export default function Confirmation() {
  const booking = useBooking();
  const room = getRoom(booking.roomSlug ?? undefined);

  if (!booking.reference || !room) {
    return <Navigate to="/" replace />;
  }

  const details = [
    { label: "Booking Reference", value: booking.reference },
    { label: "Room Type", value: room.name },
    { label: "Check-in", value: formatDateReadable(booking.checkIn) },
    { label: "Check-out", value: formatDateReadable(booking.checkOut) },
    {
      label: "Guests",
      value: String(booking.guests),
    },
  ];

  return (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-8 md:py-28">
      <span className="mx-auto flex h-24 w-24 animate-fade-up items-center justify-center">
        <CheckCircle2
          className="h-20 w-20 fill-jade text-cream"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </span>

      <h1
        className="mt-6 animate-fade-up font-serif text-3xl font-semibold tracking-tight text-ink sm:text-5xl"
        style={{ animationDelay: "120ms" }}
      >
        Your island stay is confirmed.
      </h1>

      <p
        className="mt-4 animate-fade-up text-base leading-relaxed text-muted sm:text-lg"
        style={{ animationDelay: "240ms" }}
      >
        Thank you for choosing Mercusuar Hotel. We can&apos;t wait to welcome you
        to Gili Trawangan!
      </p>

      <dl
        className="mt-10 animate-fade-up rounded-none border border-line bg-cream p-6 text-left sm:p-8"
        style={{ animationDelay: "360ms" }}
      >
        {details.map(({ label, value }, index) => (
          <div
            key={label}
            className={[
              "flex items-center justify-between gap-4 py-3",
              index > 0 ? "border-t border-line" : "",
            ].join(" ")}
          >
            <dt className="text-sm text-muted">{label}</dt>
            <dd className="text-right text-sm font-semibold text-ink">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <div
        className="mt-10 animate-fade-up"
        style={{ animationDelay: "480ms" }}
      >
        <Link
          to="/"
          onClick={() => booking.reset()}
          className="inline-flex items-center gap-2 rounded-none bg-teal px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-colors duration-150 hover:bg-teal-dark active:scale-[0.97]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
