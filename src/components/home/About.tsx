import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { unsplash } from "../../lib/images";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="bg-cream/60 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <img
            src={unsplash("1520250497591-112f2f40a3f4", 1200)}
            alt="A light-filled suite interior with linen drapes and timber floors"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="Island Luxury in Every Detail"
            subtitle="Mercusuar — Indonesian for lighthouse — is our promise to guide you toward the brightest version of a tropical escape. Built by a family who fell in love with Gili Trawangan, our hotel pairs hand-finished local craftsmanship with the quiet comfort you only find off the grid."
          />
          <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-ink/80">
            {[
              "Twelve boutique rooms around a palm-fringed infinity pool",
              "Beachfront dining, minutes from the island's best snorkelling",
              "Warm, unhurried service from a team that remembers your name",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 bg-brass"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/#experience"
            className="mt-7 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-teal uppercase transition-colors duration-150 hover:text-brass"
          >
            Discover Our Story
            <ArrowRight className="h-4 w-4" strokeWidth={1} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
