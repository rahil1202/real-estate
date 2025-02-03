import image1 from "../assets/images/Gallery/01.png";
import image2 from "../assets/images/Gallery/02.png";
import image3 from "../assets/images/Gallery/03.jpg";

const Gallery = () => {
  const images = [
    { src: image1, alt: "Project Image 1" },
    { src: image2, alt: "Project Image 2" },
    { src: image3, alt: "Project Image 3" },
  ];

  return (
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
            Explore Our Projects
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
              className="group bg-white p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
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
  );
};

export default Gallery;
