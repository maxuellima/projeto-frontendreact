import React from "react";
import {Cabecalho, TextoCabecalho} from "./HeaderStyle";

import astroAlien from "../../react-images/alien-astro.svg"
import astronaut from "../../react-images/icon-astronauta.svg"
import astroFly from "../../react-images/astrofly.svg"

function Header() {
  return (
    <div>
      <Cabecalho>
        <TextoCabecalho>
          <img src={astronaut} alt="icone de astronauta" />
          <div>
          <h1>LabeSpace</h1>
          <img src={astroAlien} alt="astronauta e alien" />
          </div>
          <img src={astroFly} alt="astrounauta voando" />
        </TextoCabecalho>
      </Cabecalho>
    </div>
  );
}
export default Header;
