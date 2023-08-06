import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import FeedBack from "./Components/FeedBack/FeedBack";
import Hamkorlar from "./Components/Hamkorlar/Hamkorlar";
import Home from "./Components/Home/Home";
import Making from "./Components/Making/Making";
import Production from "./Components/Production/Production";

function MainComp() {
  return (
    <>
      <Home />
      <Making />
      <About />
      <Production />
      <Hamkorlar />
      <FeedBack />
      <Contact />
    </>
  );
}

export default MainComp;
