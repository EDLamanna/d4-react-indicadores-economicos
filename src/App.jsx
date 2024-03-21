import React, { useState } from "react";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";
import Navegador from "./components/Navegador";
import UltimoIndicador from "./components/UltimoIndicador";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <header>
        <Navegador />
        <div className="encabezado">
          <p>Indicadores económicos</p>
        </div>
      </header>
      <main>
        <UltimoIndicador />
        <hr className="mx-5 mb-5" />
        <h1 className="text-center" id="detalleIndicador">
          Detalle indicadores económicos
        </h1>
        <Buscador setSearchTerm={setSearchTerm} />
        <MiApi searchTerm={searchTerm} />
      </main>
      <Footer />
    </>
  );
}

export default App;
