import { Fragment } from "react";
import { Check } from "lucide-react";
import type { Rate } from "../../lib/types";
import { formatIDR } from "../../lib/booking";

interface RateSelectorProps {
  rates: Rate[];
  selectedId: string;
  onSelect: (rateId: string) => void;
}

export default function RateSelector({
  rates,
  selectedId,
  onSelect,
}: RateSelectorProps) {
  return (
    <fieldset>
      <legend className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
        Select Your Rate
      </legend>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {rates.map((rate) => {
          const selected = rate.id === selectedId;
          return (
            <label
              key={rate.id}
              className={[
                "flex h-full cursor-pointer flex-col rounded-none border p-5 transition-colors duration-150",
                selected
                  ? "border-brass bg-cream"
                  : "border-line bg-transparent hover:border-brass/50",
              ].join(" ")}
            >
              <input
                type="radio"
                name="rate"
                value={rate.id}
                checked={selected}
                onChange={() => onSelect(rate.id)}
                className="sr-only"
              />
              <span className="flex items-start justify-between gap-3">
                <span className="flex items-center gap-2 font-semibold text-ink">
                  {rate.name}
                  {selected && (
                    <Check
                      className="h-4 w-4 text-teal"
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                  )}
                </span>
                <span className="text-right">
                  <span className="block text-lg font-semibold text-teal">
                    {formatIDR(rate.price)}
                  </span>
                  <span className="text-xs text-muted">/ night</span>
                </span>
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-muted">
                {rate.description}
              </span>
              <span className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                {rate.perks.map((perk, perkIndex) => (
                  <Fragment key={perk}>
                    {perkIndex > 0 && (
                      <span className="text-brass" aria-hidden="true">
                        ·
                      </span>
                    )}
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink/50">
                      {perk}
                    </span>
                  </Fragment>
                ))}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
