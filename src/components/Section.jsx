export default function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`px-6 md:px-10 ${className}`}>
      <div className="mx-auto max-w-content">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, light = false }) {
  return (
    <span className={`block mb-5 text-xs font-semibold uppercase tracking-eyebrow ${light ? "text-clay" : "text-clay"}`}>
      {children}
    </span>
  );
}
