import { unsplash } from "../../lib/images";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

const POINTS = [
  {
    title: "Boutique Stay",
    text: "Twelve rooms, endless attention to detail — never a chain hotel in sight.",
    image: unsplash("1566073771259-6a8506099945", 800),
  },
  {
    title: "Island Experiences",
    text: "Turtles, tide pools, and trails curated by locals who call Gili home.",
    image: unsplash("1571896349842-33c89424de2d", 800),
  },
  {
    title: "Local Dining",
    text: "A beachfront table where Sasak flavours meet fish caught that morning.",
    image: unsplash("1414235077428-338989a2e8c0", 800),
  },
  {
    title: "Meaningful Moments",
    text: "Sunrise swims, sunset sails, and small kindnesses that stay with you.",
    image: unsplash("1495954484750-af469f2f9be5", 800),
  },
];

export default function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="The Mercusuar Way"
          title="More Than a Stay. A Brighter You."
          subtitle="Small by design, generous by nature — every corner of our hotel is made for slowing down, switching off, and showing up brighter."
        />
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {POINTS.map(({ title, text, image }, index) => (
          <Reveal key={title} delay={index * 90} className="h-full">
            <article className="group relative h-full min-h-[190px] overflow-hidden border border-line bg-cream">
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-25 transition-all duration-500 group-hover:scale-105 group-hover:opacity-45"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/45 to-transparent"
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col justify-end p-6">
                <h3 className="font-serif text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
