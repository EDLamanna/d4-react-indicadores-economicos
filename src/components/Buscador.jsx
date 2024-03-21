import React, { useState } from "react";

const Buscador = ({ setSearchTerm }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-6 m-4">
        <input
          type="text"
          placeholder="Buscar por indicador"
          className="form-control"
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Buscador;
