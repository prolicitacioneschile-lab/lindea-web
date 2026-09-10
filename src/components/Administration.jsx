import { administration } from "../data/site";

export default function Administration() {
  return (
    <section id="administracion" className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Foto interior cálida */}
          <div className="relative">
            <img
              src="/images/interior.jpg"
              alt="Dormitorio contemporáneo con luz natural"
              className="w-full rounded-2xl object-cover aspect-[4/3] shadow-sm"
            />
          </div>

          <div>
            <span className="eyebrow">{administration.eyebrow}</span>
            <h2 className="text-h2 font-extrabold text-ink">{administration.title}</h2>
            <p className="mt-5 text-lg font-light text-stone leading-relaxed">{administration.text}</p>

            <div className="mt-10 space-y-8">
              {administration.modules.map((m) => (
                <div key={m.title} className="border-l-2 border-forest/25 pl-5">
                  <h3 className="text-lg font-bold text-ink">{m.title}</h3>
                  <p className="mt-1.5 text-stone leading-relaxed">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-14 max-w-2xl text-sm text-stone/80 leading-relaxed">
          {administration.note}
        </p>
      </div>
    </section>
  );
}
