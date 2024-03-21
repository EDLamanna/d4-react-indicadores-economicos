import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navegador = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#IndicadoresDelDia">Indicadores del día</Nav.Link>
            <Nav.Link href="#detalleIndicador">Lista Indicadores</Nav.Link>
            <Nav.Link href="#footer">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegador;
