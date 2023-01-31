import React from "react";
import "../Css/Footer.css";

import face from "../img/face.png";
import insta from "../img/insta.png";
import you from "../img/youtube.png";

function Footer() {
  return (
    <footer>
      <a href="https://www.facebook.com/profile.php?id=100003794243699">
        <img src={face} />
      </a>
      <a href="https://www.instagram.com/gustavosillvaa24/?hl=pt-br">
        <img src={insta} />
      </a>
      <a href="https://www.youtube.com/">
        <img src={you} />
      </a>
    </footer>
  );
}

export default Footer;
