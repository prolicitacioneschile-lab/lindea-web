// ============================================================
//  LINDEA PROPIEDADES — CONTENIDO EDITABLE DEL SITIO
//  Cambia textos, contacto, comunas y FAQ aquí, sin tocar el
//  resto de la aplicación. Guarda y el sitio se actualiza solo.
// ============================================================

export const brand = {
  name: "Lindea Propiedades",
  tagline: "Tu propiedad. Tu tranquilidad.",
  logo: "/logo.png",
};

export const contact = {
  // Solo dígitos, con código de país. Se usa para el enlace de WhatsApp.
  whatsappNumber: "56930801241",
  whatsappDisplay: "+56 9 3080 1241",
  instagramUser: "lindea_propiedades",
  instagramUrl: "https://instagram.com/lindea_propiedades",
  personName: "Gonzalo Pozo",
  city: "Santiago",
  scheduleLine1: "Lunes a domingo",
  scheduleLine2: "de 08:00 a 20:00 hrs.",
};

export const comunas = [
  "La Florida",
  "Macul",
  "Ñuñoa",
  "Las Condes",
  "Providencia",
  "La Reina",
  "Peñalolén",
];

// Une una lista como texto natural: "A, B y C".
export function joinComunas(list = comunas) {
  if (list.length <= 1) return list.join("");
  return `${list.slice(0, -1).join(", ")} y ${list[list.length - 1]}`;
}

export const nav = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Administración", href: "/#administracion" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Busco arriendo", href: "/#arrendatarios" },
];

export const hero = {
  eyebrow: "Arriendo y administración",
  title: "Tu propiedad. Tu tranquilidad.",
  text: "Nos ocupamos de arrendar tu propiedad y de su gestión mensual. Tú mantienes el control, con más tiempo para ti.",
  primaryCta: { label: "Quiero arrendar mi propiedad", href: "#contacto" },
  secondaryCta: { label: "Mi propiedad ya está arrendada", href: "#contacto" },
};

export const intro = {
  lineTop: "Espacios para vivir.",
  lineBottom: "Tiempo para disfrutar.",
  pillars: [
    { title: "Gestión del arriendo", text: "Desde la búsqueda del arrendatario hasta la entrega de llaves." },
    { title: "Seguimiento de pagos", text: "Registro de abonos, vencimientos y aviso de atrasos." },
    { title: "Rendición mensual", text: "Un resumen claro de ingresos, honorarios y gastos." },
  ],
};

export const services = {
  eyebrow: "A tu medida",
  title: "Una buena gestión hace la diferencia.",
  text: "Vender, arrendar o delegar la administración mes a mes. Elige el apoyo que necesita tu propiedad.",
  blocks: [
    {
      title: "Arrendamos tu propiedad",
      text: "Te acompañamos en la búsqueda de arrendatario, desde la publicación hasta la entrega de llaves.",
      items: [
        "Presentación y publicación del inmueble",
        "Coordinación de visitas y antecedentes",
        "Apoyo en contrato, inventario y entrega",
      ],
      cta: { label: "Quiero arrendar mi propiedad", href: "#contacto" },
    },
    {
      title: "Administramos tu arriendo",
      text: "Un punto de contacto para el seguimiento de pagos y la coordinación del día a día de tu propiedad.",
      items: [
        "Registro de pagos y recordatorios",
        "Rendición mensual de ingresos y gastos",
        "Coordinación de mantenciones autorizadas",
      ],
      cta: { label: "Quiero delegar la administración", href: "#contacto" },
    },
    {
      title: "Vendemos tu propiedad",
      text: "Te acompañamos en la venta, desde la publicación hasta la firma, con información clara en cada paso.",
      items: [
        "Presentación, publicación y promoción del inmueble",
        "Coordinación de visitas y gestión de interesados",
        "Acompañamiento hasta concretar la venta",
      ],
      cta: { label: "Quiero vender mi propiedad", href: "#contacto" },
    },
  ],
};

export const buyProcess = {
  eyebrow: "Si buscas comprar",
  title: "Proceso de compra.",
  text: "Si estás pensando en comprar, este es el camino. Te acompañamos en la búsqueda y en cada etapa con el vendedor.",
  image: { src: "/images/corte-casa.webp", alt: "Corte ilustrado de una casa con living, comedor y cocina" },
  steps: [
    { title: "Tu elección", text: "Te orientamos en la búsqueda y visitas para elegir la propiedad adecuada." },
    { title: "Reserva", text: "Selección de la propiedad, forma de pago y entrega de documentos." },
    { title: "Promesa", text: "Firma de la promesa de compraventa y pago del pie acordado." },
    { title: "Escritura", text: "Crédito hipotecario con tu banco y firma de la escritura en notaría." },
    { title: "Entrega", text: "Recepción de la propiedad, coordinada con el vendedor o la inmobiliaria." },
    { title: "Arriendo", text: "¿Compraste para invertir? Buscamos arrendatario y administramos tu arriendo." },
  ],
};

export const administration = {
  eyebrow: "Cerca de ti, cada mes",
  title: "Menos pendientes. Más claridad.",
  text: "Administrar va más allá de recordar una fecha de pago. Es saber qué se recibió, qué está pendiente y qué necesita tu propiedad.",
  modules: [
    {
      title: "Pagos, al día en tu información",
      text: "Seguimiento de vencimientos y abonos, con registro de los pagos y aviso de atrasos.",
    },
    {
      title: "Cuentas que puedes revisar",
      text: "Una rendición mensual con ingresos, honorarios, gastos autorizados y saldos.",
    },
    {
      title: "Tu propiedad, acompañada",
      text: "Coordinación con el arrendatario y seguimiento de mantenciones, siempre con aprobación del propietario.",
    },
  ],
  note: "El servicio y las facultades de administración se acuerdan por escrito. La administración no incluye garantía de pago.",
};

export const howItWorks = {
  eyebrow: "Paso a paso",
  title: "Lo hacemos contigo.",
  text: "Tú decides sobre tu propiedad. Nosotros coordinamos la gestión.",
  steps: [
    { title: "Conocemos tu propiedad", text: "Conversamos sobre su ubicación, estado y lo que necesitas resolver." },
    { title: "Acordamos el servicio", text: "Definimos el alcance, los honorarios y las autorizaciones en una propuesta." },
    { title: "Nos ponemos en marcha", text: "Coordinamos el arriendo o recibimos la administración de tu contrato vigente." },
  ],
};

export const tenants = {
  eyebrow: "Para quienes buscan hogar",
  title: "Un nuevo lugar. Una nueva etapa.",
  text: "Estamos incorporando propiedades en Santiago. Cuéntanos dónde quieres vivir y qué necesitas en tu próximo hogar.",
  emptyNote: "Próximamente publicaremos nuestras primeras propiedades disponibles.",
  cta: { label: "Cuéntanos qué estás buscando", href: "#contacto" },
};

export const faq = {
  eyebrow: "Hablemos con claridad",
  title: "Antes de comenzar.",
  items: [
    {
      q: "¿Puedo contratar solo la administración?",
      a: "Sí. Puedes contratar el corretaje, la administración o ambos. Si tu propiedad ya está arrendada, podemos hacernos cargo de la gestión mensual del contrato vigente.",
    },
    {
      q: "¿Cómo se administran los pagos?",
      a: "Damos seguimiento a los vencimientos y abonos, dejamos registro de cada pago y avisamos los atrasos. El circuito de pago se define por escrito: puede ir directo a tu cuenta o, si lo autorizas expresamente, a través de una cuenta destinada a la recaudación con rendición mensual.",
    },
    {
      q: "¿Quién firma el contrato de arriendo?",
      a: "El contrato se celebra entre el propietario y el arrendatario. Podemos comparecer como administrador para las funciones que acuerdes por escrito, sin convertirnos en arrendador ni en garante.",
    },
    {
      q: "¿La administración garantiza el pago?",
      a: "No. La administración no incluye garantía de pago del arrendatario. Nuestra labor es el seguimiento, la coordinación y la rendición clara de cuentas; ante un atraso, te informamos y gestionamos las comunicaciones que correspondan.",
    },
    {
      q: "¿Cuáles son los honorarios?",
      a: "Dependen del servicio que elijas y de las características de tu propiedad. Los definimos con transparencia en una propuesta por escrito antes de comenzar, sin cobros sorpresa.",
    },
  ],
};

export const contactSection = {
  eyebrow: "El primer paso es conversar",
  title: "Cuéntanos. Te escuchamos.",
  text: "¿Tienes una propiedad o estás buscando arriendo? Déjanos tus datos para conversar sobre lo que necesitas.",
  disclaimer: "Esta solicitud no constituye una contratación ni una reserva de propiedad.",
  consentLabel: "Autorizo a Lindea Propiedades a usar estos datos para responder mi solicitud.",
};

export const footer = {
  privacyLabel: "Privacidad de tus datos",
  copyright: "© 2026 Lindea Propiedades · Santiago, Chile",
};
