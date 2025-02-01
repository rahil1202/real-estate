import { useEffect } from "react";
import { MdOutlineEmail, MdOutlineMessage } from "react-icons/md";
import { FaUser, FaPhone } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="bg-white py-20">
      <section className="lg:w-[95%] w-full m-auto" id="contact">
        <div className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl grid lg:grid-cols-2 grid-cols-1 gap-10 overflow-hidden">
          {/* Form Section */}
          <div className="lg:p-12 p-6" data-aos="fade-right">
            <div className="bg-white shadow-lg rounded-2xl p-8 space-y-8">
              <div className="space-y-2">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Get in Touch
                </span>
                <h2 className="text-2xl font-bold text-gray-900">
                  Send us a Message Today
                </h2>
              </div>

              <form className="space-y-6">
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div className="relative">
                  <MdOutlineEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div className="relative">
                  <MdOutlineMessage className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    placeholder="Your Message..."
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  ></textarea>
                </div>

                <button className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-4 rounded-xl transition-colors duration-300 shadow-lg shadow-primary/30">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:pr-12 lg:py-12 p-6 flex flex-col justify-center" data-aos="fade-left">
            <div className="space-y-6 max-w-xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-red-50 rounded-full">
                Reach Us
              </span>
              
              <h1 className="text-4xl font-bold leading-tight text-gray-900">
                Lets Build Your Dream <span className="text-primary">Together</span>
              </h1>
              
              <p className="text-gray-600 leading-relaxed">
                Were here to turn your vision into reality. Our team of experts is ready to collaborate with you on your next project, providing innovative solutions and exceptional service every step of the way.
              </p>

              <button className="inline-flex items-center bg-black hover:bg-gray-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300 shadow-lg">
                Make an Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;