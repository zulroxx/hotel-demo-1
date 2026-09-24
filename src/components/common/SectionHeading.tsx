interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={[
        "max-w-2xl",
        isCenter ? "mx-auto text-center" : "text-left",
      ].join(" ")}
    >
      {eyebrow && (
        <div
          className={[
            "mb-6 flex flex-col",
            isCenter ? "items-center" : "items-start",
          ].join(" ")}
        >
          <p
            className={[
              "text-xs font-semibold uppercase tracking-[0.3em]",
              light ? "text-gold" : "text-brass",
            ].join(" ")}
          >
            {eyebrow}
          </p>
          <span className="hairline mt-3" aria-hidden="true" />
        </div>
      )}
      <h2
        className={[
          "font-serif text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-[2.75rem]",
          light ? "text-cream" : "text-ink",
        ].join(" ")}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={[
            "mt-5 text-base leading-relaxed",
            light ? "text-cream/75" : "text-muted",
          ].join(" ")}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
