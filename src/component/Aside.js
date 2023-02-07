import React from "react";
import "../Css/Aside.css";

import gif from "../img/gif1.gif";

function Aside() {
  return (
    <aside>
      <h1>Site em React</h1>
      <p>
        Site feito em React com sub-menus, estilizado em Css, no sub-menu
        comentários cadastro de Nome, E-mail e uma opinião sua.
      </p>
      <p>Agradeço sua atenção !!</p>
      <img src={gif} />
    </aside>
  );
}

export default Aside;
