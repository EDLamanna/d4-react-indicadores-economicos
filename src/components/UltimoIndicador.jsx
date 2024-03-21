import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const UltimoIndicador = () => {
  const [indicadores, setIndicadores] = useState({});

  const getUltimosIndicadores = async () => {
    try {
      const respuesta = await fetch("https://mindicador.cl/api");
      const data = await respuesta.json();
      setIndicadores(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    getUltimosIndicadores();
  }, []);

  const valores = {
    Dólar: indicadores.dolar?.valor?.toLocaleString("es-CL"),
    Euro: indicadores.euro?.valor?.toLocaleString("es-CL"),
    UF: indicadores.uf?.valor?.toLocaleString("es-CL"),
    Bitcoin: indicadores.bitcoin?.valor?.toLocaleString("es-CL"),
  };

  return (
    <div className="tarjetasContainer" id="IndicadoresDelDia">
      {Object.entries(valores).map(([indicador, valor]) => (
        <Card key={indicador}>
          <Card.Body className="tarjetas">
            <Card.Title>Valor del {indicador}</Card.Title>
            <Card.Text className="textCard">{valor || "Cargando..."}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UltimoIndicador;
