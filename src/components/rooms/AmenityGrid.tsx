import type { LucideIcon } from "lucide-react";
import {
  Check,
  GlassWater,
  Palmtree,
  ShowerHead,
  Snowflake,
  Sparkles,
  Waves,
  Wifi,
} from "lucide-react";

const AMENITY_ICONS: Record<string, LucideIcon> = {
  "Air Conditioning": Snowflake,
  "Private Bathroom": ShowerHead,
  "Free Wi-Fi": Wifi,
  "Minibar": GlassWater,
  "Daily Housekeeping": Sparkles,
  "Ocean-facing Balcony": Waves,
  "Direct Pool Access": Waves,
  "Private Garden Patio": Palmtree,
};

interface AmenityGridProps {
  amenities: string[];
}

export default function AmenityGrid({ amenities }: AmenityGridProps) {
  return (
    <ul className="divide-y divide-line border-t border-b border-line">
      {amenities.map((amenity) => {
        const Icon = AMENITY_ICONS[amenity] ?? Check;
        return (
          <li key={amenity} className="flex items-center gap-4 py-3.5">
            <Icon
              className="h-5 w-5 shrink-0 text-teal"
              strokeWidth={1}
              aria-hidden="true"
            />
            <span className="text-sm text-ink/80">{amenity}</span>
          </li>
        );
      })}
    </ul>
  );
}
