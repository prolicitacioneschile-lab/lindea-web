import Section from "./Section";
import { intro } from "../data/site";

export default function Intro() {
  return (
    <Section className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-4xl">
        <h2 className="text-h2 font-extrabold text-ink">
          {intro.lineTop}<br />
          <span className="text-forest">{intro.lineBottom}</span>
        </h2>
      </div>

      <div className="mt-16 grid gap-px bg-line md:grid-cols-3 overflow-hidden rounded-2xl border border-line">
        {intro.pillars.map((p) => (
          <div key={p.title} className="bg-white p-8">
            <h3 className="text-lg font-bold text-ink">{p.title}</h3>
            <p className="mt-2.5 text-stone leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
