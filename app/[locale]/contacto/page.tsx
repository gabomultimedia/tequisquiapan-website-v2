"use client";

import Image from "next/image";
import { MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Cantaridas S/N, Club de Golf Tequisquiapan, Tequisquiapan, Qro. CP 76799",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+52 1 55 3908 5548",
    href: "https://wa.me/525539085548?text=Hola,%20deseo%20mas%20informacion%20sobre%20el%20Club%20de%20Golf",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Miércoles - Lunes: 7:00 AM - 6:00 PM (Cerrado martes)",
  },
];

export default function ContactoPage() {
  const handleWhatsApp = () => {
    const whatsappUrl = "https://wa.me/525539085548?text=Hola,%20deseo%20mas%20informacion%20sobre%20el%20Club%20de%20Golf";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/page-title/page-title-contacto.webp"
            alt="Contacto Club de Golf Tequisquiapan"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A3622]/90 to-[#0A3622]/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <p className="text-[#D4A84B] tracking-[0.3em] uppercase text-sm mb-4">
            Contacto
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Estamos para ti
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Contáctanos por WhatsApp. Es la forma más rápida de atenderte.
          </p>
        </div>
      </section>

      {/* Contact Info & WhatsApp CTA */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-[#0A3622] mb-8">
              Información de contacto
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-md">
                    <div className="w-12 h-12 bg-[#0A3622] rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#D4A84B]" />
                    </div>
                    <div className="text-left">
                      <span className="text-[#D4A84B] text-xs uppercase tracking-wider block">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[#1A1A1A] hover:text-[#D4A84B] transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#1A1A1A]">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-[#25D366] rounded-2xl p-12 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h2 className="font-playfair text-3xl font-bold text-white mb-4">
              ¡Escríbenos por WhatsApp!
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Es la forma más rápida de contactarnos. Responderemos tu mensaje en minutos.
            </p>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-3 bg-white text-[#25D366] font-bold px-10 py-4 rounded-xl text-xl hover:bg-[#f0f0f0] transition-all hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Abrir WhatsApp
            </button>
          </div>

          {/* Social Links */}
          <div className="text-center mt-12">
            <h3 className="font-semibold text-[#0A3622] mb-4">Síguenos</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://facebook.com/profile.php?id=61577930170788"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#0A3622] hover:bg-[#D4A84B] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/clubgolftequisquiapan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#0A3622] hover:bg-[#D4A84B] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.068 1.645.068 4.849 0 3.205-.012 3.584-.068 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.097987654321!2d-99.7926!3d20.5236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDMxJzIzLjgiTiA5OcKwNDcnMzUuNiJX!5e0!3m2!1ses!2smx!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Club de Golf Tequisquiapan Location"
        />
      </section>
    </>
  );
}