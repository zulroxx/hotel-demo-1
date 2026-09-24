import { Link } from "react-router-dom";
import { unsplash } from "../../lib/images";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="cta-heading">
      <img
        src={unsplash("1507525428034-b723cf961d3e", 1920)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0 bg-teal-dark/70"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 md:py-36">
        <h2
          id="cta-heading"
          className="font-serif text-3xl leading-tight font-semibold text-cream sm:text-5xl"
        >
          Ready for your Gili Getaway?
        </h2>
        <p className="mt-4 text-base text-cream/85 sm:text-lg">
          Book directly for the best rates and exclusive perks — flexible
          cancellation, free welcome drinks, and a brighter kind of escape.
        </p>
        <Link
          to="/rooms"
          className="mt-9 inline-flex items-center gap-2 rounded-none bg-cream px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-teal uppercase transition-colors duration-150 hover:bg-white active:scale-[0.97]"
        >
          Book Your Stay
        </Link>
      </div>
    </section>
  );
}
