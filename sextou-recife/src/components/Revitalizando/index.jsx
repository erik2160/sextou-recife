import React from "react";
import "./index.css";
import revitalizando from "../../assets/revitalizando.png";

function Revitalizando() {
  return (
    <div className="container">
      <div className="text-content">
        <h1>Revitalizando o coração cultural de Recife</h1>
        <h2>mudou</h2>
        <p>
          Sextou Recife se dedica a dar vida nova ao centro histórico do Recife.
          Nossa missão é criar uma experiência envolvente que mostre a rica 
          herança cultural da cidade, ao mesmo tempo em que incentiva moradores e 
          turistas a explorar sua vibrante história.
        </p>
      </div>

      <div className="image-content">
        <img src={revitalizando} alt="Vista do Recife" />
      </div>
    </div>
  );
}

export default Revitalizando;
