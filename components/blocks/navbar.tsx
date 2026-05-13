"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Flag, Utensils, Trophy, Users, CreditCard, MapPin, LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";

const navItems: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/", label: "Inicio", icon: Flag },
  { href: "/golf", label: "Golf", icon: Flag },
  { href: "/restaurante", label: "Restaurante", icon: Utensils },
  { href: "/raqueta", label: "Raqueta", icon: Trophy },
  { href: "/membresias", label: "Membresías", icon: Users },
  { href: "/green-fees", label: "Green Fees", icon: CreditCard },
  { href: "/torneos", label: "Torneos", icon: Trophy },
  { href: "/contacto", label: "Contacto", icon: MapPin },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-[#D4A84B] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="font-playfair text-white font-bold text-lg">CGT</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-playfair text-white font-semibold text-lg leading-tight">
                Club de Golf
              </p>
              <p className="text-[#D4A84B] text-xs tracking-wider uppercase">
                Tequisquiapan
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#D4A84B] text-[#0A3622]"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contacto"
              className="bg-[#D4A84B] hover:bg-[#c49a3f] text-[#0A3622] font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-[#D4A84B]/20"
            >
              Hazte Miembro
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
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#D4A84B] text-[#0A3622]"
                        : "text-white/90 hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 px-4">
                <Link
                  href="/contacto"
                  className="block w-full bg-[#D4A84B] hover:bg-[#c49a3f] text-[#0A3622] font-semibold px-6 py-3 rounded-lg text-center transition-all"
                >
                  Hazte Miembro
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}