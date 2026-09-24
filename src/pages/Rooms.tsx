import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { rooms } from "../data/rooms";
import RoomsSearchBar from "../components/rooms/RoomsSearchBar";
import RoomListItem from "../components/rooms/RoomListItem";
import Reveal from "../components/common/Reveal";

type SortKey = "popular" | "price-asc" | "price-desc";

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "popular", label: "Most Popular" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export default function Rooms() {
  const [sort, setSort] = useState<SortKey>("popular");

  const sortedRooms = useMemo(() => {
    const copy = [...rooms];
    if (sort === "price-asc") copy.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") copy.sort((a, b) => b.price - a.price);
    return copy;
  }, [sort]);

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.3em] text-brass uppercase">
          Rooms &amp; Suites
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Find Your View
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Three intimate room types on the sunset side of Gili Trawangan. Choose
          the one that matches your pace of island life.
        </p>
      </header>

      <div className="mt-10">
        <RoomsSearchBar />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <p
          className="text-sm font-medium text-ink/80"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="font-semibold text-teal">{rooms.length}</span> rooms
          available for your dates
        </p>

        <div className="relative">
          <label htmlFor="sort-rooms" className="sr-only">
            Sort rooms
          </label>
          <select
            id="sort-rooms"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
            className="appearance-none rounded-none border border-line bg-cream py-2.5 pr-10 pl-4 text-sm font-medium text-ink outline-none transition-colors duration-150 focus:border-brass focus:ring-0"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-ink/40"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mt-8 space-y-8 [&>div:last-child>article]:border-b-0">
        {sortedRooms.map((room, index) => (
          <Reveal key={room.slug} delay={index * 80}>
            <RoomListItem room={room} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
