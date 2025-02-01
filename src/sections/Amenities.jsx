import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBuilding, FaRoad, FaParking, FaShieldAlt, FaBug, FaToilet, FaWater, FaExpandArrowsAlt, FaMapMarkerAlt } from "react-icons/fa";

const Amenities = () => {
  const amenities = [
    { icon: FaBuilding, title: "A Striking Elevation", desc: "A premium elevation that provides unobstructed views and modern aesthetics." },
    { icon: FaRoad, title: "Wide Passages", desc: "Designed for easy mobility and smooth traffic flow within the complex." },
    { icon: FaParking, title: "Large Concrete Instant Parking", desc: "Ground floor parking with ample space for visitors and tenants." },
    { icon: FaShieldAlt, title: "24/7 CCTV Security", desc: "Surveillance at strategic locations ensuring complete safety." },
    { icon: FaBug, title: "Anti-Termite Treatment", desc: "Enhanced durability with advanced anti-termite treatment for the entire structure." },
    { icon: FaToilet, title: "Attached Toilets", desc: "Provision for attached toilets in shops and offices for convenience." },
    { icon: FaWater, title: "Water & Sanitation Points", desc: "Essential water and sanitation points provided throughout the complex." },
    { icon: FaExpandArrowsAlt, title: "18.5 Feet High Ceilings", desc: "Expansive ceiling height providing a grand and spacious experience." },
    { icon: FaMapMarkerAlt, title: "Prime Location", desc: "Located at a strategic point offering excellent connectivity and accessibility." }
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
    <section className="relative py-24 overflow-hidden bg-gray-50" id="amenities">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h3 
            data-aos="fade-up" 
            className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-bold font-primary mb-4"
          >
            PREMIUM AMENITIES
          </h3>
          <h2 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-primary"
          >
            World-Class Facilities
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-gray-600 text-lg font-secondary"
          >
            Experience luxury and convenience with our carefully curated amenities designed for modern businesses
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                transform hover:-translate-y-2 border-b-4 border-primary hover:border-primary/80"
            >
              <div className="flex flex-col gap-6">
                {/* Icon */}
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-primary/10 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="relative flex items-center justify-center w-full h-full bg-white rounded-xl shadow-sm">
                    <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-primary text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-secondary">
                    {item.desc}
                  </p>
                </div>              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
