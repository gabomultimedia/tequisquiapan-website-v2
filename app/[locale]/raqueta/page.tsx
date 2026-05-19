import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, MapPin, Clock, Users, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Club Raqueta | Tenis",
  description:
    "Club Raqueta del Club de Golf Tequisquiapan. 2 canchas de tenis. Academia MATX POINT para clases profesionales.",
};

const activities = [
  {
    title: "Tenis",
    description:
      "2 canchas de tenis de primera calidad. Academia MATX POINT para clases de todos los niveles.",
    image: "/images/media/tennis-1.webp",
  },
];

const facilities = [
  "Gimnasio equipado",
  "Área de descanso",
  "Academia MATX POINT",
];

export default function RaquetaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/page-title/page-title-raqueta.webp"
            alt="Club Raqueta Club de Golf Tequisquiapan"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A3622]/90 to-[#0A3622]/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <p className="text-[#D4A84B] tracking-[0.3em] uppercase text-sm mb-4">
            Club Raqueta
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Movimiento,<br />salud y diversión
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Más allá del golf, disfruta de canchas de tenis profesionales y la Academia MATX POINT.
          </p>
        </div>
      </section>

      {/* Activities */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-[#0A3622] mb-4">
              Actividades para todos
            </h2>
            <p className="text-[#1A1A1A]/70 text-lg max-w-2xl mx-auto">
              Canchas de tenis profesionales. Academia MATX POINT para clases de todos los niveles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-white shadow-lg group"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-[#0A3622] mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-[#0A3622] mb-6">
                Instalaciones de primera
              </h2>
              <p className="text-[#1A1A1A]/70 text-lg leading-relaxed mb-8">
                Nuestras instalaciones están diseñadas para ofrecer la mejor experiencia
                deportiva. Desde canchas profesionales hasta áreas de descanso, todo ha
                sido pensado para tu comodidad.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#D4A84B] flex-shrink-0"
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
                    <span className="text-sm text-[#1A1A1A]/80">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/media/tennis-4.webp"
                alt="Instalaciones Club Raqueta"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#D4A84B] text-[#0A3622] p-6 rounded-xl shadow-xl">
                <p className="font-playfair text-3xl font-bold">2</p>
                <p className="text-sm">Canchas de Tenis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academia */}
      <section className="py-24 bg-[#0A3622]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-[#D4A84B] rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-[#0A3622]" />
          </div>
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">
            Academia MATX POINT
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Clases profesionales de tenis para todos los niveles. Nuestros instructores
            certificados te ayudarán a mejorar tu juego, sin importar tu edad o experiencia.
          </p>
          <a
            href="tel:+4142730095"
            className="inline-flex items-center gap-2 bg-[#D4A84B] hover:bg-[#c49a3f] text-[#0A3622] font-semibold px-8 py-4 rounded-lg text-lg transition-all"
          >
            <Phone className="w-5 h-5" />
            Solicitar información sobre clases
          </a>
        </div>
      </section>
    </>
  );
}