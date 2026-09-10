import { hero, comunas, contact } from "../data/site";

export default function Hero() {
  return (
    <div id="top" className="relative min-h-[92vh] flex items-end overflow-hidden bg-ink">
      {/* Foto protagonista */}
      <img
        src="/images/hero.jpg"
        alt="Conjunto residencial contemporáneo en Santiago"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Degradado para legibilidad del texto abajo */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />

      <div className="relative mx-auto w-full max-w-content px-6 md:px-10 pb-16 md:pb-24">
        <div className="max-w-3xl hero-rise">
          <span className="block text-xs font-semibold uppercase tracking-eyebrow text-white/75">
            {hero.eyebrow}
          </span>
          <h1 className="mt-6 text-display font-extrabold text-white">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl font-light text-white/90 leading-relaxed">
            {hero.text}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-clay px-7 py-3.5 text-center text-base font-semibold text-white hover:brightness-105 transition"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-full bg-white/10 border border-white/40 px-7 py-3.5 text-center text-base font-semibold text-white backdrop-blur hover:bg-white/20 transition"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <p className="mt-10 text-sm font-medium tracking-wide text-white/70">
            {contact.city} · {comunas.join(" · ")}
          </p>
        </div>
      </div>
    </div>
  );
}
