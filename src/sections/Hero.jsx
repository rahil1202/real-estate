import { useState, useEffect } from "react";
import image1 from "../assets/images/buildings/01.png";
import image2 from "../assets/images/buildings/02.png";
import image3 from "../assets/images/buildings/03.jpg";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: image1, text: "Find your next Premium 2 Layer Shops & Showrooms" },
    { src: image2 , text: "Luxury Commercial Spaces with Premium Brands Onboard (SubWay, Koa Caf, and more..)" },
    { src: image3, text: "Commercial Property at 75 Mtr Highly Developing Road of New Vadodara" }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <section
        id="hero"
        className="w-[95%] h-[650px] mx-auto bg-fill bg-center rounded-2xl overflow-hidden relative transition-all duration-1000 ease-in-out "
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
          backgroundSize: "cover",
        }}
        aria-label="Hero background image"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"/>

        {/* Hero Content */}
        <div className="absolute bottom-0 right-0 p-8 lg:p-16 max-w-2xl">
          <div 
            data-aos="fade-left"
            className="bg-black/70 backdrop-blur-sm p-8 rounded-2xl text-white transform hover:scale-[1.02] transition-all duration-300"
          >
            <h1 className="text-3xl lg:text-3xl font-semibold font-primary lg:leading-[1.2] mb-3">
              {images[currentIndex].text}
            </h1>           
          </div>
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-6 left-6 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Search Form */}
      <div className="relative z-20 w-[95%] mx-auto px-4">
        <div          
          className="bg-white lg:w-[80%] w-full mx-auto mt-[-30px] rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-4 grid-cols-1 divide-x divide-gray-100">
            {/* Name Input */}
            <div className="p-6 hover:bg-gray-50 transition-colors duration-300">
              <label className="block text-gray-800 font-semibold mb-2 text-sm">
                Name*
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none focus:border-primary border-b-2 border-gray-200 p-2 transition-all duration-300"
                required
              />
            </div>
            {/* Phone Input */}
            <div className="p-6 hover:bg-gray-50 transition-colors duration-300">
              <label className="block text-gray-800 font-semibold mb-2 text-sm">
                Phone*
              </label>
              <input
                type="tel"
                placeholder="Enter your Phone"
                className="w-full bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none focus:border-primary border-b-2 border-gray-200 p-2 transition-all duration-300"
                required
              />
            </div>

            {/* Property Type */}
            <div className="p-6 hover:bg-gray-50 transition-colors duration-300">
              <label className="block text-gray-800 font-semibold mb-2 text-sm">
                Property Type*
              </label>
              <select
                className="w-full bg-transparent text-gray-600 focus:outline-none focus:border-primary border-b-2 border-gray-200 p-2 transition-all duration-300"
                defaultValue=""
                required
              >
                <option value="" disabled>Select property type</option>
                <option value="rentals">Rentals</option>
                <option value="sales">Sales</option>
                <option value="commercials">Commercial</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="p-6 flex items-center justify-center bg-white lg:col-span-1 col-span-4">
              <button
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold font-secondary py-4 px-8 rounded-xl 
                transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;