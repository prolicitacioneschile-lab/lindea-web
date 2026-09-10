import { useState } from "react";
import Section, { Eyebrow } from "./Section";
import { faq } from "../data/site";

function Item({ q, a, open, onToggle, id }) {
  return (
    <div className="border-b border-line">
      <h3>
        <button className="flex w-full items-center justify-between gap-4 py-6 text-left"
          aria-expanded={open} aria-controls={`faq-panel-${id}`} onClick={onToggle}>
          <span className="text-lg font-semibold text-ink">{q}</span>
          <svg className={`h-5 w-5 flex-none text-clay transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </h3>
      <div id={`faq-panel-${id}`} className="grid transition-all duration-300" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
        <div className="overflow-hidden"><p className="pb-6 pr-8 text-stone leading-relaxed">{a}</p></div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <Section className="py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 className="text-h2 font-extrabold text-ink">{faq.title}</h2>
        </div>
        <div className="border-t border-line">
          {faq.items.map((it, i) => (
            <Item key={i} id={i} q={it.q} a={it.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </div>
    </Section>
  );
}
