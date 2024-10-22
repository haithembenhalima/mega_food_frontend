import React from "react";
import { useState, useEffect } from "react";
import "./CarouselComponent.css";

function CarouselComponent() {
  const images = [
    "/images/annoounce1.jpg",
    "/images/annoounce2.jpg",
    "/images/annoounce3.jpg",
    "/images/annoounce4.jpg",
    "/images/annoounce5.jpg",
    "/images/annoounce6.jpg",
    // Add more image paths here
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="carousel-component">
      <button className="carousel-button prev" onClick={prevSlide}>
        ‹
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="carousel-image"
      />
      <button className="carousel-button next" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
}

export default CarouselComponent;
