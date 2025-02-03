import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "Bhavin Prajapati",
      unit: "Reva Duplex Client - Unit 18",
      feedback: "Reva Duplex provides homes that are of good quality, modern design, and value for money. It has good amenities like the landscape garden, Gazebo, clubhouse, and camera-equipped security solution. Also, the location of the project is developing rapidly. The builder and staff are helpful, cooperative, and provide satisfactory service."
    },
    {
      name: "Bharati",
      unit: "Reva Duplex Client - Unit 43",
      feedback: "Ankhol is a developing area with schools, temples, hospitals, and colleges all in the vicinity. Reva Duplex is easily accessible from the National Highway, providing great connectivity options. There are a lot of upcoming commercial complexes. Reva Duplex offered us luxurious flats at a very reasonable price and is best suited for investment purposes. One of my friends suggested I invest in this project, and I found it to be a great property investment. I am thinking of buying another one for my brother."
    },
    {
      name: "Deepak Sarang",
      unit: "Showroom no. 35",
      feedback: "Reva landmark is a unique and prominent commercial development featuring double-height showrooms. The elevation looks premium, combined with mid-mezzanine design, enhances both aesthetics and functionality. It is going to become a vibrant shopping centre for both fashion and food in the coming years on ajwa stretch The parking space on the front shall add to people convenience.Overall a great investment to make."  

    }
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
    <section className="relative  pt-16 pb-4 overflow-hidden bg-white" id="testimonials">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h3 
            data-aos="fade-up" 
            className="inline-block px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold uppercase tracking-wider font-primary mb-4"
          >
            Testimonials
          </h3>
          <h2 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-4xl lg:text-5xl font-bold font-primary text-black mb-4"
          >
            What Our Clients Say
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-gray-600 text-lg font-secondary"
          > 
            Hear from our satisfied homeowners about their experience with Reva Duplex.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              data-aos="fade-up"             
              className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-primary hover:border-primary/80"
            >
              <div className="flex items-start gap-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full shadow-md">
                  <FaQuoteLeft className="w-6 h-6 text-primary" />
                </div>
                {/* Content */}
                <div>
                  <p className="text-gray-600 italic">“{review.feedback}”</p>
                  <h3 className="text-lg font-bold text-gray-900 mt-2">{review.name}</h3>
                  <p className="text-primary text-sm">{review.unit}</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
