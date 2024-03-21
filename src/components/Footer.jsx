import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer className="bg-dark text-light" id="footer">
      <Container>
        <p className="p-0 fs-4">Hecho por: Edwin Lamanna</p>
        <p className="p-0 fs-4">Correo: edlamanna@hotmail.com</p>
        <p className="p-5 text-center fs-2">
          Fuente obtenida de{" "}
          <a href="https://mindicador.cl/api" className="text-light">
            mindicador.cl/api
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
