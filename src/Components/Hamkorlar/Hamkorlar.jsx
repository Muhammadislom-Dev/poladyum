import React, { useRef } from "react";
import "./Hamkorlar.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Hamkorlar() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <div className="hamkorlar">
        <div className="container">
          <h2>Bizning Hamkorlar</h2>
          <div className="hamkor_flex">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
              style={{ height: "250px", marginTop: "20px" }}
            >
              <SwiperSlide
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "250px",
                }}
              >
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/TatM9TKjQ7K8WtHmuxe-vQ/640r480/d/0663a4ddceacb40b095eda264a85f15c.png"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/7HHBCDuOW8jDmaTEMxI7Fw/640r480/d/5c4074f6dca1e1823057.png"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/4BcEUINgXR-80mSShGbptw/640r480/d/5_2.png"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/qP5Eh4Qzbq_-wcRTvazKzA/640r480/d/lc-waikiki-manavgat-subesi.jpg"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/5u6YSfEQ64zkfuThX1u1uw/640r480/d/14.jpg"
                    alt="logo"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "250px",
                }}>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/k6-xZJB5yUTrKklZ6kSDQg/640r480/d/5fd8339ad95c5-logo.jpg"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/LhG1eq53Ul3RqdaKZN1wIg/640r480/d/screenshot_2.png"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/A9yv11OmAO9M_IyJA1w9kw/640r480/d/logo.png"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/7B5spOnDJ_DuFphudulP7g/640r480/d/screenshot_1.png"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/qP5Eh4Qzbq_-wcRTvazKzA/640r480/d/lc-waikiki-manavgat-subesi.jpg"
                    alt="logo"
                  />
                </div>
              </SwiperSlide>
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hamkorlar;
