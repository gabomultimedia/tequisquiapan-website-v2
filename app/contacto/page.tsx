"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Cantaridas S/N, Club de Golf Tequisquiapan, Tequisquiapan, Qro. CP 76799",
  },
  {
    icon: Phone,
    label: "Teléfono del Club",
    value: "+414 273 00 95",
    href: "tel:+4142730095",
  },
  {
    icon: Phone,
    label: "Restaurante",
    value: "55 6194 1723",
    href: "tel:5561941723",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "55 3908 5548",
    href: "https://wa.me/525539085548?text=Hola,%20deseo%20mas%20informacion%20sobre%20el%20Club%20de%20Golf",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@clubtequisquiapan.mx",
    href: "mailto:contacto@clubtequisquiapan.mx",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Miércoles - Lunes: 7:00 AM - 6:00 PM (Cerrado martes)",
  },
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
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
            Visítanos, llámanos o escríbenos. Estamos listos para responder todas
            tus preguntas.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-playfair text-4xl font-bold text-[#0A3622] mb-8">
                Información de contacto
              </h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#0A3622] rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#D4A84B]" />
                      </div>
                      <div>
                        <span className="text-[#D4A84B] text-xs uppercase tracking-wider">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="block text-[#1A1A1A] hover:text-[#D4A84B] transition-colors"
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

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-[#0A3622] mb-4">Síguenos</h3>
                <div className="flex gap-4">
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

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="font-playfair text-3xl font-bold text-[#0A3622] mb-6">
                Envíanos un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="Tu nombre"
                    className="mt-1"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      placeholder="tu@email.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="55 1234 5678"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="interest">¿En qué estás interesado?</Label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full mt-1 px-3 py-2 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#D4A84B] focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="membresia">Membresía</option>
                    <option value="green-fee">Green Fee</option>
                    <option value="restaurante">Restaurante</option>
                    <option value="torneos">Torneos</option>
                    <option value="raqueta">Club Raqueta</option>
                    <option value="eventos">Eventos privados</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    placeholder="¿En qué podemos ayudarte?"
                    rows={4}
                    className="mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0A3622] hover:bg-[#14512D] text-white py-3"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>
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