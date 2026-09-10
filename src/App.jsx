import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import AvisoLegal from "./pages/AvisoLegal";

// Al cambiar de página, sube al inicio. Si hay un hash (#seccion), baja a ella.
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </BrowserRouter>
  );
}
