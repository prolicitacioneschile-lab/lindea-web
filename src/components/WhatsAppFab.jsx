import { waLink } from "../lib/whatsapp";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink("Hola Lindea, quiero conversar sobre mi propiedad.")}
      target="_blank" rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 1-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.5c-.2.2-.3.4-.1.6.2.4.9 1.4 1.9 2 .7.4 1 .4 1.2.3.2-.1.7-.8.9-1 .2-.3.4-.2.6-.1l1.8.9c.2.1.4.2.4.3.1.2.1.9-.1 1.6Z"/></svg>
    </a>
  );
}
