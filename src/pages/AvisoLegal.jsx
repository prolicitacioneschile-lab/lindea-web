import PageShell from "./PageShell";
import { contact, brand } from "../data/site";

export default function AvisoLegal() {
  return (
    <PageShell
      eyebrow="Información"
      title="Aviso legal"
      intro={`Este aviso legal regula el uso del sitio web de ${brand.name}, servicio de corretaje y administración de arriendos con base en ${contact.city}, Chile.`}
    >
      <div className="space-y-6 text-stone leading-relaxed">
        <p>Todas las páginas de este sitio tienen carácter meramente informativo.</p>

        <ul className="space-y-3 list-disc pl-5">
          <li>Las imágenes y ambientaciones del sitio son solo ilustrativas y no constituyen necesariamente una representación de propiedades reales disponibles.</li>
          <li>Los valores, honorarios y condiciones que se mencionen son referenciales y pueden variar. Se confirman por escrito en cada propuesta antes de contratar.</li>
          <li>La información sobre servicios de arriendo y administración es orientativa; el alcance, las facultades y las condiciones se acuerdan por escrito entre las partes.</li>
          <li>La administración de arriendos no incluye garantía de pago del arrendatario. La labor de {brand.name} comprende la gestión, la coordinación y la rendición de cuentas.</li>
          <li>El contrato de arriendo se celebra entre el propietario y el arrendatario. {brand.name} no actúa como arrendador ni como garante.</li>
          <li>El envío de un formulario de contacto no constituye una contratación ni una reserva de propiedad.</li>
        </ul>

        <h2 className="text-xl font-bold text-ink pt-4">Datos personales</h2>
        <p>
          Los datos que nos entregues a través de los formularios o de WhatsApp se
          utilizan únicamente para responder tu solicitud y coordinar el servicio.
          No se comparten con terceros ajenos a la gestión, salvo obligación legal.
          Puedes solicitar su corrección o eliminación escribiéndonos por los
          canales de contacto del sitio.
        </p>

        <h2 className="text-xl font-bold text-ink pt-4">Propiedad del sitio</h2>
        <p>
          Los contenidos, marca y elementos gráficos de este sitio pertenecen a
          {" "}{brand.name}. Su uso no autorizado está prohibido.
        </p>

        <p className="text-sm text-stone/70 pt-6">
          Última actualización: {new Date().toLocaleDateString("es-CL", { year: "numeric", month: "long" })}.
        </p>
      </div>
    </PageShell>
  );
}
