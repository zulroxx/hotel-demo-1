import { Fragment, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getRate, getRoom } from "../data/rooms";
import { useBooking } from "../context/BookingContext";
import { unsplash } from "../lib/images";
import RateSelector from "../components/rooms/RateSelector";
import AmenityGrid from "../components/rooms/AmenityGrid";
import Reveal from "../components/common/Reveal";

const POLICIES = [
  {
    title: "Free cancellation",
    text: "Up to 7 days before arrival — a full refund, no questions asked.",
    image: unsplash("1520250497591-112f2f40a3f4", 900),
  },
  {
    title: "No booking fees",
    text: "Booking direct means no hidden charges, ever.",
    image: unsplash("1582719478250-c89cae4dc85b", 900),
  },
  {
    title: "Best rate guarantee",
    text: "Book here and you'll never find this room cheaper.",
    image: unsplash("1495954484750-af469f2f9be5", 900),
  },
];

export default function RoomDetail() {
  const { slug } = useParams();
  const room = getRoom(slug);
  const booking = useBooking();
  const navigate = useNavigate();

  const [activeImage, setActiveImage] = useState(0);
  const [rateId, setRateId] = useState(() =>
    booking.roomSlug === room?.slug && booking.rateId
      ? booking.rateId
      : (room?.rates[0]?.id ?? ""),
  );

  if (!room) {
    return <Navigate to="/rooms" replace />;
  }

  const rate = getRate(room.slug, rateId) ?? room.rates[0];

  function handleSelectRoom() {
    if (!room) return;
    booking.selectRoom(room.slug, rate.id);
    navigate("/checkout");
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-14">
      <Link
        to="/rooms"
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-teal uppercase transition-colors duration-150 hover:text-brass"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={1} aria-hidden="true" />
        Back to Rooms
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-line">
            {room.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={index === activeImage ? `${room.name} — view ${index + 1}` : ""}
                aria-hidden={index !== activeImage}
                loading={index === 0 ? undefined : "lazy"}
                className={[
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] motion-reduce:duration-0",
                  index === activeImage ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />
            ))}
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {room.images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1} of ${room.name}`}
                aria-pressed={activeImage === index}
                className={[
                  "overflow-hidden rounded-none transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal",
                  activeImage === index
                    ? "ring-2 ring-brass"
                    : "opacity-70 hover:opacity-100",
                ].join(" ")}
              >
                <img
                  src={image}
                  alt=""
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-brass uppercase">
            Rooms &amp; Suites
          </p>
          <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {room.name}
          </h1>
          <p className="mt-2 text-base text-muted">{room.tagline}</p>

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

          <p className="mt-6 leading-relaxed text-ink/80">{room.description}</p>

          <div className="mt-8">
            <RateSelector
              rates={room.rates}
              selectedId={rate.id}
              onSelect={setRateId}
            />
          </div>

          <button
            type="button"
            onClick={handleSelectRoom}
            className="mt-6 w-full rounded-none bg-teal px-8 py-4 text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-colors duration-150 hover:bg-teal-dark active:scale-[0.98]"
          >
            Select This Room
          </button>
          <p className="mt-3 text-center text-xs text-muted">
            No payment taken today — you'll confirm everything at checkout.
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {POLICIES.map(({ title, text, image }) => (
          <Reveal key={title}>
            <article className="group relative h-full min-h-[190px] overflow-hidden border border-line bg-cream">
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-25 transition-all duration-500 group-hover:scale-105 group-hover:opacity-45"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/45 to-transparent"
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col justify-end p-6">
                <h2 className="font-serif text-lg font-semibold text-ink">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          Room Amenities
        </h2>
        <p className="mt-2 text-sm text-muted">
          Everything you need for a lighter, brighter stay.
        </p>
        <div className="mt-6">
          <AmenityGrid amenities={room.amenities} />
        </div>
      </div>
    </div>
  );
}
