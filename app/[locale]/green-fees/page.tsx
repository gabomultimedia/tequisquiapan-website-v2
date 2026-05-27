import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Clock, MapPin, CreditCard, Calendar, Gift } from "lucide-react";

export const metadata: Metadata = {
  title: "Green Fees | Tarifas y Promociones 2026",
  description:
    "Green Fees del Club de Golf Tequisquiapan. $2,500 MXN entre semana, $3,500 MXN findes. Todos los jueves 2X1. Renta de carts y equipos disponibles.",
};

const greenFees = [
  {
    title: "Entre Semana",
    price: "$2,500",
    unit: "por persona",
    days: "Lunes - Viernes",
    features: [
      "Acceso completo al campo de 18 hoyos",
      "Incluye práctica en driving range",
    ],
  },
  {
    title: "Fin de Semana",
    price: "$3,500",
    unit: "por persona",
    days: "Sábado y Domingo",
    features: [
      "Acceso completo al campo de 18 hoyos",
      "Incluye práctica en driving range",
    ],
    highlight: true,
  },
];

const extras = [
  { name: "Renta de carro (18 hoyos)", price: "$700 MXN" },
  { name: "Cuota de caddie", price: "$500 MXN" },
  { name: "Uso de Tee de Práctica", price: "Incluido" },
  { name: "Bolas tee de práctica", price: "Desde $50 MXN" },
];

const promotions = [
  {
    title: "2X1 Todos los Jueves",
    description: "",
    icon: Gift,
  },
];

export default function GreenFeesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/page-title/page-title-greenfee.webp"
            alt="Green Fees Club de Golf Tequisquiapan"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A3622]/90 to-[#0A3622]/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <p className="text-[#D4A84B] tracking-[0.3em] uppercase text-sm mb-4">
            Green Fees
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Tu próxima ronda<br />te está esperando
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Tarifas competitivas y promociones exclusivas para que disfrutes del mejor
            golf de Tequisquiapan sin complicarte.
          </p>
        </div>
      </section>

      {/* Green Fees Cards */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {greenFees.map((fee, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  fee.highlight
                    ? "bg-[#0A3622] text-white"
                    : "bg-white shadow-lg"
                }`}
              >
                {fee.highlight && (
                  <span className="inline-block bg-[#D4A84B] text-[#0A3622] text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Más Popular
                  </span>
                )}
                <p className="text-[#D4A84B] text-sm uppercase tracking-wider mb-2">
                  {fee.days}
                </p>
                <h3 className="font-playfair text-3xl font-bold mb-2">
                  {fee.title}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{fee.price}</span>
                  <span className={`text-sm ${fee.highlight ? "text-white/70" : "text-[#1A1A1A]/60"}`}>
                    {fee.unit}
                  </span>
                </div>
                <ul className="space-y-3">
                  {fee.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${fee.highlight ? "text-[#D4A84B]" : "text-[#D4A84B]"}`}
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
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Extras */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-playfair text-2xl font-bold text-[#0A3622] mb-6">
              Servicios Adicionales
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {extras.map((extra, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-[#FAF8F5] rounded-xl"
                >
                  <span className="text-[#1A1A1A]/80">{extra.name}</span>
                  <span className="font-semibold text-[#0A3622]">{extra.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-[#0A3622] mb-4">
              Promociones Especiales
            </h2>
            <p className="text-[#1A1A1A]/70 text-lg max-w-2xl mx-auto">
              Beneficios adicionales para maximizar tu experiencia en el club.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => {
              const Icon = promo.icon;
              return (
                <div
                  key={index}
                  className="bg-[#FAF8F5] rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-[#D4A84B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#D4A84B]" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-[#0A3622] mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-[#1A1A1A]/70 text-sm">
                    {promo.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A3622]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-6">
            Reserva tu tee time
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Para reservaciones y更多信息, por favor contacta directamente al club.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4142730095"
              className="bg-[#D4A84B] hover:bg-[#c49a3f] text-[#0A3622] font-semibold px-8 py-4 rounded-lg text-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +414 273 00 95
            </a>
            <Link
              href="/membresias"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0A3622] font-semibold px-8 py-4 rounded-lg text-lg transition-all"
            >
              Ver Membresías
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}