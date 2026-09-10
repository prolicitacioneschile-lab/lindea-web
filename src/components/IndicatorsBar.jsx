import { useEffect, useState } from "react";

// Formatea a pesos chilenos sin decimales (UF y euro llevan decimales suaves).
function clp(n, decimals = 0) {
  return "$" + Number(n).toLocaleString("es-CL", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

const FALLBACK = null;

export default function IndicatorsBar() {
  const [data, setData] = useState(FALLBACK);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const r = await fetch("https://mindicador.cl/api");
        const j = await r.json();
        if (!alive) return;
        setData({
          uf: j.uf?.valor,
          utm: j.utm?.valor,
          dolar: j.dolar?.valor,
          euro: j.euro?.valor,
          fecha: j.uf?.fecha?.slice(0, 10),
        });
      } catch {
        /* si falla la API, el banner simplemente no se muestra */
      }
    }
    load();
    // Refresca cada 6 horas por si la pestaña queda abierta.
    const t = setInterval(load, 6 * 60 * 60 * 1000);
    return () => { alive = false; clearInterval(t); };
  }, []);

  if (!data) return null;

  const items = [
    { label: "UF", value: clp(data.uf, 2) },
    { label: "UTM", value: clp(data.utm) },
    { label: "Dólar", value: clp(data.dolar, 2) },
    { label: "Euro", value: clp(data.euro, 2) },
  ];

  // Duplicamos la lista para el efecto de marquee continuo.
  const strip = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-forest text-white overflow-hidden">
      <div className="marquee flex whitespace-nowrap py-2.5">
        {strip.map((it, i) => (
          <span key={i} className="mx-6 inline-flex items-center gap-2 text-sm">
            <span className="font-semibold uppercase tracking-wide text-white/70">{it.label}</span>
            <span className="font-bold">{it.value}</span>
            <span className="text-white/30">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
