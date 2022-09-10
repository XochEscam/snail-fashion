import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="nav">
        <div className="nav-main">
          <div className="nav-main-hb">
            <i className="nav-sprite nav-sprite--hamburguer " />
          </div>
          <div className="nav-main-logo">
            <i className="nav-sprite nav-sprite--amazon" />
          </div>
        </div>

        <div className="nav-user">
          <a className="nav-user-firstname">
            <b>Xochitl </b>›
          </a>
          <div className="nav-user-avatar">
            <i className="nav-sprite nav-sprite--avatar" />
          </div>
          <a className="nav-user-shoppingcart">
            <span className="nav-sprite nav-sprite--cart">
              <span className="nav-user-items">0</span>
            </span>
          </a>
        </div>
      </div>

      <div className="nav-search">
        <div className="nav-search-field">
          <input
            type="text"
            placeholder="Buscar Amazon.com.mx"
            className="nav-search-input"
          />
        </div>

        <button type="button" className="nav-search-button">
          <i className="nav-sprite nav-sprite--search" />
        </button>
      </div>

      <div className="nav-location">
        <i className="nav-sprite nav-sprite--location" />
        <span>Enviar a Xochitl - Victoria D... 30300</span>
      </div>
    </header>
  );
}
