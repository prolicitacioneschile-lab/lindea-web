import Section, { Eyebrow } from "./Section";
import { buyProcess } from "../data/site";

// Colores de marca por paso; el último (arriendo) va en terracota de acento.
const DOT = ["bg-forest", "bg-sage", "bg-forest", "bg-sage", "bg-forest", "bg-clay"];

export default function BuyProcess() {
  return (
    <Section id="proceso-de-compra" className="py-20 md:py-28 border-t border-line">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <Eyebrow>{buyProcess.eyebrow}</Eyebrow>
          <h2 className="text-h2 font-extrabold text-ink">{buyProcess.title}</h2>
          <p className="mt-5 text-lg font-light text-stone leading-relaxed">{buyProcess.text}</p>
        </div>
        <img
          src={buyProcess.image.src}
          alt={buyProcess.image.alt}
          width="1600"
          height="800"
          loading="lazy"
          className="w-full rounded-2xl object-cover aspect-[2/1] shadow-sm bg-white"
        />
      </div>

      {/* Línea de tiempo: vertical en teléfono, horizontal en escritorio */}
      <ol className="relative mt-16 grid gap-10 lg:grid-cols-6 lg:gap-6">
        <span aria-hidden="true" className="hidden lg:block absolute top-7 left-[8%] right-[8%] border-t-2 border-dashed border-sage/40" />
        {buyProcess.steps.map((s, i) => (
          <li key={s.title} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
            <span className={`relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-full text-base font-bold text-white shadow-sm tabular-nums ${DOT[i]}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-ink lg:mt-5">{s.title}</h3>
              <p className="mt-2 text-stone leading-relaxed">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
