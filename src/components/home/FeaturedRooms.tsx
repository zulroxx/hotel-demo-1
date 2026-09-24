import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { rooms } from "../../data/rooms";
import { formatIDR } from "../../lib/booking";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

export default function FeaturedRooms() {
  return (
    <section id="stay" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Where You'll Stay"
          title="Rooms Made for Slow Mornings"
          subtitle="Three intimate room types, each with its own rhythm — pick your view, pick your pace."
        />
      </Reveal>

      <div className="mt-14 grid gap-14 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room, index) => (
          <Reveal key={room.slug} delay={index * 100}>
            <article className="group flex h-full flex-col">
              <Link
                to={`/rooms/${room.slug}`}
                className="block aspect-[4/3] overflow-hidden"
                aria-label={`View the ${room.name}`}
              >
                <img
                  src={room.images[0]}
                  alt={`${room.name} at Mercusuar Hotel`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
              <div className="flex flex-1 flex-col border-t border-line pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-ink">
                      <Link
                        to={`/rooms/${room.slug}`}
                        className="transition-colors duration-150 hover:text-brass"
                      >
                        {room.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-muted">{room.tagline}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-lg font-semibold text-teal">
                      {formatIDR(room.price)}
                    </p>
                    <p className="text-xs text-muted">/ night</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
                  {room.features.map((feature, featureIndex) => (
                    <Fragment key={feature}>
                      {featureIndex > 0 && (
                        <span className="text-brass" aria-hidden="true">
                          ·
                        </span>
                      )}
                      <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink/50">
                        {feature}
                      </span>
                    </Fragment>
                  ))}
                </div>

                <Link
                  to={`/rooms/${room.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-xs font-semibold tracking-[0.2em] text-teal uppercase transition-colors duration-150 hover:text-brass"
                >
                  View Room
                  <ArrowRight
                    className="h-4 w-4"
                    strokeWidth={1}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/rooms"
          className="inline-flex items-center gap-2 rounded-none bg-teal px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-colors duration-150 hover:bg-teal-dark active:scale-[0.97]"
        >
          View All Rooms
          <ArrowRight className="h-4 w-4" strokeWidth={1} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
