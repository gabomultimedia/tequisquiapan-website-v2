"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface NavbarProps {
  locale: string;
}

const navItems: { href: string; labelKey: string }[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/golf", labelKey: "nav.golf" },
  { href: "/restaurante", labelKey: "nav.restaurant" },
  { href: "/raqueta", labelKey: "nav.racquet" },
  { href: "/membresias", labelKey: "nav.membership" },
  { href: "/green-fees", labelKey: "nav.greenFees" },
  // Torneos removido del desktop - solo visible en mobile menu
  { href: "/contacto", labelKey: "nav.contact" },
];

const labels: Record<string, Record<string, string>> = {
  es: {
    "nav.home": "Inicio",
    "nav.golf": "Golf",
    "nav.restaurant": "Restaurante",
    "nav.racquet": "Raqueta",
    "nav.membership": "Membresías",
    "nav.greenFees": "Green Fees",
    "nav.tournaments": "Torneos",
    "nav.contact": "Contacto",
    "nav.becomeMember": "Hazte Miembro",
  },
  en: {
    "nav.home": "Home",
    "nav.golf": "Golf",
    "nav.restaurant": "Restaurant",
    "nav.racquet": "Racquet",
    "nav.membership": "Membership",
    "nav.greenFees": "Green Fees",
    "nav.tournaments": "Tournaments",
    "nav.contact": "Contact",
    "nav.becomeMember": "Become Member",
  },
};

export function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = labels[locale] || labels.es;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const getLocalizedPath = (path: string) => {
    if (path === "/") return `/${locale}`;
    return `/${locale}${path}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A3622]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - SVG Oficial CGT */}
          <Link href={getLocalizedPath("/")} className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-[173px] h-[173px]">
              <Image src="/images/logo/logo-1.svg" alt="Club de Golf Tequisquiapan" width={173} height={173} className="w-full h-full" />
            </div>
          </Link>

          {/* Desktop Navigation - Sin Iconos */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname === `/${locale}${item.href}`;
              return (
                <Link
                  key={item.href}
                  href={getLocalizedPath(item.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white text-[#0A3622]"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {t[item.labelKey]}
                </Link>
              );
            })}
          </div>

          {/* CTA Button - Blanco */}
          <div className="hidden lg:block">
            <Link
              href={getLocalizedPath("/contacto")}
              className="bg-white hover:bg-gray-100 text-[#0A3622] font-semibold px-6 py-3 rounded-lg transition-all"
            >
              {t["nav.becomeMember"]}
            </Link>
          </div>

          {/* Language Switcher - Blanco */}
          <div className="hidden lg:flex items-center gap-2 ml-4">
            <Link
              href={getLocalizedPath("/")}
              className={`text-sm px-3 py-1.5 rounded border transition-all ${
                locale === "es"
                  ? "bg-white text-[#0A3622] border-white"
                  : "text-white border-white/30 hover:border-white"
              }`}
            >
              ES
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href={getLocalizedPath("/")}
              className={`text-sm px-3 py-1.5 rounded border transition-all ${
                locale === "en"
                  ? "bg-white text-[#0A3622] border-white"
                  : "text-white border-white/30 hover:border-white"
              }`}
            >
              EN
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname === `/${locale}${item.href}`;
                return (
                  <Link
                    key={item.href}
                    href={getLocalizedPath(item.href)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-white text-[#0A3622]"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {t[item.labelKey]}
                  </Link>
                );
              })}
              <div className="pt-4 px-4 flex gap-2">
                <Link
                  href={getLocalizedPath("/")}
                  className={`flex-1 text-center py-3 rounded-lg text-sm font-medium border ${
                    locale === "es"
                      ? "bg-white text-[#0A3622] border-white"
                      : "bg-transparent text-white border-white/30"
                  }`}
                >
                  ES
                </Link>
                <Link
                  href={getLocalizedPath("/")}
                  className={`flex-1 text-center py-3 rounded-lg text-sm font-medium border ${
                    locale === "en"
                      ? "bg-white text-[#0A3622] border-white"
                      : "bg-transparent text-white border-white/30"
                  }`}
                >
                  EN
                </Link>
              </div>
              <div className="pt-4 px-4">
                <Link
                  href={getLocalizedPath("/contacto")}
                  className="block w-full bg-white hover:bg-gray-100 text-[#0A3622] font-semibold px-6 py-3 rounded-lg text-center transition-all"
                >
                  {t["nav.becomeMember"]}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}