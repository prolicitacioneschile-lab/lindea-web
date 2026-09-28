import { Eyebrow } from "../components/Section";

// Encabezado consistente para páginas internas. El pt-40 deja aire bajo el
// header fijo (banner + barra).
// `aside` (opcional): contenido que se muestra a la izquierda en escritorio
// (por ejemplo, una foto). En teléfono queda arriba del texto.
export default function PageShell({ eyebrow, title, intro, aside, children }) {
  const body = (
    <>
      <div className="max-w-3xl">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="text-h2 font-extrabold text-ink">{title}</h1>
        {intro && <p className="mt-5 text-lg font-light text-stone leading-relaxed">{intro}</p>}
      </div>
      <div className="mt-12 max-w-3xl">{children}</div>
    </>
  );
  return (
    <div className="pt-40 pb-24">
      <div className="mx-auto max-w-content px-6 md:px-10">
        {aside ? (
          <div className="grid gap-12 lg:grid-cols-[360px_1fr] lg:gap-16 items-start">
            <div className="lg:sticky lg:top-40">{aside}</div>
            <div>{body}</div>
          </div>
        ) : (
          body
        )}
      </div>
    </div>
  );
}
