"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroSliderProps {
  locale: string;
  welcome: string;
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
}

const heroImages = [
  "/images/hero/hero-img-1.webp",
  "/images/hero/hero-img-2.webp",
  "/images/hero/hero-img-3.webp",
];

export function HeroSlider({ locale, welcome, title, subtitle, cta1, cta2 }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slider with Ken Burns effect */}
      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Club de Golf Tequisquiapan ${index + 1}`}
              fill
              priority={index === 0}
              className={`object-cover ${index === currentIndex ? "animate-ken-burns" : ""}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3622]/70 via-[#0A3622]/50 to-[#0A3622]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#D4A84B] tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in-up">
          {welcome}
        </p>
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
          {title}
        </h1>
        <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-light animate-fade-in-up delay-200">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <Link
            href={`/${locale}/membresias`}
            className="bg-[#D4A84B] hover:bg-[#c49a3f] text-[#0A3622] font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-xl hover:shadow-[#D4A84B]/30"
          >
            {cta1}
          </Link>
          <Link
            href={`/${locale}/golf`}
            className="border-2 border-white text-white hover:bg-white hover:text-[#0A3622] font-semibold px-8 py-4 rounded-lg text-lg transition-all"
          >
            {cta2}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-10 right-10 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-[#D4A84B] w-6" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns {
          animation: ken-burns 6s ease-out forwards;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 1s ease-out forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}} />
    </section>
  );
}