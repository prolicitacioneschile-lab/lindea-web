import { contact } from "../data/site";

// Construye un enlace de WhatsApp con mensaje opcional prellenado.
export function waLink(message = "") {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
