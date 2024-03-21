import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const MiApi = ({ searchTerm }) => {
  const [indicadores, setIndicadores] = useState([]);
  const [originalIndicadores, setOriginalIndicadores] = useState([]);
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const urls = [
    "https://mindicador.cl/api/dolar",
    "https://mindicador.cl/api/euro",
    "https://mindicador.cl/api/uf",
    "https://mindicador.cl/api/bitcoin",
  ];

  const formatearFecha = (fecha) => {
    const fechaFormateada = new Date(fecha).toLocaleDateString("es-CL");
    return fechaFormateada;
  };

  const formatearValor = (valor) => {
    return valor.toLocaleString("es-CL");
  };

  const getIndicador = async (url) => {
    try {
      const respuesta = await fetch(url);
      if (respuesta.ok) {
        const data = await respuesta.json();
        const serieFormateada = data.serie.map((dato) => ({
          ...dato,
          fecha: formatearFecha(dato.fecha),
          valor: formatearValor(dato.valor),
        }));
        setIndicadores((prevState) => [
          ...prevState,
          { ...data, serie: serieFormateada },
        ]);
        setOriginalIndicadores((prevState) => [
          ...prevState,
          { ...data, serie: serieFormateada },
        ]);
      } else {
        console.error(
          `Error al obtener datos desde ${url}. Código de estado: ${respuesta.status}`
        );
      }
    } catch (error) {
      console.error(`Error al obtener datos desde ${url}:`, error);
    }
  };

  useEffect(() => {
    urls.forEach((url) => {
      getIndicador(url);
    });
  }, []);

  useEffect(() => {
    const filteredIndicadores = originalIndicadores.filter((indicador) =>
      indicador.codigo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedIndicadores = filteredIndicadores.sort((a, b) =>
      ordenAscendente
        ? a.codigo.localeCompare(b.codigo)
        : b.codigo.localeCompare(a.codigo)
    );

    setIndicadores(sortedIndicadores);
  }, [searchTerm, ordenAscendente, originalIndicadores]);

  const alternarorden = () => {
    setOrdenAscendente((prevState) => !prevState);
  };

  return (
    <Container className="p-5">
      <Button onClick={alternarorden} className="mb-3">
        Indicador {ordenAscendente ? "Z-A" : "A-Z"}
      </Button>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th className="col-1">Indicador</th>
            <th className="col-1">Fecha</th>
            <th className="col-1">Valor</th>
          </tr>
        </thead>
        <tbody>
          {indicadores.map((indicador) =>
            indicador.serie.map((dato, datoIndex) => (
              <tr key={`${indicador.codigo}-${datoIndex}`}>
                <td>{indicador.codigo}</td>
                <td>{dato.fecha}</td>
                <td>{dato.valor}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default MiApi;
