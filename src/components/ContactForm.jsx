import { useState } from "react";
import { contactSection, comunas } from "../data/site";
import { waLink } from "../lib/whatsapp";

const OPTIONS = [
  { id: "arrendar", label: "Quiero arrendar mi propiedad", owner: true },
  { id: "administrar", label: "Mi propiedad ya está arrendada y quiero administración", owner: true },
  { id: "buscar", label: "Estoy buscando una propiedad", owner: false },
];

const empty = { nombre: "", telefono: "", correo: "", comuna: "", mensaje: "", consent: false };

export default function ContactForm() {
  const [need, setNeed] = useState(OPTIONS[0]);
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const isOwner = need.owner;

  function validate() {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Escribe tu nombre.";
    if (!/^\+?[\d\s]{8,}$/.test(form.telefono.trim())) e.telefono = "Escribe un teléfono válido.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo.trim())) e.correo = "Escribe un correo válido.";
    if (isOwner && !form.comuna) e.comuna = "Selecciona la comuna.";
    if (!form.consent) e.consent = "Necesitamos tu autorización para responderte.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit() {
    if (!validate()) return;
    const lines = [
      `Hola Lindea, ${need.label.toLowerCase()}.`, "",
      `Nombre: ${form.nombre}`, `Teléfono: ${form.telefono}`, `Correo: ${form.correo}`,
      isOwner ? `Comuna de la propiedad: ${form.comuna}` : null,
      form.mensaje ? `Mensaje: ${form.mensaje}` : null,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const field = (k) => ({ value: form[k], onChange: (e) => setForm({ ...form, [k]: e.target.value }) });
  const inputCls = "w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-clay focus:bg-white/10 transition";

  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:p-8">
      <fieldset>
        <legend className="text-base font-bold text-white mb-3">¿Cómo podemos ayudarte?</legend>
        <div className="space-y-2">
          {OPTIONS.map((o) => (
            <label key={o.id}
              className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition ${
                need.id === o.id ? "border-clay bg-clay/10" : "border-white/15 hover:border-white/30"}`}>
              <input type="radio" name="need" className="mt-1 accent-clay" checked={need.id === o.id} onChange={() => setNeed(o)} />
              <span className="text-sm text-white/85">{o.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-white/90 mb-1.5">Nombre</label>
          <input className={inputCls} placeholder="Tu nombre" {...field("nombre")} />
          {errors.nombre && <p className="mt-1 text-xs text-clay">{errors.nombre}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-white/90 mb-1.5">Teléfono</label>
          <input className={inputCls} placeholder="+56 9 ..." inputMode="tel" {...field("telefono")} />
          {errors.telefono && <p className="mt-1 text-xs text-clay">{errors.telefono}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-white/90 mb-1.5">Correo electrónico</label>
          <input className={inputCls} placeholder="tucorreo@ejemplo.cl" inputMode="email" {...field("correo")} />
          {errors.correo && <p className="mt-1 text-xs text-clay">{errors.correo}</p>}
        </div>
        {isOwner && (
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-white/90 mb-1.5">Comuna de la propiedad</label>
            <select className={`${inputCls} [&>option]:text-ink`} {...field("comuna")}>
              <option value="">Selecciona una comuna</option>
              {comunas.map((c) => <option key={c} value={c}>{c}</option>)}
              <option value="Otra">Otra</option>
            </select>
            {errors.comuna && <p className="mt-1 text-xs text-clay">{errors.comuna}</p>}
          </div>
        )}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-white/90 mb-1.5">
            Mensaje <span className="text-white/50 font-normal">(opcional)</span>
          </label>
          <textarea rows="3" className={inputCls} placeholder="Cuéntanos lo que necesitas" {...field("mensaje")} />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 cursor-pointer">
        <input type="checkbox" className="mt-1 accent-clay" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} />
        <span className="text-sm text-white/70">{contactSection.consentLabel}</span>
      </label>
      {errors.consent && <p className="mt-1 text-xs text-clay">{errors.consent}</p>}

      <button onClick={submit}
        className="mt-6 w-full rounded-full bg-clay px-7 py-3.5 text-base font-semibold text-white hover:brightness-105 transition">
        Enviar por WhatsApp
      </button>
      <p className="mt-4 text-xs text-white/55 leading-relaxed">{contactSection.disclaimer}</p>
    </div>
  );
}
