import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../assets/images/Gallery/01.png";
import image2 from "../assets/images/Gallery/02.png";
import image3 from "../assets/images/Gallery/03.jpg";
const Gallery = () => {
  const images = [
    image1,
    image2,
    image3,
  ];

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-white" id="gallery">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h3 
            data-aos="fade-up" 
            className="inline-block px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold uppercase tracking-wider"
          >
            Gallery
          </h3>
          <h2 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Explore Our Projects
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-gray-600 text-lg"
          >
            Discover the beauty and craftsmanship of our latest developments through our curated gallery.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * index}
              className="group bg-white p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className="w-full h-[300px] bg-cover bg-center rounded-xl overflow-hidden"
                style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
