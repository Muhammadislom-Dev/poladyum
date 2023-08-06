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
              <a className="num" href="tel:+998931234567">+998-(93)-123-45-67</a>
              <a href="#">info@visit.com</a>
            </div>
            <div className="footer_right">
              <a href="#">
                <BsFacebook className="icon" />
              </a>
              <a href="#">
                <BsInstagram className="icon" />
              </a>
              <a href="#">
                <BsYoutube className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
