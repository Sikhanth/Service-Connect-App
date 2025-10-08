import React, { useRef, useState, useEffect } from "react";
import offer1 from "../assets/offers_ads/offers.svg";
import offer2 from "../assets/offers_ads/offers.svg";
import offer3 from "../assets/offers_ads/offers.svg";

const Offers = () => {
  const slides = [offer1, offer2, offer3];
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Detect which image is in view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const index = Math.round(el.scrollLeft / el.clientWidth);
      setCurrent(index);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (index) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative w-full mx-auto mt-4 select-none">
      {/* Scrollable images */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {slides.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full snap-start relative flex justify-center items-center"
          >
            <img
              src={src}
              alt={`offer-${i}`}
              className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-2xl shadow-md"
            />

            {/* "See All" button */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2">
              <button
                className="bg-white/90 backdrop-blur text-gray-800 text-sm font-medium px-4 py-1.5 rounded-full shadow-md hover:bg-yellow-400 hover:text-white transition"
                onClick={() => console.log('See all offers clicked')}
              >
                See All →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Ellipse indicators */}
      <div className="flex justify-center mt-3 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i)}
            className={`transition-all duration-300 ${
              i === current ? "w-6" : "w-3"
            } h-2 rounded-full ${
              i === current ? "bg-yellow-400" : "bg-black/60"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Offers;
