import { unsplash } from "../../lib/images";
import BookingWidget from "./BookingWidget";

export default function Hero() {
  return (
    <section aria-label="Welcome to Mercusuar Hotel">
      <div className="relative flex min-h-[540px] items-end overflow-hidden bg-teal-dark md:min-h-[660px]">
        <img
          src={unsplash("1540541338287-41700207dee6", 1920)}
          alt="The Mercusuar Hotel infinity pool at dusk, framed by palm trees"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-ink/15"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 pb-44 sm:px-8 md:pb-48">
          <p
            className="animate-fade-up text-xs font-semibold tracking-[0.3em] text-gold uppercase"
            style={{ animationDelay: "80ms" }}
          >
            Boutique Hotel · Gili Trawangan
          </p>
          <h1
            className="mt-4 max-w-3xl animate-fade-up font-serif text-4xl leading-tight font-semibold text-cream sm:text-6xl md:text-7xl"
            style={{ animationDelay: "200ms" }}
          >
            A Brighter Kind of Escape
          </h1>
          <p
            className="mt-5 max-w-xl animate-fade-up text-base leading-relaxed text-cream/85 sm:text-lg"
            style={{ animationDelay: "320ms" }}
          >
            Beachfront suites, barefoot dining, and sunsets that stay with you —
            on the shores of Gili Trawangan.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-24 max-w-5xl px-5 sm:px-8">
        <BookingWidget />
      </div>
    </section>
  );
}
