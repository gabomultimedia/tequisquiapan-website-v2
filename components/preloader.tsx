"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PreloaderProps {
  children: React.ReactNode;
}

export function Preloader({ children }: PreloaderProps) {
  const [isReveal, setIsReveal] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setIsReveal(true), 600),
      setTimeout(() => setIsExiting(true), 2200),
      setTimeout(() => setIsDone(true), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  if (isDone) return <>{children}</>;

  return (
    <>
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-all duration-1000 ease-out ${
          isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
        style={{
          background: isExiting ? "#0A3622" : "radial-gradient(circle at center, #FFFFFF 0%, #F7F2E6 100%)",
          pointerEvents: isExiting ? "none" : "auto",
        }}
      >
        {!isExiting && (
          <>
            {/* Radial background */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at center, #FFFFFF 0%, #F7F2E6 100%)",
              }}
            />

            {/* Preloader content */}
            <div className="relative flex flex-col items-center justify-center">
              {/* Logo reveal animation */}
              <div
                className={`relative transition-all duration-1000 ease-out ${
                  isReveal ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <div className="relative p-10 bg-[#0A3622] rounded-2xl shadow-[0_20px_60px_rgba(10,54,34,0.4)] group overflow-hidden">
                  {/* Golden shine effect */}
                  <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-[#D4A84B]/30 to-transparent skew-x-12 animate-shine" />

                  <div className="w-40 h-40 relative z-10">
                    <Image
                      src="/images/logo/logo-1.svg"
                      alt="Club de Golf Tequisquiapan"
                      width={160}
                      height={160}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <div
                className={`mt-8 overflow-hidden transition-all duration-1000 delay-300 ${
                  isReveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-[#0A3622] font-playfair text-sm tracking-[0.5em] uppercase text-center">
                  {isReveal ? "Exclusividad & Naturaleza" : ""}
                </h2>
              </div>

              {/* Loading bar */}
              <div className="mt-6 w-48 h-[2px] bg-[#0A3622]/10 relative overflow-hidden rounded-full">
                <div
                  className={`absolute top-0 left-0 h-full bg-[#D4A84B] rounded-full transition-all duration-[1500ms] ease-out ${
                    isReveal ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .animate-shine {
          animation: shine 2.5s ease-in-out infinite;
        }
      `}} />
    </>
  );
}