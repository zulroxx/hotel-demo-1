import { MapPin, Navigation, Star, Sun } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

const LOCATION_POINTS = [
  {
    Icon: MapPin,
    text: "Beachfront location on the sunset side of Gili Trawangan",
  },
  {
    Icon: Navigation,
    text: "A 5-minute walk to the harbour and the island's restaurants and bars",
  },
  {
    Icon: Sun,
    text: "Sunset-facing terraces and a palm-fringed pool deck",
  },
];

export default function Testimonials() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Guest Stories"
              title="Loved by Travellers from Everywhere"
              subtitle="Real words from guests who found their brighter kind of escape."
            />
          </Reveal>

          <div className="mt-8 space-y-6">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 90}>
                <figure className="border-t border-line pt-6">
                  <div
                    className="flex gap-1 text-gold"
                    role="img"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-current"
                        strokeWidth={1}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-[15px] leading-relaxed text-ink/80">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center border border-brass/50 font-serif text-base font-semibold text-teal">
                      {testimonial.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted">
                        {testimonial.location}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={140}>
          <div className="flex h-full flex-col">
            <div className="min-h-[340px] flex-1 overflow-hidden rounded-none border border-line">
              <iframe
                title="Mercusuar Hotel location — Gili Trawangan, Lombok"
                src="https://www.google.com/maps?q=Gili+Trawangan&output=embed"
                className="h-full min-h-[340px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <ul className="mt-6">
              {LOCATION_POINTS.map(({ Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-4 border-b border-line py-4 last:border-b-0"
                >
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal"
                    strokeWidth={1}
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-ink/80">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
