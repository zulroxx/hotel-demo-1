import { experiences } from "../../data/experiences";
import { rooms } from "../../data/rooms";
import { unsplash } from "../../lib/images";
import Reveal from "../common/Reveal";

const GALLERY = [
  { src: rooms[0].images[1], alt: "Ocean View Suite interior" },
  { src: experiences[0].image, alt: "Snorkelling in clear turquoise water" },
  { src: rooms[1].images[1], alt: "The pool deck at golden hour" },
  { src: experiences[2].image, alt: "Surf rolling in at sunset" },
  { src: rooms[2].images[1], alt: "Tropical beach with soft sand" },
  { src: unsplash("1507525428034-b723cf961d3e", 800), alt: "Relaxing on the island beach" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream/60 py-24 md:py-32" aria-label="Gallery">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-center font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A Glimpse of Island Life
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {GALLERY.map((item, index) => (
            <Reveal key={item.alt} delay={index * 60}>
              <div className="group overflow-hidden rounded-none">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
