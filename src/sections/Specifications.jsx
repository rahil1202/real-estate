import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBuilding, FaPaintRoller, FaBath, FaFaucet, FaThLarge, FaBolt } from "react-icons/fa";

const Specifications = () => {
  const specifications = [
    { icon: FaBuilding, title: "Structure", desc: "All RCC & brick masonry work as per structural engineer design." },
    { icon: FaPaintRoller, title: "Paint & Finish", desc: "Interiors with smooth plaster and wall putty. Exteriors with double coat and water-resistant paint." },
    { icon: FaBath, title: "Bathrooms & Toilets", desc: "Designer bathrooms with premium tiles up to lintel level. Branded premium bath fittings, plumbing fixtures, and vessels." },
    { icon: FaFaucet, title: "Plumbing", desc: "Standard concealed UPVC and XPVC pipes ensuring long-term durability." },
    { icon: FaThLarge, title: "Flooring", desc: "High-grade nano-finish tiles flooring for inside areas with skirting." },
    { icon: FaBolt, title: "Electrifications", desc: "Electrical infrastructure shall be provided up to the unit. Individual meter connection. Concealed wiring and internal electrification shall be borne by the purchaser." }
  ];

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 300,
      easing: "ease-in-sine",      
    });
  }, []);

  return (
    <section className="relative  pt-12 pb-8 overflow-hidden bg-white" id="specifications">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h3 
            data-aos="fade-up" 
            className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-bold font-primary mb-4"
          >
            SPECIFICATIONS
          </h3>
          <h2 
            data-aos="fade-up"             
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-primary"
          >
            Quality & Craftsmanship
          </h2>
          <p 
            data-aos="fade-up"            
            className="text-gray-600 text-lg font-secondary"
          >
            Designed and built with the highest standards to ensure excellence in every aspect.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specifications.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"             
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

export default Specifications;
