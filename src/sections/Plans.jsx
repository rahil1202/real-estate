/* eslint-disable react/prop-types */
import  { useState } from 'react';
import {BsX} from "react-icons/bs";

// Image imports
import plan1 from "../assets/images/Plans/full-plan.jpg";
import plan2 from "../assets/images/Plans/first-plan.jpg";
import plan3 from "../assets/images/Plans/second-plan.jpg";
import plan4 from "../assets/images/Plans/shop-plan.jpg";

const ImageModal = ({ image, onClose }) => {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleZoom = (delta) => {
    setScale(prev => Math.min(Math.max(0.5, prev + delta), 3));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
        >
          <BsX size={24} />
        </button>
        
        <div 
          className="relative cursor-move"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <img
            src={image}
            alt="Plan detail"
            className="max-h-[90vh] max-w-[90vw] object-contain transition-transform duration-200"
            style={{ 
              transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            draggable="false"
          />
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
            <button
              onClick={() => handleZoom(-0.2)}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-black"
            >
              Zoom Out
            </button>
            <button
              onClick={() => handleZoom(0.2)}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-black"
            >
              Zoom In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Plans = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const stats = [
    { number: "52", text: "Units" },
    { number: "652", text: "Sq.Ft Starting Area/Unit" },
    { number: "8%", text: "ROI" }
  ];

  const smallPlans = [plan2, plan3, plan4];

  return (
    <>
      <section className="lg:w-[100%] w-full h-fit m-auto bg-white flex justify-center flex-col items-center lg:px-20 px-6 py-4 gap-20">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center -mb-16">
          <h3 
            data-aos="fade-up" 
            className="inline-block px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold uppercase tracking-wider font-primary mb-4"
          >
            Architectural Plans
          </h3>
          <h2 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-4xl lg:text-5xl font-bold font-primary text-black mb-4"
          >
            Choose Your Dream Home
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-gray-600 text-lg font-secondary"
          > 
            Explore our range of architectural plans and choose the one that suits your lifestyle.
          </p>
        </div>

        {/* Full Plan Image */}
        <div 
          className="w-full relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          onClick={() => setSelectedImage(plan1)}
        >
          <div
            style={{ backgroundImage: `url(${plan1})` }}
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] bg-contain bg-no-repeat bg-center transform transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Three Plan Images Grid */}
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-8">
          {smallPlans.map((plan, index) => (
            <div 
              key={index} 
              className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedImage(plan)}
            >
              <div
                style={{ backgroundImage: `url(${plan})` }}
                className="h-[400px] bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-10 bg-primary/10 rounded-2xl p-12 shadow-md">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"                          
            >
              <h1 className="text-primary text-5xl font-bold font-secondary mb-3">
                {stat.number}
              </h1>
              <h2 className="font-semibold text-lg text-gray-800">
                {stat.text}
              </h2>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </>
  );
};

export default Plans;