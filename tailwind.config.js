/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        deep: "#193B31",      // verde profundo
        forest: "#214D40",    // verde principal
        sage: "#2F6B5B",      // verde secundario
        cream: "#FAF9F6",     // crema (uso muy puntual)
        clay: "#B25235",      // terracota de acento
        stone: "#657168",     // gris de texto
        ink: "#1A1A1A",       // casi-negro para titulares
        mist: "#F4F4F2",      // gris muy claro para separar secciones
        line: "#E7E7E3",      // líneas hairline
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'Arial', 'sans-serif'],
      },
      maxWidth: { content: "1240px" },
      letterSpacing: {
        eyebrow: "0.22em",
        tight2: "-0.02em",
        tight3: "-0.035em",
      },
      fontSize: {
        // escala editorial grande, estilo Almagro
        'display': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'h2': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
    },
  },
  plugins: [],
};
