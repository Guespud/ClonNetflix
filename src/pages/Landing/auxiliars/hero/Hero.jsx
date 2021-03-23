import React from "react";
import Header from "../headers";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="LandingHero">
      <Header />
      <div className="LandingHero__content">
        <h1 className="LandingHero_content--title">
          Películas y series <br/>ilimitadas y mucho más.
        </h1>
        <h3 className="LandingHero__content--subtitle">
          Disfruta donde quieras. Cancela cuando quieras.
        </h3>
        <h6 className="LandingHero_content--text">
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
        </h6>
      </div>
      <div className="Email_imput">
        <input type="text" className="Email" />
        <div className="Button">
          <p className="Button_text">Comenzar {">"}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
