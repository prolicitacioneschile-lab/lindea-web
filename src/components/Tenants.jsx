import Section, { Eyebrow } from "./Section";
import { tenants, comunas } from "../data/site";
import { properties } from "../data/properties";
import { waLink } from "../lib/whatsapp";

function money(n) { return "$" + n.toLocaleString("es-CL"); }

function PropertyCard({ p }) {
  const msg = `Hola Lindea, me interesa la propiedad "${p.titulo}" en ${p.comuna}.`;
  return (
    <article className="rounded-2xl border border-line overflow-hidden flex flex-col">
      <div className="img-ph aspect-[4/3]" data-label={p.imagenes?.[0] ? "" : "Foto de la propiedad"}>
        {p.imagenes?.[0] && <img src={p.imagenes[0]} alt={p.titulo} className="h-full w-full object-cover" loading="lazy" />}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="eyebrow !mb-2">{p.comuna}</span>
        <h3 className="text-xl font-bold text-ink">{p.titulo}</h3>
        <p className="mt-2 text-lg font-bold text-forest">
          {money(p.precioMensual)}<span className="font-normal text-stone text-sm"> /mes</span>
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone">
          <li>{p.dormitorios} dorm.</li><li>{p.banos} baños</li>
          <li>{p.estacionamiento > 0 ? `${p.estacionamiento} estac.` : "Sin estac."}</li>
          <li>{p.superficie} m²</li>
          {p.gastosComunes ? <li>GC {money(p.gastosComunes)}</li> : null}
        </ul>
        {p.descripcion && <p className="mt-3 text-sm text-stone leading-relaxed">{p.descripcion}</p>}
        <a href={waLink(msg)} target="_blank" rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-deep transition">
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  );
}

export default function Tenants() {
  const hasProps = properties.length > 0;
  return (
    <Section id="arrendatarios" className="py-20 md:py-28 bg-mist">
      <div className="max-w-2xl">
        <Eyebrow>{tenants.eyebrow}</Eyebrow>
        <h2 className="text-h2 font-extrabold text-ink">{tenants.title}</h2>
        <p className="mt-5 text-lg font-light text-stone leading-relaxed">{tenants.text}</p>
      </div>

      {hasProps ? (
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-line bg-white p-10 md:p-14 text-center">
          <p className="text-xl md:text-2xl font-bold text-ink">{tenants.emptyNote}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {comunas.map((c) => (
              <span key={c} className="rounded-full border border-line px-4 py-1.5 text-sm font-medium text-forest">{c}</span>
            ))}
          </div>
          <a href={tenants.cta.href}
            className="mt-9 inline-flex items-center justify-center rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-white hover:brightness-105 transition">
            {tenants.cta.label}
          </a>
        </div>
      )}
    </Section>
  );
}
