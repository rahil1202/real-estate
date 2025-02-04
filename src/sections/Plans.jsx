import plan1 from "../assets/images/Plans/full-plan.jpg";
import plan2 from "../assets/images/Plans/first-plan.jpg";
import plan3 from "../assets/images/Plans/second-plan.jpg";
import plan4 from "../assets/images/Plans/shop-plan.jpg";

const Plans = () => {
  return (
    
      <section className="lg:w-[100%] w-full h-fit m-auto bg-white flex justify-center flex-col items-center lg:px-20 px-6 py-4 gap-20">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center -mb-8">
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

        {/* Full Plan Image with Overlay */}
        <div className="w-full relative group rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up">
          <div
            style={{ backgroundImage: `url(${plan1})` }}
            className="w-full h-[500px] bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Three Plan Images Grid */}
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-8">
          {[plan2, plan3, plan4].map((plan, index) => (
            <div key={index} className="relative group rounded-2xl overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay={index * 100}>
              <div
                style={{ backgroundImage: `url(${plan})` }}
                className="h-[400px] bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Stats Section with Enhanced Design */}
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-10 bg-primary/10 rounded-2xl p-12 shadow-md">
          {[ 
            { number: "52", text: "Units" },
            { number: "652", text: "Sq.Ft Starting Area/Unit" },
            { number: "8%", text: "ROI" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
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
  );
};

export default Plans;
