import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutimg from "../assets/images/buildings/02.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 300,
      easing: "ease-in-sine",     
    });
  }, []);

  return (
    <section id="about" className="relative pb-16 pt-12 overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative group">          
            
            {/* Main Image Container */}            
              <img
                src={aboutimg}
                alt="About Reva LandMark"
                className="w-auto h-full object-fill rounded-xl transform transition-all duration-100 hover:scale-105"
              />
            {/* Experience Badge */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="absolute bottom-12 -right-8 bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-center">
                <span className="text-5xl font-bold text-primary">27+</span>
                <p className="text-gray-600 mt-2 font-medium">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-10">
            {/* Header */}
            <div data-aos="fade-left" data-aos-delay="100">
              <span className="text-primary font-bold text-lg uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
                WHO WE ARE
              </span>
              <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Reva Landmark
                <span className="block text-2xl text-gray-600 mt-2 font-medium">
                  Building Dreams Since 1998
                </span>
              </h2>
            </div>

            {/* Description & Features */}
            <div 
              data-aos="fade-left" 
              data-aos-delay="100"
              className="space-y-5"
            >
              <p className="text-gray-600 text-lg leading-relaxed font-secondary -mt-2">
               We began in 1998 with a vision of providing sophistication and established a milestone with a REVA group in 2019. At Reva Group, we are setting a new landmark for retail and commercial place. We have a vision of creating an environment that is both functional and unique.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: 'Residential Units', count: '430' },
                  { title: 'Total Projects', count: '11' },                  
                  { title: 'Commercial Units', count: '445' },
                  { title: 'Customer Focus', count: '875' }
                ].map((feature) => (
                  <div 
                    key={feature.title}
                    data-aos="fade-up"                    
                    className="bg-white p-4 rounded-xl border-2 border-primary/80 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="text-primary font-bold text-xl mb-1">{feature.count}</div>
                    <div className="text-gray-700 font-medium">{feature.title}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              < a href="https://drive.google.com/file/d/1KPXiDCrb2EAqNJSkZ0kGmis1jyHX3zUp/view?usp=drive_link"
              target="blank"
              className="mt-8 bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl
                transform hover:translate-y-[-4px] transition-all duration-300 shadow-lg hover:shadow-xl
                flex items-center gap-2 text-lg font-semibold font-secondary" 
                >
                Check Brochure
                <svg 
                  className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;