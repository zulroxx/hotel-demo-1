import { experiences } from "../../data/experiences";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

export default function Experiences() {
  return (
    <section
      id="experience"
      className="bg-cream/60 py-24 md:py-32"
      aria-labelledby="experiences-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Island Experiences"
            title="Chase the Day, or Do Nothing at All"
            subtitle="From turtle-filled reefs to golden-hour sails — our concierge team designs each day around you."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience, index) => (
            <Reveal key={experience.title} delay={index * 90}>
              <article className="group relative overflow-hidden rounded-none">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-serif text-lg font-semibold text-cream">
                    {experience.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/85">
                    {experience.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
