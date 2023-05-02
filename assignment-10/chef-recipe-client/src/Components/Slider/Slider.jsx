/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Slider.css";
// 1117384986
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://i.postimg.cc/q7QLjcTq/recipe1.jpg",
      caption: "Caption 1",
    },
    {
      image: "https://i.postimg.cc/q7QLjcTq/recipe1.jpg",
      caption: "Caption 2",
    },
    {
      image: "https://i.postimg.cc/fWVGSycm/recipe6.jpg",
      caption: "Caption 3",
    },
    {
      image: "https://i.postimg.cc/13r21qSh/recipe11.jpg",
      caption: "Caption 4",
    },
    {
      image: "https://i.postimg.cc/q7QLjcTq/recipe1.jpg",
      caption: "Caption 5",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <>
      <div className="slider">
        <div className="slider-image-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slider-image ${
                currentSlide === index ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slider-caption">{slide.caption}</div>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          <button className="slider-control" onClick={prevSlide}>
            &lt;
          </button>
          <button className="slider-control" onClick={nextSlide}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
