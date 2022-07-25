import { Carousel as AntCarousel } from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

// const carouselStyle: React.CSSProperties = { };

const Carousel = () => {
  return (
    <AntCarousel autoplay effect="fade">
      <div>
        <h3 style={contentStyle}>
          <img src="https://klike.net/uploads/posts/2020-08/1597127429_5.jpg"></img>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="https://www.syngenta.ua/sites/g/files/zhg666/f/media-wysiwyg/2020/11/30/vyprobuvannya-pogodoyu1_optimized.png"></img>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>

        <img src="https://img5.goodfon.ru/wallpaper/nbig/a/51/pole-podsolnukhi-derevia-nebo-solntse-rassvet.jpg"></img>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>

        <img src="https://images.pexels.com/photos/10031519/pexels-photo-10031519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
      </div>
    </AntCarousel>
  );
};

export default Carousel;
