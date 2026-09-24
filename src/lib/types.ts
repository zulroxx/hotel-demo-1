export interface Rate {
  id: string;
  name: string;
  description: string;
  price: number;
  perks: string[];
}

export interface Room {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  features: string[];
  images: string[];
  amenities: string[];
  rates: Rate[];
}

export interface Experience {
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
}
