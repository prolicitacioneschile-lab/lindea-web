import { Eyebrow } from "../components/Section";

// Encabezado consistente para páginas internas. El pt-40 deja aire bajo el
// header fijo (banner + barra).
export default function PageShell({ eyebrow, title, intro, children }) {
  return (
    <div className="pt-40 pb-24">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="text-h2 font-extrabold text-ink">{title}</h1>
          {intro && <p className="mt-5 text-lg font-light text-stone leading-relaxed">{intro}</p>}
        </div>
        <div className="mt-12 max-w-3xl">{children}</div>
      </div>
    </div>
  );
}
