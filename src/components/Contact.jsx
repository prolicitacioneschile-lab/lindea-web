import { contactSection, contact } from "../data/site";
import { waLink } from "../lib/whatsapp";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contacto" className="bg-deep text-white py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <span className="block mb-5 text-xs font-semibold uppercase tracking-eyebrow text-clay">
              {contactSection.eyebrow}
            </span>
            <h2 className="text-h2 font-extrabold text-white">{contactSection.title}</h2>
            <p className="mt-5 text-lg font-light text-white/80 leading-relaxed">{contactSection.text}</p>

            <div className="mt-9">
              <p className="text-xl font-bold text-white">Lindea Propiedades</p>
              <p className="text-white/55">{contact.city}, Chile</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink("Hola Lindea, quiero conversar sobre mi propiedad.")} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-semibold text-white hover:brightness-105 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 1-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.5c-.2.2-.3.4-.1.6.2.4.9 1.4 1.9 2 .7.4 1 .4 1.2.3.2-.1.7-.8.9-1 .2-.3.4-.2.6-.1l1.8.9c.2.1.4.2.4.3.1.2.1.9-.1 1.6Z"/></svg>
                WhatsApp
              </a>
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                @{contact.instagramUser}
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
