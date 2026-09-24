import { useState } from "react";
import type { FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CreditCard, LoaderCircle, Lock, Wallet } from "lucide-react";
import { getRate, getRoom } from "../data/rooms";
import { useBooking } from "../context/BookingContext";
import BookingSummary from "../components/rooms/BookingSummary";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldCls =
  "mt-2 w-full rounded-none border-0 border-b bg-transparent px-0 py-3 text-sm text-ink outline-none transition-colors duration-150 focus:ring-0";

const labelCls = "text-xs font-medium tracking-[0.2em] text-muted uppercase";

const PAYMENT_METHODS = [
  {
    id: "card" as const,
    label: "Card",
    description: "Pay with a credit or debit card.",
    Icon: CreditCard,
  },
  {
    id: "paypal" as const,
    label: "PayPal",
    description: "Use your PayPal balance or linked account.",
    Icon: Wallet,
  },
];

export default function Checkout() {
  const booking = useBooking();
  const navigate = useNavigate();

  const room = getRoom(booking.roomSlug ?? undefined);
  const rate = getRate(booking.roomSlug ?? undefined, booking.rateId ?? undefined);

  const [name, setName] = useState(booking.guest.name);
  const [email, setEmail] = useState(booking.guest.email);
  const [phone, setPhone] = useState(booking.guest.phone);
  const [requests, setRequests] = useState(booking.guest.requests);
  const [payment, setPayment] = useState<"card" | "paypal">("card");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [processing, setProcessing] = useState(false);

  if (!room || !rate) {
    return <Navigate to="/rooms" replace />;
  }

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!name.trim()) {
      next.name = "Please tell us your full name.";
    }
    if (!email.trim()) {
      next.email = "We need an email to send your confirmation to.";
    } else if (!EMAIL_RE.test(email.trim())) {
      next.email = "That email doesn't look quite right — double-check it?";
    }
    if (!phone.trim()) {
      next.phone = "Please add a phone number we can reach you on.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!acceptedTerms || processing) return;
    if (!validate()) return;

    setProcessing(true);
    // Mock payment — no real charge, no card details collected.
    window.setTimeout(() => {
      booking.setGuest({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        requests: requests.trim(),
      });
      booking.confirmBooking();
      navigate("/confirmation");
    }, 1100);
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.3em] text-brass uppercase">
          Secure Checkout
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Almost Yours
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Just a few details and your island stay is booked. No payment will be
          taken — this is a demo checkout.
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_400px] lg:items-start">
        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          <section className="rounded-none border border-line bg-cream p-6 sm:p-7">
            <h2 className="font-serif text-xl font-semibold text-ink">
              Your Details
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="guest-name"
                  className={labelCls}
                >
                  Full Name
                </label>
                <input
                  id="guest-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Sophie Martin"
                  className={`${fieldCls} ${
                    errors.name ? "border-red-400" : "border-line focus:border-brass"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs font-medium text-red-700">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="guest-email"
                  className={labelCls}
                >
                  Email Address
                </label>
                <input
                  id="guest-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className={`${fieldCls} ${
                    errors.email
                      ? "border-red-400"
                      : "border-line focus:border-brass"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs font-medium text-red-700">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="guest-phone"
                  className={labelCls}
                >
                  Phone Number
                </label>
                <input
                  id="guest-phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+61 400 000 000"
                  className={`${fieldCls} ${
                    errors.phone
                      ? "border-red-400"
                      : "border-line focus:border-brass"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs font-medium text-red-700">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="guest-requests"
                  className={labelCls}
                >
                  Special Requests{" "}
                  <span className="font-normal text-muted normal-case">
                    (optional)
                  </span>
                </label>
                <textarea
                  id="guest-requests"
                  rows={3}
                  value={requests}
                  onChange={(event) => setRequests(event.target.value)}
                  placeholder="Late check-in, airport transfer, dietary needs…"
                  className={`${fieldCls} resize-none border-line focus:border-brass`}
                />
              </div>
            </div>
          </section>

          <section className="rounded-none border border-line bg-cream p-6 sm:p-7">
            <h2 className="font-serif text-xl font-semibold text-ink">
              Payment Method
            </h2>
            <fieldset className="mt-5">
              <legend className="sr-only">Choose a payment method</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {PAYMENT_METHODS.map(({ id, label, description, Icon }) => {
                  const selected = payment === id;
                  return (
                    <label
                      key={id}
                      className={[
                        "flex cursor-pointer items-start gap-3 rounded-none border p-4 transition-colors duration-150",
                        selected
                          ? "border-brass bg-cream"
                          : "border-line bg-transparent hover:border-brass/50",
                      ].join(" ")}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={id}
                        checked={selected}
                        onChange={() => setPayment(id)}
                        className="sr-only"
                      />
                      <Icon
                        className="mt-0.5 h-5 w-5 shrink-0 text-teal"
                        strokeWidth={1}
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block text-sm font-semibold text-ink">
                          {label}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted">
                          {description}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
            <p className="mt-4 flex items-center gap-2 text-xs text-muted">
              <Lock className="h-3.5 w-3.5 shrink-0" strokeWidth={1} aria-hidden="true" />
              Demo checkout — no payment will be processed and no card details are
              collected.
            </p>
          </section>

          <div>
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink/80">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) => setAcceptedTerms(event.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded-none border-ink/30 accent-teal"
              />
              <span>
                I agree to the Mercusuar Hotel terms &amp; conditions and the
                cancellation policy for this booking.
              </span>
            </label>

            <button
              type="submit"
              disabled={!acceptedTerms || processing}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-none bg-teal px-8 py-4 text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-colors duration-150 hover:bg-teal-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-ink/20 disabled:text-ink/50 disabled:active:scale-100"
            >
              {processing ? (
                <>
                  <LoaderCircle
                    className="h-4 w-4 animate-spin"
                    strokeWidth={1}
                    aria-hidden="true"
                  />
                  Confirming your stay…
                </>
              ) : (
                "Pay & Book"
              )}
            </button>
          </div>
        </form>

        <aside className="lg:sticky lg:top-24">
          <BookingSummary
            room={room}
            rate={rate}
            checkIn={booking.checkIn}
            checkOut={booking.checkOut}
            guests={booking.guests}
          />
        </aside>
      </div>
    </div>
  );
}
