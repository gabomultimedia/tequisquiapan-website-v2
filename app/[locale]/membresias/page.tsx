import Image from "next/image";
import { Metadata } from "next";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Membresías | Acceso ilimitado a todas las instalaciones",
  description:
    "Membresías del Club de Golf Tequisquiapan. Individual, Familiar y Empresarial. Acceso ilimitado al campo, restaurante, tennis, pádel y más.",
};

const memberships = [
  {
    name: "Familiar",
    code: "A",
    priceMonthly: "$11,833",
    priceAnnual: "$142,000",
    inscription: "$100,000",
    regularPrice: "$250,000",
    highlight: true,
    features: [
      "Cónyuge + hijos menores de 21 años",
      "Acceso ilimitado al campo de golf",
      "Green fees preferenciales (30% descuento)",
      "Acceso a gimnasio y alberca",
      "Eventos familiares exclusivos",
    ],
  },
  {
    name: "Individual",
    code: "B1",
    priceMonthly: "$9,333",
    priceAnnual: "$112,000",
    inscription: "$100,000",
    regularPrice: "$250,000",
    highlight: false,
    features: [
      "Acceso ilimitado al campo de golf",
      "Green fees preferenciales (30% descuento)",
      "Acceso a gimnasio y alberca",
    ],
  },
  {
    name: "Pareja",
    code: "B2",
    priceMonthly: "$10,417",
    priceAnnual: "$125,000",
    inscription: "$100,000",
    regularPrice: "$250,000",
    highlight: false,
    features: [
      "Todo lo incluido en Individual",
      "Acceso para cônjuge",
    ],
  },
];

const specialMemberships = [
  {
    name: "Junior",
    ageRange: "22-30 años",
    priceMonthly: "$2,958",
    priceAnnual: "$35,500",
    features: [
      "Acceso ilimitado al campo",
      "Acceso a gimnasio y alberca",
    ],
  },
];

const paymentDiscounts = [
  {
    month: "Agosto",
    discount: "7%",
    passes: "15 pases de cortesía",
    highlight: true,
  },
  {
    month: "Septiembre",
    discount: "6%",
    passes: "14 pases de cortesía",
    highlight: false,
  },
  {
    month: "Octubre",
    discount: "5%",
    passes: "13 pases de cortesía",
    highlight: false,
  },
  {
    month: "Noviembre",
    discount: "4%",
    passes: "12 pases de cortesía",
    highlight: false,
  },
  {
    month: "Diciembre",
    discount: "3%",
    passes: "11 pases de cortesía",
    highlight: false,
  },
  {
    month: "Enero",
    discount: "2%",
    passes: "10 pases de cortesía",
    highlight: false,
  },
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
            Membresías 2026
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
          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                <div className="text-xs text-[#D4A84B] font-bold mb-2">MODALIDAD {membership.code}</div>
                <h3 className="font-playfair text-2xl font-bold mb-4">
                  {membership.name}
                </h3>

                {/* Pricing */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-baseline border-b border-white/20 pb-2">
                    <span className={`text-sm ${membership.highlight ? "text-white/70" : "text-[#1A1A1A]/60"}`}>
                      Mensual
                    </span>
                    <span className="text-2xl font-bold">{membership.priceMonthly}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className={`text-sm ${membership.highlight ? "text-white/70" : "text-[#1A1A1A]/60"}`}>
                      Anual
                    </span>
                    <span className="text-xl font-bold">{membership.priceAnnual}</span>
                  </div>
                </div>

                <p className={`text-xs mb-4 ${membership.highlight ? "text-white/60" : "text-[#1A1A1A]/60"}`}>
                  Inscripción: {membership.inscription} (Regular: {membership.regularPrice})
                </p>

                <ul className="space-y-3 mb-8">
                  {membership.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm">
                      <svg
                        className="w-5 h-5 flex-shrink-0 text-[#D4A84B]"
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

          {/* Special Memberships */}
          <div className="grid md:grid-cols-3 gap-6">
            {specialMemberships.map((membership, index) => (
              <div key={index} className="bg-[#F7F2E6] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-playfair text-xl font-bold text-[#0A3622]">
                    {membership.name}
                  </h3>
                  {membership.ageRange && (
                    <span className="bg-[#D4A84B] text-[#0A3622] text-xs font-bold px-2 py-1 rounded-full">
                      {membership.ageRange}
                    </span>
                  )}
                </div>
                <div className="space-y-1 mb-4">
                  {membership.priceMonthly !== "—" && (
                    <p className="text-sm text-[#1A1A1A]/70">
                      Mensual: <span className="font-bold text-[#0A3622]">{membership.priceMonthly}</span>
                    </p>
                  )}
                  {membership.priceAnnual !== "—" && (
                    <p className="text-sm text-[#1A1A1A]/70">
                      Anual: <span className="font-bold text-[#0A3622]">{membership.priceAnnual}</span>
                    </p>
                  )}
                </div>
                <ul className="space-y-2">
                  {membership.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-[#1A1A1A]/80">
                      <svg className="w-4 h-4 text-[#D4A84B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Discounts - Pronto Pago 2026 */}
      <section className="py-20 bg-gradient-to-br from-[#0A3622] via-[#14512D] to-[#0A3622] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A84B] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A84B] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-[#D4A84B] text-[#0A3622] text-xs font-bold px-4 py-2 rounded-full mb-4">
              ⚡ DESCUENTOS POR PRONTO PAGO 2026
            </span>
            <h3 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Pagos anticipados
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Estas tarifas aplican a los pagos anticipados realizados entre agosto 2025 y enero 2026.
              Incluye pases promocionales por mes.
            </p>
          </div>

          {/* Discount Cards - Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {paymentDiscounts.map((discount, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 text-center transform transition-all hover:scale-105 ${
                  discount.highlight
                    ? "bg-gradient-to-br from-[#D4A84B] to-[#c49a3f] text-[#0A3622] shadow-2xl shadow-[#D4A84B]/30"
                    : "bg-white/15 backdrop-blur-sm text-white border border-white/10"
                }`}
              >
                {discount.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A3622] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    ¡MEJOR MOMENTO!
                  </div>
                )}

                <div className={`text-3xl font-black mb-1 ${discount.highlight ? "text-[#0A3622]" : "text-[#D4A84B]"}`}>
                  {discount.discount}
                </div>
                <div className={`text-xs uppercase tracking-wider mb-3 ${discount.highlight ? "text-[#0A3622]/70" : "text-white/60"}`}>
                  descuento
                </div>
                <div className={`text-lg font-bold mb-2 ${discount.highlight ? "text-[#0A3622]" : "text-white"}`}>
                  {discount.month}
                </div>
                <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                  discount.highlight ? "bg-[#0A3622] text-white" : "bg-[#D4A84B] text-[#0A3622]"
                }`}>
                  🎁 {discount.passes}
                </div>
              </div>
            ))}
          </div>

          {/* Price Table */}
          <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h4 className="font-playfair text-2xl font-bold text-white text-center mb-8">
              Cuotas 2026 por modalidad
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-[#D4A84B] font-bold">Modalidad</th>
                    <th className="text-center py-3 px-4 text-[#D4A84B] font-bold">Anual</th>
                    <th className="text-center py-3 px-4 text-[#D4A84B] font-bold">Mensual</th>
                    <th className="text-center py-3 px-4 text-[#D4A84B] font-bold">Agosto</th>
                    <th className="text-center py-3 px-4 text-[#D4A84B] font-bold">Sept.</th>
                    <th className="text-center py-3 px-4 text-[#D4A84B] font-bold">Oct.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10 bg-[#D4A84B]/10">
                    <td className="py-3 px-4 font-semibold">Familiar (A)</td>
                    <td className="text-center py-3 px-4">$142,000</td>
                    <td className="text-center py-3 px-4">$11,833</td>
                    <td className="text-center py-3 px-4 text-[#D4A84B]">$132,060</td>
                    <td className="text-center py-3 px-4">$133,480</td>
                    <td className="text-center py-3 px-4">$134,900</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Individual (B1)</td>
                    <td className="text-center py-3 px-4">$112,000</td>
                    <td className="text-center py-3 px-4">$9,333</td>
                    <td className="text-center py-3 px-4 text-[#D4A84B]">$104,160</td>
                    <td className="text-center py-3 px-4">$105,280</td>
                    <td className="text-center py-3 px-4">$106,400</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Pareja (B2)</td>
                    <td className="text-center py-3 px-4">$125,000</td>
                    <td className="text-center py-3 px-4">$10,417</td>
                    <td className="text-center py-3 px-4 text-[#D4A84B]">$116,250</td>
                    <td className="text-center py-3 px-4">$117,500</td>
                    <td className="text-center py-3 px-4">$118,750</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom note */}
          <div className="text-center mt-12">
            <p className="text-white/50 text-sm">
              * Los descuentos incluyen pases de cortesía según el mes de pago. Consulta términos y condiciones.
            </p>
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