
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-40 position-fixed bottom-0 w-full ">
      <div className="h-auto bg-black py-10 mt-2 -mb-5">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start h-full space-y-10 lg:space-y-0 lg:space-x-20">
            <div className="text-white lg:px-20">
              <h1 className="bg-gradient-to-r from-green-800 to-blue-600 text-transparent bg-clip-text text-2xl font-extrabold">
                GI PROJECT
              </h1>
              <div className="mt-5 flex space-x-4">
                <span><FaInstagram /></span>
                <span><FaXTwitter /></span>
                <span><FaLinkedin /></span>
                <span><FaFacebook /></span>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:px-20 lg:space-x-20 space-y-10 lg:space-y-0">
              <div className="mt-5 lg:mt-0">
                <span className="text-gray-400 text-xl font-thin">ABOUT</span>
                <div className="flex flex-col mt-5 space-y-2">
                  <Link to="/About" className="text-xs text-white">About us</Link>
                  <Link to="/Contact" className="text-xs text-white">Contact us</Link>
                </div>
              </div>
              
              <div className="mt-5 lg:mt-0">
                <span className="text-gray-400 text-xl font-thin">SERVICES</span>
                <div className="flex flex-col mt-5 space-y-2">
                  <Link to="/Services" className="text-xs text-white">Our Services</Link>
                  <Link to="/Pricing" className="text-xs text-white">Pricing</Link>
                </div>
              </div>
              
              <div className="mt-5 lg:mt-0">
                <span className="text-gray-400 text-xl font-thin">LEGAL</span>
                <div className="flex flex-col mt-5 space-y-2">
                  <Link to="/Terms" className="text-xs text-white">Terms of Service</Link>
                  <Link to="/Privacy" className="text-xs text-white">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>           
        </div>
      </div>
    </footer>
  );
}

export default Footer;
