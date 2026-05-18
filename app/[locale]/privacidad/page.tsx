import { Metadata } from "next";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad del Club de Golf Tequisquiapan. Cómo recopilamos, usamos y protegemos su información personal.",
};

const sections = [
  {
    title: "1. Información que Recopilamos",
    content:
      "Recopilamos información personal que usted nos proporciona directamente, incluyendo: nombre completo, dirección de correo electrónico, número de teléfono, dirección postal y datos de pago. También recopilamos información técnica como su dirección IP, tipo de navegador y páginas visitadas.",
  },
  {
    title: "2. Uso de la Información",
    content:
      "Utilizamos su información personal para: procesar reservaciones y membresías, comunicarnos con usted sobre servicios y promociones, mejorar nuestra página web y servicios, y cumplir con obligaciones legales.",
  },
  {
    title: "3. Protección de Datos",
    content:
      "Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sus datos de pago son procesados a través de pasarelas de pago seguras y nunca almacenamos los números completos de tarjetas de crédito.",
  },
  {
    title: "4. Compartir Información",
    content:
      "No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando sea necesario para提供服务 (como procesar pagos) o cuando la ley lo requiera. podemos compartir información con proveedores de servicios que ayudan en nuestras operaciones, bajo estrictos acuerdos de confidencialidad.",
  },
  {
    title: "5. Cookies y Tecnologías de Seguimiento",
    content:
      "Nuestra página web utiliza cookies para mejorar su experiencia de navegación. Las cookies son pequeños archivos de texto almacenados en su dispositivo. Puede configurar su navegador para rechazar cookies, pero esto puede afectar la funcionalidad del sitio.",
  },
  {
    title: "6. Sus Derechos",
    content:
      "Usted tiene derecho a: acceder a su información personal, corregir datos inexactos, solicitar la eliminación de sus datos, objetar al procesamiento de sus datos, y recibir una copia de sus datos en formato portable. Para ejercer estos derechos, contacte a privacy@clubtequisquiapan.mx.",
  },
  {
    title: "7. Retención de Datos",
    content:
      "Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera o permita un período de retención más largo. Los datos de transacciones financieras se conservan por un mínimo de 5 años.",
  },
  {
    title: "8. Cambios a esta Política",
    content:
      "Podemos actualizar esta Política de Privacidad periódicamente. Cualquier cambio será publicado en esta página con una fecha de &quot;última actualización&quot; revisada. Le recomendamos revisar esta política regularmente.",
  },
  {
    title: "9. Contacto",
    content:
      "Si tiene preguntas o preocupaciones sobre nuestra Política de Privacidad, puede contactarnos a: privacy@clubtequisquiapan.mx o llamar al +414 273 00 95.",
  },
];

export default function PrivacidadPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A3622] to-[#14512D]" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="w-20 h-20 bg-[#D4A84B]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-[#D4A84B]" />
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            Política de Privacidad
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Cómo recopilamos, usamos y protegemos su información personal.
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
                Si tienes dudas sobre nuestra política de privacidad, no dudes en contactarnos.
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