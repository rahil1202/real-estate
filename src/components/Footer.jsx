
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaArrowUp,
  FaFax,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";
import Logo from "../assets/Logo/Reva-Landmark.png"

const Footer = () => {
  
  return (
    <>
      <footer
        className={`${
          "light bg-gray-800"
        } w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start  lg:gap-20 gap-10 `}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">ABOUT US</h1>
          <img
            src={Logo}
            alt="reva-landmarks"
            className="w-[150px] cursor-pointer scale-125"
          />
          <p className="text-slate-200 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi,
            aspernatur ipsam soluta illo amet dolorem delectus excepturi
            suscipit voluptatum.
          </p>

          <div
            id="social-icons"
            className="flex justify-start items-center gap-4 mt-4"
          >
            <div className="p-3 rounded-xl bg-white hover:bg-blue-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaFacebook className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-pink-400 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaInstagram className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-blue-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaTwitter className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaYoutube className="size-5" />
            </div>
          </div>
          <h1 className="text-white mt-8">
            Copyright Real Estate, All Right Reserved{" "}
          </h1>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold ">Contact us</h1>

          <div className="flex justify-center items-center gap-3">
            <FaBuilding className="text-white size-5" />
            <p className="text-slate-200">Lorem ipsum , dolor sit, 895441</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMobile className="text-white size-5" />
            <p className="text-slate-200"> +91 1800-200-0707</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaFax className="text-white size-5" />
            <p className="text-slate-200">+91-208-1234567</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <IoMdMail className="text-white size-5" />
            <p className="text-slate-200">adeeb01@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">
            Latest Properties
          </h1>

          <div className="flex justify-center items-center gap-4">
            <img
              src={prop7}
              alt=""
              className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className="text-lg text-white">
                Villa with amazing sea view
              </h1>
              <p className="text-slate-400">$ 240500</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop8}
              alt=""
              className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className="text-lg text-white">
                Villa with fully furnished interior
              </h1>
              <p className="text-slate-400">$ 400500</p>
            </div>
          </div>
        </div>
      </footer>

      {/* slide-to-top-button */}

      <div
        id="icon-box"
        className="bg-orange-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6 text-white" />
        </Link>
      </div>      
    </>
  );
};

export default Footer;
