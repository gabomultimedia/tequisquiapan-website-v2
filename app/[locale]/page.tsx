import Image from "next/image";
import Link from "next/link";
import { Flag, Utensils, Trophy, MapPin, Phone, Clock, ChevronRight, Star } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HeroSlider } from "@/components/hero-slider";

const experiences = [
  {
    title: "Campo de Golf",
    description:
      "18 hoyos Par 72, 6,906 yardas. Diseñado por Joe Finger en 1975. Kikuyo en fairways, Bent Grass en greens.",
    icon: Flag,
    image: "/images/media/golf-green.webp",
    href: "/golf",
  },
  {
    title: "Restaurante",
    description:
      "Cocina que acompaña momentos. Desayunos en terraza, almuerzos entre amigos, cenas con vista.",
    icon: Utensils,
    image: "/images/media/food-complete.webp",
    href: "/restaurante",
  },
  {
    title: "Club Raqueta",
    description:
      "2 canchas de tenis. Academia MATX POINT para clases profesionales.",
    icon: Trophy,
    image: "/images/media/tennis-1.webp",
    href: "/raqueta",
  },
];

const stats = [
  { value: "50+", label: "Años de tradición" },
  { value: "18", label: "Hoyos Par 72" },
  { value: "6,906", label: "Yardas" },
  { value: "1977", label: "Fundado" },
];

const memberships = [
  {
    name: "Personal",
    price: "$9,333",
    period: "/mes",
    features: ["Acceso ilimitado al campo", "Green fees preferenciales", "Descuentos en restaurante"],
    highlight: false,
  },
  {
    name: "Familiar",
    price: "$11,830",
    period: "/mes",
    features: ["Cónyuge + hijos menores", "Acceso a todas las instalaciones", "Eventos familiares exclusivos"],
    highlight: true,
  },
  {
    name: "Empresarial",
    price: "$24,000",
    period: "/mes",
    features: ["Hasta 5 representantes", "Salón privado para eventos", "Torneos corporativos"],
    highlight: false,
  },
];

const galleryImages = [
  "/images/gallery/gallery-10011.webp",
  "/images/gallery/gallery-10034.webp",
  "/images/gallery/gallery-10048.webp",
  "/images/gallery/gallery-10063.webp",
  "/images/gallery/gallery-10071.webp",
  "/images/gallery/gallery-10109.webp",
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      {/* Hero Section with Ken Burns Slider */}
      <HeroSlider
        locale={locale}
        welcome={t("hero.welcome")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        cta1={t("hero.cta1")}
        cta2={t("hero.cta2")}
      />

      {/* Stats Section */}
      <section className="bg-[#0A3622] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-playfair text-5xl md:text-6xl font-bold text-[#D4A84B] mb-2">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El Club Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#D4A84B] tracking-[0.2em] uppercase text-sm mb-4">
                Sobre Nosotros
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A3622] mb-6 leading-tight">
                Más de 50 años de tradición golfística
              </h2>
              <p className="text-[#1A1A1A]/70 text-lg leading-relaxed mb-6">
                Fundado en 1977, el Club de Golf Tequisquiapan ha sido el escenario de
                innumerable momentos memorables para generaciones de familias y entusiastas
                del golf.
              </p>
              <p className="text-[#1A1A1A]/70 text-lg leading-relaxed mb-8">
                Nuestro campo, diseñado por el reconocido arquitecto Joe Finger, ofrece
                una experiencia de juego única en un entorno natural espectacular, rodeado
                de árboles centenarios y vistas panorámicas que solo Tequisquiapan puede
                ofrecer.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#D4A84B]" />
                  <span className="text-sm text-[#1A1A1A]/80">Tequisquiapan, Qro.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D4A84B]" />
                  <span className="text-sm text-[#1A1A1A]/80">+414 273 00 95</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#D4A84B]" />
                  <span className="text-sm text-[#1A1A1A]/80">Mi-Lu: 7AM - 6PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-[#D4A84B]" />
                  <span className="text-sm text-[#1A1A1A]/80">Slope 124 | Rating 71.1</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/media/golf-entrance.webp"
                alt="Entrada del Club de Golf Tequisquiapan"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0A3622] text-white p-6 rounded-xl shadow-xl">
                <p className="font-playfair text-3xl font-bold text-[#D4A84B]">1977</p>
                <p className="text-sm text-white/70">Año de fundación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencias Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4A84B] tracking-[0.2em] uppercase text-sm mb-4">
              Experiencias
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A3622]">
              Todo lo que puedes disfrutar
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <Link
                  key={index}
                  href={`/${locale}${exp.href}`}
                  className="group relative overflow-hidden rounded-2xl bg-[#FAF8F5] hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A3622]/80 via-[#0A3622]/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-12 h-12 bg-[#D4A84B] rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#0A3622]" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#D4A84B] text-sm font-semibold group-hover:gap-4 transition-all">
                      Explorar <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membresías Preview */}
      <section className="py-24 bg-[#0A3622]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4A84B] tracking-[0.2em] uppercase text-sm mb-4">
              Membresías
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Elige tu membresía ideal
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Acceso ilimitado a todas nuestras instalaciones con beneficios exclusivos
              para miembros.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {memberships.map((membership, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  membership.highlight
                    ? "bg-[#D4A84B] text-[#0A3622]"
                    : "bg-white/10 backdrop-blur text-white"
                }`}
              >
                {membership.highlight && (
                  <span className="inline-block bg-[#0A3622] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Más Popular
                  </span>
                )}
                <h3 className="font-playfair text-2xl font-bold mb-2">
                  {membership.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{membership.price}</span>
                  <span className="text-sm opacity-70">{membership.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {membership.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${membership.highlight ? "text-[#0A3622]" : "text-[#D4A84B]"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/membresias`}
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    membership.highlight
                      ? "bg-[#0A3622] text-white hover:bg-[#14512D]"
                      : "bg-[#D4A84B] text-[#0A3622] hover:bg-[#c49a3f]"
                  }`}
                >
                  Ver Detalles
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/membresias`}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              Ver todas las membresías <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#D4A84B] tracking-[0.2em] uppercase text-sm mb-4">
              Galería
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A3622]">
              Momentos en nuestro club
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Galería del Club de Golf Tequisquiapan ${index + 1}`}
                  width={index === 0 ? 800 : 400}
                  height={index === 0 ? 600 : 300}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F7F2E6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A3622] mb-6">
            Tu espacio entre árboles centenarios
          </h2>
          <p className="text-[#1A1A1A]/70 text-xl mb-10">
            Fairways perfectos, cielo infinito y la naturaleza que solo Tequisquiapan
            puede ofrecer. Abre las puertas a una experiencia de golf incomparable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contacto`}
              className="bg-[#0A3622] hover:bg-[#14512D] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-xl"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Contactar Ahora
            </Link>
            <Link
              href={`/${locale}/green-fees`}
              className="border-2 border-[#0A3622] text-[#0A3622] hover:bg-[#0A3622] hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
            >
              Reservar Green Fee
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}