import { useState } from "react";
import type { FormEvent } from "react";
import { ChevronDown, Info, Search } from "lucide-react";
import { addDays, toISODate } from "../../lib/booking";

export interface SearchValues {
  checkIn: string;
  checkOut: string;
  guests: number;
}

interface StaySearchFormProps {
  idPrefix: string;
  initial: SearchValues;
  submitLabel: string;
  onSubmit: (values: SearchValues) => void;
}

const inputCls =
  "mt-2 w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-3 text-sm text-ink outline-none transition-colors duration-150 focus:border-brass focus:ring-0";

const labelCls = "block text-xs font-medium uppercase tracking-[0.2em] text-muted";

export default function StaySearchForm({
  idPrefix,
  initial,
  submitLabel,
  onSubmit,
}: StaySearchFormProps) {
  const [checkIn, setCheckIn] = useState(initial.checkIn);
  const [checkOut, setCheckOut] = useState(initial.checkOut);
  const [guests, setGuests] = useState(initial.guests);
  const [error, setError] = useState<string | null>(null);
  const today = toISODate(new Date());

  function handleCheckInChange(value: string) {
    setCheckIn(value);
    // Keep check-out at least one night after check-in.
    if (value && checkOut <= value) {
      setCheckOut(toISODate(addDays(new Date(`${value}T00:00:00`), 1)));
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!checkIn || !checkOut) {
      setError("Please choose your check-in and check-out dates.");
      return;
    }
    if (checkOut <= checkIn) {
      setError("Check-out must be at least one night after check-in.");
      return;
    }
    setError(null);
    onSubmit({ checkIn, checkOut, guests });
  }

  const id = (suffix: string) => `${idPrefix}-${suffix}`;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
        <div>
          <label
            htmlFor={id("check-in")}
            className={labelCls}
          >
            Check-in
          </label>
          <input
            id={id("check-in")}
            type="date"
            value={checkIn}
            min={today}
            onChange={(event) => handleCheckInChange(event.target.value)}
            className={inputCls}
          />
        </div>

        <div>
          <label
            htmlFor={id("check-out")}
            className={labelCls}
          >
            Check-out
          </label>
          <input
            id={id("check-out")}
            type="date"
            value={checkOut}
            min={checkIn || today}
            onChange={(event) => setCheckOut(event.target.value)}
            className={inputCls}
          />
        </div>

        <div>
          <label
            htmlFor={id("guests")}
            className={labelCls}
          >
            Guests
          </label>
          <div className="relative mt-2">
            <select
              id={id("guests")}
              value={guests}
              onChange={(event) => setGuests(Number(event.target.value))}
              className={`${inputCls} appearance-none pr-10`}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n === 6 ? "6+ Guests" : `${n} ${n === 1 ? "Guest" : "Guests"}`}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-0 h-4 w-4 -translate-y-1/2 text-ink/40"
              strokeWidth={1}
              aria-hidden="true"
            />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-teal px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-colors duration-150 hover:bg-teal-dark active:scale-[0.97] md:w-auto"
        >
          <Search className="h-4 w-4" strokeWidth={1} aria-hidden="true" />
          {submitLabel}
        </button>
      </div>

      {error && (
        <p
          role="alert"
          className="mt-3 flex items-center gap-2 text-sm font-medium text-red-700"
        >
          <Info className="h-4 w-4 shrink-0" strokeWidth={1} aria-hidden="true" />
          {error}
        </p>
      )}
    </form>
  );
}
