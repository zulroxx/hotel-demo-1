import type { Experience } from "../lib/types";
import { unsplash } from "../lib/images";

export const experiences: Experience[] = [
  {
    title: "Snorkeling Trip",
    description: "Swim with turtles over the coral gardens of the three Gilis.",
    image: unsplash("1544551763-46a013bb70d5", 800),
  },
  {
    title: "Island Cycling",
    description: "Loop the island on two wheels, past rice paddies and quiet coves.",
    image: unsplash("1476514525535-07fb3b4ae5f1", 800),
  },
  {
    title: "Sunset Cruise",
    description: "Sail into a Gili sunset aboard our traditional wooden boat.",
    image: unsplash("1502680390469-be75c86b636f", 800),
  },
  {
    title: "Local Dining",
    description: "Taste Sasak flavours at the beachfront table, feet in the sand.",
    image: unsplash("1517248135467-4c7edcad34c4", 800),
  },
];
