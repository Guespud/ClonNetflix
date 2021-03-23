import React from "react";
import "./styles.scss";
import Logo from '../../../../assets/images/logon.svg'

const Header = () => {
  return (
    <div className="LandingHeader">
      <img className="LandingHeader_logo" alt="este es el logo de netflix" src={Logo} />

      <div className="LandingHeader_button">
        <p>Iniciar sesión</p>
      </div>
    </div>
  );
};

export default Header;
