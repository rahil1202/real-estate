import plan1 from "../assets/images/Plans/full-plan.jpg";
import plan2 from "../assets/images/Plans/first-plan.jpg";
import plan3 from "../assets/images/Plans/second-plan.jpg";
import plan4 from "../assets/images/Plans/shop-plan.jpg";

const Plans = () => {
  return (
    <div className="bg-white">
      <section className="lg:w-[100%] w-full h-fit m-auto bg-white rounded-3xl shadow-xl flex justify-center flex-col items-center lg:px-20 px-6 py-10 gap-20">
        {/* Header Section */}
        <div className="w-full max-w-4xl text-center">
          <span className="text-primary font-semibold font-primary text-lg uppercase tracking-wider px-6 py-2 bg-primary/10 rounded-full inline-block mb-6">
            Building Plans
          </span>
          <h1 data-aos="zoom-in" className="text-black text-[42px] font-semibold font-secondary leading-tight">
            Explore Our <br /> 
            <span className="text-primary">Architectural</span> Designs
          </h1>
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
            { number: "100+", text: "Unique Designs" },
            { number: "5000+", text: "Custom Plans" },
            { number: "200+", text: "Completed Projects" }
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
    </div>
  );
};

export default Plans;
