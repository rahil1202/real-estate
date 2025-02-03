import {
  FaFacebook,
  FaInstagram,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../assets/Logo/Reva-Landmark.png";
import image1 from "../assets/images/clublife/01.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-b from-primary/10 to-primary/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-8 pb-2">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Company Info */}
            <div className="space-y-6">
              <img
                src={Logo}
                alt="reva-landmarks"
                className="w-[180px] transform hover:scale-105 transition-all duration-300"
              />
              <p className="text-black leading-relaxed font-primary">
                At Reva Group, we offer a variety of unique living areas for your completely joyful lifestyle. In addition to providing satisfaction and tranquillity, we provide ultramodern comforts and a lifestyle that appeals to the most discerning tastes. Providing comprehensive residential project expertise is what we do.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 font-primary">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="w-5 h-5 mt-1 text-primary" />
                  <p className="text-black font-secondary">
                    <a
                      href="https://maps.app.goo.gl/BiVE8CBQAbYyKoR59"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Reva Landmark, Ajwa Rd, Nr. Dove Deck, Vadodara, Gujarat 390019
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="w-4 h-4 text-primary" />
                  <p className="text-black font-secondary">
                    <a href="tel:+919909024510" className="hover:underline">
                      +91 9909024510
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="w-4 h-4 text-primary" />
                  <p className="text-black font-secondary">
                    <a href="tel:+919909021510" className="hover:underline">
                      +91 9909021510
                    </a>
                  </p>
                </div>
              </div>

              {/* Social Icons Moved Here */}
              <div className="flex gap-6 pt-2">
                <a href="https://www.facebook.com/revagroupvadodara" className="group">
                  <div className="p-3 bg-white rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-300 group-hover:shadow-blue-200">
                    <FaFacebook className="w-5 h-5 text-blue-600 group-hover:text-white" />
                  </div>
                </a>
                <a href="https://www.instagram.com/revagroupvadodara" className="group">
                  <div className="p-3 bg-white rounded-xl shadow-lg hover:bg-pink-500 transition-all duration-300 group-hover:shadow-pink-200">
                    <FaInstagram className="w-5 h-5 text-pink-500 group-hover:text-white" />
                  </div>
                </a>
              </div>
            </div>

            {/* Latest Property */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-primary text-gray-900">Latest Property</h3>
              <div className="flex gap-4 group">
                <div className="w-32 h-24 overflow-hidden rounded-xl">
                  <img
                    src={image1}
                    alt="Latest Property"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-gray-900 font-medium  font-secondary line-clamp-2 cursor-pointer">
                    Reva Clublife - 2 & 3 BHK Apartments
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="-mt-8 pt-10 border-t border-gray-200 text-center">
            <p className="text-black font-bold font-secondary">
              Copyright &copy; {new Date().getFullYear()} Reva Group, All Rights Reserved.
            </p>
            <p className="text-black font-secondary mt-3">
              Designed & Developed by{" "}
              <a
                href="https://theonebranding.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                TheOneBranding
              </a>
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
        <div className="p-4 bg-primary rounded-full shadow-lg hover:bg-black transition-colors duration-300 hover:shadow-xl cursor-pointer">
          <FaArrowUp className="w-6 h-6 text-white" />
        </div>
      </Link>
    </>
  );
};

export default Footer;
