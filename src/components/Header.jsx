import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { nav } from "../data/site";
import Logo from "./Logo";
import IndicatorsBar from "./IndicatorsBar";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // En la home el header es transparente sobre el hero; fuera de la home,
  // siempre sólido para que se lea sobre fondo blanco.
  const solid = !isHome || scrolled || open;
  const close = () => setOpen(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <IndicatorsBar />
      <header
        className={`transition-all duration-300 ${
          solid ? "bg-white/95 backdrop-blur border-b border-line" : "bg-transparent"
        }`}
      >
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex h-20 items-center justify-between">
          <Logo variant={solid ? "dark" : "light"} />

          <nav className="hidden lg:flex items-center gap-9" aria-label="Principal">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  solid ? "text-ink/70 hover:text-ink" : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contacto"
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                solid
                  ? "bg-forest text-white hover:bg-deep"
                  : "bg-white text-forest hover:bg-white/90"
              }`}
            >
              Conversemos
            </a>
          </nav>

          <button
            className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg ${solid ? "text-ink" : "text-white"}`}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <nav className="mx-auto max-w-content px-6 py-4 flex flex-col gap-1" aria-label="Móvil">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={close} className="py-3 text-base font-medium text-ink/90">
                {item.label}
              </a>
            ))}
            <a href="/#contacto" onClick={close} className="mt-2 rounded-full bg-forest px-5 py-3 text-center text-base font-semibold text-white">
              Conversemos
            </a>
          </nav>
        </div>
      )}
      </header>
    </div>
  );
}
