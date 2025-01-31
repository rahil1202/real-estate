import { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/Logo/Reva-Landmark.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Properties", path: "properties" },
    { link: "Services", path: "services" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav
      className={`${
       "light bg-[#f3f3f3]"
      } flex justify-between items-center gap-4 lg:px-20 px-4 py-6 sticky top-0 z-30`}
    >
      <div id="logo">
        <img
          src={logo}
          alt="reva-landmarks"
          className="lg:w-[150px] w-[120px] cursor-pointer scale-150"
        />
      </div>

      <ul className="lg:flex justify-center items-center gap-x-1 hidden">
        {navItems.map(({ link, path }) => (
          <li key={path}>
            <Link
              className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-3 rounded-lg hover:bg-red-600 hover:text-white"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={closeMenu}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="lg:hidden text-black text-2xl cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaXmark /> : <FaBars />}
      </button>

      {isMenuOpen && (
        <div
          className="w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0"
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  spy={true}
                  offset={-100}
                  smooth={true}
                  className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-center items-center lg:gap-8 gap-2">
        <div className="flex justify-center items-center lg:gap-3 gap-1">
          <FaPhoneAlt className="size-5 text-red-600" />
          <h1 className="lg:text-xl text-sm text-black font-semibold">
            +91 789456123
          </h1>
        </div>        
      </div>
    </nav>
  );
};

export default Header;
