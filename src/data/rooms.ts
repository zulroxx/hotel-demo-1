import type { Room } from "../lib/types";
import { unsplash } from "../lib/images";

const STANDARD_AMENITIES = [
  "Air Conditioning",
  "Private Bathroom",
  "Free Wi-Fi",
  "Minibar",
  "Daily Housekeeping",
];

export const rooms: Room[] = [
  {
    slug: "ocean-view-suite",
    name: "Ocean View Suite",
    tagline: "Front-row seats to the Gili sunset",
    description:
      "Wake to the sound of the sea in our signature suite, where floor-to-ceiling glass frames an uninterrupted view of the Lombok Strait. A private balcony, king bed dressed in crisp linen, and a deep-soaking tub make this the most coveted room on the island.",
    price: 3_500_000,
    features: ["2 Guests", "King Bed", "Ocean View", "Private Balcony"],
    images: [
      unsplash("1582719508461-905c673771fd", 1600),
      unsplash("1611892440504-42a792e24d32", 800),
      unsplash("1590490360182-c33d57733427", 800),
      unsplash("1571003123894-1f0594d2b5d9", 800),
    ],
    amenities: [...STANDARD_AMENITIES, "Ocean-facing Balcony"],
    rates: [
      {
        id: "room-only",
        name: "Room Only",
        description: "Stay your way — flexible and simple.",
        price: 3_500_000,
        perks: ["Free cancellation", "No booking fees"],
      },
      {
        id: "breakfast",
        name: "Breakfast Included",
        description: "Daily tropical breakfast for two, served by the sea.",
        price: 3_800_000,
        perks: ["Free cancellation", "Daily breakfast", "No booking fees"],
      },
    ],
  },
  {
    slug: "poolside-room",
    name: "Poolside Room",
    tagline: "Step straight from your terrace into the water",
    description:
      "A light-filled room that opens onto the infinity pool deck. Slip out at dawn for a swim before anyone else is awake, then return to a queen bed, a garden shower, and a shaded terrace made for slow afternoons with a book.",
    price: 2_500_000,
    features: ["2 Guests", "Queen Bed", "Pool Access", "Garden Terrace"],
    images: [
      unsplash("1571896349842-33c89424de2d", 1600),
      unsplash("1540541338287-41700207dee6", 800),
      unsplash("1566073771259-6a8506099945", 800),
      unsplash("1520250497591-112f2f40a3f4", 800),
    ],
    amenities: [...STANDARD_AMENITIES, "Direct Pool Access"],
    rates: [
      {
        id: "room-only",
        name: "Room Only",
        description: "Stay your way — flexible and simple.",
        price: 2_500_000,
        perks: ["Free cancellation", "No booking fees"],
      },
      {
        id: "breakfast",
        name: "Breakfast Included",
        description: "Daily tropical breakfast for two, served by the sea.",
        price: 2_800_000,
        perks: ["Free cancellation", "Daily breakfast", "No booking fees"],
      },
    ],
  },
  {
    slug: "garden-room",
    name: "Garden Room",
    tagline: "A quiet corner wrapped in frangipani and palms",
    description:
      "Tucked into our tropical gardens, this serene room pairs warm timber floors with a private patio where the scent of frangipani drifts in at dusk. The perfect retreat for those who prefer birdsong to the bustle of the beach.",
    price: 1_800_000,
    features: ["2 Guests", "Queen Bed", "Garden View", "Private Patio"],
    images: [
      unsplash("1445019980597-93fa8acb246c", 1600),
      unsplash("1505142468610-359e7d316be0", 800),
      unsplash("1582719508461-905c673771fd", 800),
      unsplash("1611892440504-42a792e24d32", 800),
    ],
    amenities: [...STANDARD_AMENITIES, "Private Garden Patio"],
    rates: [
      {
        id: "room-only",
        name: "Room Only",
        description: "Stay your way — flexible and simple.",
        price: 1_800_000,
        perks: ["Free cancellation", "No booking fees"],
      },
      {
        id: "breakfast",
        name: "Breakfast Included",
        description: "Daily tropical breakfast for two, served by the sea.",
        price: 2_100_000,
        perks: ["Free cancellation", "Daily breakfast", "No booking fees"],
      },
    ],
  },
];

export function getRoom(slug: string | undefined): Room | undefined {
  return rooms.find((room) => room.slug === slug);
}

export function getRate(slug: string | undefined, rateId: string | undefined) {
  const room = getRoom(slug);
  if (!room) return undefined;
  return room.rates.find((rate) => rate.id === rateId);
}
