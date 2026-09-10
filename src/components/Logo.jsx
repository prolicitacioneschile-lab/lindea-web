import { brand } from "../data/site";

export default function Logo({ variant = "dark", className = "" }) {
  const textColor = variant === "light" ? "text-white" : "text-ink";
  return (
    <a href="/" className={`flex items-center gap-3 ${className}`} aria-label="Lindea Propiedades, inicio">
      <img src={brand.logo} alt="" width="38" height="38" className="h-9 w-9 rounded-full object-cover" />
      <span className={`text-[17px] font-bold tracking-tight2 leading-none ${textColor}`}>
        Lindea <span className="font-medium opacity-70">Propiedades</span>
      </span>
    </a>
  );
}
