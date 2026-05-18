import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Calendar, Trophy, Phone, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Torneos 2026 | Calendario y Competencias",
  description:
    "Torneos y competencias 2026 en Club de Golf Tequisquiapan. Participa en nuestros torneos mensuales, eventos especiales y competencias corporativas.",
};

const upcomingTournaments = [
  {
    title: "Torneo de Inauguración",
    date: "15 de Marzo, 2026",
    type: "Abierto",
    description:
      "Dale la bienvenida a la temporada con este torneo abierto a todos los niveles.",
    status: "Por Anunciar",
  },
  {
    title: "Copa CGT Empresarial",
    date: "20 de Abril, 2026",
    type: "Corporativo",
    description:
      "Competencia exclusiva para empresas. Equipos de 4 jugadores con beneficios especiales.",
    status: "Abierto",
  },
  {
    title: "Torneo de Members",
    date: "15 de Mayo, 2026",
    type: "Miembros",
    description:
      "Competencia mensual exclusiva para miembros del club con premios en especie.",
    status: "Próximamente",
  },
];

const tournamentTypes = [
  {
    title: "Abiertos",
    description: "Abiertos a todo público, ideal para jugadores que visiten el club.",
    icon: Users,
  },
  {
    title: "Miembros",
    description: "Exclusivos para miembros CGT. Premios y reconocimientos especiales.",
    icon: Trophy,
  },
  {
    title: "Corporativos",
    description: "Eventos team-building para empresas con necesidades personalizadas.",
    icon: Calendar,
  },
];

export default function TorneosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/media/golf-group.webp"
            alt="Torneos Club de Golf Tequisquiapan"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A3622]/90 to-[#0A3622]/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <p className="text-[#D4A84B] tracking-[0.3em] uppercase text-sm mb-4">
            Torneos 2026
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Competencia,<br />comunidad y glory
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Únete a nuestros torneos y vive la emoción de la competencia en el mejor
            campo de Tequisquiapan.
          </p>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-[#0A3622] mb-4">
              Calendario 2026
            </h2>
            <p className="text-[#1A1A1A]/70 text-lg max-w-2xl mx-auto">
              Marca tu calendario con nuestros eventos más esperados del año.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {upcomingTournaments.map((tournament, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#D4A84B]/10 text-[#D4A84B] text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {tournament.type}
                  </span>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      tournament.status === "Abierto"
                        ? "bg-green-100 text-green-700"
                        : tournament.status === "Próximamente"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tournament.status}
                  </span>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#0A3622] mb-2">
                  {tournament.title}
                </h3>
                <div className="flex items-center gap-2 text-[#D4A84B] mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{tournament.date}</span>
                </div>
                <p className="text-[#1A1A1A]/70 text-sm mb-6">
                  {tournament.description}
                </p>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    tournament.status === "Abierto"
                      ? "bg-[#0A3622] text-white hover:bg-[#14512D]"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={tournament.status !== "Abierto"}
                >
                  {tournament.status === "Abierto" ? "Registrar" : "Próximamente"}
                </button>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-[#0A3622] rounded-2xl p-8 text-center">
            <p className="text-white/70 mb-4">
              ¿Quieres organizar un torneo corporativo o evento especial?
            </p>
            <a
              href="tel:+4142730095"
              className="inline-flex items-center gap-2 bg-[#D4A84B] hover:bg-[#c49a3f] text-[#0A3622] font-semibold px-8 py-4 rounded-lg text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Contactar para información
            </a>
          </div>
        </div>
      </section>

      {/* Tournament Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-[#0A3622] mb-4">
              Tipos de Torneos
            </h2>
            <p className="text-[#1A1A1A]/70 text-lg max-w-2xl mx-auto">
              Tenemos opciones para todos los gustos y necesidades.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tournamentTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-[#D4A84B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-[#D4A84B]" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-[#0A3622] mb-2">
                    {type.title}
                  </h3>
                  <p className="text-[#1A1A1A]/70 text-sm">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}