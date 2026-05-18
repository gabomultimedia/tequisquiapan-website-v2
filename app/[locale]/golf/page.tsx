import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, MapPin, Clock, CheckCircle, Users, Flag, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Campo de Golf | 18 Hoyos Par 72",
  description:
    "Campo de golf de 18 hoyos Par 72, 6,906 yardas en Club de Golf Tequisquiapan. Diseñado por Joe Finger. Kikuyo en fairways, Bent Grass en greens.",
};

const courseStats = [
  { icon: Flag, label: "Hoyos", value: "18" },
  { icon: TrendingUp, label: "Par", value: "72" },
  { icon: Users, label: "Yardas", value: "6,906" },
  { icon: CheckCircle, label: "Slope", value: "124" },
];

const features = [
  "Campo diseñado por Joe Finger en 1975",
  "Fairways en Kikuyo Grass - juego suave y consistente",
  "Greens en Bent Grass - velocidad y calidad profesional",
  "Practice range con cobertura completa",
  "Pro shop con equipamiento completo",
  "Instruction disponible con profesionales certificados",
  "Rentas de carts y equipos disponibles",
  "Caddies disponibles con previa reservación",
];

const testimonials = [
  {
    quote:
      "El campo siempre está en condiciones excepcionales. Los greens son rápidos y justos.",
    author: "Carlos Mendoza",
    role: "Miembro desde 2010",
  },
  {
    quote:
      "Un campo desafiante pero justo. Cada visita es una nueva experiencia.",
    author: "Roberto Sánchez",
    role: "Miembro desde 2015",
  },
];

export default function GolfPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/page-title/page-title-golf.webp"
            alt="Campo de Golf Tequisquiapan"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A3622]/90 to-[#0A3622]/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <p className="text-[#D4A84B] tracking-[0.3em] uppercase text-sm mb-4">
            Campo de Golf
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            18 Hoyos de<br />Excelencia
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Un campo diseñado para desafiar y deleitar. 6,906 yardas de fairways
            perfectos rodeadas de naturaleza en estado puro.
          </p>
        </div>
      </section>

      {/* Course Stats */}
      <section className="py-16 bg-[#0A3622]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {courseStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#D4A84B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#D4A84B]" />
                  </div>
                  <p className="font-playfair text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[#D4A84B] text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About the Course */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-[#0A3622] mb-6">
                Un diseño para la eternidad
              </h2>
              <p className="text-[#1A1A1A]/70 text-lg leading-relaxed mb-6">
                Creado por el legendario arquitecto Joe Finger en 1975, el campo de
                Club de Golf Tequisquiapan representa una obra maestra del diseño
                golfístico. Cada hoyo ha sido cuidadosamente pensado para ofrecer
                un equilibrio perfecto entre desafío y diversión.
              </p>
              <p className="text-[#1A1A1A]/70 text-lg leading-relaxed mb-8">
                Con un slope de 124 y rating de 71.1, nuestro campo atrae a jugadores
                de todos los niveles mientras mantiene el respeto de los más experimentados.
                Los fairways de Kikuyo ofrecen un juego suave y consistente, mientras que
                los greens de Bent Grass garantizan velocidad y calidad profesional.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D4A84B] mt-0.5" />
                    <span className="text-[#1A1A1A]/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/media/golf-green.webp"
                alt="Green del Campo de Golf"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-[#0A3622]">
              Lo que dicen nuestros miembros
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#FAF8F5] rounded-2xl p-8 relative"
              >
                <svg
                  className="w-12 h-12 text-[#D4A84B]/20 absolute top-6 right-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[#1A1A1A]/80 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#0A3622]">{testimonial.author}</p>
                  <p className="text-sm text-[#D4A84B]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A3622]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-6">
            Reserva tu lugar en el campo
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Llámanos para reservaciones de tee time o visita nuestra sección de
            Green Fees para conocer las tarifas actuales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/green-fees"
              className="bg-[#D4A84B] hover:bg-[#c49a3f] text-[#0A3622] font-semibold px-8 py-4 rounded-lg text-lg transition-all"
            >
              Ver Green Fees
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