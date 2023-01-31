import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Nav.css";

function Nav() {
  return (
    <nav>
      <div>
        <NavLink id="bar" to="/">
          Início
        </NavLink>
        <NavLink id="bar" to="/about">
          Sobre
        </NavLink>
        <NavLink id="bar" to="/comment">
          Comentários
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
