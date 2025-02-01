import {
  FaFacebook,
  FaInstagram, 
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../assets/Logo/Reva-Landmark.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-b from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Company Info */}
            <div className="space-y-6">
              <img
                src={Logo}
                alt="reva-landmarks"
                className="w-[180px] transform hover:scale-105 transition-all duration-300"
              />
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi,
                aspernatur ipsam soluta illo amet dolorem delectus excepturi
                suscipit voluptatum.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="group">
                  <div className="p-3 bg-white rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-300 group-hover:shadow-blue-200">
                    <FaFacebook className="w-5 h-5 text-blue-600 group-hover:text-white" />
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="p-3 bg-white rounded-xl shadow-lg hover:bg-pink-500 transition-all duration-300 group-hover:shadow-pink-200">
                    <FaInstagram className="w-5 h-5 text-pink-500 group-hover:text-white" />
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 font-secondary">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="w-5 h-5 mt-1 text-primary" />
                  <p className="text-gray-600">Reva Landmark, Ajwa Rd, nr. Dove Deck, Vadodara, Gujarat 390019</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="w-4 h-4 text-primary" />
                  <p className="text-gray-600">+91 9909024510</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="w-4 h-4 text-primary" />
                  <p className="text-gray-600">+91 9909021510</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-4 h-4 text-primary" />
                  <p className="text-gray-600">adeeb01@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Latest Properties */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-secondary text-gray-900">Latest Properties</h3>
              <div className="space-y-6">
                {[
                  {
                    image: "prop7",
                    title: "Villa with amazing sea view",
                    price: "$ 240500"
                  },
                  {
                    image: "prop8",
                    title: "Villa with fully furnished interior",
                    price: "$ 400500"
                  }
                ].map((property, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-32 h-24 overflow-hidden rounded-xl">
                      <img
                        src={`../assets/images/${property.image}.jpg`}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-gray-900 font-medium line-clamp-2 group-hover:text-primary transition-colors">
                        {property.title}
                      </h4>
                      <p className="text-primary font-semibold">{property.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 font-semibold font-secondary">
              Copyright Real Estate, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <Link
        to="hero"
        spy={true}
        offset={-100}
        smooth={true}
        className="fixed lg:bottom-12 bottom-6 right-6 z-50"
      >
        <div className="p-4 bg-primary rounded-full shadow-lg hover:bg-black transition-colors duration-300 hover:shadow-xl">
          <FaArrowUp className="w-6 h-6 text-white" />
        </div>
      </Link>
    </>
  );
};

export default Footer;