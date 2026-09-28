import Section, { Eyebrow } from "./Section";
import { services } from "../data/site";

function Check() {
  return (
    <svg className="mt-1 h-4 w-4 flex-none text-sage" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 10 3.5 3.5L15 6" />
    </svg>
  );
}

export default function Services() {
  return (
    <Section id="servicios" className="py-20 md:py-28">
      <div className="max-w-2xl">
        <Eyebrow>{services.eyebrow}</Eyebrow>
        <h2 className="text-h2 font-extrabold text-ink">{services.title}</h2>
        <p className="mt-5 text-lg font-light text-stone leading-relaxed">{services.text}</p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.blocks.map((b) => (
          <div key={b.title} className="group flex flex-col rounded-2xl border border-line p-8 md:p-10 transition-colors hover:border-forest/40">
            <h3 className="text-2xl font-bold text-ink">{b.title}</h3>
            <p className="mt-3 text-stone leading-relaxed">{b.text}</p>
            <ul className="mt-7 space-y-3.5 flex-1">
              {b.items.map((it) => (
                <li key={it} className="flex gap-3 text-ink/80">
                  <Check /><span>{it}</span>
                </li>
              ))}
            </ul>
            <a href={b.cta.href} className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-clay transition-colors">
              {b.cta.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
