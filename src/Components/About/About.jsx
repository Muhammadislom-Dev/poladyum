import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="about_flex">
            <div className="about_img_box">
              <img
                className="about_picture"
                src="https://luxyantex.uz/thumb/2/WhK6Z367WWI8LRlPhPi89w/1220r1220/d/photo_2022-02-09_15-01-55.jpg"
                alt="pic"
              />
            </div>
            <div className="about_desc_box">
              <h2 className="about_title">Our company</h2>
              <p className="about_paragraf">
                The largest light industry of the Republic of Uzbekistan one of
                the enterprises. The enterprise produces knitted products is a
                producing enterprise. The plant is Russian and foreign is
                actively working in the markets. The company was founded in 2020
                and meanwhile of textile knitted products reputation as a
                reliable partner and supplier won Lux Yan Tex LLC is committed
                to the quality of its products and pays great attention to the
                benefits of our partners. Work the release cycle is maximally
                automated and Continuous control over the quality of the
                obtained products is enough.
              </p>
              <div className="btn_div">
                <button className="about_btn">More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
