import React, { useState } from "react";
import { RiPhoneFill } from "react-icons/ri";
import "./Header.css";

function Header() {
  const [head, setHead] = useState();

  window.addEventListener("scroll", () => {
    if (scrollY) {
      setHead(true);
    } else {
      setHead(false);
    }
  });

  return (
    <>
      <header className={`${head ? "whiteHeader" : null}`}>
        <div className="container">
          <div className="header-flex">
            <a className="nav_logo_link" href="#">
              Poladyum LLC
            </a>
            <nav>
              <a className="nav_link" href="#">
                Home
              </a>
              <a className="nav_link" href="#">
                Production
              </a>
              <a className="nav_link" href="#">
                Blog
              </a>
              <a className="nav_link" href="#">
                Contact
              </a>
            </nav>
            <a className="nav_phoneNum_link" href="tel:+998946162677">
              <RiPhoneFill className="nav_call_icon" />
              +998 94 616 26 77
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
