import { Metadata } from "next";
import { Shield, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones del Club de Golf Tequisquiapan. Conoce las reglas y políticas de uso de nuestras instalaciones.",
};

const sections = [
  {
    title: "1. Aceptación de los Términos",
    content:
      "Al acceder y utilizar el sitio web del Club de Golf Tequisquiapan (clubtequisquiapan.com.mx), usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, por favor no utilice este sitio.",
  },
  {
    title: "2. Uso del Sitio Web",
    content:
      "El contenido de este sitio web es solo para fines informativos. El Club de Golf Tequisquiapan se reserva el derecho de modificar, suspender o discontinuar cualquier aspecto del sitio en cualquier momento.",
  },
  {
    title: "3. Reservaciones y Pagos",
    content:
      "Las reservaciones de green fees y membresías están sujetas a disponibilidad. Los pagos deben realizarse en su totalidad antes de confirmar cualquier servicio. Aceptamos pagos con tarjeta de crédito/débito y transferencia bancaria.",
  },
  {
    title: "4. Política de Cancelación",
    content:
      "Las cancelaciones deben realizarse con al menos 24 horas de anticipación para obtener un reembolso completo. Las cancelaciones con menos de 24 horas de anticipación estarán sujetas a un cargo del 50% del valor de la reservación.",
  },
  {
    title: "5. Reglas del Campo de Golf",
    content:
      "Todos los jugadores deben seguir las reglas establecidas del campo de golf. El personal del club tiene la autoridad para solicitar a cualquier jugador que incumpla las reglas que abandone las instalaciones. No nos hacemos responsables por lesiones personales ocurridas en las instalaciones.",
  },
  {
    title: "6. Responsabilidad del Miembro",
    content:
      "Los miembros son responsables de la conducta de sus invitados. Cualquier daño causado a las instalaciones por el miembro o sus invitados será responsabilidad del miembro titular de la cuenta.",
  },
  {
    title: "7. Propiedad Intelectual",
    content:
      "Todo el contenido del sitio web, incluyendo texto, gráficos, logotipos e imágenes, es propiedad del Club de Golf Tequisquiapan y está protegido por leyes de propiedad intelectual.",
  },
  {
    title: "8. Limitación de Responsabilidad",
    content:
      "El Club de Golf Tequisquiapan no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso de este sitio web o de nuestros servicios.",
  },
  {
    title: "9. Modificaciones",
    content:
      "Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio.",
  },
  {
    title: "10. Ley Aplicable",
    content:
      "Estos términos se regirán e interpretarán de acuerdo con las leyes de México. Cualquier disputa relacionada con estos términos será resuelta en los tribunales competentes del Estado de Querétaro.",
  },
];

export default function TerminosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A3622] to-[#14512D]" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="w-20 h-20 bg-[#D4A84B]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-[#D4A84B]" />
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Conoce las reglas y políticas que rigen el uso de nuestras instalaciones y servicios.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-[#1A1A1A]/70 mb-8 leading-relaxed">
              Última actualización: Mayo 2026
            </p>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="font-playfair text-xl font-bold text-[#0A3622] mb-3">
                    {section.title}
                  </h2>
                  <p className="text-[#1A1A1A]/70 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
              <h3 className="font-semibold text-[#0A3622] mb-4">
                ¿Tienes alguna pregunta?
              </h3>
              <p className="text-[#1A1A1A]/70 mb-6">
                Si tienes dudas sobre nuestros términos y condiciones, no dudes en contactarnos.
              </p>
              <Link href="/contacto">
                <Button className="bg-[#0A3622] hover:bg-[#14512D] text-white">
                  Contactar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}