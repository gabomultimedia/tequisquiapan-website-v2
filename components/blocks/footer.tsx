import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

interface FooterProps {
  locale?: string;
}

const quickLinks = [
  { href: "/", label: "Inicio" },
  { href: "/golf", label: "Campo de Golf" },
  { href: "/restaurante", label: "Restaurante" },
  { href: "/raqueta", label: "Club Raqueta" },
  { href: "/membresias", label: "Membresías" },
  { href: "/green-fees", label: "Green Fees" },
  { href: "/torneos", label: "Torneos" },
  { href: "/reglamentos", label: "Reglamentos" },
  { href: "/contacto", label: "Contacto" },
];

const quickLinksEn = [
  { href: "/", label: "Home" },
  { href: "/golf", label: "Golf Course" },
  { href: "/restaurante", label: "Restaurant" },
  { href: "/raqueta", label: "Racquet Club" },
  { href: "/membresias", label: "Memberships" },
  { href: "/green-fees", label: "Green Fees" },
  { href: "/torneos", label: "Tournaments" },
  { href: "/reglamentos", label: "Rules & Regulations" },
  { href: "/contacto", label: "Contact" },
];

export function Footer({ locale = "es" }: FooterProps) {
  const links = locale === "en" ? quickLinksEn : quickLinks;
  const half = Math.ceil(links.length / 2);
  const col1 = links.slice(0, half);
  const col2 = links.slice(half);

  const getLocalizedPath = (path: string) => {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  };

  return (
    <footer className="bg-[#0A3622] text-white relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D4A84B] to-transparent" />

      {/* Main Footer - 4 columns */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:col-span-2 lg:col-span-1">
            <div className="w-32 h-32 mb-4">
              <Image src="/images/logo/logo-1.svg" alt="Club de Golf Tequisquiapan" width={128} height={128} className="w-full h-full" />
            </div>
            <p className="font-playfair text-white font-semibold text-xl mb-1">Club de Golf</p>
            <p className="text-[#D4A84B] text-xs tracking-widest uppercase mb-3">Tequisquiapan</p>
            <p className="text-white/50 text-sm leading-relaxed">
              {locale === "en"
                ? "Over 50 years of golfing tradition in the heart of Tequisquiapan, Querétaro."
                : "Más de 50 años de tradición golfística en el corazón de Tequisquiapan, Querétaro."}
            </p>
          </div>

          {/* Column 2: Navigation Part 1 */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-playfair text-sm font-semibold mb-4 text-[#D4A84B] tracking-wide uppercase">
              {locale === "en" ? "Navigation" : "Navegación"}
            </h3>
            <ul className="space-y-2">
              {col1.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLocalizedPath(link.href)}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation Part 2 */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-playfair text-sm font-semibold mb-4 text-[#D4A84B] tracking-wide uppercase invisible">
              {locale === "en" ? "Navigation" : "Navegación"}
            </h3>
            <ul className="space-y-2">
              {col2.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLocalizedPath(link.href)}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-playfair text-sm font-semibold mb-4 text-[#D4A84B] tracking-wide uppercase">
              {locale === "en" ? "Contact" : "Contacto"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4A84B] flex-shrink-0" />
                <span className="text-white/70 text-sm">{locale === "en" ? "Wed-Mon: 7AM-6PM" : "Mi-Lu: 7AM-6PM"}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4A84B] flex-shrink-0" />
                <a href="tel:+4142730095" className="text-white/70 hover:text-white text-sm transition-colors">+414 273 00 95</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4A84B] flex-shrink-0" />
                <a href="tel:5561941723" className="text-white/70 hover:text-white text-sm transition-colors">55 6194 1723</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#D4A84B] flex-shrink-0" />
                <a href="https://wa.me/525539085548" className="text-white/70 hover:text-white text-sm transition-colors">55 3908 5548</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4A84B] flex-shrink-0" />
                <a href="mailto:contacto@clubtequisquiapan.mx" className="text-white/70 hover:text-white text-sm transition-colors">contacto@clubtequisquiapan.mx</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4A84B] flex-shrink-0" />
                <span className="text-white/70 text-sm">Cantaridas S/N, Tequisquiapan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-10 pt-8 border-t border-white/10">
          <a
            href="https://facebook.com/profile.php?id=61577930170788"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-white/20 hover:border-[#D4A84B] hover:bg-[#D4A84B] rounded-full flex items-center justify-center transition-all"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/clubgolftequisquiapan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-white/20 hover:border-[#D4A84B] hover:bg-[#D4A84B] rounded-full flex items-center justify-center transition-all"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.068 1.645.068 4.849 0 3.205-.012 3.584-.068 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs">
            <p className="text-white/40">
              © {new Date().getFullYear()} Club de Golf Tequisquiapan
            </p>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href="https://qretaria.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#D4A84B] transition-colors"
            >
              {locale === "en" ? "Developed by QRETARIA Marketing" : "Desarrollado por QRETARIA Marketing"}
            </a>
          </div>
          <div className="flex gap-6 text-xs">
            <Link href={getLocalizedPath("/privacidad")} className="text-white/40 hover:text-white/70 transition-colors">
              {locale === "en" ? "Privacy" : "Privacidad"}
            </Link>
            <Link href={getLocalizedPath("/terminos")} className="text-white/40 hover:text-white/70 transition-colors">
              {locale === "en" ? "Terms" : "Términos"}
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/525539085548?text=Hola,%20deseo%20mas%20informacion%20sobre%20el%20Club%20de%20Golf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-50"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
}