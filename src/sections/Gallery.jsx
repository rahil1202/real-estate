/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { BsX } from 'react-icons/bs';
import image1 from "../assets/images/Gallery/01.png";
import image2 from "../assets/images/Gallery/02.png";
import image3 from "../assets/images/Gallery/03.jpg";

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
            src={image.src}
            alt={image.alt}
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
              className="bg-black/90 text-white px-4 py-2 rounded-lg hover:bg-black"
            >
              Zoom Out
            </button>
            <button
              onClick={() => handleZoom(0.2)}
              className="bg-black/90 text-white px-4 py-2 rounded-lg hover:bg-black"
            >
              Zoom In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: image1, alt: "Project Image 1" },
    { src: image2, alt: "Project Image 2" },
    { src: image3, alt: "Project Image 3" },
  ];

  return (
    <>
      <section className="relative pt-20 pb-8 overflow-hidden bg-white" id="gallery">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-4">
            <h3 
              data-aos="fade-up" 
              className="inline-block px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold uppercase tracking-wider font-primary"
            >
              Gallery
            </h3>
            <h2 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-primary"
            >
              Explore Reva Landmark
            </h2>
            <p 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="text-gray-600 text-lg font-secondary"
            >
              Discover the beauty and craftsmanship of our developments through our gallery.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}         
                className="group bg-white p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative w-full h-72 overflow-hidden rounded-xl">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
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

export default Gallery;