import React from "react";
import './About.css';

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
              <h2 className="about_title">Bizning kompaniya</h2>
              <p className="about_paragraf">
                O'zbekiston Respublikasining eng yirik yengil sanoat
                korxonalaridan biri. Korxona trikotaj mahsulotlari ishlab
                chiqaruvchi korxona hisoblanadi. Zavod Rossiya va xorijiy
                bozorlarda faol ishlamoqda. Kompaniya 2020 yilda tashkil etilgan
                va shu vaqt ichida to'qimachilik trikotaj mahsulotlarining
                ishonchli hamkori va yetkazib beruvchisi sifatida obro'
                qozongan. Lux Yan Tex MChJ o'z mahsulotlari sifatiga va
                hamkorlarimizning afzalliklariga katta e'tibor beradi. Ishlab
                chiqarish tsikli maksimal darajada avtomatlashtirilgan va
                olingan mahsulotlar sifati ustidan doimiy nazorat ostida davom
                etadi.
              </p>
              <div className="btn_div">
              <button className="about_btn">Ko'roq</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
