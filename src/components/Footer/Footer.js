import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-up">
        <a href="" className="footer-up-text">
          <i></i>
          Inicio de página
        </a>
      </div>

      <div className="footer-options">
        <ul className="footer-options-ul">
          <li>Inicio</li>
          <li>Mi cuenta</li>
          <li>Wish List</li>
          <li>Devoluciones</li>
        </ul>

        <ul className="footer-options-ul">
          <li>Mis pedidos</li>
          <li>Tu planea y Ahorra</li>
          <li>Mesa de regalos</li>
          <li>Vender en Amazon</li>
        </ul>
      </div>
    </footer>
  );
}
