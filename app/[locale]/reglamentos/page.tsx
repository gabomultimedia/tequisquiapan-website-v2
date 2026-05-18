import { Metadata } from "next";
import Image from "next/image";
import { FileText, Scale, Dumbbell, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Reglamentos | Reglas del Club",
  description:
    "Reglamentos del Club de Golf Tequisquiapan. Campo de golf, torneos, tenis, gimnasio y normas generales.",
};

const regulations = [
  {
    title: "Reglamento Campo de Golf",
    icon: FileText,
    href: "/images/reglamentos/1. 2026_REGLAMENTO CAMPO GOLF/",
    description: "Normas de juego, etiqueta, uso del campo y政策性 generales.",
  },
  {
    title: "Reglamento Torneos",
    icon: Scale,
    href: "/images/reglamentos/0. 2026_REGLAMENTO TORNEOS/",
    description: "Reglas para competencias, inscripcción y premios.",
  },
  {
    title: "Reglamento Tenis",
    icon: Users,
    href: "/images/reglamentos/2. 2026_REGLAMENTO USO DE CANCHAS DE TENIS CLUB TX F/",
    description: "Uso de canchas, reservas, academia MATX POINT y нормы de conducta.",
  },
  {
    title: "Reglamento Gimnasio",
    icon: Dumbbell,
    href: "/images/reglamentos/3. 2025_REGLAMENTO GIMNASIO CLUB TX/",
    description: "Horarios, uso de equipos, seguridad y conducta.",
  },
];

const golfRules = [
  {
    title: "Capítulo I - Disposiciones Generales",
    content: "El presente reglamento tiene como objetivo establecer las normas de conducta y juego dentro del Club de Golf Tequisquiapan, buscando siempre la armonía y el respeto entre todos los miembros e invitados.",
  },
  {
    title: "Capítulo II - Horarios y Acceso",
    content: "El campo está abierto de miércoles a lunes de 7:00 AM a 6:00 PM. Los martes permanece cerrado. Los miembros deben presentar su tarjeta de membresía para acceder a las instalaciones.",
  },
  {
    title: "Capítulo III - Reglas de Juego",
    content: "Todos los jugadores deben seguir las Reglas Oficiales de Golf establecidas por la USGA, así como las reglas locales del club. Se prohíbe jugar más de un balón simultáneamente y entrar al campo con cochecitos en días de tormenta.",
  },
  {
    title: "Capítulo VI - Uso de Carros de Golf",
    content: "Los carros de golf deben mantenerse en los caminos designados. Está prohibido conducir carros cerca de greens, bunkers o áreas de penalized. La velocidad máxima es de 10 km/h.",
  },
  {
    title: "Capítulo VII - Caddies",
    content: "Los caddies son obligatorios para jugadores menores de 16 años. La cuota de caddie es de $500 MXN por ronda. Los jugadores pueden solicitar caddies con reserva previa.",
  },
  {
    title: "Capítulo XII - Disciplina",
    content: "El incumplimiento de este reglamento puede resultar en sanciones que van desde amonestaciones escritas hasta la suspensión de privilegios de juego. El comité de disciplina tiene la autoridad final en todos los casos.",
  },
];

const tennisRules = [
  {
    title: "Reservas de Canchas",
    content: "Las canchas de tenis pueden reservarse con hasta 7 días de anticipación. El tiempo máximo de juego es de 1 hora por reservación. Cancelaciones deben hacerse con al menos 2 horas de anticipación.",
  },
  {
    title: "Academia MATX POINT",
    content: "La academia ofrece clases para todos los niveles. Los interesados deben comunicarse directamente con la academia para información sobre horarios y tarifas. Los miembros reciben preferencia en la asignación de horarios.",
  },
  {
    title: "Código de Conducta",
    content: "Todos los jugadores deben mantener una conducta respetuosa hacia el personal y otros usuarios. Está prohibido jugar música alta, fumar en las canchas y traer mascotas sin autorización.",
  },
];

const gymRules = [
  {
    title: "Horario de Acceso",
    content: "El gimnasio está abierto de 7:00 AM a 9:00 PM de miércoles a lunes. El acceso está limitado a miembros con membresía activa que incluya uso del gimnasio.",
  },
  {
    title: "Equipamiento",
    content: "Todos los equipos deben utilizarse correctamente siguiendo las instrucciones de uso. Es obligatorio limpiar las máquinas después de cada uso. Reporte cualquier equipo dañado al staff.",
  },
  {
    title: "Seguridad",
    content: "No se permite entrenar sin supervisión adecuada en equipos pesados. Los menores de 16 años deben estar accompagnés de un adulto en todo momento. Está prohibido usar dispositivos móviles de manera distractiva durante el ejercicio.",
  },
];

export default function ReglamentosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A3622] to-[#14512D]" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="w-20 h-20 bg-[#D4A84B]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="w-10 h-10 text-[#D4A84B]" />
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            Reglamentos
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Normas y políticas que rigen el uso de nuestras instalaciones.
          </p>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regulations.map((reg, index) => {
              const Icon = reg.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#D4A84B]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#D4A84B]" />
                  </div>
                  <h3 className="font-semibold text-[#0A3622] mb-2">{reg.title}</h3>
                  <p className="text-sm text-[#1A1A1A]/60 mb-4">{reg.description}</p>
                  <span className="text-xs text-[#D4A84B] font-medium">
                    Documento PDF disponible en administración
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Golf Rules Accordion */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-[#0A3622] mb-8 text-center">
            Reglamento Campo de Golf
          </h2>
          <Accordion className="w-full">
            {golfRules.map((rule, index) => (
              <AccordionItem key={index} value={`golf-${index}`}>
                <AccordionTrigger className="font-semibold text-[#0A3622] hover:text-[#D4A84B]">
                  {rule.title}
                </AccordionTrigger>
                <AccordionContent className="text-[#1A1A1A]/70 leading-relaxed">
                  {rule.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Tennis Rules */}
      <section className="py-16 bg-[#F7F2E6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-[#0A3622] mb-8 text-center">
            Reglamento Tenis y Pádel
          </h2>
          <Accordion className="w-full">
            {tennisRules.map((rule, index) => (
              <AccordionItem key={index} value={`tennis-${index}`}>
                <AccordionTrigger className="font-semibold text-[#0A3622] hover:text-[#D4A84B]">
                  {rule.title}
                </AccordionTrigger>
                <AccordionContent className="text-[#1A1A1A]/70 leading-relaxed">
                  {rule.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Gym Rules */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-[#0A3622] mb-8 text-center">
            Reglamento Gimnasio
          </h2>
          <Accordion className="w-full">
            {gymRules.map((rule, index) => (
              <AccordionItem key={index} value={`gym-${index}`}>
                <AccordionTrigger className="font-semibold text-[#0A3622] hover:text-[#D4A84B]">
                  {rule.title}
                </AccordionTrigger>
                <AccordionContent className="text-[#1A1A1A]/70 leading-relaxed">
                  {rule.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A3622]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-white mb-4">
            ¿Tienes dudas sobre los reglamentos?
          </h2>
          <p className="text-white/70 mb-8">
            Nuestro equipo está listo para ayudarte. Contáctanos para cualquier aclaración.
          </p>
          <Link href="/contacto">
            <Button className="bg-[#D4A84B] hover:bg-[#c49a3f] text-[#0A3622] font-semibold px-8 py-3">
              Contactar
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}