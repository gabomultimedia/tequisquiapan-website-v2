import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, MapPin, Users, Trophy, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Membresías | Acceso ilimitado a todas las instalaciones",
  description:
    "Membresías del Club de Golf Tequisquiapan. Personal, Familiar y Empresarial. Acceso ilimitado al campo, restaurante, tennis, pádel y más.",
};

const memberships = [
  {
    name: "Personal",
    price: "$9,333",
    period: "mensual",
    inscription: "$100,000",
    regularPrice: "$250,000",
    features: [
      "Acceso ilimitado al campo de golf",
      "Green fees preferenciales (30% descuento)",
      "Acceso a健身房 y alberca",
      "1 invitación mensual a invitado",
      "Participación en torneos mensuales",
    ],
    highlight: false,
  },
  {
    name: "Pareja",
    price: "$10,430",
    period: "mensual",
    inscription: "$100,000",
    regularPrice: "$280,000",
    features: [
      "Todo lo incluido en Personal",
      "Acceso para cônjuge",
      "2 invitaciones mensuales a invitados",
      "Eventos familiares exclusivos",
      "Descuentos en restaurante (20%)",
    ],
    highlight: false,
  },
  {
    name: "Familiar",
    price: "$11,830",
    period: "mensual",
    inscription: "$100,000",
    regularPrice: "$350,000",
    features: [
      "Todo lo incluido en Pareja",
      "Hijos menores de 21 años incluidos",
      "Acceso a clases grupales de tennis",
      "Events infantiles y juveniles",
      "Descuentos en restaurante (25%)",
      "Cumpleaños especial para hijos",
    ],
    highlight: true,
  },
  {
    name: "Empresarial",
    price: "$24,000",
    period: "mensual",
    inscription: "$150,000",
    regularPrice: "$600,000",
    features: [
      "Hasta 4 representantes legales",
      "Torneos corporativos incluidos",
      "Team building events",
      "Descuentos en restaurante (30%)",
      "Cliente frecuente: beneficios adicionales",
    ],
    highlight: false,
  },
];

const juniorMembership = {
  name: "Junior",
  price: "$35,500",
  period: "anual",
  ageRange: "22-30 años",
  features: [
    "Acceso ilimitado al campo",
    "Green fees preferenciales (25%)",
    "Acceso a健身房 y alberca",
    "Events para jóvenes",
    "Mentoría con jugadores experimentados",
  ],
};

const paymentDiscounts = [
  { months: "12 meses", discount: "15% descuento" },
  { months: "6 meses", discount: "10% descuento" },
  { months: "3 meses", discount: "5% descuento" },
];

export default function MembresiasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/media/golf-female.webp"
            alt="Membresías Club de Golf Tequisquiapan"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A3622]/90 to-[#0A3622]/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <p className="text-[#D4A84B] tracking-[0.3em] uppercase text-sm mb-4">
            Membresías
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Tu acceso al<br />mundo CGT
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Más que membresías. Son llaves a un estilo de vida donde el golf,
            la naturaleza y la comunidad se unen.
          </p>
        </div>
      </section>

      {/* Memberships Grid */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {memberships.map((membership, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  membership.highlight
                    ? "bg-[#0A3622] text-white ring-4 ring-[#D4A84B]"
                    : "bg-white shadow-lg"
                }`}
              >
                {membership.highlight && (
                  <span className="inline-block bg-[#D4A84B] text-[#0A3622] text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Más Popular
                  </span>
                )}
                <h3 className="font-playfair text-2xl font-bold mb-2">
                  {membership.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{membership.price}</span>
                  <span className={`text-sm ${membership.highlight ? "text-white/70" : "text-[#1A1A1A]/60"}`}>
                    /{membership.period}
                  </span>
                </div>
                <p className={`text-xs mb-6 ${membership.highlight ? "text-white/60" : "text-[#1A1A1A]/60"}`}>
                  Inscripción: {membership.inscription}
                  {membership.regularPrice && ` (Regular: ${membership.regularPrice})`}
                </p>
                <ul className="space-y-3 mb-8">
                  {membership.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${membership.highlight ? "text-[#D4A84B]" : "text-[#D4A84B]"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    membership.highlight
                      ? "bg-[#D4A84B] text-[#0A3622] hover:bg-[#c49a3f]"
                      : "bg-[#0A3622] text-white hover:bg-[#14512D]"
                  }`}
                >
                  Solicitar Información
                </Link>
              </div>
            ))}
          </div>

          {/* Junior Membership */}
          <div className="bg-[#F7F2E6] rounded-2xl p-8 max-w-md mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="font-playfair text-2xl font-bold text-[#0A3622]">
                {juniorMembership.name}
              </h3>
              <span className="bg-[#D4A84B] text-[#0A3622] text-xs font-bold px-3 py-1 rounded-full">
                {juniorMembership.ageRange}
              </span>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-bold text-[#0A3622]">{juniorMembership.price}</span>
              <span className="text-sm text-[#1A1A1A]/60">/{juniorMembership.period}</span>
            </div>
            <ul className="space-y-3 mb-6">
              {juniorMembership.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-3 text-sm text-[#1A1A1A]/80">
                  <svg className="w-5 h-5 text-[#D4A84B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contacto"
              className="block w-full text-center py-3 rounded-lg font-semibold bg-[#0A3622] text-white hover:bg-[#14512D] transition-all"
            >
              Solicitar Información
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Discounts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-playfair text-2xl font-bold text-[#0A3622] mb-8">
            Descuentos por pago anticipado
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {paymentDiscounts.map((discount, index) => (
              <div key={index} className="bg-[#FAF8F5] rounded-xl px-8 py-4">
                <p className="font-semibold text-[#0A3622]">{discount.months}</p>
                <p className="text-[#D4A84B] font-bold">{discount.discount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A3622]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-6">
            ¿Listo para ser miembro?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Agenda una visita al club y conoce todas nuestras instalaciones.
            Sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-[#D4A84B] hover:bg-[#c49a3f] text-[#0A3622] font-semibold px-8 py-4 rounded-lg text-lg transition-all"
            >
              Solicitar Visita
            </Link>
            <a
              href="tel:+4142730095"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0A3622] font-semibold px-8 py-4 rounded-lg text-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +414 273 00 95
            </a>
          </div>
        </div>
      </section>
    </>
  );
}