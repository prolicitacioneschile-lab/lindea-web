import { Link } from "react-router-dom";
import { footer, brand, contact } from "../data/site";
import { waLink } from "../lib/whatsapp";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-content px-6 md:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Marca */}
          <div className="md:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-lg font-medium text-white/90">{brand.tagline}</p>
          </div>

          {/* Clientes Lindea */}
          <div>
            <h3 className="text-white font-bold mb-1">Clientes Lindea</h3>
            <span className="block w-8 h-0.5 bg-clay mb-4" />
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/quienes-somos" className="hover:text-white transition">Quiénes somos</Link></li>
              <li><a href="/#servicios" className="hover:text-white transition">Venta de propiedades</a></li>
              <li><a href="/#servicios" className="hover:text-white transition">Arriendo de propiedades</a></li>
              <li><a href="/#administracion" className="hover:text-white transition">Administración</a></li>
              <li><a href="/#proceso-de-compra" className="hover:text-white transition">Proceso de compra</a></li>
              <li><a href="/#arrendatarios" className="hover:text-white transition">Busco arriendo</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-bold mb-1">Contacto</h3>
            <span className="block w-8 h-0.5 bg-clay mb-4" />
            <ul className="space-y-2.5 text-sm">
              <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp {contact.whatsappDisplay}</a></li>
              <li><a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">@{contact.instagramUser}</a></li>
              <li><a href={`mailto:${contact.email}`} className="hover:text-white transition">{contact.email}</a></li>
              <li className="text-white/50">{contact.city}, Chile</li>
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h3 className="text-white font-bold mb-1">Horario de atención</h3>
            <span className="block w-8 h-0.5 bg-clay mb-4" />
            <p className="text-sm leading-relaxed">
              {contact.scheduleLine1}<br />{contact.scheduleLine2}
            </p>
            <Link to="/aviso-legal" className="mt-4 inline-block text-sm hover:text-white transition">
              Aviso legal
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/45">
          <span>{footer.copyright}</span>
          <Link to="/aviso-legal" className="hover:text-white/70 transition">{footer.privacyLabel}</Link>
        </div>
      </div>
    </footer>
  );
}
