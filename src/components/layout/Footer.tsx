import { Link } from "react-router-dom";
import { Lighthouse, Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";

const EXPLORE_LINKS = [
  { label: "Stay", href: "/#stay" },
  { label: "Experience", href: "/#experience" },
  { label: "Dining", href: "/#dining" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About", href: "/#about" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", Icon: SiInstagram },
  { label: "Facebook", href: "https://facebook.com", Icon: SiFacebook },
  { label: "X", href: "https://x.com", Icon: SiX },
  { label: "YouTube", href: "https://youtube.com", Icon: SiYoutube },
];

export default function Footer() {
  return (
    <footer className="bg-teal text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center bg-cream/10 text-cream">
              <Lighthouse className="h-5 w-5" strokeWidth={1} aria-hidden="true" />
            </span>
            <span className="font-serif text-xl font-semibold tracking-tight">
              Mercusuar Hotel
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            A brighter kind of escape on the shores of Gili Trawangan. Boutique
            comfort, island soul.
          </p>
          <div className="mt-6 flex gap-2.5">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-cream/25 text-cream transition-colors duration-150 hover:border-brass hover:bg-cream/10 hover:text-brass"
              >
                <Icon className="h-4 w-4" strokeWidth={1} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">
            Explore
          </h3>
          <ul className="mt-4 space-y-3">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm text-cream/70 transition-colors duration-150 hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2.5">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                aria-hidden="true"
              />
              <span>Jalan Pantai, Gili Trawangan, Lombok, Indonesia</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a
                href="tel:+62370000000"
                className="transition-colors duration-150 hover:text-cream"
              >
                +62 370 000 000
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a
                href="mailto:stay@mercusuarhotel.com"
                className="transition-colors duration-150 hover:text-cream"
              >
                stay@mercusuarhotel.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">
            Book Direct &amp; Save
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Reserve on our site for the best rates, flexible cancellation, and a
            complimentary sunset welcome drink.
          </p>
          <Link
            to="/rooms"
            className="mt-5 inline-flex rounded-none border border-brass/60 px-6 py-3 text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-colors duration-150 hover:border-brass hover:bg-brass/10 hover:text-brass active:scale-[0.97]"
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Mercusuar Hotel. All rights reserved.</p>
          <p>
            A boutique stay in Gili Trawangan, Lombok — demo template, no real
            bookings.
          </p>
        </div>
      </div>
    </footer>
  );
}
