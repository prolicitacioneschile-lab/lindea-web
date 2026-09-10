import Section, { Eyebrow } from "./Section";
import { howItWorks } from "../data/site";

export default function HowItWorks() {
  return (
    <Section id="como-funciona" className="py-20 md:py-28">
      <div className="max-w-2xl">
        <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
        <h2 className="text-h2 font-extrabold text-ink">{howItWorks.title}</h2>
        <p className="mt-5 text-lg font-light text-stone leading-relaxed">{howItWorks.text}</p>
      </div>

      {/* Secuencia real de pasos: numeración justificada */}
      <ol className="mt-16 grid gap-10 md:grid-cols-3">
        {howItWorks.steps.map((s, i) => (
          <li key={s.title}>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-extrabold text-clay tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <span className="h-px flex-1 bg-line" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
            <p className="mt-2.5 text-stone leading-relaxed">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
