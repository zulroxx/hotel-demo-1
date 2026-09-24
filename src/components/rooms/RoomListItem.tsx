import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Room } from "../../lib/types";
import { formatIDR } from "../../lib/booking";

interface RoomListItemProps {
  room: Room;
}

export default function RoomListItem({ room }: RoomListItemProps) {
  return (
    <article className="group grid gap-6 rounded-none border-b border-line pb-8 sm:grid-cols-[300px_1fr] sm:gap-8">
      <Link
        to={`/rooms/${room.slug}`}
        className="block overflow-hidden"
        aria-label={`View the ${room.name}`}
      >
        <img
          src={room.images[0]}
          alt={`${room.name} at Mercusuar Hotel`}
          className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:aspect-auto"
          loading="lazy"
        />
      </Link>

      <div className="flex flex-col justify-between gap-5 sm:py-1">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            <Link
              to={`/rooms/${room.slug}`}
              className="transition-colors duration-150 hover:text-brass"
            >
              {room.name}
            </Link>
          </h2>
          <p className="mt-1 text-sm text-muted">{room.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
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
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xl font-semibold text-teal">
              {formatIDR(room.price)}
            </p>
            <p className="text-xs text-muted">per night, room only</p>
          </div>
          <Link
            to={`/rooms/${room.slug}`}
            className="inline-flex items-center gap-2 rounded-none bg-teal px-6 py-3 text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-colors duration-150 hover:bg-teal-dark active:scale-[0.97]"
          >
            Select
            <ArrowRight className="h-4 w-4" strokeWidth={1} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
