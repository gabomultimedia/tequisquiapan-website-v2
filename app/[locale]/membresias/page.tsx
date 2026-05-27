import Image from "next/image";
import { Metadata } from "next";
import { Phone, MessageCircle } from "lucide-react";

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
      "Acceso a gimnasio y alberca",
          ],
    highlight: false,
  },
  {
    name: "Pareja",
    price: "$10,430",
    period: "mensual",
    inscription: "$100,000",
    regularPrice: "$250,000",
    features: [
      "Todo lo incluido en Personal",
      "Acceso para cônjuge",
    ],
    highlight: false,
  },
  {
    name: "Familiar",
    price: "$11,830",
    period: "mensual",
    inscription: "$100,000",
    regularPrice: "$250,000",
    features: [
      "Todo lo incluido en Pareja",
      "Cónyuge + hijos menores 21 años",
      "Descuentos en restaurante (25%)",
    ],
    highlight: true,
  },
  {
    name: "Empresarial",
    price: "$24,000",
    period: "mensual",
    inscription: "$150,000",
    regularPrice: "$250,000",
    features: [
      "Hasta 4 representantes legales",
      "Torneos corporativos incluidos",
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
    "Acceso a gimnasio y alberca",
  ],
};

const paymentDiscounts = [
  { months: "12 meses", discount: "15% descuento" },
  { months: "6 meses", discount: "10% descuento" },
  { months: "3 meses", discount: "5% descuento" },
];

export default function MembresiasPage() {
  const whatsappUrl = "https://wa.me/525539085548?text=Hola,%20deseo%20información%20sobre%20las%20membresías%20del%20Club%20de%20Golf%20Tequisquiapan";

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
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    membership.highlight
                      ? "bg-[#D4A84B] text-[#0A3622] hover:bg-[#c49a3f]"
                      : "bg-[#25D366] text-white hover:bg-[#20BD5A]"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Solicitar por WhatsApp
                </a>
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
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 rounded-lg font-semibold bg-[#25D366] text-white hover:bg-[#20BD5A] transition-all"
            >
              <MessageCircle className="w-4 h-4 inline mr-2" />
              Solicitar por WhatsApp
            </a>
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

      {/* CTA WhatsApp */}
      <section className="py-24 bg-[#25D366]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <h2 className="font-playfair text-4xl font-bold text-white mb-6">
            ¿Listo para ser miembro?
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Contáctanos por WhatsApp y te ayudamos a elegir la membresía ideal para ti.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#25D366] font-bold px-10 py-4 rounded-xl text-xl hover:bg-[#f0f0f0] transition-all hover:shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
