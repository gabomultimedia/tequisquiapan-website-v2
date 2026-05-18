import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, Clock, UtensilsCrossed, Wine, FileText, ArrowUpRight, ChefHat } from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurante | Cocina que acompaña momentos",
  description:
    "Restaurante del Club de Golf Tequisquiapan. Desayunos en terraza, almuerzos entre amigos, cenas con vista. Cocina que acompaña momentos.",
};

const features = [
  "Terraza con vista al campo de golf",
  "Menú de temporada actualizado regularmente",
  "Eventos privados y grupos corporativos",
  "Reservaciones para cumpleaños y aniversarios",
];

const menuLinks = [
  {
    label: "Carta de Alimentos",
    href: "https://bit.ly/CartaClubTx",
    icon: UtensilsCrossed,
  },
  {
    label: "Carta de Bebidas",
    href: "https://bit.ly/BebidasClubTx",
    icon: Wine,
  },
];

const schedule = [
  { day: "Miércoles - Lunes", hours: "8:00 AM - 6:00 PM" },
  { day: "Martes", hours: "Cerrado" },
];

export default function RestaurantePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/page-title/page-title-restaurante.webp"
            alt="Restaurante Club de Golf Tequisquiapan"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A3622]/90 to-[#0A3622]/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <p className="text-[#D4A84B] tracking-[0.3em] uppercase text-sm mb-4">
            Restaurante
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Cocina que<br />acompaña momentos
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Desayunos en terraza, almuerzos entre amigos, cenas con vista.
            Cada momento merece ser celebrado con buena comida.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-[#0A3622] mb-6">
                Sabores que crean memorias
              </h2>
              <p className="text-[#1A1A1A]/70 text-lg leading-relaxed mb-6">
                En nuestro restaurante, cada plato es una celebración de los sabores
                auténticos de México, preparado con ingredientes frescos de la región.
                Nuestro chef ejecutivo y su equipo trabajan incansablemente para crear
                experiencias culinarias que se quedan en la memoria.
              </p>
              <p className="text-[#1A1A1A]/70 text-lg leading-relaxed mb-8">
                Ya sea que busques un desayuno tranquilo con vista al campo, una comida
                de negocios, o una cena romántica bajo las estrellas, nuestro equipo
                está listo para hacer de tu visita un momento especial.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/media/restaurant-new-main.jpeg"
                alt="Restaurante principal del Club de Golf Tequisquiapan"
                width={300}
                height={200}
                className="rounded-xl shadow-lg"
              />
              <Image
                src="/images/media/restaurant-terraza.webp"
                alt="Terraza del restaurante"
                width={300}
                height={200}
                className="rounded-xl shadow-lg mt-8"
              />
              <Image
                src="/images/media/food-steak.webp"
                alt="Platillo del restaurante"
                width={300}
                height={200}
                className="rounded-xl shadow-lg"
              />
              <Image
                src="/images/media/restaurant-table-4.webp"
                alt="Mesa del restaurante"
                width={300}
                height={200}
                className="rounded-xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D4A84B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#D4A84B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#1A1A1A]/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Links */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A3622] mb-4">
            Conoce nuestro menú
          </h2>
          <p className="text-[#1A1A1A]/70 mb-10 max-w-2xl mx-auto">
            Explora nuestra selección de platillos y bebidas cuidadosamente preparados para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {menuLinks.map((menu) => {
                const IconComponent = menu.icon;
                return (
                  <a
                    key={menu.label}
                    href={menu.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[#0A3622] hover:bg-[#14512D] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    <IconComponent className="w-6 h-6" />
                    <span>{menu.label}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                );
              })}
          </div>
        </div>
      </section>

      {/* Schedule & Contact */}
      <section className="py-24 bg-[#0A3622]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">
                Horarios del Restaurante
              </h3>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-[#D4A84B]" />
                    <div>
                      <p className="text-white font-medium">{item.day}</p>
                      <p className="text-white/70">{item.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">
                Reservaciones
              </h3>
              <p className="text-white/70 mb-6">
                Para reservaciones de grupos mayores a 6 personas o eventos especiales,
                por favor llámanos directamente.
              </p>
              <a
                href="tel:5561941723"
                className="inline-flex items-center gap-2 bg-[#D4A84B] hover:bg-[#c49a3f] text-[#0A3622] font-semibold px-6 py-3 rounded-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                55 6194 1723
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}