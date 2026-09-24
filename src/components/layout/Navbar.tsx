import { useState } from "react";
import { Link } from "react-router-dom";
import { Lighthouse, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Stay", href: "/#stay" },
  { label: "Experience", href: "/#experience" },
  { label: "Dining", href: "/#dining" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/85 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5"
        >
          <span className="flex h-9 w-9 items-center justify-center bg-teal text-cream">
            <Lighthouse className="h-5 w-5" strokeWidth={1} aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-ink">
            Mercusuar <span className="text-teal">Hotel</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="relative text-sm font-medium text-ink/70 transition-colors duration-150 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brass after:transition-all after:duration-200 hover:text-brass hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/rooms"
            className="hidden rounded-none bg-teal px-6 py-3 text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-colors duration-150 hover:bg-teal-dark active:scale-[0.97] sm:inline-flex"
          >
            Book Now
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-none text-ink transition-colors duration-150 hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1} aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-ink/5 bg-cream lg:hidden"
      >
        <div className="flex flex-col px-5 py-3 sm:px-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setOpen(false)}
              className="rounded-none border-b border-transparent px-3 py-3 text-base font-medium text-ink/80 transition-colors duration-150 hover:border-brass hover:text-brass"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/rooms"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-none bg-teal px-6 py-3 text-center text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-colors duration-150 hover:bg-teal-dark"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
