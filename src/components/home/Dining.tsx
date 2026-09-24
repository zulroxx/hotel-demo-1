import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Sun, UtensilsCrossed } from "lucide-react";
import { unsplash } from "../../lib/images";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

const DETAILS = [
  {
    Icon: UtensilsCrossed,
    text: "Breakfast, lunch, and dinner served barefoot on the beachfront deck.",
  },
  {
    Icon: Coffee,
    text: "Lombok-grown coffee and fresh coconut drinks from our island bar.",
  },
  {
    Icon: Sun,
    text: "Sunset aperitivo hour, daily — our ritual, your new favourite time.",
  },
];

export default function Dining() {
  return (
    <section id="dining" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <img
            src={unsplash("1552566626-52f8b828add9", 1200)}
            alt="A candlelit table with tropical dishes at the hotel's beachfront restaurant"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            align="left"
            eyebrow="Dining"
            title="Barefoot Dining by the Sea"
            subtitle="Our kitchen keeps it simple and honest: local markets in the morning, open fire and fresh seafood at night, and the sound of the tide throughout."
          />
          <ul className="mt-6">
            {DETAILS.map(({ Icon, text }) => (
              <li
                key={text}
                className="flex items-start gap-4 border-b border-line py-4 first:pt-0 last:border-b-0"
              >
                <Icon
                  className="h-5 w-5 shrink-0 text-teal"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-ink/80">{text}</p>
              </li>
            ))}
          </ul>
          <Link
            to="/rooms"
            className="mt-7 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-teal uppercase transition-colors duration-150 hover:text-brass"
          >
            Plan Your Stay
            <ArrowRight className="h-4 w-4" strokeWidth={1} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
