import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_flex">
            <div className="footer_left">
              <h3>
                O‘zbekiston Respublikasi, Farg‘ona viloyati, Beshariq shahri,
                Sirdaryo ko‘chasi, 46-uy
              </h3>
              <h3>Dushanbadan shanbagacha soat 8:00 dan 17:00 gacha</h3>
            </div>
            <div className="footer_center">
              <a className="num" href="tel:+998712816842">
                +998 71 281 68 42
              </a>
              <a className="num" href="mailto:poladyum.steyl@mail.ru">
                poladyum.steyl@mail.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
