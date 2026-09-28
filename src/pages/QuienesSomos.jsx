import PageShell from "./PageShell";
import { waLink } from "../lib/whatsapp";
import { joinComunas } from "../data/site";

function Foto() {
  return (
    <figure>
      <img
        src="/images/gonzalo-pozo.webp"
        alt="Gonzalo Pozo, fundador de Lindea Propiedades"
        width="900"
        height="1125"
        className="w-full max-w-sm mx-auto lg:max-w-none rounded-2xl object-cover shadow-sm"
      />
      <figcaption className="mt-4 text-center lg:text-left">
        <span className="block font-bold text-ink">Gonzalo Pozo</span>
        <span className="block text-sm text-stone">Fundador · Lindea Propiedades</span>
      </figcaption>
    </figure>
  );
}

export default function QuienesSomos() {
  return (
    <PageShell
      eyebrow="Nosotros"
      title="Quiénes somos"
      intro="Lindea Propiedades nace para simplificar lo que a muchos propietarios les quita tiempo y tranquilidad: vender, arrendar y administrar. Somos un servicio de acompañamiento cercano, ordenado y transparente."
      aside={<Foto />}
    >
      <div className="space-y-6 text-stone leading-relaxed">
        <p>
          Creemos que gestionar una propiedad no debería significar vivir pendiente
          de fechas de pago, llamados y trámites. Por eso acompañamos a cada
          propietario en los momentos clave: encontrar al comprador o al
          arrendatario adecuado y, si lo necesitas, mantener la gestión del arriendo
          mes a mes, siempre con información clara y decisiones que quedan en tus
          manos.
        </p>
        <p>
          Trabajamos con un principio simple: <strong className="text-ink font-semibold">tú
          mantienes el control de tu propiedad y nosotros coordinamos la
          gestión</strong>. Cada servicio y cada facultad se acuerdan por escrito,
          sin letra chica, y si administramos tu arriendo, cada mes recibes una
          rendición que puedes revisar con tranquilidad.
        </p>
        <p>
          Estamos comenzando en {joinComunas()} y comunas cercanas de Santiago,
          con la cercanía de un equipo pequeño que conoce cada propiedad que atiende
          y responde de forma directa.
        </p>

        <div className="grid gap-px bg-line sm:grid-cols-3 overflow-hidden rounded-2xl border border-line mt-10">
          {[
            { t: "Cercanía", d: "Un punto de contacto claro, sin pasar por una central." },
            { t: "Orden", d: "Registros, recordatorios y rendición mensual de cuentas." },
            { t: "Transparencia", d: "Servicios y honorarios acordados por escrito." },
          ].map((v) => (
            <div key={v.t} className="bg-white p-6">
              <h3 className="font-bold text-ink">{v.t}</h3>
              <p className="mt-2 text-sm text-stone">{v.d}</p>
            </div>
          ))}
        </div>

        <div className="pt-8">
          <a href={waLink("Hola Lindea, quiero saber más sobre ustedes.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white hover:bg-deep transition">
            Conversemos por WhatsApp
          </a>
        </div>
      </div>
    </PageShell>
  );
}
